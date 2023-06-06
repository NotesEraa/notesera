import React,{ useState } from 'react'
import axios from 'axios';
import API_URL from '../../_helpers/Constants';

export default function AddNotes() {
 
  const [formNotesData, setFormNotesData] = useState({
    subject: '',
    semester: '',
    program: '',
    link: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formNotesData);
    let Notes_data =  { 
        subject: formNotesData.subject,
        semester: formNotesData.semester,
        program: formNotesData.program,
        link: formNotesData.link
    }
    axios.post(`${API_URL}addnotes`, 
    Notes_data
    )
    .then(response => {
    //   (response.data);
      window.alert("Notes added successfully!")
    })
    .catch(error => {
      window.alert(error);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormNotesData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  return (
    <div className="container mt-5">
    <h3 className='alignCentre'>Add Notes</h3>
    <form onSubmit={handleSubmit} >
      <div className="form-group">
        <label htmlFor="subject" className='p-2'>Subject:</label>
        <input
          type="text"
          className="form-control"
          id="subject"
          name="subject"
          value={formNotesData.subject}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="semester" className='p-2'>Semester:</label>
        <input
          type="text"
          className="form-control"
          id="semester"
          name="semester"
          value={formNotesData.semester}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="program" className='p-2'>Program:</label>
        <input
          type="text"
          className="form-control"
          id="program"
          name="program"
          value={formNotesData.program}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="link" className='p-2'>Link:</label>
        <input
          type="text"
          className="form-control"
          id="link"
          name="link"
          value={formNotesData.link}
          onChange={handleChange}
        />
      </div> <br></br>
      <button type="submit" className="p-2 btn btn-primary">
        Submit
      </button>
    </form>
  </div>
);
};
  