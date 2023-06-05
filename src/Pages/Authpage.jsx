import React from 'react'
import Signup from '../Components/Authentication/Signup'

import Header from '../Components/Navigation/Header'

import ReactGA from 'react-ga';
import { useEffect } from 'react';

export default function Authpage() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, [])
  return (
    
   <>
    <Header/>  
     <Signup/>
 
   </>
  )
}
