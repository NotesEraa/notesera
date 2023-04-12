import React from 'react'
import Img from '../../Assets/vectorsandimages/notessection.jpg'
import '../../Styles/Landingpage/NotesSection.css';

export default function NotesSection() {
  return (
    <>
    <h3 className = "alignCentre m-3">Notes section</h3>
    <div className="row">
         <img src={Img} className="col-lg-4 col-md-4 col-sm-12 notessectionsvg"/>
         <div className="card col-lg-7 col-md-7 col-sm-12"></div>
    </div>
      
    </>
  )
}
