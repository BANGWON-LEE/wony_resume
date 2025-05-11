import TextBlackHanSansContent from '../text/TextBlackHanSansContent'
import TextDoHyeonSmallTitle from '../text/TextDoHeyonSmallTitle'
import TextGothicA1BigTitle from '../text/TextGothicA1BigTitle'

export default function RightContent() {
  return (
    <div className="main_box">
      <section className="my_section_block">
        <TextGothicA1BigTitle>
          <h1 className="text_gothic_a1_big_title_inner">My Project</h1>
        </TextGothicA1BigTitle>
        <div className="content_block">
          <div className="content_block_title">
            <TextDoHyeonSmallTitle>
              <h2 className="text_dohyeon_small_title_inner">
                재사용 가능한 차트
                <br /> 컴포넌트 개발
              </h2>
            </TextDoHyeonSmallTitle>
            <p className="skill_text small_size">javascript, react, chartJS</p>
            <span className="my_info_box_inner">
              <a
                className="click_text"
                href="https://github.com/BANGWON-LEE/wony-chart-components"
                target="_blank"
              >
                github
                <span className="click_dir">click!</span>
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
                        Chart.js 기반의 재사용 가능한 차트 컴포넌트를 개발.
                        time, value, key, type 등의 props만 전달하면 다양한
                        데이터를 시각화할 수 있도록 구현하여 사용성과 확장성을
                        높임
                      </span>
                    </li>
                    <br />
                    <li className="content_li">
                      <span>•</span>
                      <span>
                        실시간으로 수신되는 3,000개 이상의 데이터를 렌더링 성능
                        저하 없이 시각화하기 위해 Chart.js를 도입. Chart.js는
                        하나의 canvas 요소에 픽셀 단위로 차트를 그리는 방식으로,
                        DOM 기반 라이브러리보다 렌더링 부담이 적음. <br />
                        현장에서는 작업물에 대한 데이터를 실시간으로 빠르게
                        확인해야 하기 때문에, 화려한 인터랙션보다 빠르고
                        안정적인 시각화가 핵심이었음.
                      </span>
                    </li>
                  </ul>
                </div>
              </TextBlackHanSansContent>
            </div>
          </div>
        </div>
        <div className="content_block">
          <div className="content_block_title">
            <TextDoHyeonSmallTitle>
              <h2 className="text_dohyeon_small_title_inner">캘린더 개발</h2>
            </TextDoHyeonSmallTitle>
            <p className="skill_text small_size">
              typescript, react, context api
            </p>
            <span className="my_info_box_inner">
              <a
                className="click_text"
                href="https://github.com/BANGWON-LEE/react-calendar-w-design"
                target="_blank"
              >
                github
                <span className="click_dir">click!</span>
              </a>
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
                        type과 시간 선택 유무에 대한 props만 전달하면, 단일 날짜
                        선택 또는 날짜 범위 선택의 형태로 캘린더를 사용할 수
                        있도록 구현
                      </span>
                    </li>
                    <br />
                    <li className="content_li">
                      <span>•</span>
                      <span>
                        라이브러리(또는 프로젝트)의 경량화를 위해, 전역 상태
                        관리는 별도의 상태 관리 라이브러리 대신
                        <br /> React의 Context API를 활용
                      </span>
                    </li>
                  </ul>
                </div>
              </TextBlackHanSansContent>
            </div>
          </div>
        </div>
      </section>
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
                    <li className="content_li">
                      <span>•</span>
                      <span>
                        실행 컨텍스트의 구조 (variableEnvironment,
                        lexicalEnvironment)와 이를 구성하는 내부 동작
                        원리(environmentRecord, outerEnvironment)를 이해하고,
                        <br /> 이를 통해 호이스팅, this 바인딩, 클로저 개념을
                        깊이 있게 습득
                      </span>
                    </li>
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
        <div className="content_block">
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
        </div>
      </section>
      <section className="my_section_block">
        <TextGothicA1BigTitle>
          <h1 className="text_gothic_a1_big_title_inner">Skill</h1>
        </TextGothicA1BigTitle>
        <div className="content_block">
          <div className="content_block_content">
            <div className="text_box">
              <TextBlackHanSansContent>
                <div className="skill_block">
                  <p className="skill_text">
                    javascript, typescript, react, recoil, redux
                  </p>
                  <p className="skill_text another_skill_text">
                    html, css, scss, tailwindcss
                  </p>
                </div>
              </TextBlackHanSansContent>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
