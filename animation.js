
   let
     canvas = document.getElementById("canvas"),
     ctx = canvas.getContext('2d');

   let img = {
       imgO : new Image,
       imgX : new Image 
   }  
img.imgX.src = '../imagens/X.png'
img.imgO.src = '../imagens/O.png'
  
   
  setInterval(drawImg(),2);

function drawImg(){
    let x = 0, y = 0;
    let x2 = 0, y2 = 0;
    let direction = true;
   
          return function(){ 
              if(direction == true){
              ctx.clearRect(0, 0, canvas.width, canvas.height)
              ctx.drawImage(img.imgX, x, y + 100, 40, 40);
              ctx.drawImage(img.imgO, x, y + 400, 40, 40);
              ctx.drawImage(img.imgX, x, y + 600, 40, 40);
              ctx.drawImage(img.imgO, x, y + 800, 40, 40);


              ctx.drawImage(img.imgX, x2 + 100, y2 - 150, 40, 40);
              ctx.drawImage(img.imgX, x2 + 400, y2 + -200, 40, 40);
              ctx.drawImage(img.imgX, x2 + 800, y2 - 250, 40, 40);
              ctx.drawImage(img.imgO, x2 + 1200, y2 - 300, 40, 40);
              ctx.drawImage(img.imgX, x2 + 1600, y2 - 350, 40, 40);
              x += 5;
              y2 += 5;
              }
              if(direction == false){
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                ctx.drawImage(img.imgX, x, y + 100, 40, 40);
                ctx.drawImage(img.imgO, x, y + 400, 40, 40);
                ctx.drawImage(img.imgX, x, y + 600, 40, 40);
                ctx.drawImage(img.imgO, x, y + 800, 40, 40);
  
  
                ctx.drawImage(img.imgX, x2 + 100, y2 - 150, 40, 40);
                ctx.drawImage(img.imgX, x2 + 400, y2 + -200, 40, 40);
                ctx.drawImage(img.imgX, x2 + 800, y2 - 250, 40, 40);
                ctx.drawImage(img.imgO, x2 + 1200, y2 - 300, 40, 40);
                ctx.drawImage(img.imgX, x2 + 1600, y2 - 350, 40, 40);
                
                x-=5;
                y2-=5;
            }
              
              if(y2 > 3000){
                  direction = false
                  
              }
              if(y2 < -1000){
                  direction = true
              }
          
}
}





