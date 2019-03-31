import React from "react";
import "./Bullet.css";

const Bullet = ({ x, y }) => {
  const style = { left: x, top: y };

  return (
    <div style={style} className="Bullet">
      Bullet
    </div>
  );
};

export default Bullet;
