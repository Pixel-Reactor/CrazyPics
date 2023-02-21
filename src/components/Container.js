import React from 'react'
import { useState, useEffect } from 'react'
import Image from './Image';

const Container = () => {
    const [imgs, setimgs] = useState([]);
    const [content, setcontent] = useState({});
    const [rows, setrows] = useState();
    const [columns, setcolumns] = useState();
    const images = require.context('../images');


    useEffect(() => {
      
        setimgs(images.keys())
        
      
    }, []);
    const HandleRender = () => {
        return imgs?.map((image) => <Image key={image} img={image}  pos={{ top: '100px', left: '10px' }} />) ?? <img width='50px' src='../CutomImgs/question-mark.png' />
    }
    return (
        <div className='container'>

            {HandleRender()}

            <div className='puerta'><img src={require('../CustomImgs/PUERTA.png')} /></div>
            <div className='rabbit'><img width='130px' src={require('../CustomImgs/rabbit.png')} /></div>
        </div>
    )
}

export default Container
