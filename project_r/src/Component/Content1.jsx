import React from 'react'
import con from '../images/Backgroundimg/gif3.gif'
import './Content1.css'
import { Link } from 'react-router-dom'

const Content1 = () => {
  return (
      <div className="Post row-cols-1 row-cols-sm-1 row-cols-md-2">
          <div className="container-fluid container1 row-cols-1 row-cols-sm-1 row-cols-md-2">
            <div className="content">
              <p className="quotas">"End is not the end if fact E.N.D. Means "Efforts Never Dies.</p>
              <p className="info">India's No:1 IT Training Institute <br/> with <span className="color">100%</span> Job Assistance</p>
              <p className="info1">Take your career to the next level</p>
              {/* <a className="btn1" href='./register'>Register Now</a> */}
              <div><Link to="register" className='nav-link btn1'>Register Now</Link></div>
            </div>
            <div className="img1">
              <img src={con} height="400px" width="400px"  alt="" srcset=""/>
            </div>
          </div>
      </div>
  )
}

export default Content1
