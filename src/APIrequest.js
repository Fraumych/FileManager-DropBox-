import { createContext, useState } from "react";

export const APIContext = createContext()


const APIrequest = ({ children }) => {


   const Authorization = () => {

      let token = new URLSearchParams(window.location.search).get('code');

      return fetch("https://api.dropboxapi.com/oauth2/token", {
         method: 'POST',
         body: `code=${token}&grant_type=authorization_code&redirect_uri=http://localhost:3000/file`,
         headers: {
            Authorization: `Basic eG51bWxoZHJkNnc0eGNiOmJ1bnhycTBqNXM4bHlzMw==`,
            "Content-Type": "application/x-www-form-urlencoded"
         },
      }).then(res => res.json())

   }

   const accountName = () => {

      return fetch("https://api.dropboxapi.com/2/users/get_current_account", {
         headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
         },
         method: 'POST',
      })
   }

   const getListFolder = (path = "") => {

      return fetch("https://api.dropboxapi.com/2/files/list_folder", {
         headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            "Content-Type": "application/json"
         },
         method: "POST",
         body: JSON.stringify({
            "include_deleted": false,
            "include_has_explicit_shared_members": false,
            "include_media_info": false,
            "include_mounted_folders": true,
            "include_non_downloadable_files": true,
            "path": path,
            "recursive": false,
         })
      })
   }

   const deleteList = (path) => {
      return fetch("https://api.dropboxapi.com/2/files/delete_v2", {
         headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            "Content-Type": "application/json"
         },
         method: "POST",
         body: JSON.stringify({
            "path": path,
         })
      })
   }

   const creacteList = (e, data) => {
      console.log('aaa');
   }

   const changeList = (e, data) => {
      console.log('aaa');
   }

   return (
      <APIContext.Provider value={{ Authorization, accountName, getListFolder, deleteList, changeList, creacteList }}>{children}</APIContext.Provider>
   )
}
export default APIrequest;