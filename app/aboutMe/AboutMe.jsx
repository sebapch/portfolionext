'use client'

import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'

const AboutMe = () => {
  return (
    <div>
      <Container>
        <Row>          
            <label>My expertise</label>
            <Row>
              <div className='box-about'>
                Software dev
              </div>
              <div>
                Software dev
              </div>
              <div>
                Software dev
              </div>
            </Row>   
        </Row>
      </Container>
    </div>
  )
}

export default AboutMe