import React, { useContext, useEffect, useState } from "react";
import { APIContext } from "../../APIrequest";


const Breads = (props) => {

   const { getListFolder } = useContext(APIContext)

   const [pathBack, setPathBack] = useState('')
   const [pathBreads, setPathBreads] = useState('')

   let path = props.currentPathFolder

   useEffect(() => {
      if (path !== '') {
         let pathPop = path.split('/')
         setPathBreads(pathPop.join(' > '))
         pathPop.pop()
         let pathJoin = pathPop.join('/')
         setPathBack(pathJoin)
      } else if (path === '') {
         let pathPop = path.split('/')
         setPathBreads(pathPop.join(' > '))
      }
   }, [path])

   const handleClickBack = (e) => {
      e.preventDefault()
      getListFolder(pathBack).then(res => res.json())
         .then(result => {
            props.PathFolder(pathBack)
            props.ListFolder(result)
         })

   }

   return (
      <div style={{ display: 'flex', marginBottom: '10px' }}>
         {props.currentPathFolder === '' ? <button className="btn btn-inverse" href={props.currentPathFolder} onClick={handleClickBack} style={{ marginRight: '15px' }} disabled>Назад</button>
            : <button className="btn btn-inverse" href={props.currentPathFolder} onClick={handleClickBack} style={{ marginRight: '15px' }}>Назад</button>}

         <h4 style={{ margin: '5px', display: 'flex' }}>
            Home
            {pathBreads}</h4>
      </div>
   )
}

export default Breads;        