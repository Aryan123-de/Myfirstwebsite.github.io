  let burger = document.querySelector(".burger")
 let navList = document.querySelector(".HI")
 let navbar = document.querySelector(".navbar")

let title = document.querySelector(".title")

burger.addEventListener("click",()=>{
    navList.classList.toggle("v-res");
   
    navbar.classList.toggle("v-res");

})

