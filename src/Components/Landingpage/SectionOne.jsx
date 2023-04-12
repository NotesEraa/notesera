import React from 'react'
import '../../Styles/Landingpage/SectionOne.css';
import { useNavigate } from 'react-router-dom';
import Img1 from '../../Assets/vectorsandimages/sectiononebackground2.png'

export default function SectionOne() {
    const navigate = useNavigate();
  return (
   <>
     <div className = " row poppins" id='sectionone'>
        <div className="container">
              <div className="row">
                  
                <img className="sectionone_div col-12" src={Img1}/>

                <h1 className="alignCentre white text-head text_div">"Join our <span className="highlight">community</span> and help it grow. Be a part of something <span className="highlight">special</span>!"
              <br></br>  <button onClick={()=>navigate('authpage')} className="btn started_button">Start Learning Now!</button>
                </h1>
             </div>
             
        </div>
        
        </div>
        
    
   </>
  )
}
