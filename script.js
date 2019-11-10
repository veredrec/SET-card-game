$("#startButton").click(function() {
	countSeconds();
	$('#successMessage').removeClass('show-message');
	$('#errorMessage').removeClass('show-message');
  setCards();
	getCards(cards);
	score = 0;
	$('#score').text(score);
});

// timer - count seconds
function countSeconds() {
  $('#seconds').empty();
   var start = Date.now();
   var textNode = document.createTextNode('0 seconds');
   document.getElementById('seconds').appendChild(textNode);
   return setInterval(function () {
		 textNode.data = Math.floor((Date.now()-start)/1000) + ' seconds';
   }, 1000);
};

// set variables
var score;
var allCards;
var oneCard;
var thisCard;
var dataObj;
var cardObj;
var selectedCards = [];
var cardOne;
var cardTwo;
var cardThree;
var isSet;
var clickedItems = [];

// -----------------------------------------------------------------------------

// shuffle deck of cards
var shuffleDeck = function(c) {
	for (var j, x, i = c.length; i; j = parseInt(Math.random() * i), x = c[--i], c[i] = c[j], c[j] = x);
	return c;
};

// fill the board with new cards when start a new game
var getCards = function(cards) {
  clickedItems = [];
  selectedCards = [];
	allCards = shuffleDeck(cards);

	// iterate and retrieve 12 cards for deck
	for (var i = 0; i < 12; i++) {
		oneCard = allCards[0]; // select the card
		thisCard = $("#card" + i + "");
		console.log(thisCard);
		thisCard.removeClass('highlighted');
		thisCard.empty(); // empty card's spot

		// show card image property on card
    $(thisCard).attr("src", oneCard.properties.image);
		allCards.shift(); //remove random card from deck

		//set dataCard property to the card object
		dataObj = jQuery.parseJSON(JSON.stringify(oneCard));
		thisCard.attr('dataCard', JSON.stringify(dataObj));

		thisCard.off('click'); // remove click event so it won't add multiple click events

    thisCard.click(function() {
			clickItem(this);
		});
	}
};

var drawCards = function() {
  console.log("in draw cards");
	// replace 3 selected cards with 3 next cards in deck
	for (var i = 0; i < 3; i++) {
		oneCard = allCards[0]; // select the card
    console.log("clicked items ", clickedItems);
    console.log("one card ", oneCard);
		thisCard = $("#" + clickedItems[i] + "");
		thisCard.empty(); // empty card's spot

    // show card image property on card
    $(thisCard).attr("src", oneCard.properties.image);
    console.log("this card ", thisCard);

		allCards.shift(); //remove random card from deck

		//set dataCard property to the card object
		dataObj = jQuery.parseJSON(JSON.stringify(oneCard));
		thisCard.attr('dataCard', JSON.stringify(dataObj));

		// thisCard.click(function() {
    //   clickedItems = [];
		// 	clickItem(this);
		// });
	};
};

var clickItem = function(t) {
	$('#successMessage').removeClass('show-message');
	$('#errorMessage').removeClass('show-message');
	clickedItems.push(t.id);
	console.log("clicked items after 'click Item'", clickedItems);
	cardObj = $(t).attr("dataCard");

	// highlight each selected card
	$(t).addClass('highlighted');
	// check if clicked card is already selected. if it does - diselect it
	if (selectedCards.length > 0) {
		if (jQuery.inArray(cardObj, selectedCards) > -1) {
			selectedCards.splice(cardObj, 1);
			$(t).removeClass('highlighted'); // remove highlight class
		} else {
			// push selected card to array
			selectedCards.push(cardObj);
		}
	} else {
		// push selected card to array
		selectedCards.push(cardObj);
	}
	checkClicks();
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

	checkColor();
};

var checkColor = function() {
	if (((cardOne.color === cardTwo.color) && (cardOne.color == cardThree.color) && (cardTwo.color == cardThree.color)) ||
		((cardOne.color !== cardTwo.color) && (cardOne.color !== cardThree.color) && (cardTwo.color !== cardThree.color))) {
		checkNumber();
	} else {
		indicateNoSet();
	}
};

var checkNumber = function() {
	if (((cardOne.number === cardTwo.number) && (cardOne.number == cardThree.number) && (cardTwo.number == cardThree.number)) ||
		((cardOne.number !== cardTwo.number) && (cardOne.number !== cardThree.number) && (cardTwo.number !== cardThree.number))) {
		checkShape();
	} else {
		indicateNoSet();
	}
};

var checkShape = function() {
	if (((cardOne.shape === cardTwo.shape) && (cardOne.shape == cardThree.shape) && (cardTwo.shape == cardThree.shape)) ||
		((cardOne.shape !== cardTwo.shape) && (cardOne.shape !== cardThree.shape) && (cardTwo.shape !== cardThree.shape))) {
		checkFill();
	} else {
		indicateNoSet();
	}
};

var checkFill = function() {
	if (((cardOne.fill === cardTwo.fill) && (cardOne.fill == cardThree.fill) && (cardTwo.fill == cardThree.fill)) ||
		((cardOne.fill !== cardTwo.fill) && (cardOne.fill !== cardThree.fill) && (cardTwo.fill !== cardThree.fill))) {
		earnSet();
	} else {
		indicateNoSet();
	}
};

var clearHighlight = function() {
	console.log("clearing highlight");
	for (var i = 0; i < 3; i++) {
		$("#" + clickedItems[i] + "").removeClass('highlighted');
	}
	clickedItems = []; // empty array
	console.log("just empty the clicked!");
	selectedCards = []; // empty array
};

score = 0;
var updateScore = function() {
  score++;
  $('#score').text(score);
};

var earnSet = function() {
  $('#successMessage').addClass('show-message');
	updateScore();
	drawCards();
	setTimeout(function() {
		clearHighlight();
	}, 500);
};

var indicateNoSet = function() {
	$('#errorMessage').addClass('show-message');
	setTimeout(function() {
		clearHighlight();
	}, 300);
};
