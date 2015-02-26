$(document).ready (function () {

	var Movie = require('./movieClass.js');	

	var starWars = new Movie();
	
	var stevenSpielberg = starWars.createDirector('Steven Spielberg');

	stevenSpielberg.addQuote('All good ideas start out as bad ideas, that why is takes so long.');
	stevenSpielberg.addQuote('This opportunity … allows all of us to reach out directly to open a much wider door.');

	starWars.setDirector(stevenSpielberg);

	console.log(starWars.getDirector().speak());
});