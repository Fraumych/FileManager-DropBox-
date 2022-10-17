import React, { useEffect, useState } from "react";

const ButtonBack = (props) => {
   const [isDisabled, setDisabled] = useState(true)

   useEffect(() => {

      if (props.currentPathFolder === '') {
         setDisabled(true)
      } else { setDisabled(false) }

   }, [props.currentPathFolder])

   return (
      <button className="btn btn-inverse" href={props.currentPathFolder} onClick={props.handleClickBack} disabled={isDisabled}>Назад</button>
   )

}

export default ButtonBack;