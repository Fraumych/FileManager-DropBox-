import React from "react";
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./utils/AppRouter"
import Footer from "./Component/Footer/Footer";
import Headers from "./Component/Headers/Headers";
import Main from "./Component/Main/Main";

const App = () => {
   return (
      <BrowserRouter>
         <Headers />
         <Main>
            <AppRouter />
         </Main>
         <Footer />
      </BrowserRouter>

   );
}

export default App;
