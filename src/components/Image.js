import React from 'react'
import { useEffect, useState } from 'react';

const Image = (props) => {
  
  const [animation] = useState(['Stand 3s linear', 'Gray 5.5s linear', 'interference 2s linear', 'Bright 2s infinite', 'Calm 10s infinite','TurnRight 1s linear forwards','TurnLeft 1s linear forwards']);
  const [stop] = useState(false);
  const [resize, setresize] = useState({heigth: window.innerHeight,width: window.innerWidth});
  const [load, setload] = useState({
    width: '97%',
    height: '97%',
    opacity:1
  });
  const pic = props.img.slice(2);
  const [box, setbox] = useState({
    width: '80px',
    height: '80px',
    animation: '',
    transform: '',
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: Math.floor(Math.random() * ((window.innerHeight - 280) - 1 + 1)) + 1,
    left: Math.floor(Math.random() * ((window.innerWidth - 80) - 10 + 1)) + 10,
    opacity: 1,
    transition: 'all 4s',
    zIndex: Math.floor(Math.random() * 20)
  });

 
const [interval, setinterval] = useState(props.interval);
const link=`https://avatares.wlbl.xyz/token/ETHEREUM:0xe17bbd7c962070bd6cbace985067c5020bc920a3:${props.link}`

useEffect(() => {
if(!stop){
  setinterval(props.interval)
}else{
  setinterval(0)
}

}, [props.interval]);


  const Move = () =>{
   const timeout= setTimeout(() => {
      const UpdateSize = () => {
        setresize({
          width: window.innerWidth,
          heigth: window.innerHeight
        })
      }
      window.addEventListener('resize', UpdateSize());
    }, 2000);

    const top = Math.floor(Math.random() * ((resize.heigth - 280) - 1 + 1)) + 1;
    const left = Math.floor(Math.random() * ((resize.width - 80) - 10 + 1)) + 10;
    setbox({
      ...box,
      top: top,
      left: left,
    })
    clearTimeout(timeout)
  }

  useEffect(() => {
   Move()
  }, [interval]);

  
  useEffect(() => {
    const n = props.img.slice(2,4)
    if(n < 10){
     setload({...load,transform:'rotateX(180deg)'})
     console.log('primeros 9')
    }else if(n < 19){
     console.log('menor de 20')
     setload({...load,transform:'rotate(90deg)'})
     }else if(n < 28){
      setload({...load,transform:'rotate(-90deg)'})
     }
    setInterval(() => {
      setbox({
        ...box,
        animation: animation[Math.floor(Math.random() * 5)],
        zIndex: Math.floor(Math.random() * 20)
      })

    }, Math.random() * (10000 - 5000) + 5000);
  }, []);

 
  return (
    <div>
      <a href={link} target="_blank"><div style={box} ><img onLoadedData={()=>setbox({...box,opacity:1})} style={load} src={require(`../images/${pic}`)} alt="img" /></div></a>

    </div>
  )
}

export default Image
