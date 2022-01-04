console.log("Script launched");
let detailsImage = document.querySelector(".details-image");
let anchors = document.querySelectorAll(".thumbnails-anchor");// all HTML elements belonging to the class thumbnails-anchor
let detailsTitle = document.querySelector(".details-title");
let mainContentEl = document.querySelector(".main-content");
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
    if (selectedItem){
        selectedItem.classList.remove("selected");
    }
    selectedItem = anchor.parentElement;
    //get element with class thumbnails-title inside the given anchor
    let thumbnailsTitleSelector = `[href="${hrefValue}"] .thumbnails-title`;
    let thumbnailsTitleElement = document.querySelector(thumbnailsTitleSelector);
    //dog name exist inside thumbnailsTitleElement.textContent
    detailsTitle.textContent = `${thumbnailsTitleElement.textContent}: ${anchor.getAttribute("data-details-title")}` ;

}
function showDetails() {
    mainContentEl.classList.remove("hidden");
}
function hideDetails() {
    mainContentEl.classList.add("hidden");
    selectedItem.classList.remove("selected");
}