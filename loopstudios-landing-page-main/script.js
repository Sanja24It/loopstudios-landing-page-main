"use strict"
let h = document.querySelector(".nav")
let x = document.createElement("span")
const menu_ham = document.querySelector("#menu")
menu_ham.addEventListener("click", function(){
    h.classList.add("active")
    let x = document.createElement("span")
    let icon = document.createElement("div")
   
    x.classList.add("x_mark")
    icon.classList.add("nav_ham_logo")
    h.append(x)
    h.append(icon)

    x.addEventListener("click", function(){
      
        h.classList.remove("active")
        h.classList.add("not_active")
        
    })
    
})