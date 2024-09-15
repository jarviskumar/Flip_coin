let coin = document.getElementById('coin');
let flip_btn = document.getElementById('flip_btn');
let reset = document.getElementById('reset_btn');
let result = document.getElementById('result')
let flip_audio = new Audio("coin_flip.mp3")
function flip_coin(){
  let i = Math.floor(Math.random()*2);
  coin.style.animation = "none"
  if(i){
    setTimeout(()=>{
      coin.style.animation = "spin-head 3s forwards";
      flip_btn.disabled = true
      
    },100);
    setTimeout(()=>{
      result.textContent = "HEADS"
      flip_btn.disabled = false
    },3100)
    
  }
  else{
    setTimeout(()=>{
      coin.style.animation = "spin-tail 3s forwards"
      flip_btn.disabled = true
    }, 100);
    setTimeout(()=>{
      result.textContent = "TAILS"
      flip_btn.disabled = false
    },3100)
  }
  result.textContent = "Tossing..."
  flip_audio.play()
}

flip_btn.addEventListener("click", flip_coin )
