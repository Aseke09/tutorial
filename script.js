// блок переменных 
let title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?");
const screenPrice = +prompt("Сколько будет стоить данная работа?");
const adaptive = confirm("Нужен ли адаптив на сайте?");

const addService1 = prompt("Какой дополнительный тип услуги нужен?")
const addService2 = prompt("Какой дополнительный тип услуги нужен?")

const addServicePrice1 = +prompt("Сколько это будет стоить?")
const addServicePrice2 = +prompt("Сколько это будет стоить?")

// const fullPrice = screenPrice + addServicePrice1 + addServicePrice2;
let fullPrice; 
const rollback = 20;
// const servicePercentPrice = Math.ceil((fullPrice - (fullPrice * (rollback/100))))
let servicePercentPrice;
let allServicePrices; 




// блок функций
const showTypeOf = function(variable){
    console.log(variable, typeof variable)
}

const getRollBackMessage = function(price){
    if(price <= 0){
       return "Что то пошло не так"
    }
    if(price >= 30000){
       return "Даем скидку в 10%"
    } if(price >= 15000 && price < 30000){
       return "Даем скидку в 5%"
    } if(price < 15000 && price > 0){
       return "Скидка не предусмотрена"
    }
}

const getAllServicePrices = function(price1, price2){
   return price1 + price2
}

function getFullPrice(price1, price2){
   return price1 + price2
}

const getTitle = function(str){
   return title = str[0].toUpperCase() + str.slice(1).toLowerCase()
}

function getServicePercentPrices(price1, price2){
   return servicePercentPrice = Math.ceil((price1 - (price1 * (price2/100)))) 
}

allServicePrices = getAllServicePrices(addServicePrice1, addServicePrice2)
fullPrice = getFullPrice(screenPrice, allServicePrices)
showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)
console.log(screens)
console.log(getRollBackMessage(fullPrice))
console.log(getServicePercentPrices(fullPrice, rollback))

// console.log(getTitle(title))
// console.log(allServicePrices)
// console.log(fullPrice)
// console.log(title);
// console.log(screens)
// console.log(screenPrice + "$")

// console.log( adaptive);
// console.log(fullPrice + "$")
// console.log(servicePercentPrice)
// console.log(fullPrice * (rollback/100))


// let strToArr = screens.toLowerCase().split(',')
// console.log(strToArr)