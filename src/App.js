import logo from './logo.svg';
import './App.css';
import ReactGa from 'react-ga';
import { Route, Routes } from 'react-router-dom';
import Landingpage from './Pages/Landingpage';
import Noticepage from './Pages/Noticepage';
import Authpage from './Pages/Authpage';
import Articlepage from './Pages/Articlepage';
import Login from '../src/Components/Authentication/Login'
import Testcode from '../src/Components/Landingpage/Testcode';
import Admin from './Pages/Admin';
import AdminLogin from './Pages/AdminLogin';
import Noticedetails from '../src/Components/Notice/NotificationDetails'
import {QueryClient , QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();
const TRACKING_ID = 'UA-271149535-2';
ReactGa.initialize(TRACKING_ID)

function App() {
  
  return (
    <div className="App">
         <QueryClientProvider client={queryClient}>
          
        <main>
        <Routes>
          <Route path='/' element={<Landingpage/>} />
          <Route path='/landingpage' element={<Landingpage/>} />
          <Route path='/Notice' element={<Noticepage/>} />
          <Route path='/Signup' element={<Authpage/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/article' element={<Articlepage/>} />
          <Route path='/noticedetails' element ={<Noticedetails/>}/>
          <Route path='/admin' element={<AdminLogin/>} />
          <Route path ='/adminDadhboard12121212343434343434455545fkngijtnbgtbgrnvijgbibijnfdvjn' element={<Admin/>} />
          <Route path='/test' element={<Testcode/>} />
        </Routes>
      </main>
      </QueryClientProvider>
    </div>
  );
}

export default App;
