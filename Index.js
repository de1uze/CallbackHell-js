
let count = 10;

const interval = setInterval(() => {
  
  count--;
  console.log(count);
  if (count === 0) {
    clearInterval(interval);
    console.log("Happy Independence Day!");
  }
}, 1000);