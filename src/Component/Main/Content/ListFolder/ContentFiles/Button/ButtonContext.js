import React from "react";
import ContextMenuList from "./ContextMenu";

const ButtonContext = ({ item, contextMenuButton, setContextList, contextList, index }) => {
   return (
      <div style={{ width: '50px' }}>
         {item.id === contextMenuButton ? <div style={{ position: 'relative', height: '19px', }}>
            <button onClick={() => setContextList(() => { if (contextList) { return false } else { return true } })} className="btn" id={index} style={{ marginTop: '-4px', }}>Ещё</button>
            {contextList ? <ContextMenuList itemName={item.name} itemPath={item.path_display} /> : null}
         </div> : null}
      </div>
   )
}

export default ButtonContext;