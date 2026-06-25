import TextGothicA1BigTitle from '../text/TextGothicA1BigTitle'

export default function SkillSection() {
  return (
    <div className="skill_box">
      <div className="skill_container">
        <TextGothicA1BigTitle>
          <div className="skill_tilte_block">
            <p className="skill_title_text">Skill</p>
          </div>
        </TextGothicA1BigTitle>
        <TextGothicA1BigTitle>
          <div className="text_box">
            <div className="skill_block">
              <p className="skill_text">Javascript, Typescript, React, Next</p>
              <p className="skill_text another_skill_text">
                Redux, Zustand, TanStack Query
              </p>
              <p className="skill_text">SCSS, Tailwind CSS</p>
              <p className="skill_text another_skill_text">
                Firebase, Chart.js, Map api(Naver, Kakao, T map)
              </p>{' '}
              <p className="skill_text">codex</p>
            </div>
          </div>
        </TextGothicA1BigTitle>
      </div>
    </div>
  )
}
