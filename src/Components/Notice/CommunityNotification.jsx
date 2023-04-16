import React from 'react'
import { publicAxios } from '../../_helpers/AuthRoute';
import axios from 'axios';
import {Link} from 'react-router-dom'
import BASE_URL from '../../_helpers/Constants';
import {useState , useEffect } from 'react'
export default function CommunityNotification() {

    const [ notification , setnotification] = useState([])

const API_URL ='http://localhost:1111';
const  getdata=async ()=>{
    let data = await axios.get(`${API_URL}/communitynotification/`)
    let notificationArray = data.data.notifications;
    setnotification(notificationArray);
}
console.log(notification)



useEffect(()=>{
    getdata()
},[])
     return (
   <>
       <h3 className="alignCentre m-3"> Community Notifications And News</h3>
       <div className="row">
        {
            notification.map((items,key)=>{
                return (<>
                      <div className="card col-lg-5 col-md-5 col-sm-12  p-4 m-3">
            <h4 className='highlight_head'>{items.title}</h4>
            <span>{items.description}</span>
            <span>Contact us -{items.contact}</span>
            <div>Link - <Link to = {items.link}>click here</Link></div>
        </div>
                </>)
             })
        }
       
       
        
       </div>
   </>
  )
}
