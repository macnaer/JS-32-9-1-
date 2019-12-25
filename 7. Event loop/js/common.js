var btn = document.querySelector(".btn");
var h1 = document.querySelector(".h1");

function ButtonHandler() {
  h1.textContent = "New Header";
}

btn.addEventListener("click", ButtonHandler);

h1.addEventListener("mouseenter", function() {
  console.log("Mouse enter");
  console.log(this);
  this.style.color = "red";
});

h1.addEventListener("mouseleave", function() {
  console.log("Mouse leave");
  this.style.color = "black";
});

var div1 = document.querySelector(".div1");
var div2 = document.querySelector(".div2");
var div3 = document.querySelector(".div3");

div1.addEventListener(
  "click",
  function() {
    event.stopPropagation();
    console.log("DIV 1");
    this.style.background = "green";
  },
  false // false Bubbling (Default) true Capture
);

div2.addEventListener(
  "click",
  function() {
    event.stopPropagation();
    console.log("DIV 2");
    this.style.background = "green";
  },
  false
);

div3.addEventListener(
  "click",
  function() {
    event.stopPropagation();
    console.log("DIV 3");
    this.style.background = "green";
  },
  false
);

var input = document.querySelector(".input");
input.addEventListener("keypress", function() {
  if (event.keyCode < 65 || event.keyCode > 90) {
    event.preventDefault();
  }
  console.log(event.keyCode);
});

///////////////The Event loop////////////////
// 1 Main thread and Parallel thread

setTimeout(function() {
  console.log("Timeout");
}, 5000);

// 2 Task Queues

//loop

// setTimeout(function() {
//   console.log("Timeout 1");
// }, 2000);

// setTimeout(function() {
//   console.log("Timeout 2");
// }, 2000);

// Picture1;

// Render steps
//1. Style,
// 2. Layout,
//    3. Pixel data.
// Picture1  The loop  or https://gfycat.com/ru/tastyuntidyinexpectatumpleco-science-technology-web-development

var button = document.querySelector(".eventBtn");
button.addEventListener("click", function(event) {
  while (true);
});

// Picture2

// 3. Call Stack
// Picture 3

// function one() {
//   throw new error("Error");
// }
// function two() {
//   one();
// }

// function three() {
//   two();
// }

// three();

// Stack Overflow

// Stack Приблизно 16 000 викликів

var i = 0;
function foo() {
  // console.log(i);
  i++;
  foo();
}
foo();
