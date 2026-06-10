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
                javascript, typescript, react, next
              </p>
              <p className="skill_text another_skill_text">
                recoil, redux, zustand, TanStack Query
              </p>
              <p className="skill_text">scss, tailwindcss</p>
              <p className="skill_text another_skill_text">
                firebase-auth, firebase-firestore
              </p>
            </div>
          </div>
        </TextGothicA1BigTitle>
      </div>
    </div>
  )
}
