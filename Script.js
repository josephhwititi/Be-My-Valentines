const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const question = document.getElementById('question');

// Logic to make the 'No' button run away
function moveButton() {
    // Get the window width/height but subtract button size so it doesn't go off screen
    const maxWidth = window.innerWidth - noBtn.offsetWidth;
    const maxHeight = window.innerHeight - noBtn.offsetHeight;
    
    const x = Math.random() * maxWidth;
    const y = Math.random() * maxHeight;
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// Triggers on hover (PC) and touch (Mobile)
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('click', moveButton);

function celebrate() {
    // 1. UPDATED SUCCESS MESSAGE HERE
    question.innerHTML = "You just made me the happiest man alive. I love you so much! ❤️";
    
    // 2. Hide the No button
    noBtn.style.display = 'none';
    
    // 3. Trigger Fireworks!
    var duration = 5 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function random(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      // specific blasts from left and right
      confetti({ ...defaults, particleCount, origin: { x: random(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: random(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
}
