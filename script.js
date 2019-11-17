// disable "end game" and "add three" buttons before dealing cards
$(document).ready(function() {
	$('#endButton').attr("disabled", true).addClass("disabled-button");
	$('#addCardsButton').attr("disabled", true).addClass("disabled-button");
});

$("#startButton").click(function() {
	$(".message").remove();
	countSeconds();
  setCards();
	getCards(cards);
	score = 0;
	$('#score').text(score);
	// enable "end game" and "add three" buttons after dealing cards
	$('#endButton').attr("disabled", false).removeClass("disabled-button");
	$('#addCardsButton').attr("disabled", false).removeClass("disabled-button");
});

// timer - count seconds
function countSeconds() {
  $('#seconds').empty();
   var start = Date.now();
   timeCount = document.createTextNode('0 seconds');
	 $('#message').append('<span class="message-question">Can you find a set?</span>');
   document.getElementById('seconds').appendChild(timeCount);
   return setInterval(function () {
		 timeCount.data = Math.floor((Date.now()-start)/1000) + ' seconds'; //TODO: when adding minutes change the "seconds" here.
   }, 1000);
};

$("#addCardsButton").click(function() {
	addThree();
});

$("#endButton").click(function() {
	$('#seconds').empty();
	// message - final Score
	$(".message").remove();
	$("#message").empty();
	if (score > 7) {
		$('#message').append('<span class="message end-message"> GOOD GAME! Your final score is ' + score + '!</span>');
	} else {
		$('#message').append("<span class='message end-message'> That's it? Ok. Your final score is " + score + " in " + timeCount.data + "</span>");
	}
});

$('#howToButton').popover({
	title: "First time playing?",
	content: "The goal of Set is to pick out a set of 3 cards from the 12 cards on the board. Each card has four characteristics: shape, color, number, and shading. A Set contains 3 cards in which for each characteristic they are all similar or totally different. So, a set may consist of 3 cards of the same shape and color but no common shading, or number of shapes. For more details read the <a href='https://www.setgame.com/sites/default/files/instructions/SET%20INSTRUCTIONS%20-%20ENGLISH.pdf' target='_blank' class='popover-link'>full instructions</a>",
	trigger: 'focus',
	container: ".how-button",
	html: true,

});

// set variables
var timeCount;
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
	checkIfTwleve();

	// iterate and retrieve 12 cards for deck
	for (var i = 0; i < 12; i++) {
		oneCard = allCards[0]; // select the card
		thisCard = $("#card" + i + "");
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
		allCards.shift(); //remove random card from deck

		// show card image property on card
    $(thisCard).attr("src", oneCard.properties.image);
		//set dataCard property to the card object
		dataObj = jQuery.parseJSON(JSON.stringify(oneCard));
		thisCard.attr('dataCard', JSON.stringify(dataObj));
	};
};

var clickItem = function(t) {
	$(".message").remove();
	cardObj = $(t).attr("dataCard");

	// highlight each selected card
	$(t).addClass('highlighted');
	// check if clicked card is already selected. if it does - diselect it
	if (selectedCards.length > 0) {
		if (jQuery.inArray(cardObj, selectedCards) > -1) {
			selectedCards.splice(cardObj, 1);
			clickedItems.splice(cardObj,1);
			$(t).removeClass('highlighted'); // remove highlight class
		} else {
			// push selected card to array
			selectedCards.push(cardObj);
			clickedItems.push(t.id);
			console.log("clicked items after 'click Item'", clickedItems);
		}
	} else {
		// push selected card to array
		selectedCards.push(cardObj);
		clickedItems.push(t.id);
		console.log("clicked items after 'click Item'", clickedItems);
	}
	checkClicks();
};
var checkClicks = function() {
	// validate set if there are 3 selected
	if (selectedCards.length === 3) {
		validateSet();
	}
};

var addThree = function() {
	console.log("in add 3");
	// add the next 3 cards in deck to create a 15 grid
	for (var i = 12; i < 15; i++) {
		oneCard = allCards[0]; // select the card
    console.log("one card ", oneCard);
		thisCard = $("#card" + [i] + "");
		thisCard.empty(); // empty card's spot

		// show card image property on card
    $(thisCard).attr("src", oneCard.properties.image);

		allCards.shift(); //remove random card from deck

		//set dataCard property to the card object
		dataObj = jQuery.parseJSON(JSON.stringify(oneCard));
		thisCard.attr('dataCard', JSON.stringify(dataObj));
		thisCard.removeClass('hide-card');
		thisCard.off('click'); // remove click event so it won't add multiple click events

		// add evebnt clicks to all cards
		thisCard.click(function() {
			clickItem(this);
		});
	};
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

var checkIfTwleve = function() {
	console.log("checking if 12");
	// check if there are 12 cards
	if (!$("#card14").hasClass('hide-card')) {
		// hide extra cards spots
		$("#card12, #card13, #card14").addClass('hide-card');
	}
};

score = 0;
var updateScore = function() {
  score++;
  $('#score').text(score);
};

var earnSet = function() {
	$('#message').append('<span id="successMessage" class="success-message message"> This is a SET!</span>');
	updateScore();
	drawCards();
	setTimeout(function() {
		clearHighlight();
	}, 200);
	checkIfTwleve();
};

var indicateNoSet = function() {
	$('#message').append('<span id="errorMessage" class="error-message message"> This is not a set :(</span>');
	setTimeout(function() {
		clearHighlight();
	}, 300);
};
