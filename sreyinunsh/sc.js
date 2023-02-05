bargar = document.querySelector(".bargar")
navb = document.querySelector(".nav")
rightNav = document.querySelector("navr")
bargar.addEventListener('click',()=>{
    navb.classList.toggle('h-nev');
    rightNav.classList.toggle('v-class');

     
})
var body = document.querySelector("body")
var tm = document.querySelector("#tm")
var nav= document.querySelector(".nav")
var nal= document.querySelector("span")
var nal1= document.querySelector("#nal")
var btn = document.querySelector("#eee")
var PAGE3 = document.querySelector("#HM")
// var aa= document.querySelectorAll(".vv")
var n= 0;
tm.addEventListener("click", function(){
    
    if(n===0){
        body.style.backgroundColor = "rgba(153, 21, 3, 0.755)"
        body.style.color = "white"
        aa.style.color = "white"
        aa.style.color = "white"
        tm.style.color= "white"
        // PAGE3.style.backgroundColor= "rgba(104, 111, 5, 0.56)"
        btn.style.backgroundColor = "rgb(48, 80, 80)"
        nav.style.backgroundColor = "rgb(48, 80, 80)"
        nav.style.color = "white"
        // nal.style.color= " rgb(181, 154, 19)"
        nal1.style.color= " rgb(181, 154, 19)"
        n=1;

    }else{
        body.style.backgroundColor = "rgb(255,255,255)"
        body.style.color = "black"
        tm.style.color = "black"
        nav.style.backgroundColor = " aliceblue"
        nav.style.color = "black"
        // aa.style.color = "black"
        btn.style.backgroundColor = "green"

        n=0;
    }
})