// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaSearch } from "react-icons/fa";
import './Navbar1.css';
import { Link, useNavigate } from 'react-router-dom';

function Navbar1() {
  const navigate = useNavigate();
  const handleLogout = () => {
    
    localStorage.removeItem('authToken'); 
    navigate('/login');
  };
  return (
    <Navbar expand="lg" className="nav" >
      <Container fluid>
        <Navbar.Brand className='BrandName' href="#">WeLearn <span className="letter">I</span>nstitution</Navbar.Brand>
        <Navbar.Toggle className="Toggler" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll ">
          <Nav
            className="me-auto my-2 my-lg-0 d-flex nav1"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <div className='nav1'></div>
            <div className=''><Link to="/" className='nav-link  Home'>Home</Link></div>
            <Nav.Link  className='Link1' href="card">Courses</Nav.Link>
            {/* <NavDropdown className='Link2' title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link className='Link3' href="#action2">Link</Nav.Link> */}
            <Dropdown>
              <Dropdown.Toggle className="Link2" variant="success" id="dropdown-basic">
                 Tutorials
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="HC">HTML&CSS</Dropdown.Item>
                <Dropdown.Item href="java">Java</Dropdown.Item>
                <Dropdown.Item href="javascript">JavaScript</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          <Form className="d-flex Icon">
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button> */}
            {/* <Nav.Link className='Login' href="./login">Login</Nav.Link> */}
            <div className=''><Link to="login" className='nav-link  Login'>Login</Link></div>
            <div className=''><Link to="register" className='nav-link Register'>Register</Link></div>
            {/* <Nav.Link className='Register' href="./register">Register Now</Nav.Link> */}
           <div><button className='btn-logout' onClick={handleLogout}>Logout</button></div> 
            <FaSearch className='search' /> 
          </Form>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;