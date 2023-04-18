import React from 'react'
import { useNavigate } from 'react-router-dom';
import Img from '../../Assets/vectorsandimages/authentication_vector1.svg';
import Background from '../../Assets/vectorsandimages/authcard_background.jpg';
import Logo from '../../Assets/vectorsandimages/logo_notesera.png';
import '../../Styles/Authpage/SignUp.css';
import { useState } from 'react';
import axios from 'axios';
import API_URL from '../../_helpers/Constants';
// import Cookies from 'js-cookie'; 
import { publicAxios } from '../../_helpers/AuthRoute';

import { 
    useQuery,
    useMutation,
    useQueryClient } from '@tanstack/react-query';


export default function Signup() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    
  
    const [ user , setuser] = useState({
      first_name:"",
      last_name:"",
      email:"",
      password1:"",
      password2:"",
      refer_code:"",
  
    });
    // const API_URL ='http://localhost:1111'
    const addMutation = useMutation({
      mutationFn: async (data) => {
        return await 
           axios.post(`${API_URL}/signup/`,data).then((res)=>{
              // window.alert(res.access_token);
              console.log(data.email);

              if (res.status==200){
                queryClient.invalidateQueries({ queryKey: ['users'] });
                // Cookies.set('user_name',res.email);
                // Cookies.set('user_status','active')
                // const user_name = Cookies.get('user_name');
                // const user_status = Cookies.get('user_status');
                window.alert('User registerred and logged in successfully!')
                navigate('/landingpage')
                }else if (res.status == 500){
                  window.alert(res.message);
              }
           }).catch((err)=>{
               window.alert("Error in database ")
           })
      },
    })
  
  
    const handleSubmit=(e)=>{
  
      console.log("in handle block!")
      e.preventDefault();
      const data = {
        "first_name":user.first_name,
        "last_name":user.last_name,
        "email":user.email,
        "password":user.password1,
       
      }
      addMutation.mutate(data) 
      
      queryClient.invalidateQueries("users")
  }
  
    const handleInput = (e)=>{
      const data = e.target.value;
      const name = e.target.name;
      console.log(data);
      setuser({...user,[name]:data});
   }
  return (
    <>
             <img className="authcard_background" src={Background} />
   
   <div className="container centre_div">
   
       <div className="card col-lg-8  col-md-10 col-sm-10 authcard">
       <div className="logo_head">
         <div className="alignCentre"><img src={Logo} className="logo"/></div>
         <h2 className="alignCentre"><span className="highlight_logo">Notes Era</span></h2>
     </div>
           <div className="row">
              
                    <img className="m-0 col-lg-5 col-md-5 col-sm-12 vector_img" src={Img} />
                <div className=" col-lg-6 col-md-8 col-sm-12"> 
                   <form onSubmit={handleSubmit} className="sign_up_div">
                   <div className="row align_left">
                   <h5 className="col-lg-9 col-md-8 col-sm-8 mt-3 greycolor">Already have an account?</h5>
                   <button onClick={()=>navigate('/Login')} className="mt-2 signin_button_head col-lg-3 col-md-3 col-sm-3 btn ">Sign in</button>
                   </div>
                   <h2 className="card_margin">Welcome to <span className="highlight_logo">Notes-Era</span></h2>
                   <h5 className="card_margin greycolor">Register your account</h5>
                   <div className ="form-row row">
                       <div class="form-group col-lg-5 col-md-5 col-sm-10">
                         <label className="card_margin " for="inputName">First name*</label>
                         <input type="text" 
                         className=" form-control" 
                         id="inputName" required 
                         value={user.first_name}
                         name = "first_name"
                         onChange={handleInput}
                         />
                       </div>
                       <div class="form-group col-lg-5 col-md-5 col-sm-10">
                         <label className="card_margin" for="inputLastName">Last name*</label>
                         <input type="text" 
                         className=" form-control" 
                         id="inputLastName" required
                         value={user.last_name}
                         name = "last_name"
                         onChange={handleInput}
                         />
                       </div>
                     </div>
                     <div class="col-lg-10 col-md-10 col-sm-10 form-group">
                       <label className="card_margin" for="inputAddress">Email*</label>
                       <input type="email" 
                       className=" form-control" 
                       id="inputEmail" 
                       placeholder="abc@123gmail.com" required
                       value={user.email}
                       name = "email"
                       onChange={handleInput}
                         />
                     </div>
                     <div class="col-lg-10 col-md-10 col-sm-10 form-group">
                       <label className="card_margin" for="inputPassword">Password*</label>
                       <input  
                       type="password" 
                       className=" form-control" 
                       id="inputPassword"  required
                       value={user.password1}
                       name = "password1"
                       onChange={handleInput}
                     />
                     </div>

                     <div class="col-lg-10 col-md-10 col-sm-10 form-group">
                       <label className="card_margin" for="inputPassword">Confirm password*</label>
                       <input  
                       type="password" 
                       className=" form-control" 
                       id="inputPassword"  required
                       value={user.password2}
                       name = "password2"
                       onChange={handleInput}
                       />
                     </div>

                     <div class="col-lg-10 col-md-10 col-sm-10 form-group">
                       <label className="card_margin" for="inputReferencecode">Reference code(optional)</label>
                       <input type="text" 
                       className="form-control" 
                       id="inputReferencecode" 
                       value={user.refer_code}
                         name = "refer_code"
                         onChange={handleInput}
                       />
                     </div>
                     <button  type="submit" className="mt-3 btn started_button">Sign up</button>
                     </form>
                   
                </div>
           </div>
       </div>
   </div>
   
    </>
  )
}
