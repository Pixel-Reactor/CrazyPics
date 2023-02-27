import React from 'react'
import { useState } from 'react';
const FooterHome = (props) => {
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
      props.setperspective(({ ...AppStyle, transform: `rotate(${rotate + 90}deg) rotateX(${rotateX + 180}deg)`, width: '100%', height: '100%' }))

    }
  return (
    <footer>
          <div className='cp' onClick={HandlePerspective}><p> change <br /> perspective</p></div>
        </footer>
  )
}

export default FooterHome
