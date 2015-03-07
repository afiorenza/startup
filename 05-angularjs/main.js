//Module of application
var myApp = angular.module('myApp',['ngRoute','LocalStorageModule']);

//Global Values
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

myApp.config(['localStorageServiceProvider',function(localStorageServiceProvider) {

	localStorageServiceProvider.setPrefix('ls');
}]);

myApp.config(['$routeProvider',function($routeProvider) {

	$routeProvider

	.when('/', {
		templateUrl : '/pages/main.html',
		controller : 'listArea'
	})

	.when('/details/:indice', {
		templateUrl : '/pages/detail.html',
		controller : 'detail'
	})

	.when('/add', {
		templateUrl : '/pages/add.html',
		controller : 'add'	
	})

	.when('/edit/:indice', {
		templateUrl : '/pages/edit.html',
		controller: 'edit'
	});
}]);

myApp.controller('listArea',function($scope,localStorageService){

	var localFilms = [];

	if (localStorageService.length() == 0 ){
		for (var i=0 ; i < json.length ; i++) {
			localStorageService.set(i,json[i]);
		};
	}
		
	for (var i=0 ; i < localStorageService.length() ; i++) {
		 localFilms.push(localStorageService.get(i));
	};
	
	$scope.films = localFilms;

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
		localStorageService.remove(index);
	}

});

myApp.controller('detail', function($scope,$routeParams,localStorageService){

	var localJson = localStorageService.get($routeParams.indice);

	$scope.title = localJson['title'];
	$scope.plot = localJson['plot'];
	$scope.year= "Release Year: " + localJson['year'];
});

myApp.controller('add', function($scope,$routeParams,localStorageService){

	$scope.save = function() {
		if($scope.title != null & $scope.plot != null & $scope.year != null){
			var newJson = jQuery.parseJSON('{ "title":"' + $scope.title + '","plot":"' + $scope.plot + '","year":"' + $scope.year + '"}')	;
			localStorageService.set(localStorageService.length(),newJson);
			$scope.title =  null;
			$scope.plot = null;
			$scope.year = null;
		}else {
			$scope.error = "Please fill all fields."
		}
	};

});

myApp.controller('edit', function($scope,$routeParams,localStorageService){
	console.log($routeParams.indice);

	var localJson = localStorageService.get($routeParams.indice);

	$scope.title = localJson['title'];
	$scope.plot = localJson['plot'];
	$scope.year= localJson['year'];

	$scope.save = function() {
		if($scope.title != null & $scope.plot != null & $scope.year != null){
			var newJson = jQuery.parseJSON('{ "title":"' + $scope.title + '","plot":"' + $scope.plot + '","year":"' + $scope.year + '"}')	;
			localStorageService.set($routeParams.indice,newJson);
			$scope.error = "Succesfull update."
		}else {
			$scope.error = "Please fill all fields."
		}
	};
});