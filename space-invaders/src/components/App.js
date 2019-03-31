import React, { useEffect, useState, useRef, useMemo } from "react";
import "./App.css";
import Player from "./Player";
import Bullet from "./Bullet";
import { addKeyListener, removeKeyListener } from "../logic/keyListeners";
import constants from '../logic/constants'

const App = () => {
  const [playerX, setplayerX] = useState(100);
  const [bulletX, setBulletX] = useState(100);
  const [bulletY, setBulletY] = useState(100);
  const [bulletFired, setBulletFired] = useState(false);
  const [currentTimeMs , setCurrentTimeMs]  = useState(0);

  const playerY = window.innerHeight - 50;
  const playerXRef = useRef();

  useEffect(() => {
    playerXRef.current = playerX;
  },[playerX])

  
  useEffect(() => {
    if (bulletFired) {
      if (bulletY > 0) {
        setBulletY(bulletY - 2);
      } else {
        setBulletFired(false);
        setBulletY(playerY - 20);
        setBulletX(playerX);
      }
    }
  },[currentTimeMs]);
  

  const keydownListener = evt => {
    console.log(`key press ${evt.key}`);
    switch (evt.key) {
      case "ArrowRight":
        setplayerX(playerXRef.current + constants.playerDx);
        break;

      case "ArrowLeft":
        setplayerX(playerXRef.current - constants.playerDx);
        break;

      case "Enter":
        setBulletFired(true);
        break;

      default: //do nothing
    }
  };

  useEffect(() => {
    addKeyListener(keydownListener);
    window.setInterval(() => setCurrentTimeMs(Date.now()),constants.ballDtMs)

    return () => removeKeyListener(keydownListener);
  }, []); // done once on mount

  
  const bulletElement = useMemo(() => <Bullet x={bulletX} y={bulletY} />, [
    bulletX,
    bulletY
  ]);
  const playerElement = useMemo(() => <Player x={playerX} y={playerY} />, [
    playerX,
    playerY
  ]);

  return (
    <div className="App">
      {bulletElement}
      {playerElement}
    </div>
  );
};

export default App;
