import React,{ useState } from 'react'

export default function Testcode() {
 
  const [formData, setFormData] = useState({
    subject: '',
    semester: '',
    program: '',
    link: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
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
          value={formData.subject}
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
          value={formData.semester}
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
          value={formData.program}
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
          value={formData.link}
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
  