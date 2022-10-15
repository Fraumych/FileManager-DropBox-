import React, { useContext } from "react";
import { APIContext } from "../../APIrequest";

const ContextMenuList = ({ itemName, itemPath }) => {

   const { deleteList } = useContext(APIContext)

   const deleteFile = (itemPath) => {
      deleteList(itemPath).then(alert('Файл удален'))
         .then(window.location.reload())
   }

   return (
      <div style={{ background: 'white', position: 'absolute', padding: '5px', borderRadius: '5px', boxShadow: '0 0 5px black' }}>
         <p style={{ borderBottom: '2px solid black', textAlign: 'center' }}>{itemName}</p>
         <div style={{ display: 'flex', flexDirection: 'column', }}>
            <button className='btn' style={{ marginBottom: '2px' }}>Изменить</button>
            <button className='btn' style={{ marginBottom: '2px' }} onClick={() => { deleteFile(itemPath) }}>Удалить</button>
            <button className='btn' style={{ marginBottom: '2px' }}>Добавить</button>
         </div>
      </div>
   )
}
export default ContextMenuList;