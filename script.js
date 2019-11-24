// create an array that contains all cards that are displayed at the moment
// check if card has more than 12 - then different function for arrange cards OR
// each time after set the cards are arranged by the items in the array
// then if more than 12 - cards thst weren't clicked are replacing the cards that are missing on the board


// disable "end game" and "add three" buttons before dealing cards
$(document).ready(function() {
	$('#endButton').attr("disabled", true).addClass("disabled-button");
	$('#addCardsButton').attr("disabled", true).addClass("disabled-button");
});
$("#startButton").click(function() {
	$(".counter").removeClass('hide-message');
	$("#message").empty();
	$('#cardsBoard').removeClass('small-board');
	startTime = Math.floor(Date.now() / 1000); //Get the starting time (right now) in seconds
	startTimeCounter();
	setCards();
	getCards(cards);
	score = 0;
	$('#score').text(score);
	// enable "end game" and "add three" buttons after dealing cards
	$('#endButton').attr("disabled", false).removeClass("disabled-button");
	$('#addCardsButton').attr("disabled", false).removeClass("disabled-button");
});


function startTimeCounter() {
	var now = Math.floor(Date.now() / 1000); // get the time now
	var diff = now - startTime; // difference in seconds between now and start
	var m = Math.floor(diff / 60); // get minutes value
	var s = Math.floor(diff % 60); // get seconds value
	m = checkTime(m); // add a leading zero for a single digit
	s = checkTime(s); // add a leading zero for a single digit
	$("#time").html(m + ":" + s); // update the text on the page

	var t = setTimeout(startTimeCounter, 500); // set a timeout to update the timer
}

function checkTime(i) {
	if (i < 10) {
		i = "0" + i
	}; // add zero in front of numbers < 10
	return i;
}

// $('#seconds').empty();
// // $('#message').remove();
// var start = Date.now();
// timeCount = document.createTextNode('0 seconds');
// $('#message').append('<span class="message-question">Can you find a set?</span>');
// document.getElementById('seconds').appendChild(timeCount);
// return setInterval(function() {
// 	timeCount.data = Math.floor((Date.now() - start) / 1000) + ' seconds'; //TODO: when adding minutes change the "seconds" here.
// }, 1000);
// };

$("#addCardsButton").click(function() {
	addThree();
});

$("#endButton").click(function() {

	$(".counter").addClass('hide-message');
	// clearTimeout(startTimeCounter);
	$("#confirm").click(function() {
		$("#myModal").modal("hide");
		startTime = Math.floor(Date.now() / 1000); //Get the starting time (right now) in seconds
		// message - final Score
		$(".message").remove();
		$("#message").empty();
		if (score > 7) {
			$('#message').append('<span class="message end-message"> GOOD GAME! Your final score is ' + score + " in " + $("#time").html() + '!</span>');
		} else {
			$('#message').append("<span class='message end-message'> That's it? Ok. Your final score is " + score + " in " + $("#time").html() + "</span>");
		}
		$('.modal').modal('hide');
		return false;
	});
	$("#cancel").click(function() {
		$(".counter").removeClass('hide-message');
	});

});

//
// var endGame = function() {
// 	startTime = Math.floor(Date.now() / 1000); //Get the starting time (right now) in seconds
// 	clearTimeout(startTimeCounter);
// 	// message - final Score
// 	$(".message").remove();
// 	$("#message").empty();
// 	if (score > 7) {
// 		$('#message').append('<span class="message end-message"> GOOD GAME! Your final score is ' + score + " in " + $("#time").html() + '!</span>');
// 	} else {
// 		$('#message').append("<span class='message end-message'> That's it? Ok. Your final score is " + score + " in " + $("#time").html() + "</span>");
// 	}
// }

$('#howToButton').popover({
	title: "First time playing?",
	content: "The goal of Set is to pick out a set of 3 cards from the 12 cards on the board. Each card has four characteristics: shape, color, number, and shading. A Set contains 3 cards in which for each characteristic they are all similar or totally different. So, a set may consist of 3 cards of the same shape and color but no common shading, or number of shapes. For more details read the <a href='https://www.setgame.com/sites/default/files/instructions/SET%20INSTRUCTIONS%20-%20ENGLISH.pdf' target='_blank' class='popover-link'>full instructions</a>",
	trigger: 'focus',
	container: ".how-button",
	html: true,
});

// set variables
var timeCount;
var startTime;
var score;
var allCards;
var oneCard;
var thisCard;
var dataObj;
var cardObj;
var boardArray = [];
var selectedCards = [];
var cardOne;
var cardTwo;
var cardThree;
var currentBoardItem;
var isSet;
var clickedItems = [];
var sound = new Audio("./assets/win.wav");
var currentCard;
var arrayOfAdded = [];
var index;
// var extraCards = [];
var emptySpots = [];
var cardToPlace;

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
	console.log("board array in get cards beginning ", boardArray);

	allCards = shuffleDeck(cards);
	// checkIfTwleve();

	// iterate and retrieve 12 cards for deck
	for (var i = 0; i < 12; i++) {
		oneCard = allCards[0]; // select the card
		// boardArray.push(oneCard);
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
	console.log("BOARD Length ", boardArray.length);
};

var drawCards = function() {
	console.log(boardArray.length);
	checkEndGame();
	// if (boardArray.length < 9) {
	// 	console.log("game ends soon!");
	// 	console.log("clickItems in draw cards if boardarray is small ", clickItems);
	// 	thisCard = $("#" + clickedItems[i] + "");
	// 	thisCard.empty(); // empty card's spot
	// 	// allCards.shift(); //remove random card from deck
	//
	// 	// show card image property on card
	// 	// $(thisCard).attr("src", oneCard.properties.image);
	// 	//set dataCard property to the card object
	// 	// dataObj = jQuery.parseJSON(JSON.stringify(oneCard));
	// 	// thisCard.attr('dataCard', JSON.stringify(dataObj));
	// 	$("#message").empty();
	// 	$('#message').append('<span id="successMessage" class="success-message message"> These are the last cards. Find sets if you still can and then click the "END GAME" button to see your final score!</span>');
	// 	$('#cardsBoard').addClass('small-board');
	// } else {
	// remove selevted cards from board array
	var i = 0;
	while (i < boardArray.length) {
		currentBoardItem = jQuery.parseJSON(boardArray[i].id);
		if (currentBoardItem === jQuery.parseJSON(selectedCards[0]).id ||
			currentBoardItem === jQuery.parseJSON(selectedCards[1]).id ||
			currentBoardItem === jQuery.parseJSON(selectedCards[2]).id) {
			console.log("SAME! ", currentBoardItem);
			boardArray.splice(i, 1);
			// console.log("boardArray after splice ", boardArray.length);
		} else {
			i++;
		}
	}

	// for (var i = boardArray.length - 1; i >= 0; i--) {
	// 	currentBoardItem = jQuery.parseJSON(boardArray[i].id);
	// 	if (currentBoardItem === jQuery.parseJSON(selectedCards[0]).id ||
	// 		currentBoardItem === jQuery.parseJSON(selectedCards[1]).id ||
	// 		currentBoardItem === jQuery.parseJSON(selectedCards[2]).id) {
	// 		console.log("SAME! ", currentBoardItem);
	// 		boardArray.splice(i, 1);
	// 	}
	// }
	// replace 3 selected cards with 3 next cards in deck
	for (var i = 0; i < 3; i++) {
		oneCard = allCards[0]; // select the card
		boardArray.push(oneCard);
		// console.log("clicked items ", clickedItems);
		// console.log("one card ", oneCard);
		thisCard = $("#" + clickedItems[i] + "");
		if (!oneCard) {
			thisCard.addClass('remove-card');
			$('#cardsBoard').addClass('small-board');
			return false;
		} else {
			thisCard.empty(); // empty card's spot
			allCards.shift(); //remove random card from deck

			// show card image property on card
			$(thisCard).attr("src", oneCard.properties.image);
			//set dataCard property to the card object
			dataObj = jQuery.parseJSON(JSON.stringify(oneCard));
			thisCard.attr('dataCard', JSON.stringify(dataObj));
		}
	};
	console.log("DECK after draw cards ", allCards.length);
};

var checkEndGame = function() {
	console.log("allcardslength ", allCards.length);
	if (allCards.length <= 0) {
		// $('#endButton').attr("disabled", true).addClass("disabled-button");
		console.log("game ends soon!");
		for (var i = 0; i < 3; i++) {
			console.log("clickedItems in end game ", clickedItems);
			thisCard = $("#" + clickedItems[i] + "");
			thisCard.removeClass('highlighted');
			thisCard.empty(); // empty card's spot
			thisCard.addClass('hide-card');
		}
		$('#message').append('<span id="successMessage" class="success-message message"> These are the last cards. Find sets if you still can and then click the "END GAME" button to see your final score!</span>');
		$('#cardsBoard').addClass('small-board');
	}
};

var clickItem = function(t) {
	$(".message").remove();
	cardObj = $(t).attr("dataCard");
	console.log("CARD OBJ ", cardObj);
	console.log("SELECTED ", selectedCards);

	// check if clicked card is already selected. if it does - diselect it
	if (selectedCards.length > 0) {
		if (jQuery.inArray(cardObj, selectedCards) > -1) {
			console.log("FOUND MATCH!");
			selectedCards.splice(cardObj, 1);
			clickedItems.splice(cardObj, 1);
			console.log("SELECTED AFTER SPLICE ", selectedCards);

			$(t).removeClass('highlighted'); // remove highlight class
		} else {
			// highlight each selected card
			$(t).addClass('highlighted');
			// push selected card to array
			selectedCards.push(cardObj);
			clickedItems.push(t.id);
			// console.log("clicked items after 'click Item'", clickedItems);
		}
	} else {
		// highlight each selected card
		$(t).addClass('highlighted');
		// push selected card to array
		selectedCards.push(cardObj);
		console.log("SELECTED AT END ", selectedCards);

		clickedItems.push(t.id);
		// console.log("clicked items after 'click Item'", clickedItems);
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
	// add the next 3 cards in deck to create a 15 grid
	for (var i = 12; i < 15; i++) {
		oneCard = allCards[0]; // select the card
		boardArray.push(oneCard);
		// console.log("board array after adding ", boardArray);
		// console.log("one card ", oneCard);
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
	// disable button
	$('#addCardsButton').attr("disabled", true).addClass("disabled-button");
	console.log("BOARD Length in add three ", boardArray.length);
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
	// console.log("clearing highlight");
	for (var i = 0; i < 3; i++) {
		$("#" + clickedItems[i] + "").removeClass('highlighted');
	};
	clickedItems = []; // empty array
	selectedCards = []; // empty array
};

// var checkIfTwelve = function() {
// 	// check if there are 12 cards
// 	if (!$("#card14").hasClass('hide-card')) {
// 		// console.log("there are 15");
// 		arrangeCards();
// 		$("#card12, #card13, #card14").addClass('hide-card');
// 	} else {
// 		// console.log("there are only 12");
// 	}
// 	// hide extra cards spots
// 	// console.log("12 ", $('#card12'),"13 ", $('#card13'),"14 ", $('#card14'));
// 	// console.log($("12L ", '#card12').hasClass('hide-card'));
// 	// console.log($("13L ", '#card13').length);
// 	// console.log($("14L ", '#card14').length);
//
// 	// for (var i = 0; i < 12; i++) {
// 	// 	if (!$("#" + clickedItems[i] + "").dataCard) {
// 	// 		console.log("card is empty");
// 	// 	}
// 	// };
// };

var arrangeCards = function() {
	// console.log("EXTRA CARDS: ", extraCards);
	if (!oneCard || boardArray.length <= 12) {
		thisCard.addClass('remove-card');
		$('#cardsBoard').addClass('small-board');
		return false;
	}
	// console.log("selected 0 ", jQuery.parseJSON(selectedCards[0]).id);
	// console.log("selected 1 ", jQuery.parseJSON(selectedCards[1]).id);
	// console.log("selected 1 ", jQuery.parseJSON(selectedCards[2]).id);
	console.log("SELECTED ", selectedCards);

	var i = 0;
	while (i < boardArray.length) {
		currentBoardItem = jQuery.parseJSON(boardArray[i].id);
		if (currentBoardItem === jQuery.parseJSON(selectedCards[0]).id ||
			currentBoardItem === jQuery.parseJSON(selectedCards[1]).id ||
			currentBoardItem === jQuery.parseJSON(selectedCards[2]).id) {
			// console.log("C ", currentBoardItem);
			console.log("SAME! ", currentBoardItem);
			boardArray.splice(i, 1);
		} else {
			i++;
			// console.log("I ", i);
		}
	}
	// for (var i = boardArray.length - 1; i >= 0; i--) {
	// 	currentBoardItem = jQuery.parseJSON(boardArray[i].id);
	//
	// 	if (currentBoardItem === jQuery.parseJSON(selectedCards[0]).id ||
	// 		currentBoardItem === jQuery.parseJSON(selectedCards[1]).id ||
	// 		currentBoardItem === jQuery.parseJSON(selectedCards[2]).id) {
	// 		// console.log("BOARD AFTER SPLICING: ", boardArray);
	// 	}
	// }
	// for (var i = clickedItems.length-1; i >= 0; i--) {
	// 	var idNum = clickedItems[i].replace( /^\D+/g, '');
	// 	if (idNum < 12) {
	// 		emptySpots.push(clickedItems[i]);
	// 	}
	// }

	// iterate and retrieve 12 cards for deck
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
		// console.log("each board array item: ", boardArray[i]);
		// console.log("clicked in arrange ", clickedItems);
	}
	$("#card12, #card13, #card14").addClass('hide-card');
	// console.log("EMPTY SPOTS ", emptySpots);
	// for (var i = emptySpots.length-1; i > 0; i--) {
	// 	console.log("EMPTY CURRENT: ", $("#" + emptySpots[i]));
	// 	$("#" + emptySpots[i]).attr("src", cardToPlace.properties.image);
	// 	dataObj = jQuery.parseJSON(JSON.stringify(cardToPlace));
	// 	thisCard.attr('dataCard', JSON.stringify(dataObj));
	// }
	// console.log("board array after splice 3: ", boardArray);
	console.log("board array length: ", boardArray.length);

	// currentCardId = jQuery.parseJSON(currentCard[0].attributes[0].value);
	// console.log("CARD ID: ", currentCardId);
	// arrayOfAdded = ["card12", "card13", "card14"];
	// console.log("AOA before ", arrayOfAdded);
	// for (var i = 0; i < 3; i++) {
	// console.log(currentCardId[i]);
	// index = arrayOfAdded.indexOf(""+ currentCardId[i] + "");
	// index = jQuery.inArray(currentCardId[i], arrayOfAdded)
	// console.log(index);
	// if (index > -1) {
	// 	arrayOfAdded.splice(index, 1);
	// 	console.log("AOA after ", arrayOfAdded);
	// }

}



// for (var i = 0; i < 15; i++) {
// 	if (!$("#" + clickedItems[i] + "").dataCard) {
// 		console.log("card is empty");
// 	}
// };


// replace 3 selected cards with 3 next cards in deck
// for (var i = 0; i < 3; i++) {
// 	oneCard = allCards[0]; // select the card
// 	// console.log("clicked items ", clickedItems);
// 	// console.log("one card ", oneCard);
//
//
// 		//set dataCard property to the card object
// 		dataObj = jQuery.parseJSON(JSON.stringify(oneCard));
// 		thisCard.attr('dataCard', JSON.stringify(dataObj));
// 	}
// console.log("DECK after draw cards ", allCards.length);

score = 0;
var updateScore = function() {
	score++;
	$('#score').text(score);
};

var earnSet = function() {
	// sound.play();
	$('#addCardsButton').attr("disabled", false).removeClass("disabled-button");
	$('#message').append('<br><span id="successMessage" class="success-message message"> This is a SET!</span>');
	updateScore();
	// console.log("board after set: ", boardArray.length);
	if (boardArray.length > 12) {
		// console.log("just arranging ", boardArray.length);
		arrangeCards();
	} else {
		// console.log("need to draw more cards ", boardArray.length);
		drawCards();
	}
	setTimeout(function() {
		clearHighlight();
	}, 200);
};

var indicateNoSet = function() {
	$('#message').append('<br><span id="errorMessage" class="error-message message"> This is not a set :(</span>');
	setTimeout(function() {
		clearHighlight();
	}, 300);
};
