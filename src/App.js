import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import CrisisAversion from './Components/CrisisAversion';
import Home from './Components/Home';
import Disease from './Components/Disease';
import Pests from './Components/Pests';
import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/crisis-aversion" element={<CrisisAversion/>}/>
    <Route path="/pests" element={<Pests/>}/>
    <Route path="/diseases" element={<Disease/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;