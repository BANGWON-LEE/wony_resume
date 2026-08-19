import TextBlackHanSansContent from '../text/TextBlackHanSansContent'
import TextDoHyeonSmallTitle from '../text/TextDoHeyonSmallTitle'
import TextGothicA1BigTitle from '../text/TextGothicA1BigTitle'

export default function MyProjectSection() {
  return (
    <section className="my_section_block">
      <TextGothicA1BigTitle>
        <h1 className="text_gothic_a1_big_title_inner">My Project</h1>
      </TextGothicA1BigTitle>
      <div className="content_block">
        <div className="content_block_title">
          <TextDoHyeonSmallTitle>
            <h2 className="text_dohyeon_small_title_inner">my stock chart</h2>
          </TextDoHyeonSmallTitle>
          <p className="skill_text small_size">
            개인 프로젝트 <br /> 2026.07.04 ~ 진행 중
          </p>
          <p className="skill_text small_size">
            typescript, react, vite, chart.js, <br />
            chartjs-chart-financial, zustand, <br />
            tailwind CSS, fastify, websocket, KIS api
          </p>
        </div>
        <div className="content_block_content">
          <article className="project_card">
            <div className="project_body">
              <TextBlackHanSansContent>
                <div className="text_box">
                  <p>차트 UI 중심의 주식 시장 대시보드, 개인 프로젝트입니다.</p>
                  <ul className="text_box_ul">
                    <li className="content_li">
                      <span>•</span>
                      <span>
                        React 19, TypeScript, Vite 기반 주식 시장 대시보드
                        프론트엔드와 Fastify 백엔드로 구성된 모노레포 프로젝트
                      </span>
                    </li>
                    <li className="content_li">
                      <span>•</span>
                      <span>
                        이전에 만든 공용 차트 컴포넌트 구조를 my stock chart에
                        적용해 line, bar, candlestick, combo 차트를 공통 API로
                        렌더링하고, row/map 입력 데이터를 공통 차트 모델로
                        정규화
                      </span>
                    </li>
                    <li className="content_li">
                      <span>•</span>
                      <span>
                        Upbit chart에서 작업했던 휠 이벤트 기반 차트 이동 경험을
                        적용해, 캔들 차트의 표시 구간을 상태로 관리하고 휠
                        동작에 따라 차트 pan UX 구현
                      </span>
                    </li>
                    <li className="content_li">
                      <span>•</span>
                      <span>
                        KIS 국내 주식 시세, 시가총액 랭킹, 1분/일/주/월/년 캔들
                        데이터를 조회하는 API 라우트와 응답 변환 구조 작성
                      </span>
                    </li>
                    <li className="content_li">
                      <span>•</span>
                      <span>
                        디자인 토큰 패키지를 분리해 primitive, semantic,
                        component 토큰을 CSS 변수와 TypeScript 타입으로 빌드
                      </span>
                    </li>
                  </ul>
                </div>
              </TextBlackHanSansContent>
            </div>
            <div
              className="project_media_list"
              aria-label="my stock chart 프로젝트 이미지 영역"
            >
              <div className="project_media">
                <img
                  src="/assets/my%20stock%20chart/my_stock_chart_img.png"
                  alt="my stock chart 대시보드 화면"
                />
              </div>
              <div className="project_media">
                <img
                  src="/assets/my%20stock%20chart/my_stock_chart_chart-move.gif"
                  alt="my stock chart 휠 동작 차트 이동 화면"
                />
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="content_block">
        <div className="content_block_title">
          <TextDoHyeonSmallTitle>
            <h2 className="text_dohyeon_small_title_inner">myPlan</h2>
          </TextDoHyeonSmallTitle>
          <p className="skill_text small_size">
            개인 프로젝트 <br /> 25.11.25 ~ 26.05.09 <br /> 1차 릴리즈
          </p>
          <p className="skill_text small_size">
            typescript, next, tanstack query, <br /> zustand, <br />
            naver map api, <br /> t map api
          </p>
          <p className="my_info_box_inner">
            <a
              className="click_text"
              // href="https://github.com/BANGWON-LEE/react-calendar-w-design"
              href="https://github.com/BANGWON-LEE/myPlan-lite"
              target="_blank"
            >
              github
            </a>
            <a
              href="https://github.com/BANGWON-LEE/myPlan-lite"
              target="_blank"
              className="click_dir"
            >
              click!
            </a>
          </p>
          <p className="my_info_box_inner">
            <a
              className="click_text"
              // href="https://github.com/BANGWON-LEE/react-calendar-w-design"
              href="https://my-plan-nine.vercel.app/"
              target="_blank"
            >
              link
            </a>
            <a
              href="https://my-plan-nine.vercel.app/"
              target="_blank"
              className="click_dir"
            >
              click!
            </a>
          </p>
        </div>
        <div className="content_block_content">
          <article className="project_card">
            <div className="project_body">
              <TextBlackHanSansContent>
                <div className="text_box">
                  <p>
                    목적 기반 자동 루트 추천 서비스로, 현재 위치를 기준으로
                    병원, 약국, 공중화장실, 편의점 등 사용자가 선택한 목적에
                    맞는 근처 장소와 이동 경로를 안내합니다.
                  </p>
                  <ul className="text_box_ul">
                    <li className="content_li">
                      <span>•</span>
                      <span>
                        마이플랜은 현재 위치 기반 루트 추천 서비스 (Naver Map +
                        T Map API 연동, 병원/약국 등 목적지 1초 내 경로 제공)
                      </span>
                    </li>
                    <li className="content_li">
                      <span>•</span>{' '}
                      <span>
                        다중 목적 선택 시 병렬 장소 검색 API 요청 구조 설계
                        (Promise.all)
                      </span>
                    </li>
                    <li className="content_li">
                      <span>•</span>
                      <span>
                        {' '}
                        TanStack Query 캐싱과 로컬 스토리지를 활용하여 동일 위치
                        재요청 시 발생하던 지도 렌더링 지연 문제 개선
                      </span>
                    </li>
                    <li className="content_li">
                      <span>•</span>{' '}
                      <span>
                        watchPosition 좌표 갱신 시 경로(polyLine) 재렌더링 이슈
                        <br />⇒ 기존에 하나로 구성된 마커/경로 렌더링 로직을
                        분리하여 경로 유지 + 사용자 위치 마커만 갱신
                        <br /> ⇒ 불필요한 api 요청 및 렌더링 제거
                      </span>
                    </li>
                    <li className="content_li">
                      <span>•</span>{' '}
                      <span>
                        경로 API N회 반복 호출 ⇒ 서버에 단일 요청 구조로 개선 ⇒
                        CLS 0.095→0.000, Speed Index{' '}
                        <strong>→ 8.3% 개선</strong>, 네트워크 요청 수 감소
                      </span>
                    </li>
                    <li className="content_li">
                      <span>•</span>{' '}
                      <span>
                        지도 객체 매 호출마다 재생성 ⇒ 초기 1회 생성 후 Ref로
                        Marker/Polyline만 갱신하는 구조로 변경 ⇒ TBT
                        <strong> 494ms→395ms(−20%)</strong>, Speed Index{' '}
                        <strong> 5.69s→4.31s(−24%)</strong>
                      </span>
                    </li>
                    <li className="content_li">
                      <span>•</span>{' '}
                      <span>
                        Tmap 경로 API 중복 호출 가능성 → 출발지·목적지 기준 경로
                        응답 캐싱 적용 → `/api/walking` 호출 1회 수준 안정화 및
                        API 과금 리스크 감소
                      </span>
                    </li>
                  </ul>
                </div>
              </TextBlackHanSansContent>
            </div>
            <div
              className="project_media_list project_media_list_tall"
              aria-label="myPlan 프로젝트 이미지 영역"
            >
              <div className="project_media">
                <img
                  src="/assets/my%20plan/myplan0.gif"
                  alt="myPlan 경로 추천 화면"
                />
              </div>
              <div className="project_media">
                <img
                  src="/assets/my%20plan/myplan1.png"
                  alt="myPlan 목적 선택 화면"
                />
              </div>
              <div className="project_media">
                <img
                  src="/assets/my%20plan/myplan2.png"
                  alt="myPlan 지도 화면"
                />
              </div>
              <div className="project_media">
                <img
                  src="/assets/my%20plan/myplan3.png"
                  alt="myPlan 경로 상세 화면"
                />
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="content_block">
        <div className="content_block_title">
          <TextDoHyeonSmallTitle>
            <h2 className="text_dohyeon_small_title_inner">
              upbit chart clone 프로젝트
            </h2>
          </TextDoHyeonSmallTitle>
          <p className="skill_text small_size">
            개인 프로젝트 <br /> 25.07.21 ~ 25.11.20 <br />
            완료
          </p>
          <p className="skill_text small_size">
            javascript, react, chartJS, upbit api
          </p>
          <span className="my_info_box_inner">
            <a
              className="click_text"
              href="https://github.com/BANGWON-LEE/financial-chart"
              target="_blank"
            >
              github
            </a>
            <a
              href="https://github.com/BANGWON-LEE/financial-chart"
              target="_blank"
              className="click_dir"
            >
              click!
            </a>
            {/* <span>qkddnjs31@gmail.com</span> */}
          </span>
        </div>
        <div className="content_block_content">
          <article className="project_card">
            <div className="project_body">
              <TextBlackHanSansContent>
                <div className="text_box">
                  <p>
                    업비트 실시간 소켓 데이터를 받아 Chart.js와 Financial Chart
                    플러그인으로 캔들스틱 차트를 시각화한 클론 프로젝트입니다.
                  </p>
                  <ul className="text_box_ul">
                    <li className="content_li">
                      <span>•</span>
                      <span>
                        chart js를 사용해 upbit의 socket으로 받아오는 데이터
                        시각화
                      </span>
                    </li>

                    <li className="content_li">
                      <span>•</span>
                      <span>
                        업비트에서 코인 정보를 보여주는 flow를 연구하고 클론
                        하는 것을 목표로 함
                      </span>
                    </li>
                    <li className="content_li">
                      <span>•</span>
                      <span>
                        Chart.js Financial Chart를 활용한 Candlestick 시각화 및
                        축 스케일 직접 설계{' '}
                      </span>
                    </li>
                    <li className="content_li">
                      <span>•</span>
                      <span>
                        {' '}
                        차트 focus·패닝·휠 이벤트에 따른 렌더링 제어로 실시간 UX
                        안정화{' '}
                      </span>
                    </li>
                    <li className="content_li">
                      <span>•</span>
                      <span>
                        REST API 응답 제한 분석 후 과거 데이터 탐색 범위
                        확장{' '}
                      </span>
                    </li>
                    <li className="content_li">
                      <span>•</span>
                      <span>
                        실시간/과거 데이터 분리 저장 및 병합 처리로 데이터
                        정합성 유지{' '}
                      </span>
                    </li>
                    <li className="content_li">
                      <span>•</span>
                      <span>
                        WebSocket 연결과 차트 이벤트 리스너가 정상 해제되지 않아
                        중복 요청과 이벤트 누수가 발생 가능 이슈 ⇒ 문제를
                        cleanup 로직과 예외 처리 분리로 해결 ⇒ 실시간 차트
                        데이터 로딩 안정성을 개선
                      </span>
                    </li>
                  </ul>
                </div>
              </TextBlackHanSansContent>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
