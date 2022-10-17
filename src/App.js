import React from "react";
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./utils/AppRouter"
import Footer from "./Component/Footer/Footer";
import Headers from "./Component/Headers/Headers";

const App = () => {
   return (
      <BrowserRouter>
         <Headers />
         <div style={{ flex: '1 0 auto', }} className="container">
            <AppRouter />
         </div>
         <Footer />
      </BrowserRouter>

   );
}

export default App;
