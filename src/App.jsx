import './App.css'
import { Analytics } from '@vercel/analytics/react'
import LeftContent from './components/main/LeftContent'
import './style/text.scss'
import './style/main.scss'
import './style/content.scss'
import RightContent from './components/main/RightContent'
import TextGothicA1BigTitle from './components/text/TextGothicA1BigTitle'
import TextBlackHanSansContent from './components/text/TextBlackHanSansContent'
import SkillSection from './components/section/SkillSection'
import InfoSection from './components/section/InfoSection'
// import generatePDF, { Resolution, Margin } from 'react-to-pdf'

function App() {
  // const options = {
  //   method: 'save',
  //   resolution: 2, // 낮추면 크기 줄어듦 (실험 필요)
  //   page: {
  //     format: [130, 75], // A4 가로 (mm)
  //     orientation: 'landscape',
  //     margin: 2,
  //   },
  //   canvas: {
  //     mimeType: 'image/png',
  //     qualityRatio: 1,
  //   },
  //   overrides: {
  //     pdf: {
  //       compress: true,
  //     },
  //     canvas: {
  //       useCORS: true,
  //       scale: 1,
  //     },
  //   },
  //   x: 0,
  //   y: 0,
  // }

  // const getTargetElement = () => document.getElementById('total_box')
  // function downloadPdf() {
  //   generatePDF(getTargetElement, {
  //     filename: '프론트엔드_개발자_이방원.pdf',
  //     ...options,
  //   })
  // }

  return (
    <>
      {/* <div className="pdf_block">
        <button className="pdf_block_btn" onClick={() => downloadPdf()}>
          PDF로 저장
        </button>
      </div> */}
      <div className="total_block resume_shell" id="total_box">
        <header className="resume_header">
          <Analytics />
          <TextGothicA1BigTitle>
            <h1 className="text_gothic_a1_big_title_inner">
              데이터 시각화와 성능 최적화로 사용자 경험을 개선하는 프론트엔드
              개발자
            </h1>
            {/* <h1 className="text_gothic_a1_big_title_inner">
              프론트엔드 개발자 이방원입니다.
            </h1> */}
          </TextGothicA1BigTitle>
        </header>
        <div className="header_my_info resume_intro">
          <div className="header_inner_left">
            <TextBlackHanSansContent>
              실시간 데이터를 지도·차트로 시각화하고 성능 병목을 수치로 개선해
              온 프론트엔드 개발자입니다. 스마트 팩토리 실시간 관제 대시보드에서{' '}
              <br />
              LCP를 21.3초→4.0초(−81%)로 단축했고, 사용자와의 인터뷰를 통해 업무
              기록 및 문서화 시간을 1시간에 5분으로 단축하였습니다
              <br />
              Naver·T Map 등 지도 API로 위치 기반 서비스, 마이플랜을 설계·구축
              최적화 경험이 있습니다. 기술 경험이나 공부 내용은 &nbsp;
              <a
                // className="click_text"
                href="https://www.instagram.com/fe_developer_wony"
                target="_blank"
              >
                sns(인스타그램)
              </a>
              에 기록합니다
              {/* </p> */}
              {/* <p className="text_black_hansans_content_inner">
                스마트 팩토리 프로젝트에서, 공장 기기의 데이터를 차트로 시각화
                한 경험이 있습니다. <br /> 과거 데이터 및 mqtt로 받아오는 실시간
                데이터,약 3000개 이상을 시각화 하고, 성능을 개선한 경험이
                있습니다.
                <br />
                또한, 기술 경험이나 공부 내용을&nbsp;
                <a
                  // className="click_text"
                  href="https://www.instagram.com/fe_developer_wony"
                  target="_blank"
                >
                  sns(인스타그램)
                </a>
                에 기록하고 있습니다
              </p>
              <p className="text_black_hansans_content_inner">
                원활한 협업을 위해 짧은 내용은 구두로, 긴 내용은 텍스트로 정리해
                동료들이 내용을 정확히 이해하고 빠르게 대응할 수 있도록
                지원합니다.
              </p> */}
            </TextBlackHanSansContent>
          </div>
          {/* <div className="header_inner_right"> */}

          {/* </div> */}
        </div>

        {/* <main className="main_block"> */}
        <main className="resume_main">
          {/* <TextBlackHanSansContent> */}
          {/* <div className="text_box"> */}

          <div className="info_container resume_summary">
            <SkillSection />
            <InfoSection />
          </div>
          {/* </div> */}
          {/* </TextBlackHanSansContent> */}
          <LeftContent />
          <RightContent />
        </main>
        {/* </main> */}
      </div>
    </>
  )
}

export default App
