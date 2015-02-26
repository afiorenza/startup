var Director = require('./director.js');

function movie () {

  var attributes = {},
  actors = [],
  director;
  
  this.set = function (pAttribute,pValue){
    attributes[pAttribute] = pValue;
  };  

  this.get = function (pAttribute){
    return attributes[pAttribute];
  };

  this.play = function () {
  console.log("Playing " + this.get('name'));
  };

  this.stop = function () {
  console.log("Stopping " + this.get('name'));
  };

  this.createDirector = function (pName) {
    director = new Director (pName);
    return director;
  }

  this.setDirector = function (pDirector) {
    director = pDirector;
  }

  this.getDirector = function () {
    return director;
  }
}

module.exports = movie;


