let home = document.getElementById('home')
let btn = document.getElementById('btn')



window.addEventListener("scroll", function () 
{
    let value =window.scrollY;
    home.style.backgroundPositionY = value * 0.30 + "px";
    btn.style.backgroundPositionY = value * 1.05 + "px";
   
   
  
    
})