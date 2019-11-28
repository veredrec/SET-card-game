// disable "end game" and "add three" buttons before dealing cards
$(document).ready(function() {
	$('#endButton').attr("disabled", true).addClass("disabled-button");
	$('#addCardsButton').attr("disabled", true).addClass("disabled-button");
});

// *** START GAME ***
$("#startButton").click(function() {
	// set timer to start
	$(".count-time").removeClass('hide-counter');
	startTime = Math.floor(Date.now() / 1000);
	startTimeCounter();
	// empty messages and board
	$("#message").html("Can you find a SET?");
	score = 0;
	$('#score').text(score);
	// shuffle and deal the cards
	setCards();
	getCards(cards);
	// enable "end game" and "add three" buttons after dealing cards
	$('#endButton').attr("disabled", false).removeClass("disabled-button");
	$('#addCardsButton').attr("disabled", false).removeClass("disabled-button");
});


// *** TIME COUNTER ***
function startTimeCounter() {
	var now = Math.floor(Date.now() / 1000); // get the time now
	var diff = now - startTime; // difference in seconds between now and start
	var m = Math.floor(diff / 60); // get minutes value
	var s = Math.floor(diff % 60); // get seconds value
	m = checkTime(m); // add a leading zero for a single digit
	s = checkTime(s); // add a leading zero for a single digit
	$("#time").html(m + ":" + s); // update the text on the page
	var t = setTimeout(startTimeCounter, 500); // set a timeout to update the timer
};

function checkTime(i) {
	if (i < 10) {
		i = "0" + i
	}; // add zero in front of numbers < 10
	return i;
};

// *** BUTTONS FUNCTIONALITY ***
$("#addCardsButton").click(function() {
	addThree();
});

$("#endButton").click(function() {
	// hide timer
	$(".count-time").addClass('hide-counter');
	// end game
	$("#confirm").click(function() {
		$("#myModal").modal("hide");
		startTime = Math.floor(Date.now() / 1000); //Get the starting time (right now) in seconds
		// message - update final Score
		$("#message").html("Can you find a SET?");
		// $("#message").empty();
		if (score > 7) {
			$('#message').html('<span class="message end-message"> GOOD GAME!<br>Your final score is ' + score + " in " + $("#time").html() + '!</span>');
		} else {
			$('#message').html("<span class='message end-message'> That's it? Ok.<br>Your final score is " + score + " in " + $("#time").html() + "</span>");
		}
		// close the confirmation modal
		$('.modal').modal('hide');
		$('#cardsBoard').addClass('hide-board');
		$('.page').addClass('page-end');
		return false;
	});
	// cancel in confirmation modal
	$("#cancel").click(function() {
		$(".count-time").removeClass('hide-counter');
	});
});

$('#howToButton').popover({
	title: "First time playing?",
	content: "The goal of Set is to pick out a set of 3 cards from the 12 cards on the board. Each card has four characteristics: shape, color, number, and shading. A Set contains 3 cards in which for each characteristic they are all similar or totally different. So, a set may consist of 3 cards of the same shape and color but no common shading, or number of shapes. For more details read the <a href='https://www.setgame.com/sites/default/files/instructions/SET%20INSTRUCTIONS%20-%20ENGLISH.pdf' target='_blank' class='popover-link'>full instructions</a>.",
	trigger: 'focus',
	container: ".how-button",
	html: true,
});

// *** SET VARIABLES ***
var startTime;
var score;
var allCards;
var oneCard;
var thisCard;
var cardToRemove;
var dataObj;
var cardObj;
var cardOne;
var cardTwo;
var cardThree;
var currentBoardItem;
var index;
var cardToPlace;
var currentCard;
var clickedItems = [];
var arrayOfAdded = [];
var boardArray = [];
var selectedCards = [];
var emptySpots = [];
var sound = new Audio("./assets/win.wav");
// FUTURE - replace existing board with smaller board when there are less cards
// var newBoard =
// 	'<div id="altBoard" class="alt-board">' +
// 	'<img id="card0" class="card-spot" dataCard="" src="">' +
// 	'<img id="card1" class="card-spot" dataCard="" src="">' +
// 	'<img id="card2" class="card-spot" dataCard="" src="">' +
// 	'<img id="card3" class="card-spot" dataCard="" src="">' +
// 	'<img id="card4" class="card-spot" dataCard="" src="">' +
// 	'<img id="card5" class="card-spot" dataCard="" src="">' +
// 	'<img id="card6" class="card-spot" dataCard="" src="">' +
// 	'<img id="card7" class="card-spot" dataCard="" src="">' +
// 	'<img id="card8" class="card-spot" dataCard="" src="">' +
// 	'</div>';


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
	boardArray = [];

	allCards = shuffleDeck(cards);

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
		boardArray.push(oneCard);
	}
};

// draw cards after getting a set, to add 3 to the board
var drawCards = function() {
	var i = 0;
	while (i < boardArray.length) {
		currentBoardItem = jQuery.parseJSON(boardArray[i].id);
		// check what matches to remove the clicked ones
		if (currentBoardItem === jQuery.parseJSON(selectedCards[0]).id ||
			currentBoardItem === jQuery.parseJSON(selectedCards[1]).id ||
			currentBoardItem === jQuery.parseJSON(selectedCards[2]).id) {
			boardArray.splice(i, 1);
		} else {
			i++;
		}
	};
	// replace 3 selected cards with 3 next cards in deck
	for (var i = 0; i < 3; i++) {
		oneCard = allCards[0]; // select the card
		boardArray.push(oneCard);
		thisCard = $("#" + clickedItems[i] + "");
		thisCard.empty(); // empty card's spot
		allCards.shift(); //remove random card from deck

		// show card image property on card
		$(thisCard).attr("src", oneCard.properties.image);
		//set dataCard property to the card object
		dataObj = jQuery.parseJSON(JSON.stringify(oneCard));
		thisCard.attr('dataCard', JSON.stringify(dataObj));
	}
};

// check if game is about to end since there are no more cards in deck
var indicateEndSoon = function() {
	if (allCards.length === 0) {
		for (var i = 0; i < 3; i++) {
			cardToRemove = $("#" + clickedItems[i] + "");
			cardToRemove.removeClass('highlighted');
			cardToRemove.addClass('hide-card');
		};
		$('#message').html('<span id="successMessage" class="success-message message"> These are the last cards. Find sets if you still can and then click the "END GAME" button to see your final score!</span>');
	}
};

// if user selects to add 3 cards to have 15 cards in board
var addThree = function() {
	// add the next 3 cards in deck to create a 15 grid
	for (var i = 12; i < 15; i++) {
		oneCard = allCards[0]; // select the card
		boardArray.push(oneCard);
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
	// disable button of add three if already used it
	$('#addCardsButton').attr("disabled", true).addClass("disabled-button");
};

// set functionality to clicked cards
var clickItem = function(t) {
	$("#message").html("Can you find a SET?");
	cardObj = $(t).attr("dataCard");

	// check if clicked card is already selected. if it does - diselect it
	if (selectedCards.length > 0) {
		if (jQuery.inArray(cardObj, selectedCards) > -1) {
			selectedCards.splice(cardObj, 1);
			clickedItems.splice(cardObj, 1);
			$(t).removeClass('highlighted'); // remove highlight class
		} else {
			// highlight each selected card
			$(t).addClass('highlighted');
			// push selected card to array
			selectedCards.push(cardObj);
			clickedItems.push(t.id);
		}
	} else {
		// highlight each selected card
		$(t).addClass('highlighted');
		// push selected card to array
		selectedCards.push(cardObj);

		clickedItems.push(t.id);
	}
	checkClicks();
};

// ** CHECK IF CLICKED CARDS ARE SET **
var checkClicks = function() {
	// validate set if there are 3 selected
	if (selectedCards.length === 3) {
		validateSet();
	}
};

// ** VALIDATE SET **
var validateSet = function() {
	// set cards with properties for easy access
	cardOne = JSON.parse(selectedCards[0]).properties;
	cardTwo = JSON.parse(selectedCards[1]).properties;
	cardThree = JSON.parse(selectedCards[2]).properties;
	checkColor();
};

// check if color is all similat or all different
var checkColor = function() {
	if (((cardOne.color === cardTwo.color) && (cardOne.color == cardThree.color) && (cardTwo.color == cardThree.color)) ||
		((cardOne.color !== cardTwo.color) && (cardOne.color !== cardThree.color) && (cardTwo.color !== cardThree.color))) {
		checkNumber();
	} else {
		indicateNoSet();
	}
};

// check if number is all similat or all different
var checkNumber = function() {
	if (((cardOne.number === cardTwo.number) && (cardOne.number == cardThree.number) && (cardTwo.number == cardThree.number)) ||
		((cardOne.number !== cardTwo.number) && (cardOne.number !== cardThree.number) && (cardTwo.number !== cardThree.number))) {
		checkShape();
	} else {
		indicateNoSet();
	}
};

// check if shape is all similat or all different
var checkShape = function() {
	if (((cardOne.shape === cardTwo.shape) && (cardOne.shape == cardThree.shape) && (cardTwo.shape == cardThree.shape)) ||
		((cardOne.shape !== cardTwo.shape) && (cardOne.shape !== cardThree.shape) && (cardTwo.shape !== cardThree.shape))) {
		checkFill();
	} else {
		indicateNoSet();
	}
};

// check if fill is all similat or all different
var checkFill = function() {
	if (((cardOne.fill === cardTwo.fill) && (cardOne.fill == cardThree.fill) && (cardTwo.fill == cardThree.fill)) ||
		((cardOne.fill !== cardTwo.fill) && (cardOne.fill !== cardThree.fill) && (cardTwo.fill !== cardThree.fill))) {
		earnSet();
	} else {
		indicateNoSet();
	}
};

// remove highlight class after selecting 3 if they are a set or not
var clearHighlight = function() {
	for (var i = 0; i < 3; i++) {
		$("#" + clickedItems[i] + "").removeClass('highlighted');
	};
	clickedItems = []; // empty array
	selectedCards = []; // empty array
};

// after having 15 cards, set back the board to 12 cards
var arrangeCards = function() {
	if (!oneCard || boardArray.length <= 12) {
		thisCard.addClass('remove-card');
		return false;
	};

	// remove selected cards from the array so they won't show up on the board
	var i = 0;
	while (i < boardArray.length) {
		currentBoardItem = jQuery.parseJSON(boardArray[i].id);
		if (currentBoardItem === jQuery.parseJSON(selectedCards[0]).id ||
			currentBoardItem === jQuery.parseJSON(selectedCards[1]).id ||
			currentBoardItem === jQuery.parseJSON(selectedCards[2]).id) {
			boardArray.splice(i, 1);
		} else {
			i++;
		}
	};

	// iterate and set back the 12 left cards for deck (after having 15 and a set)
	for (var i = 0; i < boardArray.length; i++) {
		cardToPlace = boardArray[i]; // select the card
		thisCard = $("#card" + i + "");
		thisCard.removeClass('highlighted');
		thisCard.empty(); // empty card's spot

		// show card image property on card
		$(thisCard).attr("src", cardToPlace.properties.image);
		//set dataCard property to the card object
		dataObj = jQuery.parseJSON(JSON.stringify(cardToPlace));
		thisCard.attr('dataCard', JSON.stringify(dataObj));

		thisCard.off('click'); // remove click event so it won't add multiple click events

		thisCard.click(function() {
			clickItem(this);
		});
	};
	// hide the spots that are reserved for 3 extra cards
	$("#card12, #card13, #card14").addClass('hide-card');
};

// ** UPDATE SCORE AFTER SET **
score = 0;
var updateScore = function() {
	score++;
	$('#score').text(score);
};

// ** EARN SET **
var earnSet = function() {
	sound.play();
	$('#addCardsButton').attr("disabled", false).removeClass("disabled-button");
	$('#message').html('<span id="successMessage" class="success-message message"> This is a SET!</span>');
	updateScore();
	if (boardArray.length > 12) {
		arrangeCards();
	} else if (allCards.length < 3) {
		indicateEndSoon();
	} else {
		drawCards();
	}
	setTimeout(function() {
		clearHighlight();
	}, 200);
};

// ** SHOW NO SET **
var indicateNoSet = function() {
	$('#message').html('<span id="errorMessage" class="error-message message"> This is not a set :(</span>');
	setTimeout(function() {
		clearHighlight();
	}, 300);
};
