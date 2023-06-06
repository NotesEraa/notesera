import React , {useState} from 'react'
import { useNavigate ,useLocation} from 'react-router-dom';
export default function AdminLogin() {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ id: '', password: '' });

    const handleLogin = (e) => {
      e.preventDefault();
  
      // Check credentials (sample check, replace with your own logic)
      if (credentials.id === 'ayush@123' && credentials.password === 'ayush123') {
        alert('Login successful');
        navigate('/adminDadhboard12121212343434343434455545fkngijtnbgtbgrnvijgbibijnfdvjn')
      } else {
        alert('Invalid credentials');
      }
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setCredentials((prevCredentials) => ({
        ...prevCredentials,
        [name]: value
      }));
    };
  return (
    <div className="container mt-5">
        <h3>Admin Login </h3>
        <div className="card p-2">
        <form onSubmit={handleLogin}>
      <div className="form-group">
        <label htmlFor="id">ID:</label>
        <input
          type="text"
          className="form-control"
          id="id"
          name="id"
          value={credentials.id}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
      </div><br></br>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
        </div>
   
  </div>
);
};

