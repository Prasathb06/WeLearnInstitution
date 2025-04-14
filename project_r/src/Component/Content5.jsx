import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Content5.css";
import stdimg from "../images/std/male.jfif"

const Content5 = () => {
  return (
    <div>
       <Container className='box1'>
        <h1>Students Review</h1>
      <Row className="justify-content-md-center content5" >
        <Col xs lg="2" className='col1'>
        <p>I Studied Fullstack developer course in welearn institute.  I learnt Front-End Development,Back-End Development,Full-Stack Integration and worked in liveproject now I got my dream carrier</p>
        <div className='std'>
            <img className='stdimg' src={stdimg}></img>
        <div className='stdname'>
        <h3>Arun</h3>
        <h4>Fullstack Developer</h4>
        </div>
        </div>
        </Col>
        <Col xs lg="2" className='col2'>
         <p>I Studied Pythonstack developer course in welearn institute.  I learnt Front-End Development,Back-End Development,Pyhton-Stack Integration and worked in liveproject now I got my dream carrier</p>
        <div className='std'>
        <img className='stdimg' src={stdimg}></img>
        <div className='stdname'>
        <h3>Prasath</h3>
        <h4>Pythonstack Developer</h4>
        </div>
        </div>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Content5
