let savedSection = document.createElement("section");
document.body.appendChild(savedSection);
savedSection.id="saved-container"
let h1=document.createElement("h1");
h1.classList.add("saved-header");
savedSection.appendChild(h1);
h1.textContent="Favorite Posts"
let containerDiv=document.createElement("div");
containerDiv.classList.add("containerDiv")
savedSection.appendChild(containerDiv);
let backbtn=document.createElement("a")
backbtn.classList.add("back-btn");
backbtn.setAttribute("href", "home.html");
savedSection.appendChild(backbtn)
backbtn.textContent="Go Back";
const saved=JSON.parse(localStorage.getItem("savedPosts")) || [];
const noPostsP=document.createElement("p");
noPostsP.textContent="No favorite posts yet. Start liking posts to see them here!"
noPostsP.classList.add("no-posts-p");
if(saved.length ===0){
  
  savedSection.innerHTML = "<h1>Favorite Posts</h1> <p>Posts you've liked</p>";

savedSection.appendChild(noPostsP);
}


else{
  const user = JSON.parse(localStorage.getItem("user"));
const today = new Date().toLocaleDateString();

    saved.forEach((post, index) => {
        const div = document.createElement("div");
        div.classList.add("post");
        let postHTML = "";


let userHTML = "";
if (user.avatar) {
  userHTML = `
    <div class="user-header">
      <div class="avatar"><img src="${user.avatar}" alt="avatar"></div>
      <div class="user-info">
        <h3>${user.name}</h3>
        <p>${today}</p>
      </div>
    </div>
  `;
} else {
  userHTML = `
    <div class="user-header">
      <div class="avatar">${user.name.charAt(0).toUpperCase()}</div>
      <div class="user-info">
        <h3>${user.name}</h3>
        <p>${today}</p>
      </div>
    </div>
  `;
}


        if (post.image) {
      postHTML += `<img src="${post.image}" alt="Post Image">`;
    }


    if (post.title) {
      postHTML += `<h2>${post.title}</h2>`;
    }

    

    if (post.content) {
      postHTML += `<p>${post.content}</p>`;
    }
  



div.innerHTML = `
  ${userHTML}
  <div class="saved-post-content">
    ${postHTML}
  </div>
`;


    const btn = document.createElement("button");
btn.classList.add("unsave-btn");
btn.setAttribute("data-index", index);
btn.textContent = "Unsave";
div.appendChild(btn);



    
        containerDiv.appendChild(div);
    });

const unsaveButton = document.querySelectorAll(".unsave-btn");
unsaveButton.forEach(btn=>{
    btn.addEventListener("click",e=>{
const index=e.target.getAttribute("data-index");
saved.splice(index,1);
localStorage.setItem("savedPosts",JSON.stringify(saved));
window.location.reload();
    });
    
});
}
