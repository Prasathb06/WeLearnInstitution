import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FaHandHoldingUsd } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { GiThink } from "react-icons/gi";
import "./Content2.css";

const Content2 = () => {
    return (
        <div>
            <Container className='box mt-2'>
                <Row>
                    <Col className='cards'>
                        <Card style={{ width: '18rem' }} className='card1'>
                            <Card.Body>
                            <GiThink className='why'/>
                                <Card.Title className='title pb-4'>Why Choose Us</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                <Card.Text className='font'>
                                    Choose us for unparalleled IT training. Benefit from expert-led courses, hands-on experience, and personalized learning to propel your career forward.
                                </Card.Text>
                                {/* <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link> */}
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} className='card2'>
                            <Card.Body>
                            <MdAccessTime className='Time'/>
                                <Card.Title className='title pb-4'>Save Your Time</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                <Card.Text>
                                Access expert-led instruction, flexible schedules, and a virtual classroom for immersive tech education.
                                </Card.Text>
                                {/* <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link> */}
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} className='card3'>
                            <Card.Body>
                            <FaHandHoldingUsd className='Price'/>
                                <Card.Title className='title pb-4'>Affordable Price For You</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                <Card.Text>
                                Our institute offers quality training at an affordable price, ensuring accessible knowledge for all.                                </Card.Text>
                                {/* <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link> */}
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} className='card4'>
                            <Card.Body>
                            <LiaChalkboardTeacherSolid  className='Training'/>
                                <Card.Title className='title pb-4'>Practical Training</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                <Card.Text>
                                Gain hands-on experience, real-world skills, and industry-relevant knowledge for immediate professional application.                                </Card.Text>
                                {/* <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link> */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Content2
