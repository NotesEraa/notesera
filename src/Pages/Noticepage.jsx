import React from 'react'
import Header from '../Components/Navigation/Header';
import CollegeNotification from '../Components/Notice/CollegeNotification';
import CommunityNotification from '../Components/Notice/CommunityNotification';
import Footer from '../Components/Navigation/Footer';
import {QueryClient , QueryClientProvider } from "@tanstack/react-query";
import ReactGA from 'react-ga';
import { useEffect } from 'react';
export default function Noticepage() {
      const queryClient = new QueryClient();

      useEffect(() => {
        ReactGA.pageview(window.location.pathname);
      }, [])
 return (
   <>
   <QueryClientProvider client={queryClient}>
     <Header/>
       <div className="container">
       <CollegeNotification/>
       </div>
     
       <div className="container">
       <CommunityNotification/>
       </div>
     <Footer/>
     </QueryClientProvider>
   </>
 
  )
}
