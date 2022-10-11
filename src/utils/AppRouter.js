import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./Routes";
import { UserContext } from "../UserStore";

const AppRouter = () => {
   const { isAuth } = useContext(UserContext)

   return (

      <Routes>
         {publicRoutes.map(({ path, Component }) =>
            <Route key={path} path={path} element={<Component />} exact />
         )}
      </Routes>

   )
}

export default AppRouter;