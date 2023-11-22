import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route Path='/home' element={<Home/>}></Route>
    <Route path='/contact'element={<Contact/>}></Route>
    </Routes>

    {/* <Home /> */}


    
    </>
  );
}

export default App;
