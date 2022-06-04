import React, { useEffect , useState } from 'react'
import './Navbar.css'

export const Navbar = () => {

  const [show,handleShow] = useState(false);

    useEffect(()=>{
      window.addEventListener("scroll",()=>{
        if(window.scrollY > 100){
          handleShow(true) ;
        } else handleShow(false) ;
      }) ;
      // return ()=>{
        // window.removeEventListener("scroll");
      // } ;
    }, [])




  return (
    <div className={`navbar ${show && "navbar_black"}`}>
      <img className='navbar_logo' src='https://www.freepnglogos.com/uploads/netflix-logo-0.png' alt='Netflix Logo'/>


      <img className='navbar_smiley' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='Smiley Logo'/>
   
    </div>
  )
}
