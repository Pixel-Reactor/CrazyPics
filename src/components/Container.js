import React from 'react'
import { useState, useEffect } from 'react'
import Image from './Image';

const Container = () => {
    const [imgs, setimgs] = useState([]);
    const [reset, setreset] = useState(0);
    const images = require.context('../images');
   useEffect(() => {
   console.log('reset')
   }, [reset]);
    useEffect(() => {
      
        setimgs(images.keys())
    const ResetInterval = () =>{
        const TimeOut = setTimeout(() => {
            setreset(reset +1)
            console.log(reset)
        }, 5000);
    }
    ResetInterval();
     
    }, [reset]);
  
    const HandleRender = () => {
        return imgs?.map((image) => <Image key={image} interval={reset}  img={image}  pos={{ top: '100px', left: '10px' }} />) ?? <img width='50px' src='../CutomImgs/question-mark.png' />
    }
    return (
        <div className='container'>

            {HandleRender()}

            <div className='puerta'><img src={require('../CustomImgs/PUERTA.png')} /></div>
            <div className='rabbit'><img width='130px' src={require('../CustomImgs/rabbit.png')} /></div>
            <div className='rainbow'><img width='160px' src={require('../CustomImgs/METAVERSE.png')} /></div>
            <div className='market'><img width='160px' src={require('../CustomImgs/MRQUET PLACE.png')} /></div>
        </div>
    )
}

export default Container
