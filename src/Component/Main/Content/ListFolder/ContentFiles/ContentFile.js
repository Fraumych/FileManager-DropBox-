import React from "react";
import ButtonContext from "./Button/ButtonContext";
import Style from "./ContentFile.module.css";

const ContentFile = ({ item, contextMenuButton, setContextList, contextList, index }) => {
   return (
      <>
         <p className={Style.FileName}>
            <span className={`icon-file ${Style.PositionIcon}`} />
            {item.name}
         </p>
         <ButtonContext item={item} contextMenuButton={contextMenuButton} setContextList={setContextList} contextList={contextList} index={index} />
      </>
   );
};

export default ContentFile;