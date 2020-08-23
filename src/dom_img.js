import './css/styles.css';
import coffee from './assets/coffee.jpg';
import jeans from './assets/main.jpeg';
 function displayImg(){
  let image = document.createElement('img');
      image.setAttribute('src',`${coffee}`);
      image.className = "imgClass";
      document.body.appendChild(image);
}
displayImg();

function displayOverlay(){

    /*Overlay*/
    let overlay =  document.createElement('div');
    overlay.className = "overlayClass";
    overlay.style.position = "absolute";
    overlay.style.top = window.pageYOffset + "px";
    overlay.style.left =  window.pageXOffset + "px";
    overlay.style.background = 'rgba(0,0,0,0.7)';
    overlay.style.width = window.innerWidth + "px";
    overlay.style.height = window.innerHeight + "px";
    /*Close icon*/
    let x = document.createElement('span');
    x.className = "close";
    x.innerText = "X";
    document.body.appendChild(x);
    document.body.appendChild(overlay);

    /*Figure and Large Img*/
    let figure = document.createElement('figure');
    let enlargeImg = document.createElement('img');
    enlargeImg.className = "bigImgClass";
    enlargeImg.src = `${jeans}`;
    figure.appendChild(enlargeImg);
    document.body.appendChild(figure);

    /*Original Img to remove*/
    let originalImg = document.querySelector('.imgClass');
    originalImg.parentNode.removeChild(originalImg);

    /*Remove overlay when it is clicked*/
    document.querySelector('.overlayClass').addEventListener('click',function(e){
      let overlay_element = e.target.parentNode;
      if(overlay_element){
        overlay_element.parentNode.removeChild(overlay_element);
      }
    },false);
    document.querySelector('.close').addEventListener('click',function(e){
      let overlay_element = e.target.parentNode;
      if(overlay_element){
        overlay_element.parentNode.removeChild(overlay_element);
      }
    },false);


}
document.querySelector('.imgClass').addEventListener('click',displayOverlay,false);
