import React from 'react'
import { useEffect,useState } from 'react';

const Image = (props) => {
    const [animation, setanimation] = useState(['Stand 3s linear','Gray 5.5s linear','interference 2s linear','Bright 1s infinite','Calm 10s infinite']);
   const [resize, setresize] = useState({
    heigth:window.innerHeight,
    width:window.innerWidth
   });
   const [reset, setreset] = useState(0);
   const pic=props.img.slice(2);
    const [box, setbox] = useState({
        width:'80px',
        height:'80px',
        opacity:'1',
        animation:'none',
        transform:'translateZ(20px)',
        backgroundColor:'transparent',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:Math.floor(Math.random() * ((window.innerHeight - 280) - 1 + 1)) + 1,
        left:Math.floor(Math.random() * ((window.innerWidth - 80) - 10 + 1)) + 10,
        opacity:1,
        transition:'all 1s',
        zIndex:Math.floor(Math.random() * 20)
    });
 
    const [load, setload] = useState({
        width:'97%',
        height:'97%'
    });
    
   
    //console.log()

    useEffect(() => {
        setTimeout(() => {
            const UpdateSize = () =>{
                setresize({
                    width:window.innerWidth,
                    heigth:window.innerHeight
                  })
            }
            window.addEventListener('resize',UpdateSize);
        }, 2000);
       
        const top= Math.floor(Math.random() * ((resize.heigth - 280) - 1 + 1)) + 1;
        const left= Math.floor(Math.random() * ((resize.width - 80) - 10 + 1)) + 10;
      setbox({
        ...box,
        top:top,
        left:left
      })
    
    }, [resize]);
    useEffect(() => {
       const Animation= setInterval(() => {
          setbox({...box,
              animation:animation[Math.floor(Math.random() * 3)],
              zIndex:Math.floor(Math.random() * 20)
          })
        
        },Math.random() * (10000 - 5000) + 5000);
      
      }, []);

  return (
    <div>
      <div style={box}><img  style={load}  src={require(`../images/${pic}`)} alt="hola" /></div>

    </div>
  )
}

export default Image
