import React, { useState, useMemo } from "react";
import AuthInfo from "./AuthInfo";
import Nav from "./Nav";


const Headers = () => {

   return (
      <>
         <header style={{ backgroundColor: '#2c2c2c', marginBottom: "20px", }}>
            <div className=" container">
               <section className="navbar" style={{ display: 'flex', margin: "0", alignItems: "center", minHeight: "60px", justifyContent: 'space-between', }}>
                  <div style={{ display: 'flex', }}>
                     <Nav />
                  </div>

                  <AuthInfo />

               </section>
            </div>
         </header>
      </>
   )
}

export default Headers;