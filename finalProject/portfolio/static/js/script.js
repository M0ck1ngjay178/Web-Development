document.addEventListener('DOMContentLoaded', () => {
    // Run typing animation
    typeTheme();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            if (pageYOffset >= section.offsetTop - 60) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

function typeTheme() {
    const text = "Computer Science Senior • Full Stack Developer";
    const target = document.querySelector(".typing");
    if (!target) return;

    let i = 0;
    const speed = 40;
    target.innerHTML = "";

    function type() {
        if (i < text.length) {
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}