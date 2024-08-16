document.addEventListener("DOMContentLoaded", function() {
    const pupilas = document.querySelectorAll('.pupila');
    document.addEventListener('mousemove', function(e) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;

        pupilas.forEach(pupila => {
            pupila.style.transform = `translate(-50%, -50%) translate(${x - 50}%, ${y - 50}%)`;
        });
    });
});
