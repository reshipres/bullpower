// Get elements
const pumpBtn = document.getElementById('pumpBtn');
const hodlBtn = document.getElementById('hodlBtn');
const explosion = document.getElementById('explosion');

// PUMP button effect - simple
pumpBtn.addEventListener('click', function() {
    createExplosion('🚀', 20, '#ff0000');
    flashScreen('#ff0000');
});

// HODL button effect - simple
hodlBtn.addEventListener('click', function() {
    createExplosion('💎', 20, '#8b0000');
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
            const velocity = 150 + Math.random() * 200;
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
        }, i * 20);
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
        flash.style.opacity = '0.2';
    }, 10);
    
    setTimeout(() => {
        flash.style.opacity = '0';
    }, 150);
    
    setTimeout(() => {
        flash.remove();
    }, 450);
}

// Bull logo click
const bullLogo = document.querySelector('.bull-logo');
if (bullLogo) {
    bullLogo.addEventListener('click', function() {
        createExplosion('🐂', 12, '#ff0000');
    });
}

// Compact locked chapters - click effect
const lockedMinis = document.querySelectorAll('.locked-mini');
lockedMinis.forEach(mini => {
    mini.addEventListener('click', function(e) {
        createExplosion('🔓', 6, '#ff0000');
    });
});

console.log('🐂 BULLPOWER - 从心碎到登月！ 🚀');
