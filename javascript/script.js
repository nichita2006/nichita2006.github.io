

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