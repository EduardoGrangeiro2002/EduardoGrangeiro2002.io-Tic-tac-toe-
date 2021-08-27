
let jogador1= document.getElementById("jogador1");
let jogador2 = document.getElementById("jogador2");
let melhorde3 = 3;


document.addEventListener('DOMContentLoaded', ()=>{

   
    let player1 = document.getElementById('player1');
    
    let player2 = document.getElementById('player2');
    

    




        player1.innerHTML = 'X: ' + placarO + '/3';
        player2.innerHTML = 'O: ' + placarX + '/3';

        
        
    alert('O jogador que iniciara a partida é o jogador: ' + jogadorInicial(playerTime) ) 

     

    let squares = document.querySelectorAll('.square');

   squares.forEach((square)=>{
        
        square.addEventListener('click', handleClick);
    })

   function handleClick(element){
    let square = element.target;

    let position = square.id;
    
    if(handleMove(position)){
    
        setTimeout(()=>{
            
            alert('O jogo acabou e o vencedor é' + " o jogador " + jogadorInicial(playerTime))
            if(playerTime == 0){
                player2.innerHTML = 'O: ' +  (placarO += 1) + '/3';
                testeVitoria()
            }else{
                player1.innerHTML = 'X: ' + (placarX += 1) + '/3';
                testeVitoria()

            }  
        }, 10)


    }
    
    upgradeSquare(position);

    if(drawn() == true){
           alert('Empate')
    }

    }

    function upgradeSquare(position){
        let square = document.getElementById(position.toString());
        let symbol = board[position];
        square.innerHTML = `<div class='${symbol}'</div>`
        
    }
    
    function updatesSquares(){
        
        setTimeout(() =>{alert('O jogador que iniciara a partida é o jogador: ' + jogadorInicial(playerTime))},10)
        
        
        
        let squares = document.querySelectorAll('.square')
            squares.forEach((square) =>{
            let position = square.id
            let symbol = board[position];

            if(symbol == ''){
                square.innerHTML = `<div class='${symbol}'</div>`
            }


        })
      //Resetando o torneio//
      if(placarX == 3 || placarO == 3){
          placarX = 0;
          placarO = 0;
          player1.innerHTML = 'X: ' + placarO + '/3';
          player2.innerHTML = 'O: ' + placarX + '/3';
      }


    }
    
    // Jogar novamente//
    let resetGame = document.getElementById('PlayAgain');
    resetGame.addEventListener('click', updatesSquares)
    //FIM//
    
    drawn()

})


//canvas//
let canvas = document.getElementById("mycanvas");

let ctx = canvas.getContext("2d")

ctx.moveTo(100,0);
ctx.lineTo(100,320);
ctx.strokeStyle = "black"
ctx.lineWidth= 6;
ctx.lineTo(100,220)
ctx.lineTo(215,220)
ctx.lineTo(215, 320)
ctx.lineTo(215,220)
ctx.lineTo(320,220);
ctx.lineTo(215,220)
ctx.lineTo(215,0)
ctx.lineTo(215,100)
ctx.lineTo(0,100)
ctx.lineTo(320,100)
ctx.lineTo(215,100)
ctx.lineTo(215,220)
ctx.lineTo(0,220)
ctx.stroke();
//canvas fim//

