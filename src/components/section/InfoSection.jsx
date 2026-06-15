import TextGothicA1BigTitle from '../text/TextGothicA1BigTitle'

export default function InfoSection() {
  return (
    <div className="my_info_block">
      <div className="my_info_box">
        <TextGothicA1BigTitle>
          <div className="skill_tilte_block">
            <p className="skill_title_text">Info</p>
          </div>
        </TextGothicA1BigTitle>
        <div className="text_box">
          <span className="my_info_box_inner">
            이름 :<span className="click_text">이방원</span>
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
          </span>{' '}
          <span className="my_info_box_inner">
            링크드인 :
            <a
              href="https://www.linkedin.com/in/%EB%B0%A9%EC%9B%90-%EC%9D%B4-983a10201/"
              target="_blank"
            >
              이방원
              <span className="click_dir">click!</span>
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}
