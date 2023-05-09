function countDown(num) {
  const intervalId = setInterval(() => {
    console.log(num);
    num--;
    if (num === 0) {
      console.log('DONE!');
      clearInterval(intervalId);
    }
  }, 1000);
}


function randomGame() {
  let counter = 0;
  const intervalId = setInterval(() => {
    const randomNum = Math.random();
    counter++;
    console.log(randomNum);
    if (randomNum > 0.75) {
      clearInterval(intervalId);
      console.log(`Number of tries: ${counter}`);
    }
  }, 1000);
}
