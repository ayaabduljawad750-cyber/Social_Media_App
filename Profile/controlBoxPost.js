import {dialogDelete} from "./dialog.js"



export function controlBoxPost(postId,authorId) {
  let controlBox = document.createElement("div");
  let updateIcon = document.createElement("i");
  let deleteIcon = document.createElement("i");

  let dialogD=dialogDelete(postId,authorId)
document.body.appendChild(dialogD)
document.body.style.height="100vh"
document.body.style.width="100%"
dialogD.style.display="none"

  updateIcon.classList.add("fa-solid", "fa-pen");
  deleteIcon.classList.add("fa-solid", "fa-trash");

  controlBox.style.padding = "20px 20px";
  controlBox.style.paddingBottom = "0";
  controlBox.style.display = "flex";
  controlBox.style.justifyContent = "end";
  controlBox.style.gap = "20px";
  updateIcon.style.padding = "15px";

  updateIcon.style.color = "#166fe5";
  deleteIcon.style.color = "red";

  for (let icon of [updateIcon, deleteIcon]) {
    icon.style.fontSize = "20px";
    icon.style.padding = "15px";
    icon.style.borderRadius = "50%";
    icon.style.cursor = "pointer";
    controlBox.appendChild(icon);
  }

  updateIcon.addEventListener("mouseover", () => {
    updateIcon.style.backgroundColor = "#166fe5";
    updateIcon.style.color = "#fff";
  });
  updateIcon.addEventListener("mouseleave", () => {
    updateIcon.style.backgroundColor = "#fff";
    updateIcon.style.color = "#166fe5";
  });

  deleteIcon.addEventListener("mouseover", () => {
    deleteIcon.style.backgroundColor = "red";
    deleteIcon.style.color = "#fff";
  });
  deleteIcon.addEventListener("mouseleave", () => {
    deleteIcon.style.backgroundColor = "#fff";
    deleteIcon.style.color = "red";
  });

deleteIcon.addEventListener("click",()=>{
  dialogD.style.display="flex"
  
})



  return controlBox;
}
