import TextBlackHanSansContent from '../text/TextBlackHanSansContent'
import TextDoHyeonSmallTitle from '../text/TextDoHeyonSmallTitle'
import TextGothicA1BigTitle from '../text/TextGothicA1BigTitle'

export default function RightContent() {
  return (
    <div className="main_box">
      <section className="my_section_block">
        <TextGothicA1BigTitle>
          <h1 className="text_gothic_a1_big_title_inner">Study</h1>
        </TextGothicA1BigTitle>
        <div className="content_block">
          <div className="content_block_title">
            <TextDoHyeonSmallTitle>
              <h2 className="text_dohyeon_small_title_inner">F-LAB</h2>
            </TextDoHyeonSmallTitle>
            <TextBlackHanSansContent>
              <div className="text_box">
                <span className="text_black_hansans_content_inner">
                  Frontend 멘토링
                </span>
                <span className="text_black_hansans_content_inner">
                  2024.12 ~ 2025.05
                </span>
              </div>
            </TextBlackHanSansContent>
          </div>
          <div className="content_block_content">
            <div className="text_box">
              <TextBlackHanSansContent>
                <div className="text_box">
                  <ul className="text_box_ul">
                    {/* <li className="content_li">
                      <span>•</span>
                      <span>
                        실행 컨텍스트의 구조 (variableEnvironment,
                        lexicalEnvironment)와 이를 구성하는 내부 동작
                        원리(environmentRecord, outerEnvironment)를 이해하고,
                        이를 통해 호이스팅, this 바인딩, 클로저 개념을 깊이 있게
                        습득
                      </span>
                    </li> */}
                    <br />
                    <li className="content_li">
                      <span>•</span>
                      <span>
                        Deep Copy 함수를 직접 구현하며 객체 참조와 메모리 구조에
                        대한 이해도 향상
                        <br />
                        HashRouter, HistoryRouter를 직접 구현하여 SPA 라우팅
                        원리와 브라우저 동작 방식에 대한 실전 감각 함양
                      </span>
                    </li>
                    <p className="study_link">
                      <a
                        className="click_text"
                        // href="https://github.com/BANGWON-LEE/react-calendar-w-design"
                        href="https://github.com/f-lab-edu/deep-copy-wony"
                        target="_blank"
                      >
                        Deep copy git
                      </a>
                      <a
                        href="https://github.com/f-lab-edu/deep-copy-wony"
                        target="_blank"
                        className="click_dir"
                      >
                        click!
                      </a>
                    </p>
                    <p className="study_link">
                      <a
                        className="click_text"
                        // href="https://github.com/BANGWON-LEE/react-calendar-w-design"
                        href="https://github.com/BANGWON-LEE/hash-router-wony"
                        target="_blank"
                      >
                        hasRouter git
                      </a>
                      <a
                        href="https://github.com/BANGWON-LEE/hash-router-wony"
                        target="_blank"
                        className="click_dir"
                      >
                        click!
                      </a>
                    </p>
                    <p className="study_link">
                      <a
                        className="click_text"
                        // href="https://github.com/BANGWON-LEE/react-calendar-w-design"
                        href="https://github.com/BANGWON-LEE/history-router-wony"
                        target="_blank"
                      >
                        Deep copy git
                      </a>
                      <a
                        href="https://github.com/BANGWON-LEE/history-router-wony"
                        target="_blank"
                        className="click_dir"
                      >
                        click!
                      </a>
                    </p>
                    <br />
                    <li className="content_li">
                      <span>•</span>
                      <span>
                        공식 문서(Docs)와 전문 서적을 중심으로 학습하며,
                        단편적인 요약이 아닌 근본 개념 중심의 학습 방식 정립
                      </span>
                    </li>
                  </ul>
                </div>
              </TextBlackHanSansContent>
            </div>
          </div>
        </div>
        {/* <div className="content_block">
          <div className="content_block_title">
            <TextDoHyeonSmallTitle>
              <h2 className="text_dohyeon_small_title_inner">
                코리아IT아카데미
              </h2>
            </TextDoHyeonSmallTitle>
            <TextBlackHanSansContent>
              <div className="text_box">
                <span className="text_black_hansans_content_inner">
                  JAVA 국비과정
                </span>
                <span className="text_black_hansans_content_inner">
                  2022.02 ~ 2022.12
                </span>
              </div>
            </TextBlackHanSansContent>
          </div>
          <div className="content_block_content">
            <div className="text_box">
              <TextBlackHanSansContent>
                <div className="text_box">
                  <ul className="text_box_ul">
                    <li className="content_li">
                      <span>•</span>
                      <span>
                        HTML, CSS, JavaScript, jQuery, React 등 프론트엔드
                        기술과 Java, MariaDB 등 백엔드 기초를 학습하며 웹
                        애플리케이션의 전체 흐름을 이해
                      </span>
                    </li>
                    <br />
                    <li className="content_li">
                      <span>•</span>
                      <span>
                        실제로 코드를 작성하고 해석할 수 있는 역량 확보
                      </span>
                    </li>
                  </ul>
                </div>
              </TextBlackHanSansContent>
            </div>
          </div>
        </div> */}
      </section>
      {/* <section className="my_section_block">
        <TextGothicA1BigTitle>
          <h1 className="text_gothic_a1_big_title_inner">Skill</h1>
        </TextGothicA1BigTitle>
        <div className="content_block">
          <div className="content_block_content">
            <div className="text_box">
              <TextBlackHanSansContent>
                <div className="skill_block">
                  <p className="skill_text">
                    javascript, typescript, react, next, recoil, redux
                  </p>
                  <p className="skill_text another_skill_text">
                    html, css, scss, tailwindcss
                  </p>
                  <p className="skill_text">
                    firebase-auth, firebase-firestore
                  </p>
                </div>
              </TextBlackHanSansContent>
            </div>
          </div>
        </div>
      </section> */}

      <section className="my_section_block">
        <TextGothicA1BigTitle>
          <h1 className="text_gothic_a1_big_title_inner">My Project</h1>
        </TextGothicA1BigTitle>
        <div className="content_block">
          <div className="content_block_title">
            <TextDoHyeonSmallTitle>
              <h2 className="text_dohyeon_small_title_inner">
                upbit chart clone 프로젝트 (연구 중)
              </h2>
            </TextDoHyeonSmallTitle>
            <p className="skill_text small_size">
              개인 프로젝트 / 25년 7월 21일 시작
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
                        REST API 응답 제한 분석 후 과거 데이터 탐색 범위 확장{' '}
                      </span>
                    </li>
                    <li className="content_li">
                      <span>•</span>
                      <span>
                        실시간/과거 데이터 분리 저장 및 병합 처리로 데이터
                        정합성 유지{' '}
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
                myPlan <br /> (개발 중)
              </h2>
            </TextDoHyeonSmallTitle>
            <p className="skill_text small_size">
              개인 프로젝트 / 25년 11월 25일 시작
            </p>
            <p className="skill_text small_size">
              typescript, next, naver map api, T map api
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
                        naver map api와 T map api를 사용하여, 목적 기반 자동
                        루트 추천 서비스 개발 중
                      </span>
                    </li>

                    <li className="content_li">
                      <span>•</span>
                      <span>
                        현재 위치를 기준으로 카페 / 식사 / 산책 / 휴식 등 목적을
                        선택하면 AI가 가장 적합한 최적 루트 1개를 1초 만에
                        추천해주는 가벼운 라이트 서비스
                      </span>
                    </li>
                    <li className="content_li">
                      <span>•</span>{' '}
                      <span>
                        네이버 지도 API와 T map API를 연동한 위치 기반 장소 탐색
                        및 경로 추천 기능 개발
                      </span>
                    </li>
                    <li className="content_li">
                      <span>•</span>
                      <span>
                        {' '}
                        네이버 지도 API의 네트워크 기반 현재 위치 감지를 활용한
                        좌표 수신 및 지도 렌더링 구현
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
                        T map API 좌표 기반 네이버 지도 마커 표시 기능 구현 시,
                        요청 중 progress UX와 인터랙션 제어를 적용하여 연속
                        클릭으로 인한 UI 깨짐 문제 해결
                      </span>
                    </li>
                  </ul>
                </div>
              </TextBlackHanSansContent>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
