import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

type props = {
    children:React.JSX.Element
}
export const Portal = ({children}:props) => {
    const [container] = useState(()=>document.createElement('div'))
   useEffect(()=>{
    document.body.appendChild(container)
    return () => {document.body.removeChild(container)}
   },[container])
  return createPortal(children,container)
  
}
