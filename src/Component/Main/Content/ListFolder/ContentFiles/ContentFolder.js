import React from "react";
import ButtonContext from "./Button/ButtonContext";

const ContentFolder = ({ item, contextMenuButton, setContextList, contextList, index, handleClick, setListFolder }) => {
   const pathHref = window.location.pathname

   return (
      <div style={{ display: 'flex', justifyContent: 'space-between', }}>
         <a style={{ color: 'black', cursor: 'pointer', width: 'auto' }} href={`${pathHref}${item.path_display}`}
            onClick={(event) => {
               handleClick(event, item.path_display)
            }}>
            <span className="icon-folder-open" style={{ marginRight: '5px' }} />
            {item.name}
         </a>
         <ButtonContext item={item} contextMenuButton={contextMenuButton} setContextList={setContextList} contextList={contextList} index={index} />
      </div>
   )
}

export default ContentFolder;