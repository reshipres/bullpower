// Get elements
const pumpBtn = document.getElementById('pumpBtn');
const hodlBtn = document.getElementById('hodlBtn');
const explosion = document.getElementById('explosion');
const lockedChapters = document.querySelectorAll('.story-chapter.locked');

// Track unlocked chapters
let unlockedChapters = new Set();

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

// Locked chapter click - reveal randomly
lockedChapters.forEach(chapter => {
    chapter.addEventListener('click', function() {
        if (!this.classList.contains('unlocked')) {
            unlockChapter(this);
        }
    });
});

// Unlock chapter function
function unlockChapter(chapter) {
    const chapterNum = chapter.getAttribute('data-chapter');
    
    if (unlockedChapters.has(chapterNum)) {
        return; // Already unlocked
    }
    
    // Add unlocked class
    chapter.classList.remove('locked');
    chapter.classList.add('unlocked');
    unlockedChapters.add(chapterNum);
    
    // Create explosion effect
    createExplosion('🔓', 15, '#ff0000');
    createExplosion('⚡', 15, '#ffd700');
    
    // Flash screen
    flashScreen('#ff0000');
    
    // Store in localStorage
    localStorage.setItem(`chapter_${chapterNum}_unlocked`, 'true');
}

// Check localStorage on page load
window.addEventListener('DOMContentLoaded', function() {
    lockedChapters.forEach(chapter => {
        const chapterNum = chapter.getAttribute('data-chapter');
        if (localStorage.getItem(`chapter_${chapterNum}_unlocked`) === 'true') {
            chapter.classList.remove('locked');
            chapter.classList.add('unlocked');
            unlockedChapters.add(chapterNum);
        }
    });
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

// Bull logo simple hover
const bullLogo = document.querySelector('.bull-logo');
if (bullLogo) {
    bullLogo.addEventListener('click', function() {
        createExplosion('🐂', 12, '#ff0000');
    });
}

console.log('🐂 BULLPOWER - 从心碎到登月！ 🚀');
console.log('点击锁定的章节揭示传奇故事...');
