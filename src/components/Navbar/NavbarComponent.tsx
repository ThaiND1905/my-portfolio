import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Facebook, Github, Gitlab } from 'react-bootstrap-icons';
import { useState , useEffect } from 'react';


const NavbarComponent = () => {
  const [activeLink, setActiveLink] = useState('');
  const [scrolled , setScrolled] = useState(false);

  useEffect(() =>{
    const onScroll = () => {
      if (window.scrollY) {
        setScrolled(true);
      }else{
        setScrolled(false);
      }
    }
    window.addEventListener('scroll', onScroll);
    
    return () => window.removeEventListener('scroll', onScroll);
  },[])

  const onUpdateActiveLink = (value :string) =>{
    setActiveLink('value');
  }
  
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : "" }>
      <Container>
        <Navbar.Brand href="#home">
          <a className='navbar-brand' href="#home">
            <Facebook size={50} />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active-navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('home')} >Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skill' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skill')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'project' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
              <div className='social-icons'>
                <a href="https://www.facebook.com/thai.nd1905/"><Facebook size={42}/></a>
                <a href="https://github.com/ThaiND1905"><Github size={42}/></a>
                <a href="https://gitlab.com/thai19052001"><Gitlab size={42}/></a>
              </div>
              <button className='' onClick={() =>{ console.log('Hello')}}>
                <span>
                  Let's Connect
                </span>
              </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent