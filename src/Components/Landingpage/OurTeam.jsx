import React from 'react'
import '../../Styles/Landingpage/OurTeam.css';

export default function OurTeam() {
  const teamList = [
    {    'id':0,
         'img_url':"https://www.codester.com/static/uploads/items/000/010/10223/preview/003.jpg"
    },
    {    'id':1,
         'img_url':"https://www.codester.com/static/uploads/items/000/010/10223/preview/003.jpg"
    },
    {    'id':2,
    'img_url':"https://www.codester.com/static/uploads/items/000/010/10223/preview/003.jpg"
    },
    {    'id':3,
         'img_url':"https://www.codester.com/static/uploads/items/000/010/10223/preview/003.jpg"
    },
    {    'id':4,
         'img_url':"https://www.codester.com/static/uploads/items/000/010/10223/preview/003.jpg"
    },
    {    'id':5,
         'img_url':"https://www.codester.com/static/uploads/items/000/010/10223/preview/003.jpg"
    },
    {    'id':6,
         'img_url':"https://www.codester.com/static/uploads/items/000/010/10223/preview/003.jpg"
    },
    {    'id':7,
         'img_url':"https://www.codester.com/static/uploads/items/000/010/10223/preview/003.jpg"
    },
    {    'id':8,
    'img_url':"https://www.codester.com/static/uploads/items/000/010/10223/preview/003.jpg"
    },
    {    'id':9,
         'img_url':"https://www.codester.com/static/uploads/items/000/010/10223/preview/003.jpg"
    },
    {    'id':10, 
         'img_url':"https://www.codester.com/static/uploads/items/000/010/10223/preview/003.jpg"
    },
    {    'id':11,
         'img_url':"https://www.codester.com/static/uploads/items/000/010/10223/preview/003.jpg"
    },
    {    'id':12,
         'img_url':"https://www.codester.com/static/uploads/items/000/010/10223/preview/003.jpg"
},
{    'id':11,
         'img_url':"https://www.codester.com/static/uploads/items/000/010/10223/preview/003.jpg"
    },
    {    'id':12,
         'img_url':"https://www.codester.com/static/uploads/items/000/010/10223/preview/003.jpg"
}
   ];
   
   const length_ = teamList.length;

  return (
   <>
      <h3 className="alignCentre">Our team members</h3>
      <div className="slider">
        <div className="slide-track">
            
          {   
              teamList.map((items,key)=>{
               console.log(items.img_url)
               
               return( 
               <>
                <div className = "  slide">
                 <div className="card_div">
                    <img className="card col-12 expertImg" src={items.img_url}/>
                    <span>hello</span>
               </div> 
            </div>
               </>
               )

              })
          }
     
        </div>
    </div>   

    <div className="slider">
        <div className="slide-track-reverse">
            
          {
              teamList.map((items,key)=>{
               console.log(items.img_url)
               return( 
               <>
                <div className = "slide">
                 <div className="card_div">
                    
                    <img className="card col-12 expertImg" src={items.img_url}/>
                    
                    
               </div> 
            </div>
               </>
               )
              })
          }
        </div>
    </div>  
   </>
  )
}
