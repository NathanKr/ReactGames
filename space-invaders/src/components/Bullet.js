import React from "react";
import "./Bullet.css";
import { bulletWidth, bulletHeight } from "../logic/constants";

const Bullet = ({ x, y }) => {
  const style = {
    left: x,
    top: y,
    width: `${bulletWidth}px`,
    height: `${bulletHeight}px`
  };

  return (
    <div style={style} className="Bullet">
      Bullet
    </div>
  );
};

export default Bullet;
