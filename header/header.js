import { SecondaryColor, whiteColor } from "../Main/helpers.js";

let header = document.getElementsByTagName("header")[0];
let title = document.createElement("h3");
let linkHome = document.createElement("a");
let linkFavorite = document.createElement("a");
let linkProfile = document.createElement("a");
let logOut = document.createElement("a");

title.innerHTML = "Navbar";
linkHome.innerHTML = "Home";
linkFavorite.innerHTML = "Favorite";
linkProfile.innerHTML = "Profile";
logOut.innerHTML = "log out";

linkHome.href = "../Home/home.html";
linkFavorite.href = "../FavoritePostPage/favoritePosts.html";
linkProfile.href = "../Profile/profile.html";
logOut.href = "../Registration/index.html";

header.appendChild(title);
header.appendChild(linkHome);
header.appendChild(linkFavorite);
header.appendChild(linkProfile);
header.appendChild(logOut);

// add style
header.style.display = "flex";
header.style.height = "50px";
header.style.justifyContent = "space-evenly";
header.style.alignItems = "center";
header.style.backgroundColor = whiteColor;
header.style.color = SecondaryColor;

linkHome.style.color = SecondaryColor;
linkFavorite.style.color = SecondaryColor;
linkProfile.style.color = SecondaryColor;
logOut.style.color = SecondaryColor;
