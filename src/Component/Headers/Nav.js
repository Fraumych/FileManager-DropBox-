import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {

   const navigate = useNavigate()
   const pagePath = window.location.pathname


   return (
      <>
         <h1 style={{ marginRight: '10px', margin: 'auto', fontSize: '20px' }}>FileManager.com</h1>
      </>
   )

}

export default Nav;