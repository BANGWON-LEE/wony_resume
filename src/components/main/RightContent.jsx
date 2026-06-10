import MyProjectSection from '../section/MyProjectSection'
import StudySection from '../section/StudySection'

export default function RightContent() {
  return (
    <div className="resume_column resume_column_secondary">
      <MyProjectSection />
      <StudySection />
    </div>
  )
}
