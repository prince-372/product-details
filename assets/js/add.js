
let a = document.getElementById("nav");
let flow = document.querySelector(".flow");
let span4 = document.querySelector(".span-4");
let span5 = document.querySelector(".span-5");
let span6 = document.querySelector(".span-6");
let menu = document.querySelector("#menu");
let Home = document.querySelector(".Home");
let Kopen = document.querySelector(".Kopen");
let Interview = document.querySelector(".Interview");
let Sale = document.querySelector(".Sale");
let Van = document.querySelector(".Van");
let Sneaker = document.querySelector(".Sneaker");
let Blog = document.querySelector(".Blog");

let count = 1
let show = document.getElementById("show")
let increase = document.getElementById("increase")
let decrease = document.getElementById("decrease")
let addbutton = document. getElementById("addtocart")


increase.addEventListener("click", function(){
    count++;
    show.innerHTML = count;
});
decrease.addEventListener("click", function(){
    if(count > 1){count--;
    show.innerHTML = count;}
    
});
addbutton.addEventListener("click", function(){
     alert(count +  " Items added to your cart");
});


// tabs
function openTab(evt, Id) {
    let i = null;
    let tabContent = document.querySelectorAll(".Content");
    let tabLabel = document.querySelectorAll(".tab");
    tabContent.forEach(function (item) {
      item.style.display = 'none';
    });
    tabLabel.forEach(function (item2) {
      item2.classList.remove("tabActive");
    });
    document.getElementById(Id).style.display = "block";
    evt.currentTarget.className += " tabActive";
  }
  document.getElementById("defaultOpen").click();




menu.addEventListener("click", function () {
    if (a.classList !== document.querySelector("fix-lft")) {
        a.classList.toggle("fix-lft");
        flow.classList.toggle("flow-hidden");
        span4.classList.toggle("span-1");
        span5.classList.toggle("span-2");
        span6.classList.toggle("span-3")
    }
});

Home.addEventListener("click", function () {
    a.classList.toggle("fix-lft");
    flow.classList.remove("flow-hidden");
    span4.classList.toggle("span-1");
    span5.classList.toggle("span-2");
    span6.classList.toggle("span-3");
});
Kopen.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    span4.classList.toggle("span-1");
    span5.classList.toggle("span-2");
    span6.classList.toggle("span-3");
});
Interview.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    span4.classList.toggle("span-1");
    span5.classList.toggle("span-2");
    span6.classList.toggle("span-3");
});

Sale.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    span4.classList.toggle("span-1");
    span5.classList.toggle("span-2");
    span6.classList.toggle("span-3");
});

Van.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    span4.classList.toggle("span-1");
    span5.classList.toggle("span-2");
    span6.classList.toggle("span-3");
});

Sneaker.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    span4.classList.toggle("span-1");
    span5.classList.toggle("span-2");
    span6.classList.toggle("span-3");
});
Blog.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    span4.classList.toggle("span-1");
    span5.classList.toggle("span-2");
    span6.classList.toggle("span-3");
});




