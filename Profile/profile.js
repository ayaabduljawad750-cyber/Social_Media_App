import {
  borderColor,
  whiteColor,
  firstColor,
  SecondaryColor,
  getCurrentUser,
  getPosts,
  generateId
} from "../Main/helpers.js";




// parent profile
let parentProfile = document.getElementById("parentProfile");
parentProfile.style.margin = "5% 5%";
parentProfile.style.display="flex"
parentProfile.style.flexDirection="column"
parentProfile.style.gap="35px"

// top Profile
let topProfile = document.getElementById("topProfile");
let boxLeft = document.createElement("div");
let boxRight = document.createElement("div");
let iconLeft = document.createElement("h2");
let fullname = document.createElement("h3");
let email = document.createElement("p");
let numberOfPosts = document.createElement("p");

let currentUser = getCurrentUser();

email.innerHTML = currentUser.Email;
fullname.innerHTML = currentUser.fullname;
iconLeft.innerHTML = currentUser.fullname[0];
numberOfPosts.innerHTML = "not forget";

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
let userPosts = getPosts();
titleCenterProfile.innerHTML = "Your Posts";
if (userPosts.length == 0) {
  emptyBoxPosts.innerHTML = "You haven't posted anything yet";
  emptyBoxPosts.style.color=SecondaryColor
  emptyBoxPosts.style.fontSize="30px"
  boxPosts.appendChild(emptyBoxPosts);
} else {
}
centerProfile.appendChild(titleCenterProfile);
centerProfile.appendChild(boxPosts);

// add style
boxPosts.style.display="flex"
boxPosts.style.justifyContent="center"
boxPosts.style.alignItems="center"
boxPosts.style.minHeight="45vh"


titleCenterProfile.style.fontSize="30px"
