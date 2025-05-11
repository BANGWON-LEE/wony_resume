import TextGothicA1BigTitle from '../text/TextGothicA1BigTitle'

import TextBlackHanSansContent from '../text/TextBlackHanSansContent'
import TextDoHyeonSmallTitle from '../text/TextDoHeyonSmallTitle'

export default function LeftContent() {
  return (
    <div className="main_box">
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
              <div className="text_box">
                <span className="text_black_hansans_content_inner">
                  Frontend Developer
                </span>
                <span className="text_black_hansans_content_inner">
                  2022.02 ~ 2024.11
                </span>
              </div>
            </TextBlackHanSansContent>
          </div>
          <div className="content_block_content">
            <div className="text_box">
              <TextDoHyeonSmallTitle>
                <div className="project_header">
                  <h2 className="text_dohyeon_small_title_inner">
                    스마트 팩토리
                  </h2>
                  <TextBlackHanSansContent>
                    <p className="project_date">2023.11 ~ 진행 중</p>
                  </TextBlackHanSansContent>
                </div>
              </TextDoHyeonSmallTitle>
              <TextBlackHanSansContent>
                <span>
                  공장 현장 작업자가 자신의 업무를 수기가 아닌, 프로그램을
                  사용하여 기록하고 진행할 수 있도록 하는 프로젝트
                </span>
              </TextBlackHanSansContent>
              <TextBlackHanSansContent>
                <div className="text_box">
                  <ul className="text_box_ul">
                    <li className="content_li">
                      <span>•</span>
                      <span>
                        기존 1~2초 주기 API 폴링 방식으로 인해 불필요한 요청을
                        보냄. 이를 해결하기 위해 MQTT 프로토콜을 도입하여 데이터
                        발생 시에만 실시간 수신하는 구조로 변경. 또한
                        ApexCharts를 활용하여 초기 렌더링과 데이터 갱신을
                        분리하여 최적화를 진행.
                      </span>
                    </li>
                    <br />
                    <li className="content_li">
                      <span>•</span>
                      <span>
                        작업 생산성을 높이기 위해 Chart.js 기반 재사용 가능한
                        차트 컴포넌트를 개발. 차트 타입과 API 데이터만 주입하면
                        사용할 수 있도록 설계하고, 스타일 커스터마이징 기능을
                        추가하여 다양한 시각화 요구를 지원. 이를 통해 데이터
                        <br />
                        시각화 작업의 편의성과 개발 속도 향상에 기여.
                      </span>
                    </li>
                    <br />
                    <li className="content_li">
                      <span>•</span>
                      <span>
                        실시간 데이터 구현에 있어서 ChartJS가 ApexChart보다 초기
                        렌더링 속도 및 성능 향상에 이점이 있음을 파악,
                        <br /> LCP를 <strong>21.3초 → 4.0초</strong>, FCP를
                        <strong>2.6초 → 0.2초</strong>로 대폭 개선.
                      </span>
                    </li>
                  </ul>
                  <p className="skill_text">
                    javascript, nextron, tailwindcss, recoil, chart.js,
                    ApexCharts
                  </p>
                </div>
              </TextBlackHanSansContent>
            </div>
            <div className="text_box">
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
                </span>
              </TextBlackHanSansContent>
              <TextBlackHanSansContent>
                <div className="text_box">
                  <ul className="text_box_ul">
                    <li className="content_li">
                      <span>•</span>
                      <span>
                        Next.js 기반 프로젝트 초기 세팅과 폴더 구조를 설계하고,
                        서비스 사용자 페이지(19개)와 관리자 페이지(5개) 총 24개
                        페이지에 대해 반응형 퍼블리싱을 단독으로 진행함. 관리자
                        페이지는 MUI <br />
                        기본 컴포넌트를 활용하여 빠르게 개발하고, 기본
                        레이아웃과 UI를 신속하게 구성함. 퍼블리싱 작업은 약
                        2개월 내에 완료하여 개발 일정 준수에 기여함.
                      </span>
                    </li>
                  </ul>
                  <p className="skill_text">javascript, next, scss, mui</p>
                </div>
              </TextBlackHanSansContent>
            </div>
            <div className="text_box">
              <TextDoHyeonSmallTitle>
                <div className="project_header">
                  <h2 className="text_dohyeon_small_title_inner">
                    토토 프로젝트
                  </h2>
                  <TextBlackHanSansContent>
                    <p className="project_date">2022.5 ~ 2022.12</p>
                  </TextBlackHanSansContent>
                </div>
              </TextDoHyeonSmallTitle>
              <TextBlackHanSansContent>
                <span>
                  AI로 스포츠 게임의 승패를 예측하여 유저에게 추천하는 기능이
                  핵심인 프로젝트.
                </span>
              </TextBlackHanSansContent>
              <TextBlackHanSansContent>
                <div className="text_box">
                  <ul className="text_box_ul">
                    <li className="content_li">
                      <span>•</span>
                      <span>
                        토토 판매점 위치 정보를 지도에 효과적으로 시각화하기
                        위해 Kakao Map API를 활용하여, API로 전달받은 토토
                        판매점 좌표만 필터링하여 마커로 시각화. <br /> 지도는
                        필요 시에만 동적 로딩되도록 설정하고, 이벤트 리스너를
                        통해 로딩 흐름 최적화.
                      </span>
                    </li>
                    <br />
                    <li className="content_li">
                      <span>•</span>
                      <span>
                        사용자가 이미지를 삽입하여 글을 작성할 수 있도록
                        React-Quill을 활용한 이미지 업로드 기능을 개발. 업로드
                        진행 중 로딩용 임시 이미지를 삽입하고, 완료 후 실제
                        이미지로 교체하여 사용자 경험(UX) 최적화 구현.
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
      </section>
    </div>
  )
}
