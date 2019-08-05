function playSound(event){
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if(audio){
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
    }
}

function removePlaying(event){
    if(event.propertyName != 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removePlaying));

window.addEventListener('keydown', playSound);

function playSound2(val){
    const audio = document.querySelector(`audio[data-key="${val}"]`);
    const key = document.querySelector(`.key[data-key="${val}"]`);
    if(audio){
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
    }
}
function modeChange(){
    const audio = document.querySelectorAll('.mChangeAudio');
}