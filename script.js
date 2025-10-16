// Get elements
const pumpBtn = document.getElementById('pumpBtn');
const hodlBtn = document.getElementById('hodlBtn');
const explosion = document.getElementById('explosion');
const body = document.body;

// PUMP button effect
pumpBtn.addEventListener('click', function() {
    // Screen shake
    body.classList.add('shake');
    setTimeout(() => body.classList.remove('shake'), 500);
    
    // Create rocket explosion
    createExplosion('🚀', 30, '#ff0000');
    
    // Sound effect (visual representation)
    flashScreen('#ff0000');
});

// HODL button effect
hodlBtn.addEventListener('click', function() {
    // Screen shake
    body.classList.add('shake');
    setTimeout(() => body.classList.remove('shake'), 500);
    
    // Create diamond explosion
    createExplosion('💎', 25, '#8b0000');
    
    // Sound effect (visual representation)
    flashScreen('#8b0000');
});

// Create particle explosion
function createExplosion(emoji, count, color) {
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.textContent = emoji;
            
            // Random position from center
            const angle = (Math.PI * 2 * i) / count;
            const velocity = 200 + Math.random() * 300;
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity;
            
            particle.style.setProperty('--tx', `${tx}px`);
            particle.style.setProperty('--ty', `${ty}px`);
            particle.style.left = '50%';
            particle.style.top = '50%';
            particle.style.color = color;
            
            explosion.appendChild(particle);
            
            // Remove particle after animation
            setTimeout(() => {
                particle.remove();
            }, 2000);
        }, i * 30);
    }
}

// Flash screen effect
function flashScreen(color) {
    const flash = document.createElement('div');
    flash.style.position = 'fixed';
    flash.style.top = '0';
    flash.style.left = '0';
    flash.style.width = '100%';
    flash.style.height = '100%';
    flash.style.background = color;
    flash.style.opacity = '0';
    flash.style.pointerEvents = 'none';
    flash.style.zIndex = '999';
    flash.style.transition = 'opacity 0.3s ease';
    
    document.body.appendChild(flash);
    
    // Trigger flash
    setTimeout(() => {
        flash.style.opacity = '0.3';
    }, 10);
    
    setTimeout(() => {
        flash.style.opacity = '0';
    }, 200);
    
    setTimeout(() => {
        flash.remove();
    }, 500);
}

// Bull logo click effect
const bullLogo = document.querySelector('.bull-logo');
if (bullLogo) {
    bullLogo.addEventListener('click', function() {
        // Spin and glow
        this.style.transform = 'scale(1.2) rotate(360deg)';
        this.style.filter = 'drop-shadow(0 0 80px rgba(255, 0, 0, 1))';
        
        // Create mini explosion
        createExplosion('🐂', 15, '#ff0000');
        
        setTimeout(() => {
            this.style.transform = '';
            this.style.filter = '';
        }, 600);
    });
}

// Random floating emojis in background
function createFloatingEmoji() {
    const emojis = ['🔥', '💪', '⚡', '🚀', '💎'];
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    
    const floating = document.createElement('div');
    floating.textContent = emoji;
    floating.style.position = 'fixed';
    floating.style.fontSize = '2rem';
    floating.style.left = Math.random() * 100 + '%';
    floating.style.top = '-50px';
    floating.style.opacity = '0.2';
    floating.style.pointerEvents = 'none';
    floating.style.zIndex = '1';
    floating.style.transition = 'all 10s linear';
    
    document.body.appendChild(floating);
    
    setTimeout(() => {
        floating.style.top = '110vh';
        floating.style.transform = `rotate(${Math.random() * 360}deg)`;
    }, 100);
    
    setTimeout(() => {
        floating.remove();
    }, 10000);
}

// Create floating emojis periodically
setInterval(createFloatingEmoji, 2000);

// Initial floating emojis
for (let i = 0; i < 5; i++) {
    setTimeout(createFloatingEmoji, i * 400);
}

console.log('🐂 BULLPOWER ACTIVATED! 🚀');
console.log('PUMP IT! 💎');
