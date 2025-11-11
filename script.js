document.addEventListener('DOMContentLoaded', function() {
    const keys = document.querySelectorAll('.key');
    
    // Map keyboard keys to piano notes
    const keyMap = {
        'a': 'C',
        'w': 'Db',
        's': 'D',
        'e': 'Eb',
        'd': 'E',
        'f': 'F',
        't': 'Gb',
        'g': 'G',
        'y': 'Ab',
        'h': 'A',
        'u': 'Bb',
        'j': 'B'
    };
    
    // Function to play a note
    function playNote(note) {
        const audio = document.getElementById(note);
        if (audio) {
            audio.currentTime = 0; // Rewind to start
            audio.play();
        }
    }
    
    // Function to activate a key visually
    function activateKey(keyElement) {
        keyElement.classList.add('active');
        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 200);
    }
    
    // Click event for piano keys
    keys.forEach(key => {
        key.addEventListener('click', function() {
            const note = this.getAttribute('data-note');
            playNote(note);
            activateKey(this);
        });
    });
    
    // Keyboard event listener
    document.addEventListener('keydown', function(event) {
        const key = event.key.toLowerCase();
        const note = keyMap[key];
        
        if (note) {
            playNote(note);
            
            // Find and activate the corresponding key
            const keyElement = document.querySelector(`.key[data-note="${note}"]`);
            if (keyElement) {
                activateKey(keyElement);
            }
            
            // Prevent default behavior for piano keys
            if (Object.keys(keyMap).includes(key)) {
                event.preventDefault();
            }
        }
    });
    
    // Touch events for mobile devices
    keys.forEach(key => {
        key.addEventListener('touchstart', function(event) {
            event.preventDefault();
            const note = this.getAttribute('data-note');
            playNote(note);
            activateKey(this);
        });
    });
});
