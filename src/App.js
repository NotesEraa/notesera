import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landingpage from './Pages/Landingpage';
import Noticepage from './Pages/Noticepage';
function App() {
  return (
    <div className="App">
        <main>
        <Routes>
          <Route path='/' element={<Landingpage/>} />
          <Route path='/landingpage' element={<Landingpage/>} />
          <Route path='/Notice' element={<Noticepage/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
