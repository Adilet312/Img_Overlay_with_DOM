import './css/styles.css';
import coffee from './assets/coffee.jpg';
import jeans from './assets/main.jpeg';
 function displayImg(){
  let image = document.createElement('img');
      image.setAttribute('src',`${coffee}`);
      image.className = "imgClass";
      image.style.width = "20em";
      image.style.height = "20em";
      document.body.appendChild(image);
}
displayImg();

function displayOverlay(e){
    let overlay =  document.createElement('div');
    overlay.className = "overlayClass";
    overlay.style.position = "absolute";
    overlay.style.top = window.pageYOffset + "px";
    overlay.style.left =  window.pageXOffset + "px";
    overlay.style.background = 'rgba(0,0,0,0.7)';
    overlay.style.width = window.innerWidth + "px";
    overlay.style.height = window.innerHeight + "px";
    /*Img frame*/
    let figure = document.createElement('figure');
    let enlargeImg = document.createElement('img');
    enlargeImg.className = "bigImgClass";
    enlargeImg.src = `${jeans}`;
    figure.appendChild(enlargeImg);

    let originalImg = document.querySelector('.imgClass');
    originalImg.parentNode.removeChild(originalImg);
    document.body.appendChild(figure);
    document.body.appendChild(overlay);
    /*Remove overlay when it is clicked*/
    if(overlay){
      let ol = e.target.nextElementSibling;
      ol.addEventListener('click',function(){
        ol.parentNode.removeChild(ol);
      },false)
    /**/

    }


}
document.querySelector('.imgClass').addEventListener('click',displayOverlay,false);
