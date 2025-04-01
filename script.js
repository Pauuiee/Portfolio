document.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY) / (document.documentElement.scrollHeight - window.innerHeight);
    const backgroundPos = scrollPercent * 100;
    
    document.body.style.backgroundPosition = `0% ${backgroundPos}%`;
  });

document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1 // Triggers when at least 10% of the element is visible
    });

    // Select all elements you want to animate
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        section.classList.add('scroll-reveal');
        observer.observe(section);
    });
});

// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Reset the animation when the element comes into view
                const skillBars = entry.target.querySelectorAll('.skill-bar');
                skillBars.forEach(bar => {
                    bar.style.animation = 'none';
                    bar.offsetHeight; // Trigger reflow
                    bar.style.animation = 'fillBar 1.5s ease forwards';
                });
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe the skills section
    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
        skillsSection.classList.add('scroll-reveal');
        observer.observe(skillsSection);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Reset the animation when the element comes into view
                const skillBars = entry.target.querySelectorAll('.skill-bar');
                skillBars.forEach(bar => {
                    bar.style.animation = 'none';
                    bar.offsetHeight; // Trigger reflow
                    bar.style.animation = 'fillBar 1.5s ease forwards';
                });
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe both skills and qualities sections
    const sections = document.querySelectorAll('#skills, #qualities');
    sections.forEach(section => {
        section.classList.add('scroll-reveal');
        observer.observe(section);
    });
});

