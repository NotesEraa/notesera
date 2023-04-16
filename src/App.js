import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landingpage from './Pages/Landingpage';
import Noticepage from './Pages/Noticepage';
import Authpage from './Pages/Authpage';
import Articlepage from './Pages/Articlepage';
import Login from '../src/Components/Authentication/Login'
import ItemListButton from './Components/testCode/ItemListButton';
import Noticedetails from '../src/Components/Notice/NotificationDetails'
import {QueryClient , QueryClientProvider } from "@tanstack/react-query";


function App() {
  const queryClient = new QueryClient();

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
          <Route path='/test' element={<ItemListButton/>} />
        </Routes>
      </main>
      </QueryClientProvider>
    </div>
  );
}

export default App;
