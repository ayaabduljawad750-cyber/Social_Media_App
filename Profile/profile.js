import {
  borderColor,
  whiteColor,
  firstColor,
  SecondaryColor,
} from "../Main/helpers.js";

import {controlBoxPost} from "./controlBoxPost.js"

// parent profile
let parentProfile = document.getElementById("parentProfile");
parentProfile.style.margin = "5% 5%";
parentProfile.style.display = "flex";
parentProfile.style.flexDirection = "column";
parentProfile.style.gap = "35px";

// top Profile
let topProfile = document.getElementById("topProfile");
let boxLeft = document.createElement("div");
let boxRight = document.createElement("div");
let iconLeft = document.createElement("h2");
let fullname = document.createElement("h3");
let email = document.createElement("p");
let numberOfPosts = document.createElement("p");

let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  let myPosts = JSON.parse(localStorage.getItem("posts")).filter(
    (p) => p.authorId == JSON.parse(localStorage.getItem("currentUser")).id
  );
email.innerHTML = currentUser.Email;
fullname.innerHTML = currentUser.fullname;
iconLeft.innerHTML = currentUser.fullname[0];
numberOfPosts.innerHTML = `${myPosts.length} Posts`;

boxLeft.appendChild(iconLeft);
boxRight.appendChild(fullname);
boxRight.appendChild(email);
boxRight.appendChild(numberOfPosts);

topProfile.appendChild(boxLeft);
topProfile.appendChild(boxRight);

// Add Style

// Top Profile
topProfile.style.display = "flex";
topProfile.style.alignItems = "center";
topProfile.style.gap = "25px";
topProfile.style.padding = "25px 25px";
topProfile.style.border = `1px solid ${borderColor}`;
topProfile.style.borderRadius = "20px";
topProfile.style.backgroundColor = whiteColor;

// left top Profile
boxLeft.style.backgroundColor = firstColor;
boxLeft.style.display = "flex";
boxLeft.style.justifyContent = "center";
boxLeft.style.alignItems = "center";
boxLeft.style.width = "120px";
boxLeft.style.height = "120px";
boxLeft.style.borderRadius = "50%";

iconLeft.style.color = whiteColor;
iconLeft.style.fontSize = "50px";

// right top profile
boxRight.style.display = "flex";
boxRight.style.flexDirection = "column";
boxRight.style.gap = "10px";

fullname.style.fontSize = "30px";
email.style.color = SecondaryColor;

// center Profile
let centerProfile = document.getElementById("centerProfile");
let titleCenterProfile = document.createElement("h3");
let boxPosts = document.createElement("div");
let emptyBoxPosts = document.createElement("p");

titleCenterProfile.innerHTML = "Your Posts";
if (myPosts.length == 0) {
  emptyBoxPosts.innerHTML = "You haven't posted anything yet";
  emptyBoxPosts.style.color = SecondaryColor;
  emptyBoxPosts.style.fontSize = "30px";
  boxPosts.appendChild(emptyBoxPosts);
} else {


  for (let post of myPosts) {
    let postCard = document.createElement("div");
    let postTopBox = document.createElement("div");
    let postCenterBox = document.createElement("div");
    let postBottomBox = document.createElement("div");
    let postActions = document.createElement("div");
    let postTopBoxLeftBox = document.createElement("div");
    let postTopBoxRightBox = document.createElement("div");
    let postTopBoxLeftBoxIcon = document.createElement("h4");
    let postUsername = document.createElement("h4");
    let postDate = document.createElement("p");
    let postImg = document.createElement("img");
    let postTitle = document.createElement("h3");
    let postDetails = document.createElement("p");
    let postAddLikeBox = document.createElement("div");
    let postAddCommentBox = document.createElement("div");
    let postAddLikeIcon = document.createElement("i");
    let postAddLikeNumbers = document.createElement("span");
    let postAddCommentsIcon = document.createElement("i");
    let postAddCommentNumbers = document.createElement("span");
    let postParentComments = document.createElement("div");
    let postCommentsBox = document.createElement("div");
    let postSendCommentBox = document.createElement("div");
    let postCommentTextarea = document.createElement("textarea");
    let postCommentSendButton = document.createElement("button");

    let postControlBox = controlBoxPost(post.id, post.authorId);
    postControlBox.style.display = "flex";
    postCard.appendChild(postControlBox);

    postUsername.innerHTML = JSON.parse(
      localStorage.getItem("currentUser")
    ).fullname;
    postTopBoxLeftBoxIcon.innerHTML = JSON.parse(
      localStorage.getItem("currentUser")
    ).fullname[0];
    postTopBoxLeftBox.appendChild(postTopBoxLeftBoxIcon);
    postTopBoxRightBox.appendChild(postUsername);

    postTopBox.appendChild(postTopBoxLeftBox);
    postTopBox.appendChild(postTopBoxRightBox);

    postImg.src = post.image;
    postCenterBox.appendChild(postImg);

    postDetails.innerHTML = post.description;

    postBottomBox.appendChild(postDetails);

    postAddLikeIcon.classList.add("fa-regular", "fa-heart");

    postAddLikeIcon.style.color =  "#000";

    postAddLikeNumbers.innerHTML = myPosts.length;
      postAddLikeBox.appendChild(postAddLikeIcon);
      postAddLikeBox.appendChild(postAddLikeNumbers);

        postAddCommentsIcon.classList.add("fa-regular", "fa-comment");
  postAddCommentNumbers.innerHTML = post.comments.length;
  postAddCommentBox.appendChild(postAddCommentsIcon);
  postAddCommentBox.appendChild(postAddCommentNumbers);

    postActions.appendChild(postAddLikeBox);
  postActions.appendChild(postAddCommentBox);

  postParentComments.appendChild(postCommentsBox);
  postParentComments.appendChild(postSendCommentBox);
  postSendCommentBox.appendChild(postCommentTextarea);
  postSendCommentBox.appendChild(postCommentSendButton);

    postCommentSendButton.innerHTML = "Send";
  postCommentTextarea.placeholder = "Add a comment ...";
  postCommentTextarea.style.padding = "15px";
  postCommentTextarea.style.borderRadius = "15px";
  postCommentTextarea.style.width = "60%";
  postCommentSendButton.style.padding = "15px";
  postSendCommentBox.style.display = "flex";
  postSendCommentBox.style.justifyContent = "center";
  postSendCommentBox.style.gap = "10px";
  postCommentSendButton.style.borderRadius = "15px";
  postCommentSendButton.style.backgroundColor = "#166fe5";
  postCommentSendButton.style.color = "#fff";
  postCommentSendButton.style.fontSize = "20px";
  postCommentSendButton.style.border = "none";
  postCommentsBox.style.display = "flex";
  postCommentsBox.style.alignItems = "center";
  postCommentsBox.style.flexDirection = "column";
  postCommentsBox.style.gap = "15px";
  postCommentsBox.style.marginBottom = "15px";

    postCard.appendChild(postTopBox);
  postCard.appendChild(postCenterBox);
  postCard.appendChild(postBottomBox);
  postCard.appendChild(postActions);
  postCard.appendChild(postParentComments);
  boxPosts.appendChild(postCard)

    postCard.style.width = "450px";
  postCard.style.height = "fit-content";

    postCenterBox.style.overflow = "hidden";
  postCenterBox.style.width = "100%";
  postCenterBox.style.display = post.image == "" ? "none" : "block";
  postImg.style.width = "100%";
  postImg.style.aspectRatio = "1/1";
  postImg.style.objectFit = "cover";
  postImg.style.transition = "transform 0.4s ease";

  postCard.style.backgroundColor = "#fff";
  postCard.style.margin = "15px 15px";
  postCard.style.borderRadius = "15px";

    for (let box of [
    postTopBox,
    postBottomBox,
    postActions,
    postParentComments,
  ]) {
    box.style.padding = "20px 20px";
  }

  postTopBox.style.paddingTop =  "0px";

  postTopBox.style.display = "flex";
  postTopBox.style.alignItems = "center";
  postTopBox.style.gap = "25px";

  postTopBoxLeftBox.style.width = "50px";
  postTopBoxLeftBox.style.height = "50px";
  postTopBoxLeftBox.style.borderRadius = "50%";
  postTopBoxLeftBox.style.backgroundColor = "#166fe5";
  postTopBoxLeftBox.style.display = "flex";
  postTopBoxLeftBox.style.justifyContent = "center";
  postTopBoxLeftBox.style.alignItems = "center";
  postTopBoxLeftBox.style.color = "#fff";

  postUsername.style.marginBottom = "5px";
  postUsername.style.fontSize = "16px";

  postDate.style.color = "#71717A";

  postTitle.style.marginBottom = "10px";
  postTitle.style.fontSize = "20px";

  postDetails.style.color = "#71717A";

    postActions.style.display = "flex";
  postActions.style.alignItems = "center";
  postActions.style.gap = "15px";

  for (let box of [postAddCommentBox, postAddLikeBox]) {
    box.style.padding = "15px";
    box.style.display = "flex";
    box.style.gap = "15px";
    box.style.alignItems = "center";
    box.style.borderRadius = "15px";
    box.style.transition = "all 0.4s ease";

    // add hover effect
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = "#166fe5";
      box.style.color = "#fff";
    });
    box.addEventListener("mouseleave", () => {
      box.style.backgroundColor = "#fff";
      box.style.color = "#000";
    });
  }

    // Hover part
  postImg.addEventListener("mouseover", () => {
    postImg.style.transform = "scale(1.2)";
  });
  postImg.addEventListener("mouseleave", () => {
    postImg.style.transform = "scale(1)";
  });

    const mediaQuery = window.matchMedia("(max-width: 900px)");

  function handleScreenChange(e) {
    if (e.matches) {
      postCard.style.width = "80%";
    } else {
      postCard.style.width = "450px";
    }
  }

  mediaQuery.addEventListener("change", handleScreenChange);
  }
}
centerProfile.appendChild(titleCenterProfile);
centerProfile.appendChild(boxPosts);

// add style
boxPosts.style.display = "flex";
boxPosts.style.justifyContent = "center";
boxPosts.style.alignItems = "center";
boxPosts.style.minHeight = "45vh";

titleCenterProfile.style.fontSize = "30px";
