import React, { useState } from "react";
import Modal from "../Modal";


const Toolbar = () => {
   const [modalActive, setModalActive] = useState(false)


   return (
      <>
         <div className="btn-group" style={{ marginBottom: '10px' }}>
            <button className="btn" onClick={() => { setModalActive(true) }}>Копировать</button>
            <button className="btn" onClick={() => { setModalActive(true) }}>Вырезать</button>
            <button className="btn" onClick={() => { setModalActive(true) }}>Удалить</button>
            <button className="btn" onClick={() => { setModalActive(true) }}>Скачать</button>

         </div>

         <Modal active={modalActive} setActive={setModalActive} />
      </>
   )
}

export default Toolbar;