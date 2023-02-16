// dichiaro le variabili delle immagini e delle frecce



const caroselloEl = document.querySelector('.carosello')

let pictureAddRight = 0
// let lastElement = pictureEl.length - 1

// let listPicture = [
//     './Img/01.jpg',
//     './Img/02.jpg',
//     './Img/03.jpg',
//     './Img/04.jpg',
//     './Img/05.jpg',
// ]

let listPicture = [
    {
        image: './img/01.webp',
        title: 'Marvel Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: './img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: './img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: './img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: './img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
]

for (let i = 0; i < listPicture.length; i++){
    let currentImg = listPicture[i]

    let image = currentImg.image
    let title = currentImg.title
    let text = currentImg.text

    // let {image, title, text} = currentImg

    let className = 'picture'
        console.log(i, currentImg, image, text, title)

        if (i === pictureAddRight){
            className += ' active'
        }
    

    let htmlImg =
    `<div class="${ className}">
        <img src="${image}" alt="">
        <h1 class="title-img">
            ${title}
        </h1>
        <p class="text-img">
            ${text}
        </p>
    </div>`

    

    caroselloEl.innerHTML += htmlImg
    
}

let pictureEl = document.querySelectorAll('.carosello .picture')
const arrowLeft = document.getElementById('arrow-left')
const arrowRight = document.getElementById('arrow-right')

console.log(pictureEl, pictureAddRight)

arrowRight.addEventListener('click', moveLeft)


arrowLeft.addEventListener('click', moveRight)




setInterval(function () {
    moveRight()

    if(pictureAddRight === 4){
        pictureAddRight === 1
    }
}, 2000);

// FUNZIONI


function moveRight(){
    console.log(pictureAddRight)
    pictureEl[pictureAddRight].classList.remove('active')

    if (pictureAddRight > 0){
        pictureAddRight--
    } else {
        pictureAddRight = pictureEl.length - 1
    }
    
    pictureEl[pictureAddRight].classList.add('active')
}


function moveLeft (){
    let lastIndex = pictureEl.length - 1

    pictureEl[pictureAddRight].classList.remove('active')

    if ( pictureAddRight < lastIndex){
        pictureAddRight += 1
    } else {
        pictureAddRight = 0
    }

    pictureEl[pictureAddRight].classList.add('active')
    console.log(lastIndex)


}