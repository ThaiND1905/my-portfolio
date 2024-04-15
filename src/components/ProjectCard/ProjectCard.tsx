import React from 'react'
import { Col } from 'react-bootstrap'
import {Project} from '../Projects/Projects'

const ProjectCard = ({title , description , group , imgUrl } : Project) => {
  return (
    <Col sm={6} md={4}>
      <div className='proj-imgbx'>
          <img src={imgUrl} height={340} width={450} alt="" />
          <div className='proj-text'>
              <h4>{title} : Made by {group}</h4>
              <span>{description}</span>
          </div>
      </div>
    </Col>
  )
}

export default ProjectCard