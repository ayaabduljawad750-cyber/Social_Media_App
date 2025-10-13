export let borderColor = "#e5e7eb"
export let whiteColor = "white"
export let firstColor="#89ce5a"
export let SecondaryColor ="#71717a"

export function getCurrentUser() {
  let currentUser = JSON.parse(localStorage.getItem("userAuthentication"));
  console.log(currentUser);
  return currentUser;
}    
export function getUsers() {
  let users = JSON.parse(localStorage.getItem("socialAppUsers"));
  console.log(users);
  return users;
}

export function getPosts() {
  let posts = JSON.parse(localStorage.getItem("socialAppPosts")) || [];
  console.log(posts);
  return posts;
}

export function generateId(){
   return Date.now().toString(36) + Math.random().toString(36);
}