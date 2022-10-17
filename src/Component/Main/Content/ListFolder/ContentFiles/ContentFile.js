import React from "react";
import ButtonContext from "./Button/ButtonContext";

const ContentFile = ({ item, contextMenuButton, setContextList, contextList, index }) => {
   return (
      <div style={{ display: 'flex', justifyContent: 'space-between', }}>
         <p style={{ cursor: 'pointer', width: 'auto', display: 'inline', margin: '0' }}>
            <span className="icon-file" style={{ marginRight: '5px' }} />
            {item.name}
         </p>
         <ButtonContext item={item} contextMenuButton={contextMenuButton} setContextList={setContextList} contextList={contextList} index={index} />
      </div>
   )
}

export default ContentFile;