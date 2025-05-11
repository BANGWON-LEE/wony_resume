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

function App() {
  return (
    <div className="total_block">
      <Analytics />
      <header>
        <TextGothicA1BigTitle>
          <h1 className="text_gothic_a1_big_title_inner">안녕하세요</h1>
          <h1 className="text_gothic_a1_big_title_inner">
            프론트엔드 개발자 이방원입니다.
          </h1>
        </TextGothicA1BigTitle>
      </header>
      <div className="header_my_info">
        <div className="header_inner_left">
          <TextBlackHanSansContent>
            <span className="text_black_hansans_content_inner">
              차트 라이브러리를 활용해 3,000개 이상의 실시간 데이터를
              시각화하고, 성능을 개선한 경험이 있습니다. <br /> 또한, 지속적인
              개선을 위해 고민하고 기록하는 습관을 실천하고 있습니다.
            </span>
            <span className="text_black_hansans_content_inner">
              원활한 협업을 위해 짧은 내용은 구두로, <br /> 긴 내용은 텍스트로
              정리해 동료들이 내용을 정확히 이해하고 빠르게 대응할 수 있도록
              지원합니다.
            </span>
          </TextBlackHanSansContent>
        </div>
        <div className="header_inner_right">
          <TextBlackHanSansContent>
            {/* <div className="text_box"> */}
            <div className="my_info_box">
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

            {/* </div> */}
          </TextBlackHanSansContent>
        </div>
      </div>
      <main className="main_block">
        <LeftContent />
        <RightContent />
      </main>
    </div>
  )
}

export default App
