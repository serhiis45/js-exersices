const GOAL_HEIGHT = 5;
const UP = 3;
const DOWN = 2;

let daysCounter = 1;
for(let startHeight = 0; startHeight < GOAL_HEIGHT; daysCounter++) {
  startHeight += UP;
  if (startHeight >= GOAL_HEIGHT) {
    console.log(`${daysCounter} days`);
    break;
  }
  startHeight -= DOWN;
}