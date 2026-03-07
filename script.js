// floating particles

const particles = document.querySelector(".particles")

for(let i=0;i<40;i++){

const p=document.createElement("div")

p.classList.add("particle")

p.style.position="fixed"
p.style.width="2px"
p.style.height="2px"
p.style.background="red"

p.style.left=Math.random()*100+"vw"
p.style.top=Math.random()*100+"vh"

p.style.opacity=Math.random()

p.style.animation="float "+(5+Math.random()*10)+"s linear infinite"

particles.appendChild(p)

}

const style=document.createElement("style")

style.innerHTML=`

@keyframes float{

from{
transform:translateY(0px);
}

to{
transform:translateY(-100vh);
}

}

`

document.head.appendChild(style)
