import React, { useEffect, useState, useRef, useMemo } from "react";
import "./App.css";
import Player from "./Player";
import Bullet from "./Bullet";
import { addKeyListener, removeKeyListener } from "../logic/keyListeners";
import {
  bulletDy,
  enemyDy,
  playerDx,
  bulletWidth,
  bulletHeight,
  enemyWidth,
  enemyHeight
} from "../logic/constants";
import { checkCollision } from "../logic/utils";
import Enemy from "./Enemy";

const App = () => {
  const [playerX, setplayerX] = useState(100);
  const [bulletX, setBulletX] = useState(100);
  const [bulletY, setBulletY] = useState(100);
  const [enemyX, setEnemyX] = useState(100);
  const [enemyY, setEnemyY] = useState(0);
  const [bulletFired, setBulletFired] = useState(false);

  const playerY = window.innerHeight - 50;
  const playerXRef = useRef();

  useEffect(() => {
    playerXRef.current = playerX;
  }, [playerX]);

  const handleBullet = () => {
    if (bulletFired) {
      if (bulletY > 0) {
        setBulletY(bulletY - bulletDy);
      } else {
        setBulletFired(false);
        console.log(`bulletY : ${bulletY} `);
        setBulletY(playerY - 20);
        setBulletX(playerX);
      }
    } else {
      setBulletX(playerX);
    }
  };

  const handleEnemy = () => {
    setEnemyY(enemyY + enemyDy);
  };

  const handleShapes = () => {
    handleBullet();
    handleEnemy();
    if (
      checkCollision(
        bulletX,
        bulletY,
        bulletWidth,
        bulletHeight,
        enemyX,
        enemyY,
        enemyWidth,
        enemyHeight
      )
    ) {
      console.log("colision");
    }
  };

  useEffect(() => {
    window.requestAnimationFrame(handleShapes);
  });

  const keydownListener = evt => {
    console.log(`key press ${evt.key}`);
    switch (evt.key) {
      case "ArrowRight":
        setplayerX(playerXRef.current + playerDx);
        break;

      case "ArrowLeft":
        setplayerX(playerXRef.current - playerDx);
        break;

      case "Enter":
        setBulletFired(true);
        break;

      default: //do nothing
    }
  };

  useEffect(() => {
    addKeyListener(keydownListener);

    return () => removeKeyListener(keydownListener);
  }, []); // done once on mount

  const enemyElement = useMemo(() => <Enemy x={enemyX} y={enemyY} />, [
    enemyX,
    enemyY
  ]);

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
      {enemyElement}
      {bulletElement}
      {playerElement}
    </div>
  );
};

export default App;
