
class ImageSlider extends HTMLElement {
  constructor() {
    
    // Always call super first in constructor
    super(); //蝜潭㗁htmlElement��撱箸�见��

   
    
    // Create a standard img element and set its attributes.
    var img = document.createElement('img');
    //let images = this.getAttribute('data-images').split(",");
    let images = ["https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png","https://camo.githubusercontent.com/eb464a60a4a47f8b600aa71bfbc6aff3fe5c5392/68747470733a2f2f7261772e6769746875622e636f6d2f766f6f646f6f74696b69676f642f6c6f676f2e6a732f6d61737465722f6a732e706e67","https://camo.githubusercontent.com/891e94cd8dda7f40f451bb27067be513c230318a/68747470733a2f2f7261772e6769746875622e636f6d2f766f6f646f6f74696b69676f642f6c6f676f2e6a732f6d61737465722f626f676a732f6a732e706e67"]
    console.log(images)

    let currentImage = 1;
    img.src = images[0];
    img.width = '150';
    img.height = '150';
 
    
   
    // Add the image to the custom element.
    this.appendChild(img);  //雿輻鍂鈭�htmlElement���䲮瘜�
    setInterval(function(){
      if(currentImage > images.length){
        currentImage = 1;
      }
      img.src = images[currentImage - 1];
      currentImage++;

    },1000)


  }
}

// Define the new element
customElements.define('image-slider', ImageSlider);
