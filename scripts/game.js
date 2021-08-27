

let board = ["", "", "", "", "", "","", "", ""];
    playerTime = Math.round(Math.random());
    gameOver = false;
    symbols = ["o", "x"];
    placarO = 0;
    placarX = 0;     

let winStates = [
     [0, 1, 2],
     [3, 4, 5],
     [6, 7, 8],
     [0, 3, 6],
     [1, 4, 7],
     [2, 5, 8],
     [0, 4, 8],
     [2, 4, 6]    
]

function  handleMove(position){
  if(gameOver){
    return;
  }  
  if(board[position] == ""){
  board[position] = symbols[playerTime];  

    gameOver = isWin();

   if(gameOver == false){
    playerTime = (playerTime == 0)?1:0
   
   }else{
    return true;

   }

  }
  
}
function isWin(){
   for(let i = 0; i<winStates.length; i++){
     let seq = winStates[i]
    let pos0 = seq[0];
    let pos1 = seq[1];
    let pos2 = seq[2];
    
   if(board[pos0] == board[pos1] && board[pos0] == board[pos2] && board[pos0] != ""){
     return true;
   }
  
  }
return false;
}
let playAgain = ()=>{
     for(let i = 0; i < board.length; i++){
       board[i] = ""

       
     }
       playerTime = Math.round(Math.random());
       gameOver = false;
       
    }

function drawn(){
  if(gameOver == false && board[0] != "" && board[1] != "" && board[2] != "" && board[3] != "" && board[4] != "" && board[5] != "" && board[6] != "" && board[7] != ""  && board[8] != ""){
    return true;
  }else{
    return false
  }

}

function testeVitoria(){
  if(placarO == 3 ){
            
    setTimeout(()=>{
        alert('Parabens o vencedor deste torneio é:' + jogadorInicial(playerTime))
        return;
    },10)
   
  
}else if(placarX == 3 ){
  
    setTimeout(()=>{
        alert('Parabens o vencedor deste torneio é:' +  jogadorInicial(playerTime))
        return
        },10)
      
    } 
}

function jogadorInicial(JOGADORINICIAL){
  if(playerTime == 0){
      return 'O';
  }else{
      return 'X';
  }
}