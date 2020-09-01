// write your code here

const dogImage = 'http://localhost:3000/images/1';
const imageComments = 'http://localhost:3000/comments';
const likes = document.querySelector('.likes-section');
const commentForm = document.querySelector('.comment-form');

document.addEventListener('DOMContentLoaded', () => {
    getImage();
    likePhoto();
    submitComment();
})

function likePhoto() {
    likes.addEventListener('click', function(e) {


        const likesTag = e.target.previousElementSibling;
        const numLikes = parseInt(e.target.previousElementSibling.textContent);
        const newLikes = numLikes + 1;
        const updatedLikes = {
            likes: newLikes
        }
        fetchLikePhoto(updatedLikes);
        // debugger
        likesTag.textContent = `${newLikes} Likes`
    });
}

function addAComment(comments) {
    let newComm = '';

    comments.forEach(comment => {
        newComm += `<li>${comment}</li>`
    })
    submitComment(newComm)
}

function submitComment() {
    commentForm.addEventListener('submit', function(e) { 
        e.preventDefault();

        const listOfLis =  e.target.parentElement.getElementsByTagName('ul')[0].getElementsByTagName('li');
        let newList = Array.from(listOfLis);

        newList = newList.map(comment => {
            comment.textContent
        })
        newList.push(e.target.comment.value);
        // debugger
        commentPhoto(newList);
    
    });
}

async function commentPhoto(comments) {
    const response = await fetch(imageComments, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comments)
    });
}

async function fetchLikePhoto(updatedLikes) {
    const response = await fetch(dogImage, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedLikes)
    })
}

async function getImage() {
    const response = await fetch(dogImage);
    const dog =  await response.json();

    pageElements(dog);
}

function pageElements(dog) {
    const title = document.querySelector('.title');
    title.textContent = dog.title;

    const image = document.querySelector('.image');
    image.src = dog.image;

    const btn = document.querySelector('btn');
    btn.data.id = dog.id;
}
