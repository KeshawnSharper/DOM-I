let i = 0
let x = 0
let y = 0
let g = 5
let interval = setInterval(timeOut, 1000);
function timeOut(){
 if (i == -1){
    i = 9
   x--
   if (x == -1 )
     {
       x = 5
       g--
     }
  } 
  document.querySelector('#secondTens').textContent = y
  document.querySelector('#secondOnes').textContent = g
  document.querySelector('#msTens').textContent=i
  document.querySelector('#msHundreds').textContent = x 
 i--
  if ( g == 0 && i == -1 && x == 0 ){
   clearInterval(interval)
}
 
 }