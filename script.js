"use strict"
const allInputs = document.querySelectorAll(".form")
document.querySelector(".button").addEventListener("click", (e) =>{
  e.preventDefault();
  allInputs.forEach(input =>{
  if (!input.value) {
    input.classList.add("fname")
    document.getElementsByClassName("form")[0].removeAttribute("placeholder");
    document.getElementsByClassName("form")[1].removeAttribute("placeholder");
    document.getElementsByClassName("form")[2].removeAttribute("placeholder");
    document.getElementsByClassName("form")[3].removeAttribute("placeholder");
    document.getElementsByClassName("errorMessage1")[0].style.visibility = "visible";
    document.getElementsByClassName("errorMessage1")[0].innerHTML = "First Name cannot be empty";
    document.getElementsByClassName("errorMessage2")[0].style.visibility = "visible";
    document.getElementsByClassName("errorMessage2")[0].innerHTML = "Last Name cannot be empty";
    document.getElementsByClassName("errorMessage3")[0].style.visibility = "visible";
    document.getElementsByClassName("errorMessage3")[0].innerHTML = "Looks like this is not an email";
    document.getElementsByClassName("errorMessage4")[0].style.visibility = "visible";
    document.getElementsByClassName("errorMessage4")[0].innerHTML = "Password cannot be empty";
    document.getElementsByName("email")[0].setAttribute("placeholder", "email@example/com");
    document.getElementsByName("email")[0].classList.add("email");
    } 
    else {
    if (input.value != "") {
    for (let i = 0; i < meSsage.length; i++) {
        meSsage[input.id-1].innerHTML = "";
    }
 }
}
})

})
const meSsage = document.querySelectorAll(".span")
allInputs.forEach(input =>{
  input.addEventListener("click", (e)=>{
    input.classList.remove("fname")
    for (let i = 0; i < meSsage.length; i++) {
    meSsage[e.target.id-1].innerHTML = "";
    }
    if (e.target.id == '3') {
    document.getElementsByName("email")[0].removeAttribute("placeholder");
    }
})

})