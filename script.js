const player = document.getElementById('player');
const fire = document.getElementById('fire');

document.addEventListener('keydown', function(e){
    jump()
});
document.addEventListener('touchstart', function(e){
    jump()
});

function jump(){
    if (player.classList != 'jump'){
        player.classList.add('jump')
    }
    setTimeout( function(){
        player.classList.remove('jump')
    }, 300)
}
let isAlive = setInterval(() => {
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'))
    let fireLeft = parseInt(window.getComputedStyle(fire).getPropertyValue('left'))

    if(fireLeft < 40 && fireLeft > 0 && playerTop >= 170){
        alert('Game Over! Try again!')
    }
}, 10);