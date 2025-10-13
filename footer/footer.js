import { SecondaryColor, whiteColor } from "../Main/helpers.js"

let footer = document.getElementsByTagName("footer")[0]
let text1 = document.createElement("p")
let text2 = document.createElement("p")

text1.innerHTML="&copy 2025 Social Media App. A modern platform for sharing moments."
text2.innerHTML="Built with HTML, CSS, and Javascript"

footer.appendChild(text1)
footer.appendChild(text2)

// add style
footer.style.display="flex"
footer.style.flexDirection="column"
footer.style.alignItems="center"
footer.style.justifyContent="center"
footer.style.gap="10px"
footer.style.padding="15px 0"
footer.style.backgroundColor=whiteColor
footer.style.color=SecondaryColor
footer.style.textAlign="center"
