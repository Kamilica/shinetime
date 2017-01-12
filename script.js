var image=document.getElementById("mySlide");
var imageArray=["img/slideshow1.jpg", "img/slideshow2.jpg", "img/slideshow3.jpg", "img/slideshow4.jpg"];

var imageIndex=1;

function slide(){

image.setAttribute("src",imageArray [imageIndex] );
imageIndex++;
if(imageIndex>=imageArray.length) {
    imageIndex=0;

}
}
setInterval(slide,4000);