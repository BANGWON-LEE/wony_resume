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
            <h2 className="text_dohyeon_small_title_inner">myPlan</h2>
          </TextDoHyeonSmallTitle>
          <p className="skill_text small_size">
            개인 프로젝트 / 25.11.25 ~ 26.05.09 1차 릴리즈
          </p>
          <p className="skill_text small_size">
            typescript, next, tanstack query, zustand, naver map api, t map api
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
          <div className="text_box">
            <TextBlackHanSansContent>
              <div className="text_box">
                <ul className="text_box_ul">
                  <li className="content_li">
                    <span>•</span>
                    <span>
                      마이플랜은 현재 위치 기반 루트 추천 서비스 (Naver Map + T
                      Map API 연동, 병원/약국 등 목적지 1초 내 경로 제공)
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
                      <br />→ 기존에 하나로 구성된 마커/경로 렌더링 로직을
                      분리하여 경로 유지 + 사용자 위치 마커만 갱신
                      <br /> → 불필요한 api 요청 및 렌더링 제거
                    </span>
                  </li>
                  <li className="content_li">
                    <span>•</span>{' '}
                    <span>
                      경로 API N회 반복 호출 → 서버에 단일 요청 구조로 개선 →
                      CLS 0.095→0.000, Speed Index 8.3%↑, 네트워크 요청 수 6.5%↓
                    </span>
                  </li>
                  <li className="content_li">
                    <span>•</span>{' '}
                    <span>
                      지도 객체 매 호출마다 재생성 → 초기 1회 생성 후 Ref로
                      Marker/Polyline만 갱신하는 구조로 변경 → TBT
                      494ms→395ms(−20%), Speed Index 5.69s→4.31s(−24%)
                    </span>
                  </li>
                </ul>
              </div>
            </TextBlackHanSansContent>
          </div>
        </div>
      </div>
      <br />
      <div className="content_block">
        <div className="content_block_title">
          <TextDoHyeonSmallTitle>
            <h2 className="text_dohyeon_small_title_inner">
              upbit chart clone 프로젝트
            </h2>
          </TextDoHyeonSmallTitle>
          <p className="skill_text small_size">
            개인 프로젝트 / 25.07.21 ~ 25.11.20 완료
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
          <div className="text_box">
            <TextBlackHanSansContent>
              <div className="text_box">
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
                      업비트에서 코인 정보를 보여주는 flow를 연구하고 클론 하는
                      것을 목표로 함
                    </span>
                  </li>
                  <li className="content_li">
                    <span>•</span>
                    <span>
                      Chart.js Financial Chart를 활용한 Candlestick 시각화 및 축
                      스케일 직접 설계{' '}
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
                      REST API 응답 제한 분석 후 과거 데이터 탐색 범위 확장{' '}
                    </span>
                  </li>
                  <li className="content_li">
                    <span>•</span>
                    <span>
                      실시간/과거 데이터 분리 저장 및 병합 처리로 데이터 정합성
                      유지{' '}
                    </span>
                  </li>
                </ul>
              </div>
            </TextBlackHanSansContent>
          </div>
        </div>
      </div>
      <br />
    </section>
  )
}
