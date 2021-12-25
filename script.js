const burger = document.querySelector(".hamburger");
const navbar = document.querySelector(".hidden .container");
const black = document.querySelector(".hidden");
const close = document.querySelector(".closed");
const stick = document.querySelector("nav .container");
const bar = document.querySelector("nav");
const banner = document.querySelector(".black");
burger.addEventListener("click", () => {
  navbar.classList.add("active");
  bar.classList.add("visible");
  bar.style.overflow = "visible";
  banner.classList.add("visible");
  document.body.classList.add("stopped");
});
close.addEventListener("click", () => {
  navbar.classList.toggle("scrolling");
  navbar.classList.remove("active");
  bar.classList.remove("visible");
  banner.classList.remove("visible");
  document.body.classList.remove("stopped");
  setTimeout(() => {
    bar.style.overflow = "hidden";
  }, 300);

  setInterval(() => {
    navbar.classList.remove("scrolling");
  }, 2000);
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 100) {
    stick.classList.add("onrol");
  } else {
    stick.classList.remove("onrol");
  }
});
