import React, {useState} from 'react'
import axios from 'axios';
import API_URL from '../../_helpers/Constants';

export default function AddPaper() {

    const [formPaperData, setFormPaperData] = useState({
        subject: '',
        semester: '',
        program: '',
        link: '',
        year: '',
        type: ''
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formPaperData);
        let Paper_data =  { 
            subject: formPaperData.subject,
            semester: formPaperData.semester,
            program: formPaperData.program,
            link: formPaperData.link,
            year: formPaperData.year,
            type: formPaperData.type
        }
        axios.post(`${API_URL}addpaper`, 
        Paper_data
        )
        .then(response => {
        //   (response.data);
          window.alert("Paper added successfully!")
        })
        .catch(error => {
          window.alert(error);
        });
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormPaperData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };

      
  return (
    <div className="container mt-5">
        <h3 className='alignCentre'>Add Papers</h3>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="subject" className='p-2'>Subject:</label>
        <input
          type="text"
          className="form-control"
          id="subject"
          name="subject"
          value={formPaperData.subject}
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
          value={formPaperData.semester}
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
          value={formPaperData.program}
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
          value={formPaperData.link}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="year" className='p-2'>Year:</label>
        <input
          type="text"
          className="form-control"
          id="year"
          name="year"
          value={formPaperData.year}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="type" className='p-2'>Type:</label>
        <input
          type="text"
          className="form-control"
          id="type"
          name="type"
          value={formPaperData.type}
          onChange={handleChange}
        />
      </div><br></br>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
  )
}
