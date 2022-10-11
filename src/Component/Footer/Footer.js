import React from "react";

const Footer = () => {
   return (
      <>
         <footer style={{ flex: '0 0 auto', margin: '0', color: '#999999', backgroundColor: '#2c2c2c', }} >

            <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
               <section style={{ display: 'flex', margin: "0px", alignItems: "center", minHeight: "60px", }}>
                  <div><p>Создано компанией</p>
                     <p style={{ margin: '0', color: 'white' }}>HTML group </p></div>
               </section>

            </div>

         </footer>
      </>

   )
}

export default Footer;