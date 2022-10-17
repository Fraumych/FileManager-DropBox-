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

         Authorization().then(res => {
            localStorage.setItem('isAuth', true)
            localStorage.setItem('token', res.data.access_token)
         }).then(() => { window.location.reload() })
            .catch(() => {
               navigate('/')
               localStorage.clear()
               window.location.reload();
            })
      }

      getListFolder().then(
         res => {
            if (res.status === 200) { setListFolder(res.data) }
            else if (res.status === 401) {
               navigate('/')
               localStorage.clear()
               window.location.reload();
            }
         })
   }, [])

   const handleClick = (e, folderPath) => {
      e.preventDefault();
      getListFolder(folderPath).then(res => {
         setPathFolder(folderPath)
         setListFolder(res.data)
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