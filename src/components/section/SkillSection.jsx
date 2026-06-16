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
              <p className="skill_text">
                React · TypeScript (strict mode) · Next.js (App Router)
              </p>
              <p className="skill_text another_skill_text">
                zustand, tanStack query, redux
              </p>
              <p className="skill_text">scss, tailwindcss</p>
              <p className="skill_text another_skill_text">
                ApexCharts, Chart js
              </p>
            </div>
          </div>
        </TextGothicA1BigTitle>
      </div>
    </div>
  )
}
