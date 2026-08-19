import './App.css'
import { Analytics } from '@vercel/analytics/react'
import LeftContent from './components/main/LeftContent'
import './style/text.scss'
import './style/main.scss'
import './style/content.scss'
import RightContent from './components/main/RightContent'
import TextGothicA1BigTitle from './components/text/TextGothicA1BigTitle'
import SkillSection from './components/section/SkillSection'
import InfoSection from './components/section/InfoSection'

function App() {
  return (
    <>
      <div className="total_block resume_shell" id="total_box">
        <header className="resume_header">
          <Analytics />
          <TextGothicA1BigTitle>
            <h1 className="text_gothic_a1_big_title_inner">
              데이터 시각화와 위치 기반 서비스를 구축한 프로젝트 포트폴리오
            </h1>
          </TextGothicA1BigTitle>
        </header>
        <main className="resume_main">
          <div className="info_container resume_summary">
            <SkillSection />
            <InfoSection />
          </div>
          <LeftContent />
          <RightContent />
        </main>
      </div>
    </>
  )
}

export default App
