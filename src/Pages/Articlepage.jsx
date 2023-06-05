import React from 'react'
import Article from '../Components/Articlepage/Article';
import ReactGA from 'react-ga'
import { useEffect } from 'react';
import Header from '../Components/Navigation/Header';

import Footer from '../Components/Navigation/Footer';
export default function Articlepage() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])
  return (
    <>
        <Header/>
       <Article/>
       <Footer/>
    </>
  )
}
