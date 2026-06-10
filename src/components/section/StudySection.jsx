import TextBlackHanSansContent from '../text/TextBlackHanSansContent'
import TextDoHyeonSmallTitle from '../text/TextDoHeyonSmallTitle'
import TextGothicA1BigTitle from '../text/TextGothicA1BigTitle'

export default function StudySection() {
  return (
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
                      Deep Copy 함수를 직접 구현하며 객체 참조와 메모리 구조에
                      대한 이해도 향상
                      <br />
                      HashRouter, HistoryRouter를 직접 구현하여 SPA 라우팅
                      원리와 브라우저 동작 방식에 대한 실전 감각 함양
                    </span>
                  </li>
                  {/* <p className="study_link">
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
                  <br />*/}
                  <li className="content_li">
                    <span>•</span>
                    <span>
                      공식 문서(Docs)와 전문 서적을 중심으로 학습하며, 단편적인
                      요약이 아닌 근본 개념 중심의 학습 방식 정립
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
  )
}
