import { Route, Routes } from 'react-router-dom';
import './App.css';
import Collections from './components/pages/Collections';
import Home from './components/pages/Home';
import MarketPlace from './components/pages/MarketPlace';
import NavBar from './components/NavBar';

function App() {

  window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
       ('window-scroll', window.scrollY > 0)
  });

  return (
    <>
      <NavBar />
      <Routes>
      
        <Route path='/' element={<Home />} />
        <Route path='/marketplace' element={<MarketPlace />} />
        <Route path='/collections' element={<Collections />} />
      
      </Routes>
      
      
    </>
  );
}

export default App;