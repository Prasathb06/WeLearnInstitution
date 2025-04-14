import React from 'react';
import ProductCreation from './ProductCreation';
import UserList from './UserList';
import CardsList from './CardsList';
// import UserEdit from './UserEdit'

const AdminController = () => {
  return (
    <>
    <ProductCreation></ProductCreation>
    <UserList></UserList>
    <CardsList></CardsList>
    </>
  )
}

export default AdminController
