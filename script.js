$("#start-button").click(function() {
  countSeconds();
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
	 var allCards = $(jQuery.parseJSON(JSON.stringify(cards)));
    var displayedCards = [];
    for (var i = 0; i < 12; i++) {
			var oneCard = allCards[Math.floor(Math.random()*allCards.length)];
      displayedCards.push(oneCard);
			$("#cardsBoard").append("<div>" + oneCard.id + oneCard.properties.color + oneCard.properties.shape +"</div>");
    }

		console.log(displayedCards);
    // return result;
}

getCards(cards);
