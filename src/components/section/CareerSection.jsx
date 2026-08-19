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
              <li className="content_li">2022.02 ~ 2025.05</li>
              <li className="content_li">Frontend</li>
            </ul>
          </TextBlackHanSansContent>
        </div>
        <div className="content_block_content">
          <article className="project_card">
            <div className="project_body">
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
                <p>
                  전지 공장의 믹싱, 코팅, 프레싱, 슬리팅 공정을 전산화하고 공장
                  기기 상태를 실시간으로 점검하기 위한 스마트 팩토리 솔루션
                  프로젝트입니다.
                </p>
              </TextBlackHanSansContent>
              <TextBlackHanSansContent>
                <div className="text_box">
                  <ul className="text_box_ul">
                    <li className="content_li">
                      <span>•</span>
                      <span>
                        단일 차트로 제한되던 기기 상태 화면을 2개 이상의 부품
                        데이터를 동시에 확인할 수 있는 다중 차트 대시보드로 확장
                      </span>
                    </li>
                    <li className="content_li">
                      <span>•</span>
                      <span>
                        1~2초 주기 폴링 ⇒ MQTT 이벤트 기반으로 전환하여 불필요한
                        요청을 없애고 필요한 응답만 받도록 개선
                      </span>
                    </li>
                    <li className="content_li">
                      <span>•</span>
                      <span>
                        ApexChart vs Chart.js 벤치마크 수행 후 Chart.js
                        마이그레이션,{' '}
                        <strong>
                          LCP 21.3초→4.0초(−81%), FCP 2.6초→0.2초(−92%) 개선
                        </strong>
                      </span>
                    </li>
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
                    javascript, nextron, tailwind CSS, recoil, chart.js,
                    ApexCharts
                  </p>
                </div>
              </TextBlackHanSansContent>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
