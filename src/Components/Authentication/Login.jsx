import React from 'react'
import { useNavigate } from 'react-router-dom';
import Img from '../../Assets/vectorsandimages/authentication_vector1.svg';
import Background from '../../Assets/vectorsandimages/authcard_background.jpg';
import Logo from '../../Assets/vectorsandimages/logo_notesera.png';
import Header from '../../Components/Navigation/Header'
import Footer from '../../Components/Navigation/Footer'
import '../../Styles/Authpage/Login.css';
import { useState } from 'react';
import {Link } from 'react-router-dom';
import { 
    useQuery,
    useMutation,
    useQueryClient } from '@tanstack/react-query';

export default function Login() {

    const navigate = useNavigate();
  const queryClient = useQueryClient();
 

  const [ user , setuser] = useState({ 
    email:"",
    password:"",
  });

//   const addMutation = useMutation({
//     mutationFn: async (data) => {
//       // return await console.log("mutate!")
//       return await 
//          publicAxios.post('/login/',data).then((res)=>{
//             window.alert(res.data);
//             queryClient.invalidateQueries({ queryKey: ['users'] });
//             navigate('/loginsuccess')
//          })
//     },
//   })

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("in handle login block!")
   
    const data = {
      "email":user.email,
      "password":user.password,
    
    }
    console.log(data);
    // addMutation.mutate(data) 
    
    // queryClient.invalidateQueries("users")
  }

  const handleInput = (e)=>{
    const data = e.target.value;
    const name = e.target.name;
    console.log(data);
    setuser({...user,[name]:data});
 }

  return (
    <>
    <Header/>
               <img className="login_background" src={Background} />
   
   <div className="container centre_div">
     <div className="card col-lg-8 col-md-10 col-sm-10  logincard">
        <div className="row">
       
             <img className="m-0 col-lg-5 col-md-8 col-sm-12 vector_img" src={Img} />

       <div className=' col-lg-6   '>
      
       <div className='row  '>
       <div className="col-12 centre_login">
       <div className="alignCentre"><img src={Logo} className="logo"/></div>
       <h2 className="alignCentre"><span className="highlight_logo">Notes Era</span></h2>
       <div className="row align_left">
                 <h5 className="col-lg-9 col-md-7 col-sm-7 mt-3 greycolor">Don't have an account</h5>
                 <button onClick={()=>navigate('/Signup')} className="mt-2 signin_button_head col-lg-3 col-md-3 col-sm-3 btn ">Sign up</button>
       </div>
       <div className="logintab ">

        <form  onSubmit={handleSubmit} >
                <div className="form-group col-lg-8 col-md-10 col-sm-10">
                <label className="card_margin" for="inputEmail">Email or Username*</label>
                  <input type="emai" 
                  className="input_field form-control" 
                  id="InputEmail" aria-describedby="emailHelp" 
                  placeholder="Enter email or username" 
                  required
                  value={user.email}
                  name = "email"
                  onChange={handleInput}
                  />
                </div>
                {/* field 2 */}
                <div className="form-group col-lg-8 col-md-10 col-sm-10">
                <label className="card_margin" for="inputPassword">Password*</label>
                   <input type="password" 
                   className="input_field form-control" 
                   id="Password" placeholder="Enter Password" 
                   required
                   value={user.password}
                   name = "password"
                   onChange={handleInput}/>
                </div>
                <div className="form-group ">
              <button  type="submit" className=" btn alignCentre mt-3 botton">Sign in</button>
            
              </div>
              </form>
              <div className="row mt-3">
              <Link to='/getotp' className="col-lg-12 col-md-12 col-sm-12 forget_pass">Forgot Password?</Link>
            
              </div>
             
                
             </div>
          </div>
        </div>
     </div>
     </div>
   </div>
 </div>
     
    </>
  )
}
