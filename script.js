garis = [
    "gariange.png",
    "gariclown.jpg",
    "garicovid.jpg",
    "garidis.png",
    "garidon.jpg",
    "garihell.png",
    "garimarsh.jpg",
    "garimenuisier.jpg",
    "garinoel.png",
    "gariosborn.jpg",
    "gariplouc.jpg",
    "meme_mika.jpg",
    "mikhaby.jpg",
    "spidergar.jpg",
]

document.body.style.backgroundImage = "url('./garis/garitman.jpg')"

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let winOptions = "width=400, height=200"
let windows_list = []
let x, y = 0

garis.forEach(gari => {
    let windows = window.open("garis/gari.html?" + gari, "", winOptions)
    windows.moveTo(innerWidth/getRandomInt(6), innerHeight/getRandomInt(6))
    windows_list.push(windows)
})
// for(let i=0; i<=1; i++){
//     console.log(i)
//     let windows = window.open("gari.html", "", winOptions)
//     windows.moveTo(innerWidth/getRandomInt(6), innerHeight/getRandomInt(6))
//     windows_list.push(windows)
// }
console.log(windows_list)

setInterval(() =>{
    windows_list.forEach((windo) =>{
        if(getRandomInt(2) == 0){
            x = getRandomInt(100)
        } else {
            x = -getRandomInt(100)
        }

        if(getRandomInt(2) == 0){
            y = getRandomInt(100)
        } else {
            y = -getRandomInt(100)
        }
        windo.moveBy(x, y)
    })
}, 1000)