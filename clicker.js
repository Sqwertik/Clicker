let count = 0;
let clicks = 0;
let lastTime = Date.now();

    function addClick() {
      count++;
      clicks++;
      document.getElementById("count").innerText = 'Clicks: ' + count;
    }


    setInterval(() => {
  let now = Date.now();
  let delta = (now - lastTime) / 1000; // время в секундах
  let cps = (clicks / delta).toFixed(2); // клики в секунду
  document.getElementById("cps").innerText = cps + " CPS";

  // обнуляем счётчик для нового промежутка
  clicks = 0;
  lastTime = now;
  }, 1000);