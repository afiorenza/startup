$(document).ready(function() {

	//Observer Class
	function ObserverList(){
  		
  		this.observerList = [];
	}

  	ObserverList.prototype.add = function(obj){
  		return this.observerList.push( obj );
	};
  
	ObserverList.prototype.remove = function(pObj){

		for (i = 0 ; i < this.observerList.length ; i++) {
			if (this.observerList[i] == pObj) {
				this.observerList.splice (i,1);
			}
		}
	};

	ObserverList.prototype.publish = function (pData,pActionStr){
		
		//iterates list
		for (i = 0 ; i < this.observerList.length ; i++){
			//if method is play
			if (pData == this.observerList[i] && pActionStr == "play"){
				console.log("Playing Observer");
			}
			//if method is stop
			if (pData == this.observerList[i] && pActionStr == "stop"){
				console.log("Stopping Observer");
			}			
		}
	};

	//Move Class
	var Movie = (function() {

		function Movie() {
			
			var attributes = {};
			var actors = [];

			this.set = function (pAttribute,pValue){
				attributes[pAttribute] = pValue;
			};	

			this.get = function (pAttribute){
				return attributes[pAttribute];
			};

			this.pushActor = function (pActor) {
				actors.push(pActor);
			};

			this.popActor = function (pActor) {
				for (var i = 0 ; i < actors.length ; i++) {
					if (actors[i].getName() == pActor){
						actors.splice(i,1);
					}
				}
			};

			this.listActors = function () {
				for (var i = 0 ; i < actors.length ; i++) {
					console.log(actors[i].getName());
				}
			};
		};

		Movie.prototype.play = function(pList,pObj) {
			console.log("Playing " + this.get('name'));
			pList.publish(pObj,"play");
		};

		Movie.prototype.stop = function(pList,pObj) {
			console.log("Stopping " + this.get('name'));
			pList.publish(pObj,"stop");
		};

		Movie.prototype.setAttr = function(pAttribute,pValue) {
			this.set(pAttribute,pValue);
		};

		Movie.prototype.getAttr = function(pAttribute) {
			return this.get(pAttribute);
		};

		return Movie;
	})();

	//start of exercise 8
	var Downloadble = (function() {

		function Downloadble(){};

		Downloadble.prototype.download = function(){
			return "Downloading " + this.get('name');
		};

		return Downloadble;
	})();

	//Extend downloadble to movie
	function extend(pDest,pSource) {

		for (var i  in pSource){
			if (pSource.hasOwnProperty(i)) {
				pDest[i] = pSource[i];
			}
		}
		return pDest;
	}	

	/*
	var terminator = new Movie();
	terminator.setAttr('name','Terminator III');
	var download = new Downloadble();
	var downloadTerminator = extend(download,terminator);
	console.log(downloadTerminator.download());	
	*/
	//end of exercise 8

	//start of exercise 9 and 10
	//mixin social
	var Social = function () {};

	Social.prototype = {

		share : function (pFriendName) {
			return "Sharing " + this.get('name') + " to " + pFriendName;
		},

		like : function () {
			return "Like " + this.get('name');
		}
	};
	/*
	var terminator = new Movie();
	terminator.setAttr('name','Terminator III');
	var social = new Social();
	var socialTerminator = extend(social,terminator);
	console.log(socialTerminator.share('Agustin Fiorenza'));
	*/
	//end of exercise 9 and 10

	//start of exercises 11 and 12
	var Actor = (function() {

		function Actor (pName) {
			
			var name = pName; 

			this.setName = function(pName) {
				this.name = pName;
			};

			this.getName = function() {
				return name;
			}; 	
		};

		return Actor;
	})();


	var lordOfTheRings = new Movie();
	var frodoBolson = new Actor('Frodo Bolson');
	var aragorn = new Actor('Aragorn');
	var gandalf = new Actor('Gandalf');
	var sauron = new Actor('Sauron');
	
	lordOfTheRings.pushActor(frodoBolson);
	lordOfTheRings.pushActor(aragorn);
	lordOfTheRings.pushActor(gandalf);
	lordOfTheRings.pushActor(sauron);
	lordOfTheRings.listActors();
	//end of exercises 11 and 12 
});	