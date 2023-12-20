const title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?");
const screenPrice = +prompt("Сколько будет стоить данная работа?");
const adaptive = confirm("Нужен ли адаптив на сайте?");



const addService1 = prompt("Какой дополнительный тип услуги нужен?")
const addService2 = prompt("Какой дополнительный тип услуги нужен?")

const addServicePrice1 = +prompt("Сколько это будет стоить?")
const addServicePrice2 = +prompt("Сколько это будет стоить?")

let fullPrice = screenPrice + addServicePrice1 + addServicePrice2;
let rollback = 20;
let servicePercentPrice = Math.ceil((fullPrice - (fullPrice * (rollback/100))))

if(fullPrice < 0){
    console.log("Что то пошло не так")
}
else if(fullPrice >= 30000){
    console.log("Даем скидку в 10%")
} else if(fullPrice >= 15000 && fullPrice < 30000){
    console.log("Даем скидку в 5%")
} else if(fullPrice < 14999 && fullPrice > 0){
    console.log("Скидка не предусмотрена")
}
console.log(title);
console.log(screens)
console.log(screenPrice + "$")

console.log( adaptive);
console.log(fullPrice + "$")
console.log(servicePercentPrice)
console.log(fullPrice * (rollback/100))


let strToArr = screens.toLowerCase().split(',')
console.log(strToArr)