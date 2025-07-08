window.addEventListener('keydown', function(event){
    // console.log(event.keyCode);

    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    // if the press key is not present in the audio tag or their respective code then it will return nothing
    if(!audio) return; 
    audio.currentTime = 0;          // lopping an audio- for revine
    audio.play();
    key.classList.add('playing');
});

function removeTransition(event)
{
    console.log(event);
    if(event.propertyName !== 'transform') return ;
    this.classList.remove('playing');
    // console.log("remove class")
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));