const reviewContainer=document.getElementById('review-container')


const reviews=[
    {
        img:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        alt:"profile picture of john",
        text:" i really enjoyed this course",
        name:"john"
    },
    {
        img:"https://images.unsplash.com/photo-1557555187-23d685287bc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
        alt:"profile picture of devon",
        text:" i really enjoyed this course",
        name:"devon"
    },
    {
        img:"https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        alt:"profile picture of shaina",
        text:" i really enjoyed this course",
        name:"shaina"
    }
]

function populateDisplay(){
    reviews.forEach(review =>{
        const cardElement=document.createElement('div')
        cardElement.classList.add('card')
        cardElement.addEventListener('mouseover', showCard)
        cardElement.addEventListener('mouseleave', blurCard)
        const imageContainer=document.createElement('div')
        imageContainer.classList.add('image-container')
        const imageElement=document.createElement('img')
        imageElement.setAttribute('src',review.img)
        imageElement.setAttribute('alt',review.alt)
        imageContainer.append(imageElement)
        const paragraphElement=document.createElement('p')
        paragraphElement.textContent=review.text
        const nameContainer=document.createElement('div')
        nameContainer.classList.add('name-container')
        nameContainer.textContent=review.name
        cardElement.append(imageContainer,paragraphElement,nameContainer)


        reviewContainer.append(cardElement)
    })
}
populateDisplay()

function showCard(){
    this.classList.add('active')
}
function blurCard(){
    this.classList.remove('active')
}