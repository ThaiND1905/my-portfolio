import React from 'react'
import { Skill } from '../Skills/Skills'


const SkillCard = ({title, description ,group, imgUrl} : Skill) => {
  return (
                <div className="item">
                  <img src={imgUrl} alt="Project1" />
                  <h5>{title}</h5>
                </div>
  )
}

export default SkillCard
