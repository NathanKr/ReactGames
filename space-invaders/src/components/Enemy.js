import React from "react";
import "./Enemy.css";
import {enemyWidth , enemyHeight} from "../logic/constants";

const Enemy = ({ x, y }) => {
  const style = {
    left: x,
    top: y,
    width: `${enemyWidth}px`,
    height: `${enemyHeight}px`
                         
  };

  return (
    <div style={style} className="Enemy">
      Enemy
    </div>
  );
};

export default Enemy;
