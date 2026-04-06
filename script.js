// Typing Effect for Hero
const textArr = ["MCA Student", "AI Enthusiast", "Python Developer"];
let wordIdx = 0; let charIdx = 0;
function type() {
    const currentWord = textArr[wordIdx];
    document.querySelector('.typing-text').textContent = currentWord.substring(0, charIdx++);
    if (charIdx > currentWord.length) {
        charIdx = 0; wordIdx = (wordIdx + 1) % textArr.length;
        setTimeout(type, 1500);
    } else {
        setTimeout(type, 100);
    }
}

// Continuous Certification Slider
let currentCert = 0;
const certImages = document.querySelectorAll('.cert-img');
const sliderDots = document.getElementById('sliderDots');

// Create Dots
certImages.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    sliderDots.appendChild(dot);
});

function switchCertificate() {
    certImages[currentCert].classList.remove('active');
    document.querySelectorAll('.dot')[currentCert].classList.remove('active');
    currentCert = (currentCert + 1) % certImages.length;
    certImages[currentCert].classList.add('active');
    document.querySelectorAll('.dot')[currentCert].classList.add('active');
}

setInterval(switchCertificate, 3500); // Switches every 3.5 seconds

window.onload = () => {
    type();
};

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});