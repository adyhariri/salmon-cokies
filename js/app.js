'use strict';
//var city = [Seattle, Tokyo, Dubai, Paris, Lima] ;
var OpenHour = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
var Seattle = {
  name: 'Seattle',
  Max: 65,
  Min: 23,
  average_cookies_per_customer: 6.3,
  random_customers_per_hour1: [],
  cookies_purchased_Hour: [],
  getRandomCustomerPerHours: function () {
    for (var i = 0; i < OpenHour.length; i++) {
      this.random_customers_per_hour1[i] = generateRandomNumber(this.Min, this.Max);
    }
  },
  getcookies_purchased_Hour: function () {
    for (var i = 0; i < OpenHour.length; i++) {
      this.cookies_purchased_Hour[i] = Math.floor(this.random_customers_per_hour1[i] * this.average_cookies_per_customer);
    }
  },
  render: function () {
    var Parent_main = document.getElementById('main');
    var LocatoinName = document.createElement('h2');
    LocatoinName.textContent = this.name;
    Parent_main.appendChild(LocatoinName);
    var unorderlistDeatilsHour = document.createElement('ul');
    Parent_main.appendChild(unorderlistDeatilsHour);
    for (var j = 0; j < OpenHour.length; j++) {
      var ListItemLocation = document.createElement('li');
      ListItemLocation.textContent = OpenHour[j] + ' : ' + this.cookies_purchased_Hour[j];
      unorderlistDeatilsHour.appendChild(ListItemLocation);
    }
  }
};
Seattle.getRandomCustomerPerHours();
Seattle.getcookies_purchased_Hour();
Seattle.render();
function generateRandomNumber(min, max) {
  var random = Math.random();
  random = (random * (max - min + 1)) + min;
  random = Math.floor(random);
  return random;
}
var Tokyo ={
  name: 'Tokyo',
  Max: 3,
  Min: 24,
  average_cookies_per_customer: 1.2,
  random_customers_per_hour1: [],
  cookies_purchased_Hour: [],
  getRandomCustomerPerHours: function () {
    for (var i = 0; i < OpenHour.length; i++) {
      this.random_customers_per_hour1[i] = generateRandomNumber(this.Min, this.Max);
    }
  },
  getcookies_purchased_Hour: function () {
    for (var i = 0; i < OpenHour.length; i++) {
      this.cookies_purchased_Hour[i] = Math.floor(this.random_customers_per_hour1[i] * this.average_cookies_per_customer);
    }
  },
  render: function () {
    var Parent_main = document.getElementById('main');
    var LocatoinName = document.createElement('h2');
    LocatoinName.textContent = this.name;
    Parent_main.appendChild(LocatoinName);
    var unorderlistDeatilsHour = document.createElement('ul');
    Parent_main.appendChild(unorderlistDeatilsHour);
    for (var j = 0; j < OpenHour.length; j++) {
      var ListItemLocation = document.createElement('li');
      ListItemLocation.textContent = OpenHour[j] + ' : ' + this.cookies_purchased_Hour[j];
      unorderlistDeatilsHour.appendChild(ListItemLocation);
    }
  }
};
Tokyo.getRandomCustomerPerHours();
Tokyo.getcookies_purchased_Hour();
Tokyo.render();
function generateRandomNumber(min, max) {
  var random = Math.random();
  random = (random * (max - min + 1)) + min;
  random = Math.floor(random);
  return random;
}
var Dubai = {
  name: 'Dubai',
  Max:  11,
  Min: 38,
  average_cookies_per_customer: 3.7,
  random_customers_per_hour1: [],
  cookies_purchased_Hour: [],
  getRandomCustomerPerHours: function () {
    for (var i = 0; i < OpenHour.length; i++) {
      this.random_customers_per_hour1[i] = generateRandomNumber(this.Min, this.Max);
    }
  },
  getcookies_purchased_Hour: function () {
    for (var i = 0; i < OpenHour.length; i++) {
      this.cookies_purchased_Hour[i] = Math.floor(this.random_customers_per_hour1[i] * this.average_cookies_per_customer);
    }
  },
  render: function () {
    var Parent_main = document.getElementById('main');
    var LocatoinName = document.createElement('h2');
    LocatoinName.textContent = this.name;
    Parent_main.appendChild(LocatoinName);
    var unorderlistDeatilsHour = document.createElement('ul');
    Parent_main.appendChild(unorderlistDeatilsHour);
    for (var j = 0; j < OpenHour.length; j++) {
      var ListItemLocation = document.createElement('li');
      ListItemLocation.textContent = OpenHour[j] + ' : ' + this.cookies_purchased_Hour[j];
      unorderlistDeatilsHour.appendChild(ListItemLocation);
    }
  }
};
Dubai.getRandomCustomerPerHours();
Dubai.getcookies_purchased_Hour();
Dubai.render();
function generateRandomNumber(min, max) {
  var random = Math.random();
  random = (random * (max - min + 1)) + min;
  random = Math.floor(random);
  return random;
}
var Paris = {
  name: 'Paris',
  Max: 20,
  Min: 38,
  average_cookies_per_customer: 2.3,
  random_customers_per_hour1: [],
  cookies_purchased_Hour: [],
  getRandomCustomerPerHours: function () {
    for (var i = 0; i < OpenHour.length; i++) {
      this.random_customers_per_hour1[i] = generateRandomNumber(this.Min, this.Max);
    }
  },
  getcookies_purchased_Hour: function () {
    for (var i = 0; i < OpenHour.length; i++) {
      this.cookies_purchased_Hour[i] = Math.floor(this.random_customers_per_hour1[i] * this.average_cookies_per_customer);
    }
  },
  render: function () {
    var Parent_main = document.getElementById('main');
    var LocatoinName = document.createElement('h2');
    LocatoinName.textContent = this.name;
    Parent_main.appendChild(LocatoinName);
    var unorderlistDeatilsHour = document.createElement('ul');
    Parent_main.appendChild(unorderlistDeatilsHour);
    for (var j = 0; j < OpenHour.length; j++) {
      var ListItemLocation = document.createElement('li');
      ListItemLocation.textContent = OpenHour[j] + ' : ' + this.cookies_purchased_Hour[j];
      unorderlistDeatilsHour.appendChild(ListItemLocation);
    }
  }
};
Paris.getRandomCustomerPerHours();
Paris.getcookies_purchased_Hour();
Paris.render();
function generateRandomNumber(min, max) {
  var random = Math.random();
  random = (random * (max - min + 1)) + min;
  random = Math.floor(random);
  return random;
}
var Lima = {
  name: 'Lima',
  Max: 2,
  Min: 16,
  average_cookies_per_customer: 4.6,
  random_customers_per_hour1: [],
  cookies_purchased_Hour: [],
  getRandomCustomerPerHours: function () {
    for (var i = 0; i < OpenHour.length; i++) {
      this.random_customers_per_hour1[i] = generateRandomNumber(this.Min, this.Max);
    }
  },
  getcookies_purchased_Hour: function () {
    for (var i = 0; i < OpenHour.length; i++) {
      this.cookies_purchased_Hour[i] = Math.floor(this.random_customers_per_hour1[i] * this.average_cookies_per_customer);
    }
  },
  render: function () {
    var Parent_main = document.getElementById('main');
    var LocatoinName = document.createElement('h2');
    LocatoinName.textContent = this.name;
    Parent_main.appendChild(LocatoinName);
    var unorderlistDeatilsHour = document.createElement('ul');
    Parent_main.appendChild(unorderlistDeatilsHour);
    for (var j = 0; j < OpenHour.length; j++) {
      var ListItemLocation = document.createElement('li');
      ListItemLocation.textContent = OpenHour[j] + ' : ' + this.cookies_purchased_Hour[j];
      unorderlistDeatilsHour.appendChild(ListItemLocation);
    }
  }
};
Lima.getRandomCustomerPerHours();
Lima.getcookies_purchased_Hour();
Lima.render();
function generateRandomNumber(min, max) {
  var random = Math.random();
  random = (random * (max - min + 1)) + min;
  random = Math.floor(random);
  return random;
}