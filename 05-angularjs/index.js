(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//Module of application
var myApp = angular.module('myApp',[]);
myApp = angular.module('myApp',['ngRoute']);
myApp = angular.module('myApp',['LocalStorageModule']);

//Global Values
//var json = require ('C:/Users/agustin/Documents/GitHub/startup/05-angularjs/data/peliculas.json');
var json = [
  {
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "plot": "An ancient Ring thought lost for centuries has been found, and through a strange twist in fate has been given to a small Hobbit named Frodo. When Gandalf discovers the Ring is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks of Doom in order to destroy it! However he does not go alone. He is joined by Gandalf, Legolas the elf, Gimli the Dwarf, Aragorn, Boromir and his three Hobbit friends Merry, Pippin and Samwise. Through mountains, snow, darkness, forests, rivers and plains, facing evil and danger at every corner the Fellowship of the Ring must go. Their quest to destroy the One Ring is the only hope for the end of the Dark Lords reign!",  
    "year": "2001"
  },
  {
    "title": "The Lord of the Rings: The Return of the King",
    "plot": "While Frodo & Sam continue to approach Mount Doom to destroy the One Ring, unaware of the path Gollum is leading them, the former Fellowship aid Rohan & Gondor in a great battle in the Pelennor Fields, Minas Tirith and the Black Gates as Sauron wages his last war against Middle-Earth.",
    "year": "2003"
  },
  {
    "title": "The Lord of the Rings: The Two Towers", 
    "plot": "While Frodo and Sam, now accompanied by a new guide, continue their hopeless journey towards the land of shadow to destroy the One Ring, each member of the broken fellowship plays their part in the battle against the evil wizard Saruman and his armies of Isengard.",
    "year": "2002"
  }
];

myApp.config(["$routeProvider",function($routeProvider,localStorageServiceProvider) {

	localStorageServiceProvider.setPrefix('dataBase');
	if (localStorageServiceProvider.length == 0) {
		localStorage.dataBase = JSON.stringify(json);
	};

	$routeProvider

	.when('/', {
		templateUrl : '/pages/main.html',
		controller : 'listArea'
	})

	.when('/details', {
		templateUrl : '/pages/detail.html/:title'
	})

	.when('/add', {
		templateUrl : '/pages/abm.html'
	})

	.when('/edit', {
		templateUrl : '/pages/abm.html/:title'
	});
}]);

myApp.controller('listArea', ['$scope', function($scope,localStorageService){
	$scope.films = localStorageService.dataBase;

	$scope.add = function() {
		console.log("add");
	}

	$scope.edit = function() {
		console.log("edit");
	}

	$scope.delete = function(index) {
		console.log("delete");
		console.log(index);
		$scope.films.splice(index,1);
	}

}]);

myApp.controller('detail', ['$scope', function($scope,$routeParams){
	console.log($routeParams.title);
}]);


},{}]},{},[1]);
