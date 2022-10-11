import React, { useContext, useEffect } from "react";
import { UserContext } from "../UserStore";
import { useNavigate } from "react-router-dom";


const Login = () => {
   const navigate = useNavigate()

   const { isAuth, setIsAuth } = useContext(UserContext)
   const clientId = 'xnumlhdrd6w4xcb'

   const url = `https://www.dropbox.com/1/oauth2/authorize?client_id=${clientId}&response_type=code&token_access_type=offline&redirect_uri=http://localhost:3000/file&state=<CSRF token>`

   useEffect(() => {
      if (isAuth) {
         navigate('/file')
      }
   })

   return (
      <>
         <div>
            <form className="well form-search" style={{ maxWidth: '248px', alignItems: 'center', margin: 'auto', }}>
               <h3>Вход</h3>
               <a href={url} className="btn btn-inverse" style={{ padding: '8px 34px', fontSize: '18px', }}>Войти через DropBox</a>
            </form>
         </div>
      </>
   )
}


export default Login;