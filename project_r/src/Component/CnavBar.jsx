import React from 'react';
import Nav from 'react-bootstrap/Nav';
import "./CnavBar.css";

const CnavBar = () => {
  return (
    <div>
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="" href='HC'>HTML & CSS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" href='javascript'>JavaScript</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" href='java'>Java</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4">NodeJS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-5">ReactJS</Nav.Link>
        </Nav.Item>
        {/* <Nav.Item>
          <Nav.Link eventKey="link-6">Disabled</Nav.Link>
        </Nav.Item> */}
      </Nav>
    </div>
  )
}

export default CnavBar
