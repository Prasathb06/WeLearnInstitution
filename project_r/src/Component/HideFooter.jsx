import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const HideFooter = ({Children}) => {
    const location = useLocation();
    const [Footer,setFooter]=useState(false);
    useEffect(()=>{
        if(location.pathname =="/Admin"){
            setFooter(false);
        }else{
            setFooter(true)
        }
    },[location])
  return (
    <div>
      {Footer && Children}
    </div>
  )
}

export default HideFooter
