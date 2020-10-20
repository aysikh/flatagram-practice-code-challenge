const URL = "http://localhost:3000/images/"

let imageTitle
let imageLikes
let imageImage
let likeButton
let postButton

document.addEventListener("DOMContentLoaded", () =>{
  fetchImage();
  
  imageTitle = document.querySelector(".title")
  imageLikes = document.querySelector(".likes")
  imageImage = document.querySelector(".image")
  likeButton = document.querySelector(".like-button")
  postButton = document.querySelector(".comment-button")

  
  postButton.addEventListener('click', () => {
    event.preventDefault();
    addComment();
  });
  
});

function fetchImage() {
  fetch(URL+1)
  .then(rsp => rsp.json())
  .then(image => renderImage(image))
  
}

function renderImage(image){
  imageTitle.innerHTML = image.title
  imageLikes.innerHTML = image.likes 
  imageImage.src = image.image
  
  let commentUl = document.querySelector(".comments")
  image.comments.forEach(comment => {
    let commentEl = document.createElement("li")
    commentUl.append(commentEl)
    commentEl.innerText = comment.content
  });

  likeButton.addEventListener('click', () => {
    event.preventDefault()
    // console.log("hi")
    heartButton(image);
  });

}

// function renderComment(){
  
// }

function heartButton(image){
  image.likes++
  
  let likePackage = {};
  likePackage.method = 'PATCH';
  likePackage.headers = {"Content-Type": "application/json"};
  likePackage.body = JSON.stringify({likes: image.likes});

  fetch(URL+1, likePackage)
  .then(rsp => rsp.json())
  .then(imageLikes.innerText = image.likes)

}

function addComment(){
  event.preventDefault()
  let commentInput = document.querySelector(".comment-input").value
  let commentClass = document.querySelector(".comments")
  let newCommentEl = document.createElement("li")
  commentClass.append(newCommentEl)

  newCommentEl.innerHTML = commentInput
}