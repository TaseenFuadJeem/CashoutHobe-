import { Route, Routes } from 'react-router-dom';
import './App.css';
import Bkash from './Components/Pages/Bkash';
import Home from './Components/Pages/Home';
import Nagad from './Components/Pages/Nagad';
import Rocket from './Components/Pages/Rocket';
import Upay from './Components/Pages/Upay';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/bkash' element={<Bkash />} />
      <Route path='/nagad' element={<Nagad />} />
      <Route path='/rocket' element={<Rocket />} />
      <Route path='/upay' element={<Upay />} />
    </Routes>
  );
}

export default App;
