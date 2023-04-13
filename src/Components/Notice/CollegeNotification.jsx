import React from 'react'
import {Link} from 'react-router-dom';
import '../../Styles/Noticepage/CollegeNotifications.css'
import Img from '../../Assets/vectorsandimages/collegenotice.jpg'
import megaphone from '../../Assets/vectorsandimages/megaphone.png'

export default function CollegeNotification() {
  return (
    <>
      <h3 className="alignCentre m-3">College Notice</h3>
      <div className="row">
        <img src={Img} className="col-lg-4 col-md-5 col-sm-12"/>
       
       <div className="card p-3 col-lg-6 col-md-5 col-sm-12">
       <ul class="list-group list-group-flush">
         <li class="list-group-item "><span><img src={megaphone} className="col-1 spacing_list"/><text className="spacing_list">Internship Notification </text>     <Link className="spacing_list">Click here</Link></span></li>
         <li class="list-group-item"><span><img src={megaphone} className="col-1 spacing_list"/><text className="spacing_list">College Notification </text>     <Link className="spacing_list">Click here</Link></span></li>
         <li class="list-group-item"><span><img src={megaphone} className="col-1 spacing_list"/><text className="spacing_list">Community Notification </text>     <Link className="spacing_list">Click here</Link></span></li>
         <li class="list-group-item"><span><img src={megaphone} className="col-1 spacing_list"/><text className="spacing_list">Mu study zone Notification </text>     <Link className="spacing_list">Click here</Link></span></li>
         
       </ul>
       </div>
       </div>
    </>
  )
}
