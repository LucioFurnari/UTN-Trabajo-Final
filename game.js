const emptyCards = document.querySelectorAll(".game-cards .card");
const images = document.querySelectorAll(".images-container img");
const restartButton = document.querySelector(".restart-button");

function allowDrop(event) {
  event.preventDefault();
}
function drag(event) {
  let src = event.target.src;
  event.dataTransfer.setData("text", src);

}

function drop(event,elem) {
  let src = event.dataTransfer.getData("text");
  if(elem.firstElementChild.tagName != "IMG"){
    elem.removeChild(elem.firstElementChild);
    const img = document.createElement("img")
    elem.append(img)
    elem.firstElementChild.src = src;
    images.forEach((img) => {
      if(img.src == src) {
        img.classList.add("hide");
      }
    })
  }
}

images.forEach((elem) => {
  elem.addEventListener("dragstart",drag);
})

emptyCards.forEach((elem) => {
  elem.addEventListener("drop",(event) =>{
    drop(event,elem)
  })
  elem.addEventListener("dragover",allowDrop);
})

restartButton.addEventListener("click",() => {
  window.location.reload();
})