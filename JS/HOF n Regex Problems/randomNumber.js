function randomNumberGeneratorWithDelay(delay) {
  const time = delay;

  for (let i = time / 1000; i > 0; i--)
    setTimeout(() => {
      console.log(`Time remaining : ${i} second`);
    }, time - i * 1000);

  setTimeout(() => {
    console.log("Random number : ", Math.floor(Math.random() * 100));
  }, time);
}

randomNumberGeneratorWithDelay(3000);
