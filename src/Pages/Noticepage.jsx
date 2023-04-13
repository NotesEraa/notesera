import React from 'react'
import Header from '../Components/Navigation/Header';
import CollegeNotification from '../Components/Notice/CollegeNotification';
import CommunityNotification from '../Components/Notice/CommunityNotification';
import Footer from '../Components/Navigation/Footer';
import {QueryClient , QueryClientProvider } from "@tanstack/react-query";

export default function Noticepage() {
      const queryClient = new QueryClient();
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
