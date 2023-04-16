import React from 'react'
import '../../Styles/Navigation/Header.css';
import {Link } from 'react-router-dom';
import { useEffect , useState} from 'react';
import { useNavigate ,useLocation} from 'react-router-dom';
import Logo from '../../Assets/vectorsandimages/logo_notesera.png'
import MenuButton from './MenuButton';
import Cookies from 'js-cookie';
// import { useCookies } from 'react-cookie';

export default function Header() {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  
  
  
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });
 
  const width = windowSize[0]  ;
  function check(){
       if(width <1125){
          return true
       }else{
          return false
       }
  }

   const user= Cookies.get('access_token')
  console.log(user)
  
const navigate = useNavigate();

  return (
    <>
      
       <div className = "navbar_custom flex shadow_bottom">
          
          <div className = "navcontent "> 

{
 check()?
 <div>
    <img  src={Logo}  className= "alignLeft Logo"/>
    
    <MenuButton className=" botton_pos marginAlign"/> 
    
    {/* <button onClick={()=>navigate('/Signup')} className="alignRight btn botton botton_pos marginAlign">Join network</button> */}
   
 </div>:<div>
          <img  src={Logo}  className= "alignLeft Logo"/>
         
          <Link className="nav_link link1" to='/notice'>Notice</Link>
          <Link className="nav_link link2" to='/article'>Article</Link>
          <Link className="nav_link link3" to='/library'>E-library</Link>
          {
            user?
            <span className="nav_link link4">{user}</span>
            :
            <Link className="nav_link link4" to='/Signup'>Sign up/Login</Link>
          }
          
          <Link className="nav_link link5" to='/landingpage'>Home</Link> 
                       
 </div>
}
</div>
 </div>

    </>
  )
}
