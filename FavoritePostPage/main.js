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
const posts=JSON.parse(localStorage.getItem("posts")) || [];

const likedposts=posts.filter(post=>post.liked === true);
const noPostsP=document.createElement("p");
noPostsP.textContent="No favorite posts yet. Start liking posts to see them here!"
noPostsP.classList.add("no-posts-p");
if(likedposts.length === 0){
  
  savedSection.innerHTML = "<h1>Favorite Posts</h1> <p>Posts you've liked</p>";

savedSection.appendChild(noPostsP);
}


else{
  const user = JSON.parse(localStorage.getItem("currentUser")); // I add it
  const today = new Date().toLocaleDateString();

    likedposts.forEach((post, index) => {
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
    <div class="avatar">${user.fullname.charAt(0).toUpperCase()}</div> 
    <div class="user-info">
      <h3>${user.fullname}</h3>
    <p>${today}</p>
    </div>
    </div>
  `;
}


        if (post.image) {
      postHTML += `<img src="${post.image}" alt="Post Image">`;
    }

        if (post.video) {
      postHTML += `<video controls loop muted width="100%" >
         <source src="${post.video}" type="video/mp4">
       </video>`;
    }

    if (post.title) {
      postHTML += `<h2>${post.title}</h2>`;
    }

    

    if (post.description) {
      postHTML += `<p>${post.description}</p>`;
    }
  



div.innerHTML = `
  ${userHTML}
  <div class="saved-post-content">
    ${postHTML}
  </div>
`;



const likeSection = document.createElement("div");
  likeSection.classList.add("like-section");

likeSection.innerHTML = `
  <div class="like-div">
       <i class="fa-solid fa-heart like-btn"></i>
       <span class="like-count">${post.likes || 0}</span>
  </div>

  <div class="comment-div">
      <i class="fa-regular fa-comment comment-icon"></i>
      <span class="comment-count">${post.comments ? post.comments.length : 0}</span>
  </div>
`;




      const commentBox = document.createElement("div");
    commentBox.classList.add("comment-box");
    commentBox.innerHTML = `
      <input type="text" placeholder="Add a comment..." class="comment-input" />
      <button class="add-comment-btn">Post</button>
      <div class="comments-list"></div>
    `;

    div.appendChild(likeSection);
    div.appendChild(commentBox);
    containerDiv.appendChild(div);





    const likeBtn = likeSection.querySelector(".like-btn");
    const likeCount = likeSection.querySelector(".like-count");




    if (post.liked) {
      likeBtn.style.color = "red";
    } else {
      likeBtn.style.color = "gray";
    }



     likeBtn.addEventListener("click", () => {
      post.liked = !post.liked;
      post.likes = post.liked ? (post.likes || 0) + 1 : (post.likes || 1) - 1;





       likeBtn.style.color = post.liked ? "red" : "gray";

      likeCount.textContent = post.likes;
      localStorage.setItem("posts", JSON.stringify(posts));
      if (!post.liked) {
  div.remove(); 
}

  const noPosts = document.querySelectorAll(".post");
  if (noPosts.length === 0) {
    const noPostsP = document.createElement("p");
    noPostsP.textContent = "No favorite posts yet. Start liking posts to see them here!";
    noPostsP.classList.add("no-posts-p");
    savedSection.appendChild(noPostsP);
  }



    });



     const commentInput = commentBox.querySelector(".comment-input");
    const addCommentBtn = commentBox.querySelector(".add-comment-btn");
    const commentsList = commentBox.querySelector(".comments-list");
    const commentCount = likeSection.querySelector(".comment-count");


if (post.comments && post.comments.length > 0) {
  post.comments.forEach((comment) => {
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment-item");

    const nameU = document.createElement("strong");
    nameU.textContent = comment.user; 

    const textC = document.createElement("p");
    textC.textContent = comment.text; 

    commentDiv.appendChild(nameU);
    commentDiv.appendChild(textC);
    commentsList.appendChild(commentDiv);
  });
}


addCommentBtn.addEventListener("click", () => {
  const commentText = commentInput.value.trim();
  if (commentText) {
    if (!post.comments) post.comments = [];

    const commentObj = {
      user: user.name,
      text: commentText
    };

    post.comments.push(commentObj);

    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment-item");

    const nameU = document.createElement("strong");
    nameU.textContent = user.name;

    const textC = document.createElement("p");
    textC.textContent = commentText;

    commentDiv.appendChild(nameU);
     commentDiv.appendChild(textC);
     commentsList.appendChild(commentDiv);


    

    commentInput.value = "";
     commentCount.textContent = post.comments.length;
    localStorage.setItem("posts", JSON.stringify(posts));


      }

      
    }); 

const commentIcon = likeSection.querySelector(".comment-icon");

      commentBox.style.display = "none";

      commentIcon.addEventListener("click", () => {
    if (commentBox.style.display === "none") {
      commentBox.style.display = "block";
    } else {
    commentBox.style.display = "none";
    }
});

    
      });
} 
    
    
    
