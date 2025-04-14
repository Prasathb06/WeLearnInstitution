import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import "./UserList.css"

const UserList = () => {

    const[user, setUser]=useState(0)

    const deleteUser = (id) => {
      fetch(`http://localhost:4000/user/delete/${id}`, {
        method: "DELETE"
      })
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          setUser(user.filter(user => user._id !== id));
        } else {
          console.error('Failed to delete the user');
        }
      })
      .catch((err) => {
        console.error('Error:', err);
      });
    };

    useEffect(()=>{
        fetch("http://localhost:4000/user/list")
      
          .then(res => res.json())
          .then((data)=>{
            setUser(data)
            console.log(data);
          })
    },[])
  return (
    <div className='userlist'>
      <h1 style={{color:"white", textAlign:"left"}}>User List</h1>
      {user&&
      <table className='usertable' border="1" style={{borderColor:"blue"}}>
        {
            user.map((e)=>{
                return<tr style={{color:"white", textAlign:"center"}}>
                    <td>{e._id}</td>
                    <td>{e.username}</td>
                    <td>{e.email}</td>
                    <td>{e.Contact}</td>
                    <td>{e.password}</td>
                    <td>
                    <input className='delete' type='button' value="Delete" onClick={()=>{deleteUser(e._id)}}></input>
                    </td>
                </tr>
                
            })
        }
      </table>
      }
    </div>
  )
}

export default UserList
