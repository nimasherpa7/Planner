var date = dayjs().format('MM/DD/YYYY h:mm a')
var currentTime = document.getElementById("current-time");
currentTime.textContent = date

var button09 = document.getElementById("btn-09")
var text09 = document.getElementById("text-09")
button09.addEventListener("click", function(){
    var text = text09.value
    localStorage.setItem("09",  text)
})
var storage = localStorage.getItem("09")
text09.value = storage

var button10 = document.getElementById("btn-10")
var text10 = document.getElementById("text-10")
button09.addEventListener("click", function(){
    var text = text10.value
    localStorage.setItem("10",  text)
})
var storage = localStorage.getItem("10")
text10.value = storage

var button11 = document.getElementById("btn-11")
var text11 = document.getElementById("text-11")
button09.addEventListener("click", function(){
    var text = text11.value
    localStorage.setItem("11",  text)
})
var storage = localStorage.getItem("11")
text11.value = storage

var button12 = document.getElementById("btn-12")
var text12 = document.getElementById("text-12")
button09.addEventListener("click", function(){
    var text = text12.value
    localStorage.setItem("12",  text)
})
var storage = localStorage.getItem("12")
text12.value = storage

var button13 = document.getElementById("btn-13")
var text13 = document.getElementById("text-13")
button09.addEventListener("click", function(){
    var text = text13.value
    localStorage.setItem("13",  text)
})
var storage = localStorage.getItem("14")
text13.value = storage

var button014 = document.getElementById("btn-14")
var text14 = document.getElementById("text-14")
button09.addEventListener("click", function(){
    var text = text14.value
    localStorage.setItem("14",  text)
})
var storage = localStorage.getItem("14")
text14.value = storage

var button15 = document.getElementById("btn-15")
var text15 = document.getElementById("text-15")
button09.addEventListener("click", function(){
    var text = text15.value
    localStorage.setItem("15",  text)
})
var storage = localStorage.getItem("15")
text15.value = storage;

var button16 = document.getElementById("btn-16")
var text16 = document.getElementById("text-16")
button09.addEventListener("click", function(){
    var text = text16.value
    localStorage.setItem("16",  text)
})
var storage = localStorage.getItem("16")
text16.value = storage;

var button17 = document.getElementById("btn-17")
var text17 = document.getElementById("text-17")
button09.addEventListener("click", function(){
    var text = text17.value
    localStorage.setItem("17",  text)
})
var storage = localStorage.getItem("17")
text17.value = storage;