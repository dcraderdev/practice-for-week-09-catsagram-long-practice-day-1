// Your code here


// [{"id":"MTgwNzAzMg","url":"https://cdn2.thecatapi.com/images/MTgwNzAzMg.jpg","width":333,"height":500}]

window.addEventListener("DOMContentLoaded", async () =>{
let likes = 0
let nopes = 0

// const div = document.createElement("div")

// //create div, append to body


// const img = document.createElement("img")
// img.classList.add("random-cat")
// document.body.appendChild(img)


// await fetch("https://api.thecatapi.com/v1/images/search")
//         .then((res) => {
//             return res.json()
//         })
//         .then((json) => {
//             img.src = json[0].url
//         })
//         .catch((err) => {
//             console.log('Error!', + err.message);
//         })





const container = document.createElement("div")
const img = document.createElement("img")
const likeBtn = document.createElement("likeBtn")
const nopeBtn = document.createElement("nopeBtn")
const newCatBtn = document.createElement("newCatBtn")
const commentBtn = document.createElement("commentBtn")
const commentSection = document.createElement("commentSection")
const commentText = document.createElement("textArea")
const commentSubmit = document.createElement("commentSubmit")
const commentClose = document.createElement("commentClose")
const oldComments = document.createElement("oldComments")


const voteBar = document.createElement("div")
 

document.body.appendChild(container)
container.classList.add("container")

document.body.appendChild(oldComments)
oldComments.classList.add("oldComments")

// container.appendChild(box)
// box.classList.add("img-container")

container.appendChild(img)
img.classList.add("img-container")


container.appendChild(voteBar)
voteBar.classList.add("voteBar")



container.appendChild(likeBtn)
likeBtn.classList.add("btns")
likeBtn.classList.add("likeBtn")
likeBtn.innerText = 'likeBtn';

container.appendChild(nopeBtn)
nopeBtn.classList.add("btns")
nopeBtn.classList.add("nopeBtn")
nopeBtn.innerText = "nopeBtn"

container.appendChild(commentBtn)
commentBtn.classList.add("btns")
commentBtn.classList.add("commentBtn")
commentBtn.innerText = "Comment"

container.appendChild(newCatBtn)
newCatBtn.classList.add("btns")
newCatBtn.classList.add("newCatBtn")
newCatBtn.innerText = "newCatBtn"


container.appendChild(commentSection)
commentSection.classList.add("commentSection")
commentSection.classList.add("hidden")

commentSection.appendChild(commentText)
commentText.classList.add('commentText')


commentSection.appendChild(commentSubmit)
commentSubmit.classList.add("btns")
commentSubmit.classList.add('commentSubmit')
commentSubmit.innerText = 'Submit'


commentSection.appendChild(commentClose)
commentClose.classList.add("btns")
commentClose.classList.add('commentClose')
commentClose.innerText = 'Close'

commentBtn.addEventListener('click', function () {
  commentSection.classList.remove("hidden")
});

commentClose.addEventListener('click', function () {
  commentSection.classList.add("hidden")
});


commentSubmit.addEventListener('click', function () {
  const newComment = document.createElement("div")
  newComment.classList.add('newComment')

  const date = document.createElement("div")


  let comment = commentText.value

  commentText.innerText = comment

  newComment.appendChild(date)
  newComment.appendChild(commentText)

  console.log(comment);

  oldComments.appendChild(newComment)



});


likeBtn.addEventListener('click', function () {
  likes++
  console.log('likes',likes);
  changeWidth()
});

nopeBtn.addEventListener('click', function () {
  nopes++
  console.log('nopes',nopes);
  changeWidth()
});

nopeBtn.addEventListener('click', function () {
  nopes++
  console.log('nopes',nopes);
  changeWidth()
});


newCatBtn.addEventListener('click', async function () {
  try{
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const json = await res.json();
    img.src = json[0].url;
    likes = 0
    nopes = 0
  } catch (err) {
    console.log('Error!', err.message);
  }
});









function calcPercent() {
  let totalVotes = likes + nopes
  console.log('totalVotes',totalVotes);
  return nopes/totalVotes
}



function changeWidth() {
  let p = calcPercent()

  


  let totalVotes = likes + nopes
  let no = nopes/totalVotes
  let yes = likes/totalVotes


  // voteBar.style.setProperty('--width', `${p}`);
  voteBar.style.setProperty('--widthNo', `${no}%`);
  voteBar.style.setProperty('--widthYes', `${yes}%`);
}

  


//   // voteBar.style.setProperty('--width', `${p}`);
//   voteBar.style.setProperty('--width', `${p}%`);
// }




// if(likes+nopes === 0){
//   console.log('hi');
//   voteBar.style.setProperty('background-color', 'white');
// }



await fetch("https://api.thecatapi.com/v1/images/search")
        .then((res) => {
            return res.json()
        })
        .then((json) => {
            img.src = json[0].url
        })
        .catch((err) => {
            console.log('Error!', + err.message);
        })
})

