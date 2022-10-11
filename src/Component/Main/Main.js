import React, { useContext } from "react";

const Main = ({ children }) => {

   return (
      <>
         <main style={{ flex: '1 0 auto', }} className="container">
            {children}
         </main>
      </>
   )
}

export default Main;