import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserStore";
import { APIContext } from "../../APIrequest";
import { useNavigate } from "react-router-dom";


const AuthInfo = () => {
   const [userName, setUserName] = useState('')
   const [userPhoto, setUserPhoto] = useState()
   const { accountName } = useContext(APIContext)
   const { isAuth, setIsAuth } = useContext(UserContext)
   const navigate = useNavigate()

   useEffect(() => {

      if (isAuth) {
         accountName().then(data => {
            setUserName(data.data.name.familiar_name)
            setUserPhoto(data.data.profile_photo_url)
         }).catch(() => {
            navigate('/')
            localStorage.clear()
            window.location.reload();
         })
      }
   }, [])

   const handleLogOut = (e) => {
      e.preventDefault()
      setIsAuth(localStorage.setItem('isAuth', false))
      localStorage.clear()
      navigate('/')
   }

   return (
      <div style={{ display: 'flex', alignItems: 'center', }}>{
         isAuth ?
            <>
               <h4 style={{ margin: "0px", paddingRight: '8px', }}>Здравствуйте, {userName} <img style={{ width: '35px', border: '1px solid #999999', borderRadius: '50%' }} src={userPhoto} /></h4>
               <button className="btn" style={{ margin: "0px", }} onClick={handleLogOut}>Выход</button>
            </>
            :
            null
      }</div>
   )
}

export default AuthInfo;