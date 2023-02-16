var buttons = document.querySelectorAll(".tile");

// this one is for the click event 

/* This is a for loop that loops through all the buttons and adds an event listener to each one. */
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var buttonNote = this.textContent;
    playSound(buttonNote);
  });
}


// this is for the keypress evenrt 

/* This is an event listener that listens for a keypress event. When a key is pressed, it calls the
function that is passed to it. The function takes the key that is pressed and passes it to the
playSound function. */
document.addEventListener("keypress", function(event) {
  var keyNote = event.key;
  playSound(keyNote);
});

/* A function that is called when a key is pressed or a button is clicked. It takes the note that is
pressed and plays the corresponding sound. */
function playSound(note) {
  var audio;
  switch (note) {
    case "a":
      audio = new Audio('./sounds/1.mp3');
      break;
    case "s":
      audio = new Audio('./sounds/2.mp3');
      break;
    case "d":
      audio = new Audio('./sounds/3.mp3');
      break;
    case "f":
      audio = new Audio('./sounds/4.mp3');
      break;
    case "g":
      audio = new Audio('./sounds/5.mp3');
      break;
    case "h":
      audio = new Audio('./sounds/1.mp3');
      break;
    case "j":
      audio = new Audio('./sounds/2.mp3');
      break;
    case "k":
      audio = new Audio('./sounds/3.mp3');
      break;
    case "l":
      audio = new Audio('./sounds/4.mp3');
      break;
  }
  audio.play();
}
