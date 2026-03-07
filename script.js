// floating particles

const particles = document.querySelector(".particles")

for(let i=0;i<40;i++){

const p=document.createElement("div")

p.classList.add("particle")

p.style.left=Math.random()*100+"vw"
p.style.animationDuration=5+Math.random()*10+"s"
p.style.opacity=Math.random()

particles.appendChild(p)

}
