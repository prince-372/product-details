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
