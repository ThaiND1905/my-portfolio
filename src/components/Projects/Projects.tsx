import React from 'react'
import './Projects.css'
import { Container, Col , Row , Nav , Tab } from 'react-bootstrap';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectImage from "../../assets/images/project.jpg"
import ChatApp from '../../assets/images/projects/Chat App.png'
import Teky from '../../assets/images/projects/Teky.png'
export interface Project{
    title: string;
    description?: string;
    group: "Me" | "Company",
    imgUrl: string;
}

const project : Array<Project> =[
    {
        title: "Teky Educational Website",
        group: "Company",
        imgUrl: Teky
    },
    {
        title: "Chat App",
        group: "Me",
        imgUrl: ChatApp
    },
    {
        title: "Style Image App",
        group: "Me",
        imgUrl: ProjectImage
    }
]


const Projects = () => {
  return (
    <section className='projects' id='projects'>
        <Container>
            <Row>
                <Col>
                    <h2>Projects</h2>
                    <p>Along my Internship, I have built some projects to show that I properly have potienal to do more than I can imagine. Hope that these projects show that I have able to join with your IT team.</p>
                    <Tab.Container defaultActiveKey="first">
                            <Nav variant='pills' className='nav-pills mb-5 justify-content-center align-content-center' id='pills-tab' defaultActiveKey="first">
                            <Nav.Item>
                                <Nav.Link eventKey="first" >
                                    Active
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        project.map((project,index) => {
                                            return (
                                                <ProjectCard key={index} {...project}/>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                    
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Projects