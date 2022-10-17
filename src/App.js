import React from "react";
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./utils/AppRouter"
import Footer from "./Component/Footer/Footer";
import Headers from "./Component/Headers/Headers";
import Style from "./App.module.css";

const App = () => {
   return (
      <BrowserRouter>
         <Headers />
         <div className={`container ${Style.Main}`}>
            <AppRouter />
         </div>
         <Footer />
      </BrowserRouter>

   );
}

export default App;
