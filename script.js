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


var card = JSON.stringify(cards);
// console.log(card);

$(jQuery.parseJSON(JSON.stringify(cards))).each(function() {
    console.log(this.id);
    console.log(this.properties.shape);
});
