"use strict";

 

  var allCar = [];

  function Car(model , year, manufacturer){
      this.model = model;
      this.year = year;
      this.manufacturer = manufacturer;
       this.price = randomIntFromInterval(7000,100000);
 
      allCar.push(this);
  }



  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function saeDataToLocalStorage(){
    localStorage.setItem(allCar)
  }