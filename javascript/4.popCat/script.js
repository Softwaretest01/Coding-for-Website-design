const cat = document.getElementById('cat')
const popcat = document.querySelector('.popcat')
const number = document.querySelector('.number')
let Integer = 0

const openMouthImg = './img/open.png'
const closeMouthImg = './img/close.png'

const openMouthSound = new Audio ('./sound/sound_sound-open.mp3')
const closeMouthSound = new Audio ('./sound/sound_sound-close.mp3')

popcat.addEventListener('mousedown', openMouth)
popcat.addEventListener('mouseup', closeMouth)
popcat.addEventListener('click', addFunction)

function openMouth(){
    cat.src = openMouthImg
    openMouthSound.play()
}
function closeMouth(){
    cat.src = closeMouthImg
    closeMouthSound.play()
}
function addFunction(){
    Integer +=1
    number.innerHTML = Integer
}