console.log("Script launched");
let detailsImage = document.querySelector(".details-image");
let anchors = document.querySelectorAll(".thumbnails-anchor");// all HTML elements belonging to the class thumbnails-anchor
let detailsTitle = document.querySelector(".details-title");
for(let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function(event) {
        event.preventDefault(); //canceling default behavior of anchor element
        setDetails(anchors[i]); //setDetails function call with passing reference to appropriate anc
        
    });
}
function setDetails(anchor){
    console.log("anchor was pressed", anchor);
    detailsImage.setAttribute("src", anchor.getAttribute("href"));
    detailsTitle.textContent = anchor.getAttribute("data-details-title");
}
