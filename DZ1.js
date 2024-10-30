// Задание 1

const musicCollection = {

    albums: [
        { title: 'Название альбома-1', artist: 'Испольнитель-1',  year: '2015'},
        { title: 'Название альбома-2', artist: 'Испольнитель-2',  year: '2008'},
        { title: 'Название альбома-3', artist: 'Испольнитель-3',  year: '2002'}
    ],

    [Symbol.iterator]() {
        this.index = 0;
        return this;
    },
    next() {
        return this.index < this.albums.length
            ? {done: false, value: this.albums[this.index++]}
            : {done: true};
    }
};
    for (const album of musicCollection) {
    console.log(`${album.title} , ${album.artist}, год:${album.year}`);
};


//Задание 2


let cooks = new Map([
    ["Виктор", "Пицца"],
    ["Ольга", "Суши"],
    ["Дмитрий", "Десерты"],
]);

let dish = new Map([
    ["Пицца 'Маргарита'", "Виктор"],
    ["Пицца 'Пепперони'", "Виктор"],
    ["Суши 'Филадельфия'", "Ольга"],
    ["Суши 'Калифорния'", "Ольга"],
    ["Тирамису", "Дмитрий"],
    ["Чизкейк", "Дмитрий"]
]);

const client = prompt('Введите имя клиента');

let orderSummary = `Клиент: ${client}\n`;

for (let i = 1; i <= 2; i++) {
  const selectedDish = prompt(`Выберите блюдо ${i}`);//ФОРМАТ ВВОДА Пицца 'Пепперони' и дт
  if (dish.has(selectedDish)) {
    const chef = dish.get(selectedDish);
    orderSummary += `Заказ ${i}: ${selectedDish}, повар: ${chef}\n`;
  } else {
    orderSummary += `Заказ ${i}: Извините, выбранного блюда нет в меню.\n`;
  }
}

console.log(orderSummary);