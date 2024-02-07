const progress = document.querySelector(".progress");
const btn_prev = document.querySelector(".prev");
const btn_next = document.querySelector(".next");
const circle = document.querySelectorAll(".circle");
let currentActive = 1;

btn_next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circle.length) {
    currentActive = circle.length;
  }
  update();
});

function update() {
  circle.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
    if(idx>0){
        btn_prev.
    }
  });
}
