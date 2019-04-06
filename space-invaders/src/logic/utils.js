/*
    x,y is top left

*/

const getRect = (x, y, width, height) => {
  return { left: x, right: x + width, top: y, bottom: y + height };
};
export const checkCollision = (
    bulletX,
    bulletY,
    bulletWidth,
    bulletHeight,
    enemyX,
    enemyY,
    enemyWidth,
    enemyHeight
) => {
  const bullet = getRect(bulletX, bulletY, bulletWidth, bulletHeight);
  const enemy = getRect(enemyX, enemyY, enemyWidth, enemyHeight);

  const overlap = !(
    bullet.right < enemy.left ||
    bullet.left > enemy.right ||
    bullet.bottom < enemy.top ||
    bullet.top > enemy.bottom
  );

  return overlap;
};
