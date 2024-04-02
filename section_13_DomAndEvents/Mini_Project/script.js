// <-------------- selecting Element---------->
/*
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const head = document.querySelector(".header");
console.log(head);

//  give nodelist  its not change when Dom is modify
const allSections = document.querySelectorAll(".section");
console.log(allSections);

// console.log(document.getElementById("section-1"))

//  give HTMLCollection  modify when Dom is change its modify automatic
const allButton = document.getElementsByTagName("button");
console.log(allButton);

console.log(document.getElementsByClassName("btn"));

//  creatng and inserting element
// insertAdjacentHTML

const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = "we are improving functionality";
message.innerHTML = `we are improving functionality<button class="btn btn--close-cookie">Get it!</button>`;

// head.prepend(message)
head.append(message);

// head.before(message)
// head.after(message)
// head.append(message.cloneNode(true))

document.querySelector(".btn--close-cookie").addEventListener("click", () => {
  message.remove();
});
*/

//    lecture 188 style
/*
message.style.backgroundColor = "#222";
message.style.width = "120%";

//    get the inline css
//  this only used for accessing the inline css
console.log(message.style.backgroundColor);
console.log(message.style.width);

console.log(message.style.height);

//    to get the css they have present in css file
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

document.documentElement.style.setProperty("--color-primary", "green");

//    Attributes
const logo = document.querySelector(".nav__logo");
console.log(logo.src);
console.log(logo.alt);
console.log(logo.className);
logo.alt = "beautiful-logo";
console.log(logo.designer);
console.log(logo.getAttribute("designer"));
console.log(logo.alt);
logo.setAttribute("company", "bankist");

//  data attribute

console.log(logo.dataset.versionNumber);

console.log(logo.src);
// relative address
console.log(logo.getAttribute("src"))


//  classes
logo.classList.add("new-class")
logo.classList.remove("new-class")
logo.classList.toggle("new-class")
logo.classList.contains("new-class")

*/

// <----------------------tut189----------->
/*

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", (e) => {

  // old

  // const s1coords = section.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // // console.log("current scrool (X/Y)", window.pageXOffset, pageYOffset)

  // console.log(
  //   "height/width viewport",
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );
  //  scrooling

  //  old 
  // window.scrollTo(s1coords.left, s1coords.top);
  // window.scrollTo({
  //   left:s1coords.left,
  //   top: s1coords.top,
  //   behavior: "smooth"
  // })

  // new 
  section.scrollIntoView({behavior:"smooth"})


  // <------------tut 190--------->
 
});

const h1 = document.querySelector("h1")

// h1.addEventListener("mouseenter", ()=>{
//   alert("you enter the h1 ")
// })

// const alerth1 = ()=>{
//   alert("you enter the h1 ")

//   h1.removeEventListener("mouseenter", alerth1)
// }

 const alerth1 = ()=>{
    alert("you enter the h1 ")
  }
  setTimeout(()=>{
    h1.removeEventListener("mouseenter", alerth1)
  },3000)
h1.addEventListener("mouseenter", alerth1)

*/

// <----------------------tut192----------->

/*
const RandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const RandomColor =()=> `rgb(${RandomInt(0, 225)},${RandomInt(0, 225)},${RandomInt(
  0,
  225
)})`;

document.querySelector(".nav__link").addEventListener("click", function(e){
  // this.style.backgroundColor = RandomColor();
  this.style.backgroundColor = RandomColor();
  console.log("Link-->", e.target)
})
document.querySelector(".nav__links").addEventListener("click", function(e){
  this.style.backgroundColor = RandomColor();
  console.log("container-->", e.target)

})
document.querySelector(".nav").addEventListener("click", function(e){
  this.style.backgroundColor = RandomColor();
  console.log("nav-->", e.target)

})

*/

// <----------------------tut193----------->

// document.querySelectorAll(".nav__link").forEach
// (function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     document.querySelector(id).scrollIntoView({behavior:"smooth"});
//   });
// });

// <---- Event Delegation ---------->
// 1 Add event listener to a comman parent element
// 2 determine what element orginated the event (event occure)
/*

document.querySelector(".nav__links").addEventListener("click", function(e){
  e.preventDefault();
  // check events create
  if(e.target.classList.contains("nav__link")){
    const id = e.target.getAttribute("href");
    // console.log(id)
    document.querySelector(id).scrollIntoView({behavior:"smooth"});
    // document.querySelector(id).scroolIntoView({behavior:"smooth"})
  }
})

*/

// <----------------------tut194----------->
/*

console.log("Dom traversing")

const h1 = document.querySelector("h1")

console.log(h1.querySelectorAll(".highlight"))
console.log(h1.childNodes)
console.log(h1.children)
h1.firstElementChild.style.color = "red"
h1.lastElementChild.style.color = "grey"


//  going upwards : parents
console.log(h1.parentNode)
console.log(h1.parentElement)

h1.closest(".header").style.background = "lightgrey"
h1.closest("h1").style.background = "yellow"


// going sideway : sibling

console.log(h1.previousElementSibling)
console.log(h1.nextElementSibling)

//  to get All siblings
console.log(h1.parentElement.children)


*/

// <----------------------tut195----------->

/*
const tabs = document.querySelectorAll(".operations__tab")
const tabscontainer = document.querySelector(".operations__tab-container")
const tabContent = document.querySelectorAll(".operations__content ")


tabscontainer.addEventListener("click", (e)=>{
  const clicked = e.target.closest(".operations__tab")
  // console.log(clicked)

  if(!clicked) return

  //  remove active classes
  tabs.forEach((el)=> el.classList.remove("operations__tab--active"))
  tabContent.forEach((el)=>el.classList.remove("operations__content--active"))
  

  //  Active tab
 clicked.classList.add("operation__tab--active")

  //  active Content area 
// console.log(clicked.dataset.tab)
 document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add("operations__content--active")


})
*/
// <-------------196------------->

//  menu fade animation
/*

const nav = document.querySelector(".nav");

const handlefade = (e, opacity) => {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");
    siblings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = opacity;
      }
    });
    logo.style.opacity = opacity;
  }
};
nav.addEventListener("mouseover", (e) => {
  handlefade(e, 0.5);
});

nav.addEventListener("mouseout", (e) => {
  handlefade(e, 1);
});
*/

// <-----197--------->
// sticky navigation

const nav = document.querySelector(".nav");
const section1 = document.querySelector("#section--1");

// const initialCoords = document.querySelector("#section--1").getBoundingClientRect()
// console.log(initialCoords.top)
// window.addEventListener("scroll", ()=>{
//  if(window.scrollY >=initialCoords.top ) nav.classList.add("sticky")
//  else nav.classList.remove("sticky")
// })

// const obsCallback=(entries, observer)=>{
//    entries.forEach((entry)=> console.log(entry))
// }
// const obsOption = {
//    root: null,
//    threshold: 0.4
// }

// const observer = new IntersectionObserver(obsCallback, obsOption);
// observer.observe(section1)

// <------------------197------------------->

// const header = document.querySelector(".header");
// const navheight = nav.getBoundingClientRect().height;

// const stickyNav = function (entries) {
//   const [entry] = entries;
//   if (!entry.isIntersecting) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// };
// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `${-navheight}px`,
// });

// headerObserver.observe(header);

// <------------------198------------------->

/*
const allsection = document.querySelectorAll(".section");

const revealsection = function(entries, obserevr){
  const [entry] = entries;
  // console.log(entry)
  if(!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden")
  // obserevr.unobserver(entry.target)
  obserevr.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealsection, {
  root: null,
  threshold: 0.15,
});

allsection.forEach((el)=>{ 
  sectionObserver.observe(el)
  el.classList.add("section--hidden")
})
*/

// <--------------200---------->
// lazy loading img

/*
const Imgtarget = document.querySelectorAll("img[data-src]")

const loadImg = function(entries, obserevr){
  const [entry] = entries
  // console.log(entry)

  if(!entry.isIntersecting) return;

  // replace src to data-src
  entry.target.src = entry.target.dataset.src

entry.target.addEventListener("load", ()=>{
  entry.target.classList.remove("lazy-img")
})

obserevr.unobserve(entry.target)

}


const imgObserver  = new IntersectionObserver(loadImg, {
  root: null,
  threshold:0,
  // rootMargin: 
})

Imgtarget.forEach((img)=> imgObserver.observe(img))
*/

// <-------------201------------>

//  silder

const slide = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const btnRight = document.querySelector(".slider__btn--right");
const btnLeft = document.querySelector(".slider__btn--left");
const dotContainer = document.querySelector(".dots");

// slider.style.transform = `scale(0.2)`;
// slider.style.overflow = `visible`;

//  Create Dots
const CreateDots = function () {
  slide.forEach((el, i) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide=${i}></button>`
    );
  });
};
CreateDots();

const activeDot = function (slide) {
  document
    .querySelectorAll("dots__dot")
    .forEach(dot => dot.classList.remove("dots__dot--active"));
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};
activeDot(0)
const goToSlide = function (currSlide) {
  slide.forEach((el, i) => {
    el.style.transform = `translateX(${100 * (i - currSlide)}%)`;
  });
};
goToSlide(0);

let currSlide = 0;
const maxslide = slide.length;

//  next slide
const NextSlide = function () {
  if (currSlide === maxslide - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }

  goToSlide(currSlide);
  activeDot(currSlide);
};
// prevSlide
const PrevSlide = function () {
  if (currSlide === 0) {
    currSlide = maxslide - 1;
  } else {
    currSlide--;
  }

  goToSlide(currSlide);
  activeDot(currSlide);
};
btnRight.addEventListener("click", NextSlide);
btnLeft.addEventListener("click", PrevSlide);

// <----- 202 --------->

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") NextSlide();
  e.key === "ArrowLeft" && PrevSlide();
});

dotContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("dots__dot")) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activeDot(slide);
  }
});
