

document.addEventListener("DOMContentLoaded", function() {
    const smoothScrollLinks = document.querySelectorAll('.footer-area a[href^="#"]');
  
    for (const link of smoothScrollLinks) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
  
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
  
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


window.addEventListener('load', function () {
    document.getElementById('footer-map').classList.add('fadeIn');
});
document.addEventListener("DOMContentLoaded", function() {
    // 1. Efect de hover pentru linkurile din zona de navigare
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = 'red';
        });
        link.addEventListener('mouseout', function() {
            this.style.color = 'black';
        });
    });
});

