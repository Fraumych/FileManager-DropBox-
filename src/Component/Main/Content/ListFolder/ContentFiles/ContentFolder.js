import React from "react";
import ButtonContext from "./Button/ButtonContext";
import Style from "./ContentFolder.module.css";

const ContentFolder = ({ item, contextMenuButton, setContextList, contextList, index, handleClick }) => {
   const pathHref = window.location.pathname;

   return (
      <>
         <a className={Style.FolderName} href={`${pathHref}${item.path_display}`}
            onClick={(event) => {
               handleClick(event, item.path_display);
            }}>
            <span className={`icon-folder-open ${Style.PositionIcon}`} />
            {item.name}
         </a>
         <ButtonContext item={item} contextMenuButton={contextMenuButton} setContextList={setContextList} contextList={contextList} index={index} />
      </>
   );
};

export default ContentFolder;