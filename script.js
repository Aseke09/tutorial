

// const isNumber = function (num) {
//    return !isNaN(parseFloat(num)) && isFinite(num) && num !== 0
// }

const appData = {
   title: '',
   screens: '',
   screenPrice: 0,
   adaptive: false,
   addService1: '',
   addService2: '',
   fullPrice: 0,
   servicePercentPrice: 0,
   allServicePrices: 0,
   rollback: 20,

   isNumber: function (num) {
      return !isNaN(parseFloat(num)) && isFinite(num) && num !== 0
   },

   asking: function(){
      appData.title = prompt("Как называется ваш проект?");
      appData.screens = prompt("Какие типы экранов нужно разработать?");
      
      do{
         appData.screenPrice = +prompt("Сколько будет стоить данная работа?");
      } while(!appData.isNumber(appData.screenPrice))
   
      appData.adaptive = confirm("Нужен ли адаптив на сайте?");
   },
   
   start: function(){
      appData.asking()
      appData.allServicePrices = appData.getAllServicePrices();
      appData.fullPrice = appData.getFullPrice(appData.screenPrice, appData.allServicePrices)
      appData.servicePercentPrice = appData.getServicePercentPrices(appData.fullPrice, appData.rollback)
      appData.title = appData.getTitle()
      appData.getRollBackMessage(appData.fullPrice)
      appData.logger();
   },

   getAllServicePrices: function(){
      let sum = 0;
      let price = 0;

   for(let i = 0; i < 2; i++){

      if(i === 0){
         appData.addService1 = prompt("Какой дополнительный тип услуги нужен?")
      } if (i === 1){
         appData.addService2 = prompt("Какой дополнительный тип услуги нужен?")
      }
      do {
         price = +prompt("Сколько это будет стоить?")
      }while(!appData.isNumber(price)) 
        sum += price
      }
   return sum 
},

 getFullPrice: function(){
   return +appData.screenPrice + appData.allServicePrices
},

getServicePercentPrices: function(){
   return  Math.ceil((appData.fullPrice - (appData.fullPrice * (appData.rollback/100)))) 
},

getTitle: function(){
   return appData.title.trim()[0].toUpperCase() + appData.title.trim().substring(1).toLowerCase()
},

getRollBackMessage: function(price){
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
},

logger: function(){
   console.log(appData.fullPrice)
  console.log(appData.servicePercentPrice)
  for (let key in appData){
      console.log("Ключ:" +  key   )
      
  }
  

}


}

appData.start();






