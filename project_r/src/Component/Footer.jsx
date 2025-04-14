import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <>
      <section className="footer">
      <div className="social">
      <Nav.Link className='icon1' href=""><FaInstagram /></Nav.Link>
      <Nav.Link className='icon2' href=""><FaFacebook /></Nav.Link>
      <Nav.Link className='icon3' href=""><FaYoutube /></Nav.Link>
      <Nav.Link className='icon4' href=""><FaTwitter /></Nav.Link>
      </div>
      <ul className="details">
        <li><a className="fm" href="">Home</a></li>
        <li><a className="fm"  href="">About Us</a></li>
        <li><a className="fm"  href="">TermsandCondition</a></li>
        <li><a className="fm"  href="">Disclaimer</a></li>
        <li><a className="fm"  href="">Contact Us</a></li>
      </ul>
      <div className="copy-right">Copyright @2024 al right reserved by Webtechknowledge</div>
    </section>
    </>
  )
}

export default Footer
