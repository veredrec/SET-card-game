$("#start-button").click(function() {
	// countSeconds();
	getCards(cards);
});

function countSeconds() {
	var start = Date.now();
	var textNode = document.createTextNode('0 seconds');
	document.getElementById('seconds').appendChild(textNode);
	return setInterval(function() {
		textNode.data = Math.floor((Date.now() - start) / 1000) + ' seconds';
	}, 1000);
};

// set variables
var allCards;
var displayedCards = [];
var oneCard;
var thisCard;
var dataObj;
var cardObj;
var selectedCards = [];
var cardOne;
var cardTwo;
var cardThree;

// -----------------------------------------------------------------------------

// shuffle deck of cards
var shuffleDeck = function(c) {
	for (var j, x, i = c.length; i; j = parseInt(Math.random() * i), x = c[--i], c[i] = c[j], c[j] = x);
	return c;
};

// fill the board with new cards when start a new game
var getCards = function(cards) {
	allCards = shuffleDeck(cards);

	// set selected cards array to empty to start a new draw
	displayedCards = [];

	// iterate and retrieve 12 cards for deck
	for (var i = 0; i < 12; i++) {
		oneCard = allCards[0]; // select the card
		console.log("selected card ", oneCard.id);
		thisCard = $("#card" + i + "");
		thisCard.empty(); // empty card's spot

		// print properties on card
		thisCard.append("<p class='card-text'>" + oneCard.properties.number + "<br>" + oneCard.properties.color +
			"<br>" + oneCard.properties.shape + "<br>" + oneCard.properties.fill + "</p>");

		displayedCards.push(oneCard); //add random cards to new array

		allCards.shift(); //remove random card from deck


		//set dataCard property to the card object
		dataObj = jQuery.parseJSON(JSON.stringify(oneCard));
		thisCard.attr('dataCard', JSON.stringify(dataObj));

		thisCard.click(function() {
			cardObj = $(this).attr("dataCard");

			// highlight each selected card
			$(this).addClass('highlighted');
			// check if clicked card is already selected. if it does - diselect it
			if (selectedCards.length > 0) {
				console.log("array has smoething");
				if (jQuery.inArray(cardObj, selectedCards) > -1) {
					console.log("IT'S HERE!");
					selectedCards.splice(cardObj, 1);
					console.log("ARRAY AFTER REMOVE CHECK ", selectedCards);
					$(this).removeClass('highlighted'); // remove highlight class
				} else {
					console.log("IT'S NOT HERE!");
					// push selected card to array
					selectedCards.push(cardObj);
				}
			} else {
				// push selected card to array
				selectedCards.push(cardObj);
			}
			checkClicks();
		})
	}
};

var checkClicks = function() {
	// validate set if there are 3 selected
	if (selectedCards.length === 3) {
		validateSet();
	}
};

var validateSet = function() {
	// set cards with properties for easy access
	cardOne = JSON.parse(selectedCards[0]).properties;
	cardTwo = JSON.parse(selectedCards[1]).properties;
	cardThree = JSON.parse(selectedCards[2]).properties;

	console.log("START VALIDATING");

	checkColor();
	// empty array
};

var checkColor = function() {
	if (((cardOne.color === cardTwo.color) && (cardOne.color == cardThree.color) && (cardTwo.color == cardThree.color)) ||
		((cardOne.color !== cardTwo.color) && (cardOne.color !== cardThree.color) && (cardTwo.color !== cardThree.color))) {
		console.log("COLOR SET");
		checkNumber();
	} else {
		console.log("not color set!");
		$('#message').addClass('show-message');
		selectedCards = []; // empty array
	}
};

var checkNumber = function() {
	console.log("check number");
	if (((cardOne.number === cardTwo.number) && (cardOne.number == cardThree.number) && (cardTwo.number == cardThree.number)) ||
		((cardOne.number !== cardTwo.number) && (cardOne.number !== cardThree.number) && (cardTwo.number !== cardThree.number))) {
		console.log("NUMBER SET");
		checkShape();
	} else {
		console.log("not number set!");
		$('#message').addClass('show-message');
		selectedCards = []; // empty array
	}
};

var checkShape = function() {
	console.log("check shape");
	if (((cardOne.shape === cardTwo.shape) && (cardOne.shape == cardThree.shape) && (cardTwo.shape == cardThree.shape)) ||
		((cardOne.shape !== cardTwo.shape) && (cardOne.shape !== cardThree.shape) && (cardTwo.shape !== cardThree.shape))) {
		console.log("SHAPE SET");
		checkFill();
	} else {
		console.log("not shape set!");
		$('#message').addClass('show-message');
		selectedCards = []; // empty array
	}
};

var checkFill = function() {
	console.log("check shape");
	if (((cardOne.fill === cardTwo.fill) && (cardOne.fill == cardThree.fill) && (cardTwo.fill == cardThree.fill)) ||
		((cardOne.fill !== cardTwo.fill) && (cardOne.fill !== cardThree.fill) && (cardTwo.fill !== cardThree.fill))) {
		console.log("FILL SET");
	} else {
		console.log("not fill set!");
		$('#message').addClass('show-message');
		selectedCards = []; // empty array
	}
};
