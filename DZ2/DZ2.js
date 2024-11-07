//     //Задание 1
// //     Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// // Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// // Реализуйте геттер allBooks, который возвращает текущий список книг.

// // Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// // Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// // Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// // Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.





// class Library {

//     // Приватное свойство для хранения списка книг
//     #books;

//     // Конструктор, который принимает начальный список книг
//     constructor(initialBooks = []) {
//         // Проверяем на дубликаты
//         const uniqueBooks = [...new Set(initialBooks)];
//         if (uniqueBooks.length !== initialBooks.length) {
//             throw new Error("Начальный список книг не должен содержать дубликатов.");
//         }
//         this.#books = uniqueBooks;
//     }

//     // Геттер для получения текущего списка книг
//     get allBooks() {
//         return this.#books;
//     }

//     // Метод для добавления книги
//     addBook(title) {
//         if (this.hasBook(title)) {
//             throw new Error(`Книга "${title}" уже существует в библиотеке.`);
//         }
//         this.#books.push(title);
//     }

//     // Метод для удаления книги
//     removeBook(title) {
//         const bookIndex = this.#books.indexOf(title);
//         if (bookIndex === -1) {
//             throw new Error(`Книга "${title}" не найдена в библиотеке.`);
//         }
//         this.#books.splice(bookIndex, 1);
//     }

//     // Метод для проверки наличия книги
//     hasBook(title) {
//         return this.#books.includes(title);
//     }
// }

// // Пример использования
// try {
//     const library = new Library(['Война и мир', 'Анна Каренина', 'Преступление и наказание']);
    
//     console.log(library.allBooks); // ['Война и мир', 'Анна Каренина', 'Преступление и наказание']

//     library.addBook('Братья Карамазовы');
//     console.log(library.allBooks); // ['Война и мир', 'Анна Каренина', 'Преступление и наказание', 'Братья Карамазовы']

//     library.removeBook('Война и мир');
//     console.log(library.allBooks); // ['Анна Каренина', 'Преступление и наказание', 'Братья Карамазовы']

//     console.log(library.hasBook('Война и мир')); // false
//     console.log(library.hasBook('Анна Каренина')); // true
// } catch (error) {
//     console.error(error.message);
// }




//Задание 2

// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.




const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                name: "Алексей",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                name: "Мария",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
            {
                id: "3",
                name: "Алексей",
                text: "Отличный телефон! Батарея держится долго.",
            }, {
                id: "1",
                name: "Алексей",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                name: "Мария",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
            {
                id: "3",
                name: "Алексей",
                text: "Отличный телефон! Батарея держится долго.",
            },
        ]  
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "7",
                name: "Иван",
                text: "Интересный дизайн, но дорогой.",
            },
            {
                id: "8",
                name: "Иван",
                text: "Интересный дизайн, но дорогой.",
            },
            {
                id: "9",
                name: "Иван",
                text: "Интересный дизайн, но дорогой.",
            },
           
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "12",
                name: "Света",
                text: "Люблю играть на PS5, графика на высоте.",
            },
            {
                id: "13",
                name: "Света",
                text: "Люблю играть на PS5, графика на высоте.",
            },
            {
                id: "14",
                name: "Света",
                text: "Люблю играть на PS5, графика на высоте.",
            },
            
        ],
    },
];

// Функция для отображения отзывов
function displayReviews() {
    const reviewContainer = document.getElementById('reviewContainer');
    reviewContainer.innerHTML = ''; 

    initialData.forEach((product, productIndex) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('review-box')
        productDiv.innerHTML = `<h2>${product.product}</h2>`;
        
        product.reviews.forEach(review => {
            const reviewDiv = document.createElement('div');
            reviewDiv.className = 'review';
            reviewDiv.textContent = `${review.name}: ${review.text}`;
            productDiv.appendChild(reviewDiv);
        });

        reviewContainer.appendChild(productDiv);
    });
}

// Функция для добавления отзыва
function addReview(productIndex, name, text) {
    if (text.length < 50 || text.length > 500) {
        throw new Error('Отзыв должен содержать от 50 до 500 символов.');
    }
    if (!name.trim()) {
        throw new Error('Имя обязательно для заполнения.');
    }

    // Генерация уникального ID для нового отзыва
    const newId = (initialData[productIndex].reviews.length + 1).toString();

    const newReview = {
        id: newId,
        name: name,
        text: text,
    };

    // Добавляем новый отзыв к выбранному продукту
    initialData[productIndex].reviews.push(newReview);
    displayReviews();
}

// Обработчик события для кнопки
document.getElementById('submitReview').addEventListener('click', () => {
    const nameInput = document.getElementById('nameInput');
    const reviewInput = document.getElementById('reviewInput');
    const productSelect = document.getElementById('productSelect');
    const productIndex = productSelect.value;

    const nameText = nameInput.value;
    const reviewText = reviewInput.value;

    try {
        addReview(productIndex, nameText, reviewText);
        nameInput.value = ''; 
        reviewInput.value = ''; 
    } catch (error) {
        alert(error.message);
    }
});

// Инициализация отображения отзывов
displayReviews();
