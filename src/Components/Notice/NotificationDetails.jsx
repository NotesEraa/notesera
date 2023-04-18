import React from 'react'

import {Link} from 'react-router-dom'
import axios from 'axios';
import {useState , useEffect } from 'react'
import '../../Styles/Noticepage/NotificationDetails.css';
import { useLocation} from 'react-router-dom';
import API_URL from '../../_helpers/Constants';
import Header from '../../Components/Navigation/Header';
export default function NotificationDetails() {

  const [ notification , setnotification] = useState([])
  const location = useLocation();
  const tag = location.search.slice(5,);
  
// const API_URL ='http://localhost:1111';
const  getdata=async ()=>{
    const tag = location.search.slice(5,);
    let data = await axios.get(`${API_URL}collegenotification/${tag}`)
    let notificationArray = data.data.notifications;
    setnotification(notificationArray);
}
console.log(notification)


useEffect(()=>{
  getdata()
},[])
  return (
   <>  
   <Header/>
   <div className="container">
        <h3 className = "m-3 alignCentre">{tag} Notifications</h3>
        <div className="row">
        {
          notification.map((items,key)=>{
            return (<>
                  <div className="card m-2 col-lg-4 col-md-4 col-sm-12">
                      <h4>description - {items.description}</h4>
                      <h5>Date - {items.date}</h5>
                      <h5>Link - <Link to={items.link}>Click here</Link></h5>
                  </div>
            </>)
          })
        }
        </div>
      </div>
   </>
  )
}
