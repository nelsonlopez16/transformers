// Cambio automático de fondo (ya controlado en CSS con keyframes)

// JavaScript para cambiar la imagen de fondo cada 2 segundos
document.addEventListener("DOMContentLoaded", function () {
    const headerBg = document.getElementById("header-bg");
    const images = [
        'https://i.kinja-img.com/image/upload/c_fill,h_900,q_60,w_1600/9788c14e4ff4a2e91b82bfb4426348a1.jpg',
        'https://dx35vtwkllhj9.cloudfront.net/paramountpictures/transformers-one/images/regions/gb/namegenerator/banner.webp',
        'https://wallpapercave.com/wp/wp14351239.jpg',
        'https://images.wallpapersden.com/image/wxl-4k-transformers-one-movie-poster_93034.jpg'
    ];
    
    let index = 0; // Iniciar el índice de la imagen de fondo

    function changeBackground() {
        // Cambiar la imagen de fondo
        headerBg.style.backgroundImage = `url(${images[index]})`;

        // Incrementar el índice para la siguiente imagen
        index = (index + 1) % images.length; // Ciclo de imágenes (se reinicia al final del arreglo)
    }

    // Llamar a la función changeBackground cada 2 segundos (2000 milisegundos)
    setInterval(changeBackground, 2000);

    // Iniciar con la primera imagen de fondo
    changeBackground();
});








// Gestión de comentarios
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentsList = document.querySelector('#comments-list ul');

// Función para agregar comentarios
commentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const commentText = commentInput.value.trim();
    if (commentText !== "") {
        const newComment = document.createElement('li');
        newComment.textContent = commentText;

        // Agregar el comentario a la lista
        commentsList.appendChild(newComment);

        // Limpiar el campo de texto
        commentInput.value = "";
    }
});
