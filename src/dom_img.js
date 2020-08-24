import './css/styles.css';
import coffee from './assets/coffee.jpg';
import jeans from './assets/main.jpeg';
import jeans1 from './assets/jeans1.jpeg';
import jeans2 from './assets/jeans2.jpeg';
import jeans3 from './assets/jeans3.jpeg';
import jeans4 from './assets/jeans4.jpeg';
function displayImg(){
  let pictures = document.querySelector('ul').children;
  for(let idx = 0; idx <pictures.length; idx++){
    let img = document.createElement('img');
    if(idx===0){
        img.setAttribute('src',`${jeans1}`);
        img.id=`${idx}`
        pictures[idx].appendChild(img);
    }
    else if(idx ===1){
      img.setAttribute('src',`${jeans2}`);
      img.id=`${idx}`
      pictures[idx].appendChild(img);
    }
    else if(idx===2){
      img.setAttribute('src',`${jeans3}`);
      img.id=`${idx}`
      pictures[idx].appendChild(img);
    }
    else{
      img.setAttribute('src',`${jeans4}`);
      img.id=`${idx}`
      pictures[idx].appendChild(img);
    }

  }


}
displayImg();

function displayOverlay(givenId){

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
    let img = document.createElement('img');
    img.className = "bigImgClass";
    if(givenId===0){
        img.setAttribute('src',`${jeans1}`);

    }
    else if(givenId ===1){
      img.setAttribute('src',`${jeans2}`);
    }
    else if(givenId===2){
      img.setAttribute('src',`${jeans3}`);
    }
    else {
      img.setAttribute('src',`${jeans4}`);
    }
    figure.appendChild(img);
    document.body.appendChild(figure);

    /*Original Img to remove*/
    let originalImg = document.querySelector('.pictures');
    originalImg.parentNode.removeChild(originalImg);
    /*Remove overlay when it is clicked*/
    document.querySelector('.overlayClass').addEventListener('click',function(e){
      let overlay_element = e.target;
      let bigPicture = overlay_element.nextElementSibling;
      if(overlay_element){
        overlay_element.parentNode.removeChild(overlay_element);
        bigPicture.parentNode.removeChild(bigPicture);
      }
    },false);
    document.querySelector('.close').addEventListener('click',function(e){
      let elements = e.target.parentNode.children;
      let span = elements[1];
      let overlay = elements[2];
      let figure = elements[3];
      span.parentNode.removeChild(span);
      overlay.parentNode.removeChild(overlay);
      figure.parentNode.removeChild(figure);
      
    },false);


}
document.querySelector('.pictures').addEventListener('click',function(e){
  console.log(e.target.id)
  displayOverlay(Number(e.target.id));
},false);
