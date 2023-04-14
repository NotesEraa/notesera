import React from 'react'

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
