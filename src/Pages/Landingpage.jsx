import React from 'react'
import ReactGa from 'react-ga';
import { useEffect } from 'react';
import Header from '../Components/Navigation/Header';
import SectionOne from '../Components/Landingpage/SectionOne';
import NotesSection from '../Components/Landingpage/NotesSection';
import PaperSearch from '../Components/Landingpage/PaperSearch';
import NotesSearch from '../Components/Landingpage/NotesSearch';
import YtSuggestions from '../Components/Landingpage/YtSuggestions';
import OurTeam from '../Components/Landingpage/OurTeam';
import Footer from '../Components/Navigation/Footer';
import Faq from '../Components/Landingpage/Faq';
import {QueryClient , QueryClientProvider } from "@tanstack/react-query";

export default function Landingpage() {
  const queryClient = new QueryClient();
 
  //non interaction
  useEffect(() => {
     ReactGa.pageview(window.location.pathname)
  }, [])
  

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Header/>
      
        <SectionOne/>
        <div className="container">
        <NotesSection/>
        <NotesSearch/>
        <PaperSearch/>
        <YtSuggestions/>
        </div>
        <OurTeam/>
        <div className="container">
          <Faq/>
        </div>
      <Footer/>
      </QueryClientProvider>
    </>
  )
}
