//fetchDogPatch()

//Fetch 
fetchGetDog()
renderDogPost()


function fetchGetDog() {
    fetch('http://localhost:3000/images/1')
    .then((resp) => resp.json())
    .then((dogPost) => {
        console.log(dogPost)
        appendDogPost(dogPost)
    })
}

function fetchDogPost(newDogPostComment) {
const options = {
    method: 'Post',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newDogPost),
    };
    fetch('http://localhost:3000/comments', options);
}

function fetchDeleteDogComment(dogComment){
const options = {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
    },
};
fetch(`http://localhost:3000/comments/${dogComment.id}`, options)
.then((resp) => resp.json())
.then((dog) => {
    console.log(dog)
    removeDogComment
})

}

function removeDogComment(dog){
    const dogComment = document.getElementsByClassName(`comments-${dog.id}`)
    dogComment.remove()
};
//function fetchDogPatch(dogPostId, updatedDogInfo){
    //const options = {
        //method: 'PATCH',
        //headers: {
        //    'Content-Type' : 'application/json',
        //},
        //body: JSON.stringify(updatedDogInfo)
    //};

    //fetch(`http://localhost:3000/images/1`, options)
    //.then((resp) => {

    //})
    //.catch((error) => console.log(error));
//}

// append

function appendDogPost(dogImageAndTitle){
   const dogImageContainer = document.getElementsByClassName('image-container')
   console.log(dogImageContainer)
   Array.from(dogImageAndTitle).map((dog) => {
       const dogImage = renderDogPost(dog)
       dogImageContainer.innerHTML += dogImage
   });  
}


// render

function renderDogPost(dog) {
return `<div class="image-container">
<div class="image-card">
  <h2 class="title">${dog?.title}</h2>
  <img src=${dog?.image} class="image" />
  <div class="likes-section">
    <span class="likes">${dog?.likes}</span>
    <button class="like-button">♥</button>
  </div>
  <ul class="comments">
    <li>Get rid of these comments</li>
    <li>And replace them with the real ones</li>
    <li>From the server</li>
  </ul>
  <form class="comment-form">
    <input
      class="comment-input"
      type="text"
      name="comment"
      placeholder="Add a comment..."
    />
    <button class="comment-button" type="submit">Post</button>
  </form>
</div>
</div>`;
};



