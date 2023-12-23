// блок переменных 
let title
let screens
let screenPrice;
let adaptive;
let addService1;
let addService2;
let fullPrice; 
let servicePercentPrice;
let allServicePrices; 
const rollback = 20;



// блок функций
const isNumber = function (num) {
   return !isNaN(parseFloat(num)) && isFinite(num) && num !== 0
}

const asking = function(){
   title = prompt("Как называется ваш проект?");
   screens = prompt("Какие типы экранов нужно разработать?");
   
   do{
      screenPrice = +prompt("Сколько будет стоить данная работа?");
   } while(!isNumber(screenPrice))

   adaptive = confirm("Нужен ли адаптив на сайте?");
}

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

const getAllServicePrices = function(){
   let sum = 0;
   let price = 0;

   for(let i = 0; i < 2; i++){

      if(i === 0){
         addService1 = prompt("Какой дополнительный тип услуги нужен?")
      } if (i === 1){
         addService2 = prompt("Какой дополнительный тип услуги нужен?")
      }
      do {
         price = +prompt("Сколько это будет стоить?")
      }while(!isNumber(price)) 
        sum += price
      }
   return sum 
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

asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice(screenPrice, allServicePrices)
showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)
console.log(screens)
console.log(getRollBackMessage(fullPrice))
console.log(getServicePercentPrices(fullPrice, rollback))

// console.log(getTitle(title))
console.log(allServicePrices)
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