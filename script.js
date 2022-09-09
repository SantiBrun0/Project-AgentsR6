
const screenDefense = document.querySelector(".screenDefense")
const screenAttack = document.querySelector(".screenAttack")
const btn = document.querySelector(".btn")


let a = 0
let d = 0


const renderAgentAttack = (a) => {

    let img = document.createElement('img')
    img.setAttribute('src', agentsAttack[a].img)
    img.classList.add('imgAgent')
    screenAttack.appendChild(img)

}


const renderAgentDefense = (n) => {

    let img = document.createElement('img')
    img.setAttribute('src', agentsDefense[n].img)
    img.classList.add('imgAgent')
    screenDefense.appendChild(img)

}


const getRandomA = (max) => {

    a = Math.round(Math.random() * max);
    return a

}

const getRandomD = (max) => {

    d = Math.round(Math.random() * max);
    return d

}


btn.addEventListener('click', () => {

    screenAttack.innerHTML = ' '
    screenDefense.innerHTML = ' '
    getRandomA(32)
    console.log(a);
    getRandomD(31)
    console.log(d);
    renderAgentAttack(a)
    renderAgentDefense(d)

})