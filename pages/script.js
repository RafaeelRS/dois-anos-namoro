let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-images img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showSlides() {
    // Esconder todas as imagens
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });

    // Desabilitar o botão "prev" na primeira foto
    if (slideIndex === 0) {
        prevBtn.disabled = true;
        prevBtn.style.opacity = '0.5';  // Ajuste visual para desabilitado
    } else {
        prevBtn.disabled = false;
        prevBtn.style.opacity = '1';
    }

    // Desabilitar o botão "next" na última foto
    if (slideIndex === slides.length - 1) {
        nextBtn.disabled = true;
        nextBtn.style.opacity = '0.5';  // Ajuste visual para desabilitado
    } else {
        nextBtn.disabled = false;
        nextBtn.style.opacity = '1';
    }
}

function moveSlide(n) {
    // Atualizar o índice e mostrar o slide correspondente
    slideIndex += n;

    // Impedir que o índice saia do intervalo permitido
    if (slideIndex >= slides.length) {
        slideIndex = slides.length - 1;
    } else if (slideIndex < 0) {
        slideIndex = 0;
    }

    showSlides();
}

// Inicializa o carrossel mostrando a primeira imagem
showSlides();