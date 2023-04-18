import React from 'react'

import '../../Styles/Articlepage/Article.css';
import {useState , useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import API_URL from '../../_helpers/Constants';
export default function Article() {
  const [ article , setarticle] = useState([])
   
// const API_URL ='http://localhost:1111';
const  getdata=async ()=>{
    let data = await axios.get(`${API_URL}recentarticle/`)
    let articleArray = data.data.articles;
    setarticle(articleArray);
}
let articledata=[article]

console.log(articledata)

useEffect(()=>{
  getdata()
},[])
   
  return (
    <>
         <h3 className="alignCentre m-3">Articles</h3>

        <div className="container">
         
            {
              articledata?.map((items,key)=>{
                return (
                  <>
                   <div className="row">
                      <span className='alignLeft'><h2>{items.title}</h2></span>
                      </div>
          <br></br>
          <img src={items.img} className="m-3 col-12 blogimg"/>
          <span className="alignLeft mgRight"><h5>published on {items.date}</h5></span>
            <div className="row">
            <span className='alignLeft mgRight m-1'><h5>By - {items.Author}</h5></span>
        </div>
          <text className="blogtext p-3">
            {items.description}
          </text>
                  </>
                )
              })
            }
        
            
       <br></br>
          <button className="btn started_button">Show more Articles</button>
        </div>
    </>
  )
}
