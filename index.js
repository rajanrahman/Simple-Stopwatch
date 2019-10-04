// function Circle(radius) {
//   this.radius = radius;

//   let defaultLocation = { x: 0, y: 0 };
//   this.getDefaultLocation = function() {
//     return defaultLocation;
//   };
//   this.draw = function() {
//     console.log("draw");
//   };

//   Object.defineProperty(this, "defaultLocation", {
//     get: function() {
//       return defaultLocation;
//     },
//     set: function(value) {
//       if (!value.x || value.y) {
//         defaultLocation = value;
//       }
//     }
//   });
// }

// let circle = new Circle(3);

// let temp = { x: 2, y: 9 };
// circle.defaultLocation = temp;

// STOPWATCH!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function Stopwatch() {
  let start_time = 0;
  let duration = 0;
  let isStart = false;
  let before_time = 0;
  this.start = function() {
    if (isStart) throw new Error("Error: Stopwatch has already started.");

    let date = new Date();
    start_time = date.getTime();
    isStart = true;
    before_time = 0;
  };
  this.stop = function() {
    if (!isStart) throw new Error("Error: Stopwatch is not started.");
    isStart = false;
    before_time = duration;
  };
  this.reset = function() {
    if (!isStart) {
      duration = 0;
    }
    let date = new Date();
    start_time = date.getTime();
  };
  Object.defineProperty(this, "duration", {
    get: function() {
      if (isStart) {
        let date = new Date();
        duration = date.getTime() - start_time;
      }
      return (duration + before_time) / 1000;
    }
  });
  this.b_time = function() {
    return before_time;
  };
}

let title = document.getElementById("display");
let w = new Stopwatch();

const start_btn = () => {
  w.start();
  console.log("start");
};

const stop_btn = () => {
  w.stop();
};

const reset_btn = () => {
  w.reset();
  console.log("reset");
};

let update_time = setInterval(duration_change, 10);

function duration_change() {
  let d = w.duration;
  title.innerHTML = `${d} secs`;
}
