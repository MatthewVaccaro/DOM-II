// Your code goes here

//Event Listeners to make things more fun

//Event 1 = Click
const navSelector = document.querySelector(".nav-container");
navSelector.addEventListener("click", () => {
  navSelector.style.background = "dodgerblue";
  navSelector.style.transition = "all 3s";
});

const anchorSelect = document.querySelector("a");
anchorSelect.addEventListener("click", e => {
  e.stopPropagation();
  anchorSelect.style.color = "white";
  anchorSelect.style.transition = "all 1s";
});

// //Event 2 & 3 = Mouse Enter & Mouse Leave
const selectPhoto = document.querySelectorAll("img");
console.log(selectPhoto);

selectPhoto.forEach(passedObject => {
  passedObject.addEventListener("mouseenter", attr => {
    attr.stopPropagation();
    attr.target.style.transform = "scale(1.1)";
    attr.target.style.transition = "transform 0.6s";
  });

  passedObject.addEventListener("mouseleave", attr => {
    attr.target.style.transform = "scale(1.0)";
    attr.target.style.transition = "transform 0.6s";
  });
});

//Event 4 & 5 = Scroll

window.addEventListener("scroll", () => {
  const totalScrolled =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;

  if (scrolled === totalScrolled) {
    alert("This is the bottom!");
  }
});

const newH2ColorOnScroll = document.querySelector(".content-destination h2");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  if (scrolled > 406) {
    return (newH2ColorOnScroll.style.color = "red");
  }
});
//Event 6 & 7 = Mouse Down & Mouse Up

const pushImageAway = document.querySelector(".img-fluid");
pushImageAway.style.position = "relative";

var run;
var intervalIncrease = () => {
  clearInterval(run);
  run = window.setInterval(intervalIncreaseCB, 5);
};

var increaseAmount = 0;
function intervalIncreaseCB() {
  pushImageAway.style.left = `${increaseAmount}px`;
  increaseAmount++;
}

const intervalReverseCB = () => {
  if (increaseAmount > 0) {
    pushImageAway.style.left = `${increaseAmount}px`;
    increaseAmount--;
  } else {
    clearInterval(run);
  }
};

const stopInterval = () => {
  clearInterval(run);
  run = window.setInterval(intervalReverseCB, 5);
};

pushImageAway.addEventListener("mousedown", intervalIncrease);
document.addEventListener("mouseup", stopInterval);

//Event 8 = Double Click

const buttonSelect = document.querySelector(".btn");
buttonSelect.style.background = "black";
buttonSelect.style.color = "white";

const changeColor = () => {
  buttonSelect.style.background = "orange";
  buttonSelect.style.transition = "all 3s";
};

buttonSelect.addEventListener("dblclick", changeColor);

//Event 9 = Keydown

document.addEventListener("keydown", showKeyPressed);

function showKeyPressed(keypass) {
  console.log(keypass);
}

//Event 10 = Key Up

document.addEventListener("keyup", showKeyLetGo);

function showKeyLetGo(keypass) {
  console.log(keypass.code);
}
