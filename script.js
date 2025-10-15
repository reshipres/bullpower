// Meme phrases for the bull
const memePhrases = [
    "TO THE MOON! 🚀",
    "DIAMOND HANDS! 💎",
    "HODL! 💪",
    "BULLISH AF! 🐂",
    "LFG!!! 🔥",
    "WEN LAMBO? 🏎️",
    "GM BULLS! ☀️",
    "WAGMI! 🌟",
    "NEVER SELLING! ❌",
    "ONLY UP! 📈",
    "BUY THE DIP! 💰",
    "BULLS NEVER SLEEP! 😤",
    "100X INCOMING! 💯",
    "THIS IS THE WAY! ✨",
    "POWER LEVEL: MAXIMUM! ⚡",
    "BEAR MARKET? NEVER HEARD OF IT! 🐂",
    "UNSTOPPABLE! 💪",
    "WE'RE SO EARLY! ⏰",
    "BULLPOWER TO INFINITY! ♾️",
    "NO BRAKES ON THIS BULL! 🚂"
];

// Click on the bull
const bullMascot = document.getElementById('bullMascot');
const memePhrase = document.getElementById('memePhrase');

bullMascot.addEventListener('click', function() {
    // Add shake animation
    this.classList.add('shake');
    setTimeout(() => {
        this.classList.remove('shake');
    }, 500);
    
    // Show random phrase
    const randomPhrase = memePhrases[Math.floor(Math.random() * memePhrases.length)];
    memePhrase.textContent = randomPhrase;
    memePhrase.classList.add('show');
    
    setTimeout(() => {
        memePhrase.classList.remove('show');
    }, 2000);
});

// TO THE MOON Button
const moonButton = document.querySelector('.btn-primary');
moonButton.addEventListener('click', function() {
    // Create rocket effects
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            createRocket();
        }, i * 100);
    }
    
    // Show phrase
    memePhrase.textContent = "🚀 TO THE MOON! 🚀";
    memePhrase.classList.add('show');
    setTimeout(() => {
        memePhrase.classList.remove('show');
    }, 2000);
});

// HODL Button
const hodlButton = document.querySelector('.btn-secondary');
hodlButton.addEventListener('click', function() {
    memePhrase.textContent = "💎 DIAMOND HANDS ACTIVATED! 💎";
    memePhrase.classList.add('show');
    setTimeout(() => {
        memePhrase.classList.remove('show');
    }, 2000);
    
    // Create diamonds
    for (let i = 0; i < 15; i++) {
        createDiamond();
    }
});

// Create rocket
function createRocket() {
    const rocket = document.createElement('div');
    rocket.textContent = '🚀';
    rocket.style.position = 'fixed';
    rocket.style.fontSize = '3rem';
    rocket.style.left = Math.random() * window.innerWidth + 'px';
    rocket.style.bottom = '-100px';
    rocket.style.transition = 'all 2s ease-out';
    rocket.style.zIndex = '9999';
    document.body.appendChild(rocket);
    
    setTimeout(() => {
        rocket.style.bottom = window.innerHeight + 100 + 'px';
        rocket.style.opacity = '0';
    }, 10);
    
    setTimeout(() => {
        rocket.remove();
    }, 2100);
}

// Create diamond
function createDiamond() {
    const diamond = document.createElement('div');
    diamond.textContent = '💎';
    diamond.style.position = 'fixed';
    diamond.style.fontSize = '2rem';
    diamond.style.left = Math.random() * window.innerWidth + 'px';
    diamond.style.top = '-100px';
    diamond.style.transition = 'all 3s ease-in';
    diamond.style.zIndex = '9999';
    document.body.appendChild(diamond);
    
    setTimeout(() => {
        diamond.style.top = window.innerHeight + 100 + 'px';
        diamond.style.transform = 'rotate(720deg)';
        diamond.style.opacity = '0';
    }, 10);
    
    setTimeout(() => {
        diamond.remove();
    }, 3100);
}

// Card animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.reason-card, .token-card, .roadmap-item').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

console.log('🐂 BULLPOWER ACTIVATED! 🐂');
console.log('Ready to go TO THE MOON! 🚀');

