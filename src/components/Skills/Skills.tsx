import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Container, Row, Col } from "react-bootstrap";
import "./Skills.css";
import Django from '../../assets/images/skills/Django.png';
import ReactJs from '../../assets/images/skills/ReactJs.png';
import NodeJs from '../../assets/images/skills/Nodejs.png';
import Javascript from '../../assets/images/skills/Javascript.png';
import Typescript from '../../assets/images/skills/Typescript.png';
import SkillCard from "../SkillCard/SkillCard";

export interface Skill {
  title: string;
  description?: string;
  group: "Me" | "Company",
  imgUrl: string;
}

const skills: Array<Skill> = [
  {
    title: "Django",
    group: "Company",
    imgUrl: Django
  },
  {
    title: "React JS",
    group: "Me",
    imgUrl: ReactJs
  },
  {
    title: "Node JS",
    group: "Me",
    imgUrl: NodeJs
  },
  {
    title: "JavaScript",
    group: "Me",
    imgUrl: Javascript
  },
  {
    title: "TypeScript",
    group: "Me",
    imgUrl: Typescript
  }
]

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                There are so many skills that i have received through my Intern time.......
              </p>
              <Carousel showStatus={false} className="skill-slider">
                                    {
                                        skills.map((skill,index) => {
                                            return (
                                                <SkillCard key={index} {...skill}/>
                                            )
                                        })
                                    }
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
