import React, { useEffect, useState, useRef, useMemo } from "react";
import "./App.css";
import Player from "./Player";
import Bullet from "./Bullet";
import { addKeyListener, removeKeyListener } from "../logic/keyListeners";
import constants from "../logic/constants";

const App = () => {
  const [playerX, setplayerX] = useState(100);
  const [bulletX, setBulletX] = useState(100);
  const [bulletY, setBulletY] = useState(100);

  const playerY = window.innerHeight - 50;
  const playerXRef = useRef();
  const bulletYRef = useRef();

  useEffect(() => {
    playerXRef.current = playerX;
  }, [playerX]);

  useEffect(() => {
    bulletYRef.current = bulletY;
  }, [bulletY]);

  const onBulletFired = () => {
    if (bulletYRef.current > 0) {
      setBulletY(bulletYRef.current - 1);
      window.setTimeout(onBulletFired, constants.ballDtMs);
    } else {
      setBulletY(playerY - 20);
      setBulletX(playerX);
    }
  };

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
        window.setTimeout(onBulletFired, constants.ballDtMs);
        break;

      default: //do nothing
    }
  };

  useEffect(() => {
    addKeyListener(keydownListener);

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
