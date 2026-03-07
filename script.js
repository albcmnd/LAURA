// subtle random glitch flicker

setInterval(() => {

const titles = document.querySelectorAll(".glitch")

titles.forEach(t => {

t.style.textShadow =
`0 0 ${10 + Math.random()*10}px red,
0 0 ${20 + Math.random()*20}px red`

})

}, 300)
