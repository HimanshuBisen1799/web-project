var nn= document.querySelector("#nav")
var mme= document.querySelector("#menu1")
var cc= document.querySelector(".c")
var i=0;
mme.addEventListener("click",function(){
   if(i==0){
    nn.style.height = "80vh"
    cc.style.opacity="0"
    nn.style.backgroundColor="rgba(151, 151, 55, 0.751)"
    i=1;
   }else{
    nn.style.height = "7vh"
    cc.style.opacity="1"
    nn.style.backgroundColor=" rgb(151, 151, 55)"
    i=0;
   }
})