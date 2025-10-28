import React from 'react';
import Nav from 'react-bootstrap/Nav';
import "./CnavBar.css";

const CnavBar = () => {
  return (
    <div>
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link eventKey=""><Link to="/javascript" className='nav-link'>HTML & CSS</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">JavaScript<Link to="/javascript" className='nav-link'>JavaScript</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3"><Link to="/java" className='nav-link'>Java</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4"><Link to="/javascript" className='nav-link'>NodeJS</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-5"><Link to="/javascript" className='nav-link'>ReactJS</Link></Nav.Link>
        </Nav.Item>
        {/* <Nav.Item>
          <Nav.Link eventKey="link-6">Disabled<Link to="/javascript" className='nav-link'>JavaScript</Link></Nav.Link>
        </Nav.Item> */}
      </Nav>
    </div>
  )
}

export default CnavBar
