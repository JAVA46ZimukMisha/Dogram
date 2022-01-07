console.log("Script launched");
let detailsImage = document.querySelector(".details-image");
let anchors = document.querySelectorAll(".thumbnails-anchor");// all HTML elements belonging to the class thumbnails-anchor
let detailsTitle = document.querySelector(".details-title");
let mainContentEl = document.querySelector(".main-content");
let detailsSound = document.querySelector(".details-sound");
let selectedItem;
for(let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function(event) {
        event.preventDefault(); //canceling default behavior of anchor element
        showDetails();
        setDetails(anchors[i]); //setDetails function call with passing reference to appropriate anc 
    });
}
function setDetails(anchor){
    console.log("anchor was pressed", anchor);
    let hrefValue = anchor.getAttribute("href");
    detailsImage.setAttribute("src", hrefValue);
    anchor.parentElement.classList.add("selected");
    if (selectedItem && selectedItem!=anchor.parentElement){
        selectedItem.classList.remove("selected");
    }
    selectedItem = anchor.parentElement;
    //get element with class thumbnails-title inside the given anchor
    let thumbnailsTitleSelector = `[href="${hrefValue}"] .thumbnails-title`;
    let thumbnailsSoundSelector = `[href="${hrefValue}"] .thumbnails-sound`;
    let thumbnailsTitleElement = document.querySelector(thumbnailsTitleSelector);
    let thumbnailsSoundElement = document.querySelector(thumbnailsSoundSelector);
    //dog name exist inside thumbnailsTitleElement.textContent
    detailsTitle.textContent = `${thumbnailsTitleElement.textContent}: ${anchor.getAttribute("data-details-title")}` ;
    let soundValue = thumbnailsSoundElement.getAttribute("src");
    detailsSound.setAttribute("src", soundValue);
    detailsSound.muted = false;
    setTimeout (trueMuted, 1700);
}
function showDetails() {
    mainContentEl.classList.remove("hidden");
    detailsImage.parentElement.classList.add('is-tiny');
    setTimeout(function () {detailsImage.parentElement.classList.remove('is-tiny');},1);
}
function hideDetails() {
    mainContentEl.classList.add("hidden");
    selectedItem.classList.remove("selected");
}
function trueMuted() {
    detailsSound.muted = true;
}