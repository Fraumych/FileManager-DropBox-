import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { APIContext } from "../APIrequest";
import Toolbar from "../Component/Main/Toolbar";
import Breads from "../Component/Main/Breads";
import Modal from "../Component/Modal";
import ListFolder from "../Component/Main/ListFolder"
import "../Component/ContextMenu.css"

const File = () => {
   const { Authorization, getListFolder } = useContext(APIContext)
   const [listFolder, setListFolder] = useState(
      {
         entries: [],
      })
   const [pathFolder, setPathFolder] = useState('')
   const [modalActive, setModalActive] = useState(false)
   const navigate = useNavigate()

   useEffect(() => {
      if (!localStorage.getItem('token')) {
         Authorization().then(data => {
            localStorage.setItem('isAuth', true)
            localStorage.setItem('token', data.data.access_token)
         }).then(() => { window.location.reload() }).catch(res => {
            navigate('/')
            localStorage.clear()
            window.location.reload();
         })

      }

      getListFolder().then(
         data => {
            if (data.status === 200) { setListFolder(data.data) }
            else if (data.status === 401) {
               navigate('/')
               localStorage.clear()
               window.location.reload();
            }
         })
   }, [])

   const handleClick = (e, folderPath) => {
      e.preventDefault();
      getListFolder(folderPath).then(result => {
         setPathFolder(folderPath)
         setListFolder(result.data)
      })
   }

   return (
      <>
         <Modal active={modalActive} setActive={setModalActive} />
         <Toolbar />
         <Breads currentPathFolder={pathFolder} PathFolder={setPathFolder} ListFolder={setListFolder} />

         <table className="table table-bordered">
            <thead>
               <tr>
                  <th><input type='checkbox' /></th>
                  <th>Имя</th>
                  <th>Размер</th>
                  <th>Дата изменения</th>
               </tr>

            </thead>
            {listFolder.entries.length > 0 ?
               <tbody>
                  <ListFolder listFolder={listFolder} handleClick={handleClick} setListFolder={setListFolder} /></tbody>
               :
               <tbody>
                  <tr>
                     <th style={{ textAlign: 'center' }} colSpan={4}><h5 >Папка пуста</h5></th>
                  </tr>
               </tbody>
            }
         </table>
      </>)
}

export default File;