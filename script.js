function toggleMode() {
const  html= document.documentElement
html.classList.toggle("light")
// pegar a tag img
const img = document.querySelector("#profile img")
// substituir a imagem 
if(html.classList.contains("light")) {
     // se tiver light mode, adicionara imagem light
img.setAttribute("src","./assets/avatar-light.jpg")
img.setAttribute("src","./assets/avatar-light.jpg")
}else{
    // se tiver sem light mode, manter a imagem normal 
    img.setAttribute("src","./assets/avatar.jpg")
}



}