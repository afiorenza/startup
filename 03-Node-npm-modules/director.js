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