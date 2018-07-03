var ts = document.querySelectorAll(".ts");
var vs = document.querySelectorAll(".vs");
var a = ts.length;
var i=0;
var myshow;
function tapbody(a,myshow){
    
for(i=0;i<a;i++)
{
    vs[i].classList.add("as");
    console.log(vs[0]);
}
    document.getElementById(myshow).classList.remove("as");
    console.log(vs[0]);
}
/*events*/
var days = document.querySelectorAll(".days");
var zs = document.querySelectorAll(".zs");
var d = days.length;
var k=0;
var my;
var  count =0;
var z=0;
function tabbody(d,my)
{   
    for(k=0;k<d;k++)
    {
        zs[k].classList.add("sls");
        console.log(zs[0]);
    }  
    
    document.getElementById(my).classList.toggle("sls");
}
window.sr = ScrollReveal({ reset: true });

// JavaScript
window.sr = ScrollReveal();
sr.reveal('.main1', { duration: 1200 });
sr.reveal('.main2', { duration: 900 });
sr.reveal('.main3', { duration: 1300 });
sr.reveal('.main4', { duration: 900 });
sr.reveal('.main5', { duration: 1300 });
sr.reveal('.main6' ,{ duration: 900 });
sr.reveal('.main7', { duration: 1300 });
sr.reveal('.main8', { duration: 1300 });
sr.reveal('.main9', { duration: 900 });

var button = document.getElementById("button");
var menuul = document.querySelector("#menuul");
var imageslider = document.getElementById("imageslider");

button.addEventListener("click",function(){
    console.log("hi");
    menuul.classList.toggle("showing");
})

window.onscroll = function() {myFunction()};


function myFunction() {
    
    var scrooling = document.documentElement.scrollTop;


    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.getElementById("na").classList.add("naa");
    } else {
        document.getElementById("na").classList.remove("naa");
    }


    var box = document.querySelector(".imageslider");
   

}
