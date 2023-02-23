
import './App.css';
import Container from './components/Container';
import { useEffect, useState } from 'react';
function App() {
const [rotate, setrotate] = useState(0);
const [rotateX, setrotateX] = useState(0);
const [AppStyle, setAppStyle] = useState({
  backgroundColor:'black',
  width:'100%',
  height:'100vh',
  transition:'all 1s',
  overflow:'hidden',
  transform:``
});
const HandlePerspective = () =>{
  setrotate(rotate+90);
  setrotateX(rotateX+180);
  setAppStyle({...AppStyle,transform:`rotate(${rotate+90}deg) rotateX(${rotateX+180}deg)`,width:'100%',height:'100vh'})
  console.log(rotate)
}
  return (
    <div style={AppStyle}>
    <header>
    <h1>the reverse room</h1>  
    </header>
    <Container />
    <div className='light'></div>
    <footer>
      <div className='cp' onClick={HandlePerspective}><p> change <br /> perspective</p></div>
    </footer>
    </div>
  );
}

export default App;
