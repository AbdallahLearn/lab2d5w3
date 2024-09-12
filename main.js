let button1 = document.getElementById('btn1')
let text = document.getElementById('text')

let button2 = document.getElementById('btn2')
let button3 = document.getElementById('btn3')
let button4 = document.getElementById('btn4')
let button5 = document.getElementById('btn5')
let button6 = document.getElementById('btn6')

let img = document.getElementsByTagName('img')[0]
// img.src = "https://i.pinimg.com/474x/09/17/08/091708ac5750e844123fdb14d0839103.jpg"



let size = 20
let colors = ['blue', 'red', 'green']


let newText = "welcome to my site"
button1.addEventListener('click' ,function(){
    text.textContent = newText
})

button2.addEventListener("click", function() {
    text.style.fontSize = "large";
});

button3.addEventListener("click", function() {
    text.style.fontSize = "small";
});

button4.addEventListener("click",function(){
    text.style.color ="green"
})

button5.addEventListener("click", function(){
    text.style.backgroundColor ="blue"
    text.style.color = "white"
})

button6.addEventListener("click", function(){
    img.src= "https://i.pinimg.com/474x/09/17/08/091708ac5750e844123fdb14d0839103.jpg"
})


