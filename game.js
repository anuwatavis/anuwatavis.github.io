window.onload = pageLoad;

function pageLoad() {
  var startButton = document.getElementById("start");
  startButton.onclick = startGame;
}

function startGame() {
  alert("Ready");
  addBox();
  timeStart();
}

function timeStart() {
  var TIMER_TICK = 1000;
  var timer = null;
  var min = 0.5; // 0.5 minute
  var second = min * 60;
  var x = document.getElementById("clock");
  timer = second;
  x.innerHTML = timer;

  function timeCount() {
    var timecount = setInterval(() => {
      timer = timer - 1;
      x.innerHTML = timer;
      console.log(timer);
      var allbox = document.querySelectorAll("#squares-layer div");
      //win
      if (timer !== 0 && allbox.length === 0) {
        alert("ชนะจ้า");
        x.innerHTML = second;
        clearInterval(timecount);
      }
      if (timer === 0) {
        clearInterval(timecount);
        alert("เสียใจด้วย");
        clearScreen();
        x.innerHTML = second;
      }
    }, TIMER_TICK);
  }
  timeCount();
}

function addBox() {
  var numOfBox = parseInt(document.getElementById("numbox").value);
  var numbox = numOfBox;
  var squaresLayer = document.getElementById("squares-layer");
  var colorDrop = document.getElementById("color").value;
  for (var i = 0; i < numbox; i++) {
    var tempbox = document.createElement("div");
    tempbox.className = "square";
    tempbox.id = "box" + i;
    tempbox.style.left = Math.random() * (500 - 25) + "px";
    tempbox.style.top = Math.random() * (500 - 25) + "px";
    tempbox.style.borderColor = colorDrop;
    //add element to HTML node
    squaresLayer.appendChild(tempbox);
    bindBox(tempbox);
    //bindBox(tempbox);
  }
}

function bindBox(box) {
  //เมื่อกดแล้ว กล่องจะหายไป
  box.onclick = function() {
    box.parentNode.removeChild(box);
  };
}

function clearScreen() {
  var allbox = document.querySelectorAll("#squares-layer div");
  //delete all  squares
  for (var i = 0; i < allbox.length; i++) {
    allbox[i].parentNode.removeChild(allbox[i]);
  }
}
