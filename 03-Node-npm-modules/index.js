(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function director (pName) {
  var name = pName, 
  quotes = [];

  this.setName = function (pName) {
  	name = pName;
  };

  this.getName = function () {
  	return name;
  };

  this.addQuote = function (pQuote) {
  	quotes.push(pQuote);
  };

  this.speak = function () {
  	var returnValue = name + ' says \n' , i = 0;

  	for (i = 0 ; i < quotes.length ; i++) {
  		returnValue +=(quotes[i] + '\n');
  	}
  	return returnValue;
  };
}

module.exports = director;
},{}],2:[function(require,module,exports){
$(document).ready (function () {

	var Movie = require('./movieClass.js');	
	//var Director = require('./director.js');

	var starWars = new Movie();
	//var stevenSpielberg = new Director('Steven Spielberg');

	var stevenSpielberg = starWars.createDirector('Steven Spielberg');

	stevenSpielberg.addQuote('All good ideas start out as bad ideas, that why is takes so long.');
	stevenSpielberg.addQuote('This opportunity … allows all of us to reach out directly to open a much wider door.');

	starWars.setDirector(stevenSpielberg);

	console.log(starWars.getDirector().speak());
});
},{"./movieClass.js":3}],3:[function(require,module,exports){
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



},{"./director.js":1}]},{},[2]);
