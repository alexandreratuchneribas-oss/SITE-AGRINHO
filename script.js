window.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const position = card.getBoundingClientRect().top;
        if(position < window.innerHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// Inicialização para os cards
document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transition = 'all 0.6s ease-out';
    card.style.transform = 'translateY(20px)';
});
