import React from 'react'
import AddNotes from '../Components/AdminSection/AddNotes';
import AddPaper from '../Components/AdminSection/AddPaper';
import AddNotification from '../Components/AdminSection/AddNotification';
export default function Admin() {
  return (
    <>
     <div className="container">
        <h3 className='alignCentre m-3'>Admin panel</h3>
        <div className="row">
            <div className="col-lg-5 p-2 col-sm-12 card m-3">
                <AddNotes/>
            </div>
            <div className="col-lg-5 p-2 col-sm-12 card m-3">
                <AddPaper/>
            </div>
            <div className="col-lg-5 p-2 col-sm-12 card m-3">
                <AddNotification/>
            </div>
        </div>
     </div>
    </>
  )
}
