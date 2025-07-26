document.addEventListener('DOMContentLoaded', () => {

    const section = document.querySelector('.cards-container')

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    section.classList.add("visible")
                }
            });
        },
        {
            threshold: 0.3,
        }
    );
    observer.observe(section)
})