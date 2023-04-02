'use client'
import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'

const Hero = () => {
  return (
    <>
        <Container>
            <Row> 
                <Col>
                    <h1>Title</h1>
                </Col>
                <Col>
                    <h1>Image</h1>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Hero