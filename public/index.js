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


const voteBar = document.createElement("div")
 

document.body.appendChild(container)
container.classList.add("container")

// container.appendChild(box)
// box.classList.add("img-container")

container.appendChild(img)
img.classList.add("img-container")


container.appendChild(voteBar)
voteBar.classList.add("voteBar")



container.appendChild(likeBtn)
container.appendChild(nopeBtn)
likeBtn.classList.add("btns")
likeBtn.classList.add("likeBtn")
nopeBtn.classList.add("btns")
nopeBtn.classList.add("nopeBtn")

likeBtn.innerText = 'likeBtn';
nopeBtn.innerText = "nopeBtn"




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




function calcPercent() {
  let totalVotes = likes + nopes
  console.log('totalVotes',totalVotes);
  return nopes/totalVotes
}



function changeWidth() {
  let p = calcPercent()
  // voteBar.style.setProperty('--width', `${p}`);
  voteBar.style.setProperty('--width', `${p}%`);
}




if(likes+nopes === 0){
  console.log('hi');
  voteBar.style.setProperty('background-color', 'white');
}


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

