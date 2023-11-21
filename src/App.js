import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/NavBar';
import { Route } from 'react-router';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    <Navbar/>
    <Route path='/' element={<Home/>}></Route>
    <Route Path='/home' element={<Home/>}></Route>
    <Route path='/contact'element={<Contact/>}></Route>
    <Home></Home>
    </>
  );
}

export default App;
