import React from 'react';
import ProductCreation from './ProductCreation';
import UserList from './UserList';
import CardsList from './CardsList';


const AdminController = () => {
  return (
    <>
     <h1 style={{ color: "white" }}>Admin Dashboard</h1>
      <ProductCreation></ProductCreation>
      {/* <UserList></UserList>
      <CardsList></CardsList> */}
    </>
  )
}

export default AdminController
