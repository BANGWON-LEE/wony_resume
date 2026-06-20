import TextGothicA1BigTitle from '../text/TextGothicA1BigTitle'

import TextBlackHanSansContent from '../text/TextBlackHanSansContent'
import TextDoHyeonSmallTitle from '../text/TextDoHeyonSmallTitle'

export default function CareerSection() {
  return (
    <section className="my_section_block">
      <TextGothicA1BigTitle>
        <h1 className="text_gothic_a1_big_title_inner">Career</h1>
      </TextGothicA1BigTitle>

      <div className="content_block">
        <div className="content_block_title">
          <TextDoHyeonSmallTitle>
            <h2 className="text_dohyeon_small_title_inner">AskStoryDS</h2>
          </TextDoHyeonSmallTitle>
          <TextBlackHanSansContent>
            <ul className="text_box_ul">
              <li className="content_li">
                2022.02 ~ 2025.05
                {/* <span>•</span> 2022.02 ~ 2024.11 <br /> */}
                {/* (정규직) */}
              </li>
              <li className="content_li">
                프론트엔드
                {/* <span>•</span> 2022.02 ~ 2024.11 <br /> */}
                {/* (정규직) */}
              </li>
              {/* <li className="content_li">
                  <span>•</span> 2024.12 ~ 2025.05 <br />
                  (계약직)
                </li> */}
            </ul>
          </TextBlackHanSansContent>
        </div>
        <div className="content_block_content">
          {/* <div className="position_block">
              <TextDoHyeonSmallTitle>Frontend Developer</TextDoHyeonSmallTitle>
              <TextDoHyeonSmallTitle> / </TextDoHyeonSmallTitle>
              <TextDoHyeonSmallTitle>QA</TextDoHyeonSmallTitle>
              <TextBlackHanSansContent>
                <span>
                  공장 현장 작업자가 자신의 업무를 수기가 아닌, 프로그램을
                  사용하여 기록하고 진행할 수 있도록 하는 프로젝트
                </span>
              </TextBlackHanSansContent>
            </div> */}
          <div className="text_box">
            <TextDoHyeonSmallTitle>
              <div className="project_header">
                <h2 className="text_dohyeon_small_title_inner">
                  스마트 팩토리(JR 에너지 솔루션)
                </h2>
                <TextBlackHanSansContent>
                  <p className="project_date">2023.11 ~ 2024.08 릴리즈</p>
                </TextBlackHanSansContent>
              </div>
            </TextDoHyeonSmallTitle>
            <TextBlackHanSansContent>
              <p>스마트 팩토리 솔루션의 실시간 데이터 시각화 모듈 개발 담당</p>
            </TextBlackHanSansContent>
            <TextBlackHanSansContent>
              <div className="text_box">
                <ul className="text_box_ul">
                  {/* <li className="content_li">
                      <span>•</span>
                      <span>
                        배터리 생산 기기의 데이터를 차트로 시각화 하여
                      </span>
                    </li> */}
                  <li className="content_li">
                    <span>•</span>
                    <span>
                      프로젝트의 초기 세팅 및 컴포넌트 구성 및 UI 개발
                    </span>
                  </li>
                  <br />
                  <li className="content_li">
                    - 사용자가 한 페이지에서 3종류 이상의 기기 상태 데이터를
                    각각 차트로 보길 원함
                    <br />- 기존에는 페이지에 1개의 차트, 약 700개의 데이터만
                    시각화 됨
                  </li>
                  <br />

                  <li className="content_li">
                    <span>•</span>
                    <span>
                      1~2초 주기 폴링 ⇒ MQTT 이벤트 기반으로 전환하여 불필요한
                      요청을 없애고 필요한 응답만 받도록 개선
                    </span>
                  </li>
                  <br />
                  <li className="content_li">
                    <span>•</span>
                    <span>
                      ApexChart vs Chart.js 벤치마크 수행 후 Chart.js
                      마이그레이션,{' '}
                      <strong>
                        LCP 21.3초→4.0초(−81%), FCP 2.6초→0.2초(−92%) 개선
                      </strong>
                      {/* 실시간 데이터 구현에 있어서 ChartJS가 ApexChart보다 초기
                        렌더링 속도 및 성능 향상에 이점이 있음을 파악, */}
                      {/* <br /> LCP를 <strong>21.3초 → 4.0초</strong>, FCP를
                        <strong>2.6초 → 0.2초</strong>로 대폭 개선. */}
                    </span>
                  </li>

                  <br />
                  <li className="content_li">
                    <span>•</span>
                    <span>
                      Chart.js 기반 재사용 차트 컴포넌트 설계 ⇒ 사내 공통 차트
                      표준 제공
                      <br />
                      시각화 작업의 편의성에 기여
                    </span>
                  </li>
                  <li className="content_li">
                    <span>•</span>
                    <span>
                      현장 사용자와 직접 인터뷰 ⇒ 기기상태 로그 기록 자동화 ⇒
                      업무시간 1시간 → 5분으로 단축
                    </span>
                  </li>
                  <br />
                  <li className="content_li">
                    <span>*</span>
                    <span>
                      <strong>
                        실시간 시각화 대시보드 구축 ⇒ 기기 상태 모니터링 시스템
                        확립
                      </strong>
                    </span>
                  </li>
                </ul>

                <p className="skill_text">
                  javascript, nextron, tailwindcss, recoil, chart.js, ApexCharts
                </p>
              </div>
            </TextBlackHanSansContent>
          </div>
          {/* <div className="text_box">
              <TextDoHyeonSmallTitle>
                <div className="project_header">
                  <h2 className="text_dohyeon_small_title_inner">퍼플레이</h2>
                  <TextBlackHanSansContent>
                    <p className="project_date">2023.8 ~ 2023.11</p>
                  </TextBlackHanSansContent>
                </div>
              </TextDoHyeonSmallTitle>

              <TextBlackHanSansContent>
                <span>
                  우리나라 여성 영화제를 웹으로 서비스하는, purplay 서비스의
                  리뉴얼 프로젝트 진행.
                  <br />
                  프로젝트의 초기 세팅 및 컴포넌트 구성 및 UI 개발
                </span>
              </TextBlackHanSansContent>
              <br />
              <TextBlackHanSansContent>
                <div className="text_box">
                  <ul className="text_box_ul">
                    <li className="content_li">
                      <span>•</span>
                      <span>
                        Next.js 기반 프로젝트 초기 세팅과 폴더 구조를 설계하고,
                        서비스 사용자 페이지(19개)와 관리자 페이지(5개) 총 24개
                        페이지의 컴포넌트 구성및 UI 개발
                      </span>
                    </li>
                  </ul>

                  <p className="skill_text">javascript, next, scss, mui</p>
                  <p className="link_text">
                    <a
                      className="click_text"
                      href="https://purplay.co.kr/"
                      target="_blank"
                    >
                      Link
                    </a>
                    <a
                      href="https://github.com/BANGWON-LEE/wony-chart-components"
                      target="_blank"
                      className="click_dir"
                    >
                      click!
                    </a>
                    {/* <span>qkddnjs31@gmail.com</span> */}
          {/* </p>
                </div>
              </TextBlackHanSansContent>
            </div> */}
          <br />
          <br />
          <br />
          <div className="text_box">
            <TextDoHyeonSmallTitle>
              <div className="project_header">
                <h2 className="text_dohyeon_small_title_inner">
                  토토 프로젝트(케이풀스)
                </h2>
                <TextBlackHanSansContent>
                  <p className="project_date">2022.05 ~ 2022.12</p>
                </TextBlackHanSansContent>
              </div>
            </TextDoHyeonSmallTitle>
            <TextBlackHanSansContent>
              <span>AI 기반 스포츠 승패 예측 서비스, 프론트엔드 전담 개발</span>
            </TextBlackHanSansContent>
            <TextBlackHanSansContent>
              <div className="text_box">
                <ul className="text_box_ul">
                  <li className="content_li">
                    <span>•</span>
                    <span>
                      Kakao Map API 연동으로 전국 판매점 위치 시각화 기능 개발
                    </span>
                  </li>

                  <li className="content_li">
                    <span>•</span>
                    <span>
                      React-Quill 이미지 업로드 시 인라인 스타일 미적용 이슈. ⇒
                      렌더링 단계에서 CSS 선택자 기반 스타일 적용 방식으로 전환.
                      ⇒ 이미지 스타일 정상 렌더링
                    </span>
                  </li>
                </ul>
                <p className="skill_text">
                  javascript, next, scss, context api
                </p>
              </div>
            </TextBlackHanSansContent>
          </div>
        </div>
      </div>
      <div className="content_block">
        <div className="content_block_title">
          <TextDoHyeonSmallTitle>
            <h2 className="text_dohyeon_small_title_inner">차카다</h2>
          </TextDoHyeonSmallTitle>
          <TextBlackHanSansContent>
            <ul className="text_box_ul">
              <li className="content_li">
                2025.09 ~ 현재
                {/* <span>•</span> 2022.02 ~ 2024.11 <br /> */}
                {/* (정규직) */}
              </li>
              <li className="content_li">
                RPA 개발
                {/* <span>•</span> 2022.02 ~ 2024.11 <br /> */}
                {/* (정규직) */}
              </li>
              {/* <li className="content_li">
                  <span>•</span> 2024.12 ~ 2025.05 <br />
                  (계약직)
                </li> */}
            </ul>
          </TextBlackHanSansContent>
        </div>
        <div className="content_block_content">
          <div className="text_box">
            <TextDoHyeonSmallTitle>
              <div className="project_header">
                <h2 className="text_dohyeon_small_title_inner">GMB KOREA</h2>
                <TextBlackHanSansContent>
                  <p className="project_date">2025.10 ~ 2026.04 1차 완료</p>
                  <p className="project_date">2026.04 ~ 2차 진행 중</p>
                </TextBlackHanSansContent>
              </div>
            </TextDoHyeonSmallTitle>
            <TextBlackHanSansContent>
              <p>업무 자동화 예외 처리 및 데이터 안정성 개선</p>
            </TextBlackHanSansContent>
            <TextBlackHanSansContent>
              <div className="text_box">
                <ul className="text_box_ul">
                  {/* <li className="content_li">
                      <span>•</span>
                      <span>
                        배터리 생산 기기의 데이터를 차트로 시각화 하여
                      </span>
                    </li> */}
                  <li className="content_li">
                    <span>•</span>
                    <span>
                      거래명세서 자동 처리 과정에서 발생하는 파일 누락 및 금액
                      불일치 문제를 사전에 분류·처리하는 예외 로직 설계
                    </span>
                  </li>

                  <li className="content_li">
                    <span>•</span>
                    <span>
                      공유 폴더 파일이 그룹웨어 데이터와 매칭되지 않을 경우 자동
                      스킵 처리하여 전체 프로세스 중단 방지
                    </span>
                  </li>
                  <br />

                  <li className="content_li">
                    거래명세서 금액과 그룹웨어 데이터 간 불일치 발생 시 문제
                    데이터를 별도 폴더로 분리 관리하여 자동화 실패 확률 감소
                  </li>
                  <br />

                  <li className="content_li">
                    거래명세서 금액과 그룹웨어 데이터 간 불일치 발생 시 문제
                    데이터를 별도 폴더로 분리 관리하여 자동화 실패 확률 감소
                  </li>
                  <br />
                </ul>
              </div>
            </TextBlackHanSansContent>
          </div>
          <div className="text_box">
            <TextDoHyeonSmallTitle>
              <div className="project_header">
                <h2 className="text_dohyeon_small_title_inner">
                  KAKAO Mobility
                </h2>
                <TextBlackHanSansContent>
                  <p className="project_date">2026.01 ~ 2026.04</p>
                </TextBlackHanSansContent>
              </div>
            </TextDoHyeonSmallTitle>
            <TextBlackHanSansContent>
              <p>결제 데이터 가공 및 관리 효율 개선</p>
            </TextBlackHanSansContent>
            <TextBlackHanSansContent>
              <div className="text_box">
                <ul className="text_box_ul">
                  {/* <li className="content_li">
                      <span>•</span>
                      <span>
                        배터리 생산 기기의 데이터를 차트로 시각화 하여
                      </span>
                    </li> */}
                  <li className="content_li">
                    <span>•</span>
                    <span>
                      주차장 결제 사이트의 결제 내역 데이터를 자동 수집하고,
                      다운로드된 엑셀 파일을 데이터 테이블 형식으로 변환, 마스터
                      파일 구조에 맞게 가공
                    </span>
                  </li>
                  <li className="content_li">
                    <span>•</span>
                    <span>
                      결제 내역 데이터와 카카오 모빌리티 내부 관리 파일을
                      대조하여 날짜 / 고유 코드 / 주차장명 / 이용 상품권 / 가격
                      기준의 데이터 구조를 설계
                    </span>
                  </li>
                  <li className="content_li">
                    <span>•</span>
                    <span>
                      결제 내역 추적을 위해 가공된 데이터 테이블을 별도의 엑셀
                      파일로 작성하게 하여 사용자 관리 편리성 향상
                    </span>
                  </li>
                  <br />{' '}
                </ul>
              </div>
            </TextBlackHanSansContent>
          </div>
        </div>
      </div>
    </section>
  )
}
