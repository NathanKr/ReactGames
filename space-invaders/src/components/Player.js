import React from 'react';
import './Player.css'

const Player = ({x,y}) => {
    const style = {left : x , top : y }
    return (
        <div style = {style} className='Player'>
            Player
        </div>
    );
};

export default Player;