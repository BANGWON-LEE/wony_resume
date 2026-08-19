import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import test from 'node:test'
import assert from 'node:assert/strict'

const sourceRoot = join(process.cwd(), 'src')

function collectSourceFiles(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const path = join(dir, entry)
    const stat = statSync(path)

    if (stat.isDirectory()) {
      return collectSourceFiles(path)
    }

    return /\.(jsx|js|scss|css)$/.test(path) ? [path] : []
  })
}

const sourceText = collectSourceFiles(sourceRoot)
  .map((file) => readFileSync(file, 'utf8'))
  .join('\n')

test('portfolio keeps only the selected project content', () => {
  const requiredContent = [
    '스마트 팩토리',
    'myPlan',
    'upbit chart clone',
    'my stock chart',
    '2026.07.04 ~ 진행 중',
    'fastify',
    'KIS api',
    'project_media_list',
    'project_media_list_tall',
    'project_media',
    '주식 시장 대시보드와 차트 UI를 중심으로',
    '목적 기반 자동 루트 추천 서비스',
    '업비트 실시간 소켓',
    '전지 공장의 믹싱, 코팅, 프레싱, 슬리팅 공정을 전산화',
    '/assets/my%20stock%20chart/my_stock_chart_img.png',
    '/assets/my%20stock%20chart/my_stock_chart_chart-move.gif',
    '/assets/my%20plan/myplan0.gif',
    '/assets/my%20plan/myplan1.png',
    '/assets/my%20plan/myplan2.png',
    '/assets/my%20plan/myplan3.png',
  ]
  const requiredPatterns = [
    /이전에 만든 공용 차트 컴포넌트 구조를 my stock chart에\s+적용해 line, bar, candlestick, combo 차트를 공통 API로\s+렌더링하고,\s+row\/map 입력 데이터를 공통 차트 모델로 정규화/,
    /Upbit chart에서 작업했던 휠 이벤트 기반 차트 이동 경험을\s+적용해, 캔들 차트의 표시 구간을 상태로 관리하고\s+휠 동작에 따라 차트 pan UX 구현/,
  ]

  const removedContent = [
    'RPA',
    '차카다',
    'GMB KOREA',
    'KAKAO Mobility',
    '토토 프로젝트',
    'Study',
    'F-LAB',
    'Frontend 멘토링',
    '실시간 데이터를 지도',
    '프론트엔드 개발자입니다',
    'Stock Chart 01',
    'myPlan 01',
    'Smart Factory 01',
    'Upbit Chart 01',
  ]

  for (const content of requiredContent) {
    assert.match(sourceText, new RegExp(content))
  }

  for (const pattern of requiredPatterns) {
    assert.match(sourceText, pattern)
  }

  for (const content of removedContent) {
    assert.doesNotMatch(sourceText, new RegExp(content))
  }
})

test('only projects with local assets render media after the project description', () => {
  const projectFiles = [
    {
      path: join(sourceRoot, 'components/section/MyProjectSection.jsx'),
      bodyClass: 'project_body',
      mediaLabel: 'my stock chart 프로젝트 이미지 영역',
    },
    {
      path: join(sourceRoot, 'components/section/MyProjectSection.jsx'),
      bodyClass: 'project_body',
      mediaLabel: 'myPlan 프로젝트 이미지 영역',
    },
  ]

  for (const project of projectFiles) {
    const text = readFileSync(project.path, 'utf8')
    const bodyIndex = text.indexOf(project.bodyClass)
    const mediaIndex = text.indexOf(project.mediaLabel)

    assert.notEqual(bodyIndex, -1)
    assert.notEqual(mediaIndex, -1)
    assert.ok(
      mediaIndex > bodyIndex,
      `${project.mediaLabel} should appear after ${project.bodyClass}`,
    )
  }

  assert.doesNotMatch(sourceText, /스마트 팩토리 프로젝트 이미지 영역/)
  assert.doesNotMatch(sourceText, /upbit chart clone 프로젝트 이미지 영역/)
})

test('project media lists use flex only for actual image assets', () => {
  const projectFiles = [
    join(sourceRoot, 'components/section/CareerSection.jsx'),
    join(sourceRoot, 'components/section/MyProjectSection.jsx'),
  ]

  const text = projectFiles.map((file) => readFileSync(file, 'utf8')).join('\n')
  const listCount =
    text.match(/className="[^"]*\bproject_media_list\b[^"]*"/g)?.length ?? 0
  const itemCount = text.match(/className="project_media"/g)?.length ?? 0
  const imageCount = text.match(/<img/g)?.length ?? 0

  assert.equal(listCount, 2)
  assert.equal(itemCount, 6)
  assert.equal(imageCount, 6)
  assert.match(sourceText, /\.project_media_list\s*{[^}]*display:\s*flex/s)
  assert.match(
    sourceText,
    /\.project_media_list_tall\s+\.project_media\s*{[^}]*min-height:\s*\d+px/s,
  )
  assert.match(
    sourceText,
    /@media \(max-width:\s*\$mobile\)\s*{[\s\S]*\.project_media_list_tall\s+\.project_media\s*{[^}]*flex-basis:\s*100%/s,
  )
})
