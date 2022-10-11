import React, { useState } from "react";
import ContextMenuList from "./ContextMenu";

const ListFolder = (props) => {
   const pathHref = window.location.pathname



   const [contextMenuButton, setContextMenuButton] = useState()

   const [contextList, setContextList] = useState(false)


   return (
      <>

         {props.listFolder.entries.map((item, index) => {
            return (

               <tr key={index}
                  onMouseEnter={() => {
                     setContextMenuButton(item.id)
                  }}
                  onMouseLeave={() => {
                     setContextMenuButton(null)
                  }}>

                  <td style={{ width: '40px' }}> <input type='checkbox' name={item.name} id={item.name} /></td>

                  <td> {item['.tag'] === 'folder' ?
                     <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                        <a style={{ color: 'black', cursor: 'pointer', width: 'auto' }} href={`${pathHref}${item.path_display}`}
                           onClick={(event) => {
                              props.handleClick(event, item.path_display)
                           }}>
                           <span className="icon-folder-open" style={{ marginRight: '5px' }} />
                           {item.name}
                        </a>
                        <div style={{ width: '50px' }}>
                           {item.id === contextMenuButton ? <div style={{ position: 'relative', height: '19px', }}>
                              <button onClick={() => setContextList(() => { if (contextList) { return false } else { return true } })} className="btn" id={index} style={{ marginTop: '-4px', }}>Ещё</button>
                              {contextList ? <ContextMenuList itemName={item.name} itemPath={item.path_display} setFolder={props.setListFolder} /> : null}
                           </div> : null}
                        </div>
                     </div>
                     :
                     <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                        <p style={{ cursor: 'pointer', width: 'auto', display: 'inline', margin: '0' }}>
                           <span className="icon-file" style={{ marginRight: '5px' }} />
                           {item.name}
                        </p>
                        <div style={{ width: '50px' }}>
                           {item.id === contextMenuButton ? <div style={{ position: 'relative', height: '19px', }}>
                              <button onClick={() => setContextList(() => { if (contextList) { return false } else { return true } })} className="btn" id={index} style={{ marginTop: '-4px', }}>Ещё</button>
                              {contextList ? <ContextMenuList itemName={item.name} itemPath={item.path_display} /> : null}
                           </div> : null}
                        </div>
                     </div>
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