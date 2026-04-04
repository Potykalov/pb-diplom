<div id="badges" align = "center">
  <a src = "mailto:dmitriy.potykalov@gmail.com">
    <img src="https://img.shields.io/badge/gmail-red?style=for-the-badge&logo=gmail&logoColor=white" alt="GMail Badge"/>
  </a>
  <a src = "https://t.me/dmitriy_potykalov">
    <img src="https://img.shields.io/badge/telegram-blue?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram Badge"/>
  </a>
  <a src = "https://vk.com/dmitriy_potykalov">
    <img src="https://img.shields.io/badge/vk-blue?style=for-the-badge&logo=vk&logoColor=white" alt="V kontakte Badge"/>
  </a>
  <a src = "https://www.linkedin.com/in/potykalov">
    <img src="https://img.shields.io/badge/linkedin-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
  <br>
  <img alt="GitHub License" src="https://img.shields.io/github/license/potykalov/tic-tac-toe-js">
</div>

# ❌⭕ Игра "Крестики-нолики"

Реализация логики классической игры **Крестики-нолики** на JavaScript.

![Game Demo](assets/demo.gif)

🌐 **Демо:**
[GitHub Pages](https://potykalov.github.io/tic-tac-toe-js/)

## 📌 Описание

Игроки по очереди ставят символы:

* ❌ `x`
* ⭕ `o`

Побеждает игрок, который первым заполняет **три клетки подряд**:

* по горизонтали
* по вертикали
* по диагонали

## 🛠 Технологии

* HTML
* CSS
* JavaScript (Vanilla JS)
* DOM API

## 📂 Структура проекта

```
index.html   — разметка игры  
styles.css   — стили  
ui.js        — отрисовка интерфейса  
logic.js     — логика игры
```

Изменяется только файл **`logic.js`**.

## ⚙️ Основная логика

### `startGame()`

Вызывается при загрузке страницы.

Функция:

* создаёт игровое поле `3×3`
* выбирает активного игрока
* вызывает `renderBoard()` для отрисовки.

### `click(row, column)`

Вызывается при клике на клетку.

Функция:

1. записывает ход игрока в массив поля
2. обновляет интерфейс через `renderBoard()`
3. проверяет победу
4. вызывает `showWinner()` или передаёт ход следующему игроку

## 🧠 Модель игрового поля

Игровое поле хранится в виде **двумерного массива**:

```javascript
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
```

Игроки:

```javascript
let players = ['x', 'o'];
```

## ⭐ Дополнительно

Код написан так, чтобы игру можно было адаптировать под **квадратное поле любого размера (N×N)**.

## 👨‍💻 Автор

Учебный проект по программированию.

## 📇 Контакты

- 📧 **Email:** [dmitriy.potykalov@gmail.com](mailto:dmitriy.potykalov@gmail.com)
- 📄 **Резюме:** [Google Drive](https://drive.google.com/open?id=1yiBdKQfv06UNVdN8-vUEW_FL_-eQtVdq&usp=drive_fs) | [MyResume](https://myresume.ru/resume/3QzEpgcyZhM/)
- ✈️ **Telegram:** [@dmitriy_potykalov](https://t.me/dmitriy_potykalov)
- 🌐 **VK:** [dmitriy_potykalov](https://vk.com/dmitriy_potykalov)
- 💼 **LinkedIn:** [in/potykalov](https://www.linkedin.com/in/potykalov)

## 📄 Лицензия

Проект распространяется под лицензией MIT.  
Подробнее см. файл [LICENSE](LICENSE).
