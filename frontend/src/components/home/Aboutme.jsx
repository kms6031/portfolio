import React from 'react'
import "./styles/Aboutme.scss"
import aboutMe from '../../utils/aboutme'

const Aboutme = () => {
  // 데이터가 없을 경우를 대비한 기본값 설정
  const profile = aboutMe?.basic || {}
  const skills = aboutMe?.skills || []
  const exper = aboutMe?.experiences || []
  const interests = aboutMe?.interests || []

  return (
    <div className='inner aboutme-inner'>
      <h1 className="tit">
        <span className="star-spin"><i className="star">✱</i></span>
        aboutMe
      </h1>
      <div className="t-wrap">
        <h2 className="sub-tit">
          profile
        </h2>
        <p className="txt">
          <br />
        </p>
      </div>

      <div className="about-container">
        <div className="in-wrap profile-wrap">
          <h4 className='list-lst'>profile</h4>
          <ul className="lst">
            <li>
              <strong>이름</strong>: {profile.name || 'N/A'}
            </li>
            <li>
              <strong>나이</strong>: {profile.age || 'N/A'}
            </li>
            <li>
              <strong>사는곳</strong>: {profile.location || 'N/A'}
            </li>
            <li>
              <strong>MBTI</strong>: {profile.mbti || 'N/A'}
            </li>
          </ul>
        </div>

        <div className="in-wrap skills-wrap">
          <h4 className='list-lst'>Skills</h4>
          <ul className="lst">
            {skills.length > 0 ? (
              skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))
            ) : (
              <li></li>
            )}
          </ul>
        </div>

        <div className="in-wrap exper-wrap">
          <h4 className='list-lst'>💼 Experiences</h4>
          <ul className="lst">
            {exper.length > 0 ? (
              exper.map((exp, i) => (
                <li key={i}>{exp}</li>
              ))
            ) : (
              <li></li>
            )}
          </ul>
        </div>

        <div className="in-wrap interests-wrap">
          <h4 className='list-lst'>🌱 Interests</h4>
          <ul className="lst">
            {interests.length > 0 ? (
              interests.map((int, i) => (
                <li key={i}>{int}</li>
              ))
            ) : (
              <li></li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Aboutme
