import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const HideNavbar = ({children}) => {
    const location = useLocation();
    const [navbar,setNavbar]=useState(false);
    useEffect(()=>{
        if(location.pathname === '/Admin'){
            setNavbar(false)
        }else{
            setNavbar(true)
        }
    },[location]) 
  return (
    <div>
      {navbar && children}
    </div>
  )
}

export default HideNavbar
