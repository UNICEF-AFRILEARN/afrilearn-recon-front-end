import React, { useState } from 'react';
import FlipCard from 'flip-card-react';
import { flipData } from './flipData';
import styles from './flip.module.css';


import { MdCropRotate } from 'react-icons/md';
 
const cardStyle = {
    padding: 25,
    border: "solid 1px",
    borderRadius: 5,
    color: "#fff",
    width: 350,
    height: 450,
    overflow: 'auto'
};

const MyFlipCard = ({flipers}) => {
    const [isFlipped, setFlipped] = useState(false);
 
    const front = (
        <div onMouseLeave={() => setFlipped(x => !x)} style={{ ...cardStyle, background: "#999" }}>
            
                        <img
                            src={flipers.image}
                            alt={flipers.alt}
                            className={styles.cardimage}
                        />
                        <h3 className={styles.titlewrapper}>{flipers.name}</h3>
                        <h5>{flipers.role}</h5>
                       
        </div>
    );
 
    const back = (
        <div onMouseLeave={() => setFlipped(x => !x)} style={{ ...cardStyle, background: "#444" }}>
                       <p>{flipers.summary}</p> 
        </div>
    );
 
    return (
        <div style={{padding: 5, border: "none", position: "absolute"}}>
            <FlipCard isFlipped={isFlipped} front={front} back={back}/>
        </div>
    );
}

export default MyFlipCard