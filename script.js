
const books = document.querySelectorAll('.books')
const book2 = document.querySelectorAll('.book')

const book2Context = book2[0].lastElementChild.children
const book2List = book2[0].lastElementChild

const book3Title = book2[4].firstElementChild.firstElementChild

const book5ListElem = book2[5].lastElementChild.children[1]

const book6List = book2[2].lastElementChild.lastElementChild

const adv = document.querySelector('.adv');

// console.log(book2[5].lastElementChild.children)

books[0].append(book2[0])
books[0].append(book2[4])
books[0].append(book2[3])
books[0].append(book2[5])
books[0].append(book2[2])

book3Title.innerHTML = 'Книга 3. this и <strong>Прототипы</strong> Объектов'

// глава 2 приведение в порядок 

book2Context[9].prepend(book2Context[7])
book2Context[9].prepend(book2Context[2])
book2Context[3].prepend(book2Context[6])
book2Context[3].prepend(book2Context[5])

// глава 5 приведение в порядок
book5ListElem.append(book2[5].lastElementChild.children[9])
book5ListElem.append(book2[5].lastElementChild.children[3])
book2[5].lastElementChild.children[7].prepend(book2[5].lastElementChild.children[4])
book2[5].lastElementChild.children[4].prepend(book2[5].lastElementChild.children[2])

// глава 6 добавление 8 строки

book6List.insertAdjacentHTML('beforebegin', '<li>Глава 8: За пределами ES6</li>')
// console.log(book6List)


adv.remove(); // удаление рекламы
document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)' // замена фонв