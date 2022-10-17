import React, { useState } from "react";
import ContentFile from "./ContentFiles/ContentFile";
import ContentFolder from "./ContentFiles/ContentFolder";

const ListFolder = ({ handleClick, listFolder, setListFolder }) => {

   const [contextMenuButton, setContextMenuButton] = useState()

   const [contextList, setContextList] = useState(false)


   return (
      <>
         {listFolder.entries.map((item, index) => {
            return (

               <tr key={index}
                  onMouseEnter={() => {
                     setContextMenuButton(item.id)
                  }}
                  onMouseLeave={() => {
                     setContextMenuButton(null)
                     setContextList(false)
                  }}>

                  <td style={{ width: '40px' }}> <input type='checkbox' name={item.name} id={item.name} /></td>

                  <td>
                     {item['.tag'] === 'folder' ?
                        <ContentFolder item={item} index={index} contextList={contextList} contextMenuButton={contextMenuButton} setContextList={setContextList} handleClick={handleClick} setListFolder={setListFolder} />
                        :
                        <ContentFile item={item} index={index} contextList={contextList} contextMenuButton={contextMenuButton} setContextList={setContextList} />
                     }
                  </td>

                  <td> {item.size}</td>

                  <td>{item['client_modified'] ? item['client_modified'].replace(/[\T\Z]/g, ' ') : '--'}</td>
               </tr>
            )
         })}
      </>
   )
}

export default ListFolder;