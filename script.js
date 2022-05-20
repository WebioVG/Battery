// Declare variables
let notesKey = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL'];
let audios = [new Audio('sounds/clap.wav'), new Audio('sounds/hihat.wav'), new Audio('sounds/kick.wav'), new Audio('sounds/openhat.wav'), new Audio('sounds/boom.wav'), new Audio('sounds/ride.wav'), new Audio('sounds/snare.wav'), new Audio('sounds/tom.wav'), new Audio('sounds/tink.wav')];

// Get HTML elements
let notes = document.getElementsByClassName('select');

// Main
for (let note of notes) {
    note.classList.remove('selectApply');  
}

window.addEventListener('keydown', function(event) {
    let counter = -1;

    for (let note of notesKey) {
        counter++;

        if (event.code == note) {
            audios[counter].play();
            notes[counter].classList.add('selectApply');
            notes[counter].classList.remove('bg-slate-400');

            notes[counter].addEventListener('transitionend', function(event) {
                console.log(event);
                this.classList.add('bg-slate-400');
                this.classList.remove('selectApply');

            })
        }
    }

})