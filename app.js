// dichiaro le variabili delle immagini e delle frecce

const pictureEl = document.querySelectorAll('.carosello .picture')
const arrowLeft = document.querySelector('.arrow-left')
const arrowRight = document.querySelector('.arrow-right')
const caroselloEl = document.querySelector('.carosello')

let pictureAddRight = 0
// let lastElement = pictureEl.length - 1

let listPicture = [
    './Img/01.jpg',
    './Img/02.jpg',
    './Img/03.jpg',
    './Img/04.jpg',
    './Img/05.jpg',
]

for (let i = 0; i < listPicture.length; i++){
    let currentImg = listPicture[i]
    let classImg = `picture`

    if (i === pictureAddRight){
        classImg += ` active`
    }

    let htmlImg =
    `<div class="${classImg}">
        <img src="${currentImg}" alt="">
    </div>`

    caroselloEl.innerHTML += htmlImg

}



arrowRight.addEventListener('click', function () {

    let lastIndex = listPicture.length - 1

    console.log(lastIndex)
    let pictureBefore = listPicture[pictureAddRight]
    pictureBefore.classList.remove('active')

    if ( pictureAddRight < lastIndex){
        pictureAddRight += 1
    } else {
        pictureAddRight = 0
    }

    let pictureAfter = listPicture[pictureAddRight]
    pictureAfter.classList.add('active')
    
})


arrowLeft.addEventListener('click', function () {
    
    let pictureBefore = listPicture[pictureAddRight]
    pictureBefore.classList.remove('active')

    if (pictureAddRight > 0){
        pictureAddRight--
    } else {
        pictureAddRight = listPicture.length - 1
    }
    
    let pictureAfter = listPicture[pictureAddRight]
    pictureAfter.classList.add('active')

})