
const title = document.getElementsByTagName('h1')[0];
const calculate = document.getElementsByClassName('handler_btn')[0]
const reset = document.getElementsByClassName('handler_btn')[1]
const btnPlus = document.querySelector('.screen-btn');
const otherItems1 = document.querySelectorAll('.other-items.percent');
const otherItems2 = document.querySelectorAll('.other-items.number');
const inputRange = document.querySelector('.rollback input[type = "range"]');
const span = document.querySelector('.rollback span[class = "range-value"]');

const totalInput = document.getElementsByClassName('total-input');
for(let i = 0; i < totalInput.length; i++){
    console.log(totalInput[i])
}

let listScreen = document.querySelectorAll('.screen'); 

console.log(title)
console.log(calculate)
console.log(reset)
console.log(btnPlus)
console.log(otherItems1)
console.log(otherItems2)
console.log(inputRange)
console.log(span)
console.log(listScreen)

// const appData = {
//     title: '',
//     screens: [],
//     screenPrice: 0,
//     adaptive: false,
//     addServices: {},
//     fullPrice: 0,
//     servicePercentPrice: 0,
//     allServicePrices: 0,
//     rollback: 20,
 
//     isNumber: function (num) {
//        return !isNaN(parseFloat(num)) && isFinite(num) && num !== 0
//     },
 
//     isString: function (value) {
//        return isNaN(value);
//     },
 
    
 
//     asking: function(){
//        do{
//           appData.title = prompt("Как называется ваш проект?");
//        } while (!appData.isString(appData.title))
//        console.log(typeof appData.title)
 
//        for(let i = 0; i < 2; i++){
//           let price = 0;
//           let name = '';
 
//         do{
//           name = prompt("Какие типы экранов нужно разработать?");
    
//           console.log(appData.isString(name))
//         }while(!appData.isString(name))
 
//         do{
//           price = +prompt("Сколько будет стоить данная работа?");
    
//           console.log(appData.isString(price))
//         }while(!appData.isNumber(price))
 
//         appData.screens.push({id: i, name: name, price: price })
 
//        console.log(typeof name) 
//        console.log(typeof price)
//     } 
 
//        for(let i = 0; i < 2; i++){
//           let name = '';
//           let price = 0;
 
//           do {
//              name = prompt("Какой дополнительный тип услуги нужен?");
//           }while(!appData.isString(name)) 
//           do {
//              price = +prompt("Сколько это будет стоить?")
//           }while(!appData.isNumber(price)) 
            
//             appData.addServices[name] = +price;
//             console.log(typeof name) 
//             console.log(typeof price)
//           }
//        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
//     },
 
//     addPrices: function(){
//        for(let screen of appData.screens){
//           appData.screenPrice += +screen.price
//        }
 
//        for(let key in appData.addServices){
//           appData.allServicePrices += appData.addServices[key]
//          }
//     },
    
//     start: function(){
//        appData.asking()
//        appData.addPrices();
//        // appData.getAllServicePrices();
//        appData.getFullPrice(appData.screenPrice, appData.allServicePrices)
//        appData.getServicePercentPrices()
//        appData.getTitle()
//        appData.getRollBackMessage(appData.fullPrice)
//        appData.logger();
//     },
 
//  //    getAllServicePrices: function(){
//  //      for(let key in appData.addServices){
//  //       appData.allServicePrices += appData.addServices[key]
//  //      }
//  // },
 
//   getFullPrice: function(){
//     appData.fullPrice =  +appData.screenPrice + appData.allServicePrices
//  },
 
//  getServicePercentPrices: function(){
//     appData.servicePercentPrice =  Math.ceil((appData.fullPrice - (appData.fullPrice * (appData.rollback/100)))) 
//  },
 
//  getTitle: function(){
//     appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substring(1).toLowerCase()
//  },
 
//  getRollBackMessage: function(price){
//     if(price <= 0){
//        return "Что то пошло не так"
//     }
//     if(price >= 30000){
//        return "Даем скидку в 10%"
//     } if(price >= 15000 && price < 30000){
//        return "Даем скидку в 5%"
//     } if(price < 15000 && price > 0){
//        return "Скидка не предусмотрена"
//     }
//  },
 
//  logger: function(){
//     console.log(appData.fullPrice)
//     console.log(appData.servicePercentPrice)
//     console.log(appData.screens)
//     console.log(appData.addServices)
//  }
 
 
//  }
 
//  appData.start();