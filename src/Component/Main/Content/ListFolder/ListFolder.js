import React, { useState } from "react";
import ContentFile from "./ContentFiles/ContentFile";
import ContentFolder from "./ContentFiles/ContentFolder";
import Style from "./ListFolder.module.css"

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

                  <td className={Style.InputColumn}> <input type='checkbox' name={item.name} id={item.name} /></td>

                  <td>
                     <div className={Style.FilesColumn}>
                        {item['.tag'] === 'folder' ?
                           <ContentFolder item={item} index={index} contextList={contextList} contextMenuButton={contextMenuButton} setContextList={setContextList} handleClick={handleClick} setListFolder={setListFolder} />
                           :
                           <ContentFile item={item} index={index} contextList={contextList} contextMenuButton={contextMenuButton} setContextList={setContextList} />
                        }
                     </div>
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