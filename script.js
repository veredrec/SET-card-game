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

var dataObj;
var cardObj;

var getCards = function(cards) {
	 var allCards = $(jQuery.parseJSON(JSON.stringify(cards))); //stringify cards
   console.log("CARDS BEFORE ", allCards.length);
    var displayedCards = [];
    for (var i = 1; i < 13; i++) {
			var oneCard = allCards[Math.floor(Math.random()*allCards.length)]; //select 12 random cards
      $("#card"+i+"").empty();
      $("#card"+i+"").append("<p class='card-text'>" + oneCard.id + " " + oneCard.properties.color + " " + oneCard.properties.shape +"</p>");
      displayedCards.push(oneCard); //add random cards to new array
      var cardToRemove = $(jQuery.parseJSON(JSON.stringify(oneCard)));
      allCards.splice(cardToRemove, 1); //remove random cards from deck
      dataObj = jQuery.parseJSON(JSON.stringify(oneCard));
      // console.log("Data Obj ", dataObj);
      var thisCard = $("#card"+i+"");
      // console.log("THIS CARD ", thisCard);

      // var something = thisCard.attr("dataCard")//returns "5"
      // console.log("SOMETHING ", something); //works well

       // thisCard.attr("dataCard", 20)      //changes "data-myval" to "20"
       // console.log("This card with 20 ", thisCard.attr("dataCard"));
       // thisCard.removeAttribute("data-myval")

      thisCard.attr('dataCard', JSON.stringify(dataObj)); //setter
      // console.log("this card with data obj ", thisCard.attr("dataCard"));
      // var showCard = $(JSON.stringify(thisCard.attr('dataCard')));
      // console.log("Obj in card: ", showCard);
      // $("#card"+i+"").attr("dataCard",dataObj);
      thisCard.click(function() {
        // event.target.dataset.tag
        // event.target.getAttribute('data-tag')
        cardObj = $(this).attr("dataCard");
        // console.log("cardObj: ", cardObj);
        checkClicks(cardObj);
      })
    }

		console.log(displayedCards);
    console.log("CARDS AFTER ", allCards.length);
    // return displayedCards;
}
var checkClicks = function(cardObj) {
  console.log(cardObj);
  var cardProperties = JSON.parse(cardObj)
  console.log(cardProperties.id);
  console.log(cardProperties["properties"].color);
};
// var selectCards = function(dataObj) {
  // console.log(dataObj);
  // console.log(event.target);
  // var data_str = this("dataCard");
  // var currentCard = jQuery.parseJSON(JSON.stringify(data_str)).data('key');
  // console.log(currentCard);
// };
// selectCards(dataObj);
