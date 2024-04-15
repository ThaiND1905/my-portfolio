import React from 'react'
import { Container , Row , Col} from 'react-bootstrap'
import { Facebook, Github , Gitlab } from 'react-bootstrap-icons'
import './Footer.css';
export const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-item-center'>
          <Col sm={6}>
            <h1>My Portfolio Page</h1>
          </Col>
          <Col sm={6} className='footer-text'>
            <div className='social-icons'>
                  <a href=""><Facebook size={42}/></a>
                  <a href=""><Github size={42}/></a>
                  <a href=""><Gitlab size={42}/></a>
            </div>
            <p>Copyright 2024. All right reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
