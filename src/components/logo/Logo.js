import React from 'react';
// import Tilt from 'react-tilt';
import brain from './brain.png';
import './logo.css';


const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <div className="Tilt br2 shadow-2" options={{ max : 65 }} style={{ height: 150, width: 150 }} >
                <div className='Tilt-inner pa3'>
                    <img src={brain} alt='brain logo'/>
                </div>
            </div>

        </div>
       
    )
}

export default Logo;