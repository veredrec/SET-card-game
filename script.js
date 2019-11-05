$("#start-button").click(function() {
  // countSeconds();
  getCards(cards);
});

function countSeconds() {
   var start = Date.now();
   var textNode = document.createTextNode('0 seconds');
   document.getElementById('seconds').appendChild(textNode);
   return setInterval(function () {
		 textNode.data = Math.floor((Date.now()-start)/1000) + ' seconds';
   }, 1000);
};

var getCards = function(cards) {
	 var allCards = $(jQuery.parseJSON(JSON.stringify(cards))); //stringify cards
   console.log("CARDS BEFORE ", allCards.length);
    var displayedCards = [];
    for (var i = 1; i < 13; i++) {
			var oneCard = allCards[Math.floor(Math.random()*allCards.length)]; //select 12 random cards
			$("#card"+i+"").append("<p>" + oneCard.id + oneCard.properties.color + oneCard.properties.shape +"</p>");
      displayedCards.push(oneCard); //add random cards to new array
      var thisCard = $(jQuery.parseJSON(JSON.stringify(oneCard)));
      allCards.splice(thisCard, 1); //remove random cards from deck
    }

		console.log(displayedCards);
    console.log("CARDS AFTER ", allCards.length);
    // return displayedCards;
}
