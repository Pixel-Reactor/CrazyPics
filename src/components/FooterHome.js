import React from 'react'
import { useState } from 'react';
const FooterHome = (props) => {
    const [rotate, setrotate] = useState(0);
    const [rotateX, setrotateX] = useState(0);
    const [click, setclick] = useState(0);
    const [AppStyle, setAppStyle] = useState({
      backgroundColor: 'black',
      width: '100%',
      height: '100%',
      transition: 'all 1s',
      overflow: 'hidden',
      transform: ``
    });
    
    const HandlePerspective = () => {
     
      const width= window.innerWidth
   

      if(width <= '900'){
        setrotateX(rotateX + 180);
        setrotate(rotate + 180);
        props.setperspective(({ ...AppStyle, transform: `rotateY(${rotate}deg) rotateX(${rotateX}deg)`, width: '100%', height: '100%' }))
        
      }else{
        setrotate(rotate + 90);
        setrotateX(rotateX + 180);
        props.setperspective(({ ...AppStyle, transform: `rotate(${rotate}deg) rotateX(${rotateX}deg)`, width: '100%', height: '100%' }))
      }
     

    }
  return (
    <footer>
          <div className='cp' onClick={HandlePerspective}><p> change <br /> perspective</p></div>
        </footer>
  )
}

export default FooterHome
