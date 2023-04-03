'use client'
import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import styles from './hero.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import JavascriptIcon from '@mui/icons-material/Javascript';



const Hero = () => {
  return (
    
    <div >

        <Container className={styles.alturaHero}>
            <Row > 
                <Col>
                    <h1>Front-End React Developer</h1>
                    <label>Hi! I'm Sebastián Medina. A passionate Front-end Dev based in Buenos Aires, Argentina.</label>
                    <LinkedInIcon sx={{fontSize: '3rem'}}/>
                    <GitHubIcon  sx={{fontSize: '3rem'}}/>
                </Col>
                <Col className='d-flex align-items-center justify-content-center'>
                    <div className={styles.profilePic}></div>
                </Col>
            </Row>
            <Row >
                <Col>
                    <label>Stack: </label>
                    <JavascriptIcon sx={{fontSize: '3rem'}}/>
                </Col>
            </Row>
        </Container>
    </div>
   
  )
}

export default Hero