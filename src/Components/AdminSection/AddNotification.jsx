import React, {useState} from 'react'
import axios from 'axios';
import API_URL from '../../_helpers/Constants';

export default function AddNotification() {

    const [formNotificationData, setFormNotificationData] = useState({
        date: '',
        title: '',
        description: '',
        contact: '',
        link: ''
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formNotificationData);
        let Notification_data =  { 
            date : formNotificationData.date,
            title : formNotificationData.title,
            description : formNotificationData.description,
            contact : formNotificationData.contact,
            link : formNotificationData.link
        }
        axios.post(`${API_URL}addcommunitynotification`, 
        Notification_data
        )
        .then(response => {
        //   (response.data);
          window.alert("Notification added successfully!")
        })
        .catch(error => {
          window.alert(error);
        });
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormNotificationData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
  return (
    <div className="container mt-5">
     <h3 className='alignCentre'>Add community Notification</h3>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="date" className="p-2">Date (dd-mm-yyyy):</label>
        <input
          type="text"
          className="form-control"
          id="date"
          name="date"
          value={formNotificationData.date}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="title" className="p-2">Title:</label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={formNotificationData.title}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description" className="p-2">Description:</label>
        <input
          type="text"
          className="form-control"
          id="description"
          name="description"
          value={formNotificationData.description}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="contact" className="p-2">Contact:</label>
        <input
          type="text"
          className="form-control"
          id="contact"
          name="contact"
          value={formNotificationData.contact}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="link" className="p-2">Link:</label>
        <input
          type="text"
          className="form-control"
          id="link"
          name="link"
          value={formNotificationData.link}
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
