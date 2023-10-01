const randomColor = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() *14)]
    }
    return color
}

const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
let int
start.addEventListener('click',function () {
    int = setInterval(function () {
        document.body.style.backgroundColor = randomColor()
    },500)
})

stop.addEventListener('click',function () {
    clearInterval(int)
    int = null;
})
