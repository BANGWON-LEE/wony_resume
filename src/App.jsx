import './App.css'
import { Analytics } from '@vercel/analytics/react'
import LeftContent from './components/main/LeftContent'
import './style/text.scss'
import './style/main.scss'
import './style/content.scss'
import RightContent from './components/main/RightContent'
import { Fragment } from 'react'
import TextGothicA1BigTitle from './components/text/TextGothicA1BigTitle'
import TextBlackHanSansContent from './components/text/TextBlackHanSansContent'
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
      <div className="total_block" id="total_box">
        <header>
          <Analytics />
          <TextGothicA1BigTitle>
            <h1 className="text_gothic_a1_big_title_inner">
              데이터 시각화를 연구하는, 프론트엔드 개발자
            </h1>
            {/* <h1 className="text_gothic_a1_big_title_inner">
              프론트엔드 개발자 이방원입니다.
            </h1> */}
          </TextGothicA1BigTitle>
        </header>
        <div className="header_my_info">
          <div className="header_inner_left">
            <TextBlackHanSansContent>
              <p className="text_black_hansans_content_inner">
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
              </p>
            </TextBlackHanSansContent>
          </div>
          {/* <div className="header_inner_right"> */}

          {/* </div> */}
        </div>

        {/* <main className="main_block"> */}
        <main className="main_box">
          {/* <TextBlackHanSansContent> */}
          {/* <div className="text_box"> */}

          <div className="info_container">
            <div className="skill_box">
              {/* <div className="content_block"> */}
              {/* <div className="content_block_content"> */}
              <div className="skill_container">
                <TextGothicA1BigTitle>
                  <div className="skill_tilte_block">
                    <p className="skill_title_text">Skill</p>
                  </div>
                </TextGothicA1BigTitle>
                <TextGothicA1BigTitle>
                  <div className="text_box">
                    <div className="skill_block">
                      <p className="skill_text">
                        javascript, typescript, react, next
                      </p>
                      <p className="skill_text another_skill_text">
                        recoil, redux
                      </p>
                      <p className="skill_text">html, css, scss, tailwindcss</p>
                      <p className="skill_text another_skill_text">
                        firebase-auth, firebase-firestore
                      </p>
                    </div>
                  </div>
                </TextGothicA1BigTitle>
              </div>
              {/* </div> */}
              {/* </div> */}
            </div>
            <div className="my_info_box">
              <span className="my_info_box_inner">
                이름 :<span className="click_text">이방원</span>
                {/* <span>qkddnjs31@gmail.com</span> */}
              </span>
              <span className="my_info_box_inner">
                이메일 :
                <a
                  className="click_text"
                  href="mailto:qkddnjs31@gmail.com"
                  target="_blank"
                >
                  qkddnjs31@gmail.com
                  <span className="click_dir">click!</span>
                </a>
                {/* <span>qkddnjs31@gmail.com</span> */}
              </span>
              <span className="my_info_box_inner">
                instagram :
                <a
                  className="click_text"
                  href="https://www.instagram.com/fe_developer_wony"
                  target="_blank"
                >
                  fe_devloper_wony
                  <span className="click_dir">click!</span>
                </a>
              </span>
              <span className="my_info_box_inner">
                Git hub :
                <a href="https://github.com/BANGWON-LEE" target="_blank">
                  BANGWON-LEE
                  <span className="click_dir">click!</span>
                </a>
              </span>
            </div>
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
