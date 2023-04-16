import React from 'react'
import { publicAxios } from '../../_helpers/AuthRoute';
import axios from 'axios';
import {  useQuery} from '@tanstack/react-query';
import BASE_URL from '../../_helpers/Constants';
import {useState } from 'react'
export default function CommunityNotification() {
   const tempdata = [
        {
            "id":1,
            "name":"mutech",
            "contact":"1212121212",
            "description":"hello all event is here",
            "link":"http://www.google.com"
        },
        {
            "id":2,
            "name":"mutech",
            "contact":"1212121212",
            "description":"hello all event is here",
            "link":"http://www.google.com"
        },
        {
            "id":3,
            "name":"mutech",
            "contact":"1212121212",
            "description":"hello all event is here",
            "link":"http://www.google.com"
        },
        {
            "id":4,
            "name":"mutech",
            "contact":"1212121212",
            "description":"hello all event is here",
            "link":"http://www.google.com"
        },
        {
            "id":4,
            "name":"mutech",
            "contact":"1212121212",
            "description":"hello all event is here",
            "link":"http://www.google.com"
        }
    ]
    // const [ data , setdata] = useState({
    //     notification:''
    // })
const API_URL ='http://localhost:1111';
const  getdata= ()=>{
    return axios.get(`${API_URL}communitynotification/`)
    
}
// ComponentDidMount(){
//    const data = getdata();
//    console.log(data)
// }

// .then(res=>{
//     setdata({...data,['notifications']:res});
//     console.log(data.notifications);
// }).catch(err => {
//       console.log(err); 
//   });



// getNotes();
const {isLoading , data} = useQuery({ queryKey: ['notification'], queryFn:getdata})

console.log(data)
     return (
   <>
       <h3 className="alignCentre m-3"> Community Notifications And News</h3>
       <div className="row">
        {
            tempdata.map((items,key)=>{
                return (<>
                      <div className="card col-lg-5 col-md-5 col-sm-12  p-4 m-3">
            <h4 className='highlight_head'>{items.name}</h4>
            <span>{items.description}</span>
            <span>Contact us -{items.contact}</span>
        </div>
                </>)
             })
        }
       
       
        
       </div>
   </>
  )
}
