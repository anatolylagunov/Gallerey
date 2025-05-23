// 1. Загрузка галереи из каталога images
function loadGallery() {
    const galleryContainer = document.querySelector('.gallery-container');

    // Список файлов (собирался вручную)
    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg',
        'image5.jpg',
        'image6.jpg',
        'image7.jpg',
        'image8.jpg',
        'image9.jpg',
        'image10.jpg',
        'image11.jpg',
        'image12.jpg',
        'image13.jpg',
        'image14.jpg',
        'image15.jpg',
        'image16.jpg',
        'image17.jpg',
        'image18.jpg',
        'image19.jpg',
        'image20.jpg',
        'image21.jpg',
        'image22.jpg',
        'image23.jpg',
        'image24.jpg',
        'image25.jpg',
        'image26.jpg',
        'image27.jpg',
        'image28.jpg',
        'image29.jpg',
        'image30.jpg',
        'image31.jpg',
        'image32.jpg',
        'image33.jpg',
        'image34.jpg',
        'image35.jpg',
        'image36.jpg',
        'image37.jpg',
        'image38.jpg',
        'image39.jpg',
        // Добавь сюда остальные изображения
        // Продолжай список файлов здесь
    ];

    images.forEach(image => {
        const figure = createFigureElement(image);
        galleryContainer.appendChild(figure);
    });
}

// 2. Создание элемента фигуры (изображение + подпись)
function createFigureElement(filename) {
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const figcaption = document.createElement('figcaption');

    img.src = `./images/${filename}`;
    img.alt = filename.split('.')[0];
    figcaption.textContent = filename.split('.')[0];

    
    // Добавляем обработчик клика для открытия модального окна
    img.addEventListener('click', openModal);

    figure.appendChild(img);
    figure.appendChild(figcaption);

    return figure;
}

// 3. Инициализация галереи
loadGallery();

// --- Новое ---

// Получаем элементы
const modalBackdrop = document.querySelector('.modal-backdrop');
const modalImgContainer = document.querySelector('.modal-img-container');
const modalImg = modalImgContainer.querySelector('img');

// Открывает модальное окно
function openModal(event) {
    const targetImgSrc = event.target.src; // Получаем источник маленького изображения
    modalImg.src = targetImgSrc; // Присваиваем источник большому изображению
    modalBackdrop.classList.add('show');
    modalImgContainer.classList.add('show');
}

// Закрывает модальное окно
function closeModal() {
    modalBackdrop.classList.remove('show');
    modalImgContainer.classList.remove('show');
}

// Обработчик клика на затемнении или крестике
modalBackdrop.addEventListener('click', closeModal);
modalImg.addEventListener('click', closeModal);


// 3. Настройка отправки комментариев
function setupForm() {
    const form = document.getElementById('comment-form');
    const commentsList = document.getElementById('comments-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем обычную отправку формы
        const textarea = this.querySelector('textarea');
        const comment = textarea.value.trim();

        if (comment !== '') {
            const li = document.createElement('li');
            li.textContent = comment;
            commentsList.insertBefore(li, commentsList.firstChild); // Добавляем комментарий первым
            textarea.value = ''; // Очищаем поле ввода
        }
    });
}


