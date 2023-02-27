
import './App.css';
import Container from './components/Container';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Header from './components/Header';
import FooterHome from './components/FooterHome';
import NotFound from './components/NotFound';

function App() {
  const [rotate, setrotate] = useState(0);
  const [rotateX, setrotateX] = useState(0);
  const [AppStyle, setAppStyle] = useState({
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    transition: 'all 1s',
    overflow: 'hidden',
    transform: ``
  });
  const HandlePerspective = () => {
    setrotate(rotate + 90);
    setrotateX(rotateX + 180);
    setAppStyle({ ...AppStyle, transform: `rotate(${rotate + 90}deg) rotateX(${rotateX + 180}deg)`, width: '100%', height: '100%' })
  }
  return (
    <div className='App-container'>
      <div style={AppStyle}>
        <Routes>
          <Route path='/' element={<><Header /><Container /><FooterHome setperspective={setAppStyle} /></>} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
 
       
      </div>
    </div>
  );
}

export default App;
