import React from 'react'
import '../../Styles/Landingpage/NotesSearch.css';
import { useState } from 'react';
import {Link } from 'react-router-dom';

import { 
  useQuery,
  useMutation,
  useQueryClient } from '@tanstack/react-query';

export default function NotesSearch() {
  const queryClient = useQueryClient();

  const tempdata = [
    {"id":1, "name":"stats" , "description":"5 little mokey on the tree" , "link":"www.google.com"},
    {"id":2, "name":"stats" , "description":"5 little mokey on the tree" , "link":"www.google.com"},
    {"id":3, "name":"stats" , "description":"5 little mokey on the tree" , "link":"www.google.com"},
    {"id":4, "name":"stats" , "description":"5 little mokey on the tree" , "link":"www.google.com"},
    {"id":5, "name":"stats" , "description":"5 little mokey on the tree" , "link":"www.google.com"}
  ]

  return (
    <>
      <h3 className="alignCentre">Search your Notes here</h3>
      <div className="row">
        <div className="card search_notes_form m-2 col-lg-4 col-md-5 col-sm-12">
        <form>
           <div class="form-group row">
          
           <h5>Programme name</h5>
           <select className="btn started_button dropdown-toggle col-6" id="program name">
        <option className="dropdown-item" value="red">B.tech</option>
        <option className="dropdown-item" value="green">civil</option>
        <option className="dropdown-item" value="blue">Blue</option>
      </select>

           <h5>Subject name</h5>
           <select className="btn started_button dropdown-toggle col-6" id="subject name">
        <option className="dropdown-item" value="red">Maths</option>
        <option className="dropdown-item" value="green">O.S</option>
        <option className="dropdown-item" value="blue">Java</option>
      </select>

           <h5>semester name</h5>
           <select className="btn started_button dropdown-toggle col-6" id="subject name">
        <option className="dropdown-item" value="red">first</option>
        <option className="dropdown-item" value="green">Second</option>
        <option className="dropdown-item" value="blue">third</option>
      </select>
           <div>
     
    </div>
           <fieldset class="form-group">
              <div class="row">
                <h5 class="col-form-label pt-0">Do you want previos year paper?</h5>
                <div >
                  <div class="form-check">
                    <input class="form-check-input" type="radio"
                     name="gridRadios" id="gridRadios1" 
                     value="MST" checked />
                    <label class="form-check-label" for="gridRadios1">
                      MST
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio"
                     name="gridRadios" id="gridRadios2" 
                     value="End sem" />
                    <label class="form-check-label" for="gridRadios2">
                      End sem
                    </label>
                  </div>
                  <div class="form-check disabled">
                    <input class="form-check-input" type="radio"
                     name="gridRadios" id="gridRadios3" 
                     value="No"  />
                    <label class="form-check-label" for="gridRadios3">
                       No
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
            </div>
        <button type="submit" className="btn started_button">Submit</button>
        </form>
        </div>
        <div className="card m-2 col-lg-7 col-md-7 col-sm-12">
       {
          tempdata.map((items,key)=>{
                return( <>
                     <div className="p-3 material_card_list">
                      <div className="row">
                      <h4 className="m-2 col-3">{items.name}</h4>
                      <Link className="col-4 drive_link" to={items.link}>Drive Link .  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
</svg></Link>
                      </div>
                     
                      <h7 className="m-3">{items.description}</h7>
                     </div>
                </>)
          })
       } 
        </div>
      </div>
    </>
  )
}
