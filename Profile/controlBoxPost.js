import {dialogDelete} from "./dialog.js"



export function controlBoxPost(postId,authorId) {
  let controlBox = document.createElement("div");

  let deleteIcon = document.createElement("i");

  let dialogD=dialogDelete(postId,authorId)
document.body.appendChild(dialogD)
document.body.style.height="100vh"
document.body.style.width="100%"
dialogD.style.display="none"


  deleteIcon.classList.add("fa-solid", "fa-trash");

  controlBox.style.padding = "20px 20px";
  controlBox.style.paddingBottom = "0";
  controlBox.style.display = "flex";
  controlBox.style.justifyContent = "end";
  controlBox.style.gap = "20px";


  
  deleteIcon.style.color = "red";

  for (let icon of [ deleteIcon]) {
    icon.style.fontSize = "20px";
    icon.style.padding = "15px";
    icon.style.borderRadius = "50%";
    icon.style.cursor = "pointer";
    controlBox.appendChild(icon);
  }


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
