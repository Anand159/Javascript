document.querySelectorAll('.accordion-item h1').forEach(heading => {
    heading.addEventListener('click', () => {
        const paragraph = heading.nextElementSibling;
        paragraph.classList.toggle('show');
    });
});

