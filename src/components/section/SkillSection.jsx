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
              <p className="skill_text">react, next, typescript</p>
              <p className="skill_text another_skill_text">
                zustand, tanStack query, redux
              </p>
              <p className="skill_text">scss, tailwindcss</p>
            </div>
          </div>
        </TextGothicA1BigTitle>
      </div>
    </div>
  )
}
