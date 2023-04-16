import React from 'react'

export default function Paper() {
  return (
    <>
       <h3>Get papers from here!</h3> 
       <div className="row">
        <img src={Img} className="col-lg-4 col-md-5 col-sm-12"/>
       
       <div className="card p-3 col-lg-6 col-md-5 col-sm-12">
       <ul class="list-group list-group-flush">
         <li class="list-group-item "><span><img src={megaphone} className="col-1 spacing_list"/><text className="spacing_list">MST Papers</text>     <Link className="spacing_list" to={`/noticedetails?tag=internship`}>Click here</Link></span></li>
         <li class="list-group-item"><span><img src={megaphone} className="col-1 spacing_list"/><text className="spacing_list">College Notification </text>     <Link className="spacing_list"  to={`/noticedetails?tag=college`}>Click here</Link></span></li>
         <li class="list-group-item"><span><img src={megaphone} className="col-1 spacing_list"/><text className="spacing_list">Community Notification </text>     <Link className="spacing_list" to={`/noticedetails?tag=community`}>Click here</Link></span></li>
         <li class="list-group-item"><span><img src={megaphone} className="col-1 spacing_list"/><text className="spacing_list">Mu study zone Notification </text>     <Link className="spacing_list" to={`/noticedetails?tag=mustudyzone`}>Click here</Link></span></li>
         
       </ul>
       </div>
       </div>

    </>
  )
}
