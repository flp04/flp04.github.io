// Get the player element
const player = document.getElementById('player');

// Set initial position
let position = 0;

// Move player left
function moveLeft() {
  if (position > 0) {
    position -= 50;
    player.style.left = position + 'px';
  }
}

// Move player right
function moveRight() {
  if (position < 450) {
    position += 50;
    player.style.left = position + 'px';
  }
}

// Listen for arrow key presses
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    moveLeft();
  } else if (event.key === 'ArrowRight') {
    moveRight();
  }
});

// Computer player
setInterval(function() {
  if (position < 450) {
    position += 50;
    player.style.left = position + 'px';
  } else {
    position = 0;
    player.style.left = position + 'px';
  }
}, 1000);
