
import './App.css';
import Container from './components/Container';
import { useState,useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Header from './components/Header';
import FooterHome from './components/FooterHome';
import NotFound from './components/NotFound';

function App() {
  const [rotate, setrotate] = useState(0);
  const [rotateX, setrotateX] = useState(0);
  const [reset, setreset] = useState(0);
  const [AppStyle, setAppStyle] = useState({
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    transition: 'all 1s',
    overflow: 'hidden',
    transform: `rotateY(180deg) rotateX(180deg)`
  });

  return (
   
      <div style={AppStyle}>
        <Routes>
          <Route path='/' element={<><Header /><Container resetperspective={AppStyle} /><FooterHome setperspective={setAppStyle} /></>} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
 
       
      </div>
    
  );
}

export default App;
