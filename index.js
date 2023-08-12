let menuBtn = document.getElementById("menuBtn")
let sideBar = document.getElementById("sideBar")
let VideoContainer=document.getElementById("VidCont")

menuBtn.addEventListener('click',()=>{
    sideBar.classList.toggle("resize-sidebar")
    VideoContainer.classList.toggle("wider-container")
})