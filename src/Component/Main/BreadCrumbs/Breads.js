import React, { useContext, useEffect, useState } from "react";
import { APIContext } from "../../../APIrequest";
import ButtonBack from "./ButtonBack"


const BreadCrumbs = (props) => {

   const { getListFolder } = useContext(APIContext)

   const [pathBack, setPathBack] = useState('')
   const [pathCrumbs, setPathCrumbs] = useState('')

   let path = props.currentPathFolder

   useEffect(() => {
      if (path !== '') {
         let pathPop = path.split('/')
         setPathCrumbs(pathPop.join(' > '))

         pathPop.pop()
         setPathBack(pathPop.join('/'))
      } else {
         let pathPop = path.split('/')
         setPathCrumbs(pathPop.join(' > '))
      }
   }, [path])

   const handleClickBack = () => {
      getListFolder(pathBack).then(result => {
         props.PathFolder(pathBack)
         props.ListFolder(result.data)
      })

   }

   return (
      <div style={{ display: 'flex', marginBottom: '10px' }}>
         <ButtonBack currentPathFolder={props.currentPathFolder} handleClickBack={handleClickBack} />

         <h4 style={{ margin: '5px', display: 'flex' }}>
            Home {pathCrumbs}</h4>
      </div>
   )
}

export default BreadCrumbs;        