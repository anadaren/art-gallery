import {useState} from 'react';
import "./Gallery.css";
import CloseIcon from '@mui/icons-material/Close';

import Img1 from './images/img1.png';
import Img2 from './images/img2.jpeg';
import Img3 from './images/img3.png';
import Img4 from './images/img4.png';
import Img5 from './images/img5.jpeg';
import Img6 from './images/img6.png';
import Img7 from './images/img7.png';
import Img8 from './images/img8.png';
import Img9 from './images/img9.png';
import Img10 from './images/img10.jpeg';
import Img11 from './images/img11.png';

export const Gallery = () => {
    let data = [
        {
            id: 1,
            imgSrc: Img1
        },
        {
            id: 2,
            imgSrc: Img2
        },
        {
            id: 3,
            imgSrc: Img3
        },
        {
            id: 4,
            imgSrc: Img4
        },
        {
            id: 5,
            imgSrc: Img5
        },
        {
            id: 6,
            imgSrc: Img6
        },
        {
            id: 7,
            imgSrc: Img7
        },
        {
            id: 8,
            imgSrc: Img8
        },
        {
            id: 9,
            imgSrc: Img9
        },
        {
            id: 10,
            imgSrc: Img10
        },
        {
            id: 11,
            imgSrc: Img11
        }
    ]

    // Function for isolating images on click
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc]  = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
        <>
        <div className={model ? "model open" : "model"}  onClick={() => setModel(false)}>
            <img src={tempImgSrc}/>
            <CloseIcon onClick={() => setModel(false)}/>
        </div>
        <div className="Gallery">
            {data.map((item, index) => {
                return (
                    <div className="imgs" key={index} onClick={() => getImg(item.imgSrc)}>
                        <img src={item.imgSrc}  style={{width: '100%'}}/>
                    </div>
                )
            })}
        </div>
        </>
    );
};