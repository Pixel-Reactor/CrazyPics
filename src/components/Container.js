import React from 'react'
import { useState, useEffect } from 'react'
import Image from './Image';

const Container = () => {
    const [imgs, setimgs] = useState([]);
    const [reset, setreset] = useState(0);
    const images = require.context('../images');
    const [link, setlink] = useState({
        '1.jpg':'151',
        '2.jpg':'148',
        '3.jpg':'76',
        '4.jpg':'1',
        '5.jpg':'6',
        '6.jpg':'101',
        '7.jpg':'19',
        '8.jpg':'26',
        '9.jpg':'45',
        '10.jpg':'50',
        '11.jpg':'72',
        '12.jpg':'73',
        '13.jpg':'79',
        '14.jpg':'80',
        '15.jpg':'86',
        '16.jpg':'95',
        '17.jpg':'98',
        '18.jpg':'101',
        '19.jpg':'102',
        '20.jpg':'106',
        '21.jpg':'111',
        '22.jpg':'113',
        '23.jpg':'114',
        '24.jpg':'117',
        '25.jpg':'127',
        '26.jpg':'134',
        '27.jpg':'139',
        '28.jpg':'129',
    });
    
    useEffect(() => {
        setimgs(images.keys())
        const ResetInterval = () => {
            const TimeOut = setTimeout(() => {
                setreset(reset + 1);

            }, 5000);
        }
        ResetInterval();

    }, [reset]);

    const HandleRender = () => {
        return imgs?.map((image) => <Image key={image} interval={reset} link={link[image.slice(2)]} img={image} />) ?? <img width='50px' src='../CutomImgs/question-mark.jpg' />
    }
    return (
        <div className='container'>
            {HandleRender()}
            <div className='puerta'><img src={require('../CustomImgs/PUERTA.png')} /></div>
            <div className='rabbit'><img width='130px' src={require('../CustomImgs/conejo.gif')} /></div>
            <div className='rainbow'><img width='160px' src={require('../CustomImgs/METAVERSE.png')} /></div>
            <div className='market'><img width='160px' src={require('../CustomImgs/MRQUET PLACE.png')} /></div>
        </div>
    )
}


export default Container