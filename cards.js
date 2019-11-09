var cards;
var setCards = function() {
	cards = [{
			id: 1,
			properties: {
				color: "purple",
				shape: "oval",
				number: 1,
				fill: "empty",
				image: "src"
			}
		},
		{
			id: 2,
			properties: {
				color: "purple",
				shape: "oval",
				number: 2,
				fill: "empty",
				image: "src"
			}
		},
		{
			id: 3,
			properties: {
				color: "purple",
				shape: "oval",
				number: 3,
				fill: "empty",
				image: "src"
			}
		},
		{
			id: 4,
			properties: {
				color: "purple",
				shape: "oval",
				number: 1,
				fill: "stripes",
				image: "src"
			}
		},
		{
			id: 5,
			properties: {
				color: "purple",
				shape: "oval",
				number: 2,
				fill: "stripes",
				image: "src"
			}
		},
		{
			id: 6,
			properties: {
				color: "purple",
				shape: "oval",
				number: 3,
				fill: "stripes",
				image: "src"
			}
		},
		{
			id: 7,
			properties: {
				color: "purple",
				shape: "oval",
				number: 1,
				fill: "full",
				image: "src"
			}
		},
		{
			id: 8,
			properties: {
				color: "purple",
				shape: "oval",
				number: 2,
				fill: "full",
				image: "src"
			}
		},
		{
			id: 9,
			properties: {
				color: "purple",
				shape: "oval",
				number: 3,
				fill: "full",
				image: "src"
			}
		},
		{
			id: 10,
			properties: {
				color: "purple",
				shape: "snake",
				number: 1,
				fill: "empty",
				image: "src"
			}
		},
		{
			id: 11,
			properties: {
				color: "purple",
				shape: "snake",
				number: 2,
				fill: "empty",
				image: "src"
			}
		},
		{
			id: 12,
			properties: {
				color: "purple",
				shape: "snake",
				number: 3,
				fill: "empty",
				image: "src"
			}
		},
		{
			id: 13,
			properties: {
				color: "purple",
				shape: "snake",
				number: 1,
				fill: "stripes",
				image: "src"
			}
		},
		{
			id: 14,
			properties: {
				color: "purple",
				shape: "snake",
				number: 2,
				fill: "stripes",
				image: "src"
			}
		},
		{
			id: 15,
			properties: {
				color: "purple",
				shape: "snake",
				number: 3,
				fill: "stripes",
				image: "src"
			}
		},
		{
			id: 16,
			properties: {
				color: "purple",
				shape: "snake",
				number: 1,
				fill: "full",
				image: "src"
			}
		},
		{
			id: 17,
			properties: {
				color: "purple",
				shape: "snake",
				number: 2,
				fill: "full",
				image: "src"
			}
		},
		{
			id: 18,
			properties: {
				color: "purple",
				shape: "snake",
				number: 3,
				fill: "full",
				image: "src"
			}
		},
		{
			id: 19,
			properties: {
				color: "purple",
				shape: "diamond",
				number: 1,
				fill: "empty",
				image: "src"
			}
		},
		{
			id: 20,
			properties: {
				color: "purple",
				shape: "diamond",
				number: 2,
				fill: "empty",
				image: "src"
			}
		},
		{
			id: 21,
			properties: {
				color: "purple",
				shape: "diamond",
				number: 3,
				fill: "empty",
				image: "src"
			}
		},
		{
			id: 22,
			properties: {
				color: "purple",
				shape: "diamond",
				number: 1,
				fill: "stripes",
				image: "src"
			}
		},
		{
			id: 23,
			properties: {
				color: "purple",
				shape: "diamond",
				number: 2,
				fill: "stripes",
				image: "src"
			}
		},
		{
			id: 24,
			properties: {
				color: "purple",
				shape: "diamond",
				number: 3,
				fill: "stripes",
				image: "src"
			}
		},
		{
			id: 25,
			properties: {
				color: "purple",
				shape: "diamond",
				number: 1,
				fill: "full",
				image: "src"
			}
		},
		{
			id: 26,
			properties: {
				color: "purple",
				shape: "diamond",
				number: 2,
				fill: "full",
				image: "src"
			}
		},
		{
			id: 27,
			properties: {
				color: "purple",
				shape: "diamond",
				number: 3,
				fill: "full",
				image: "src"
			}
		},
		{
			id: 28,
			properties: {
				color: "green",
				shape: "oval",
				number: 1,
				fill: "empty",
				image: "src"
			}
		},
		{
			id: 29,
			properties: {
				color: "green",
				shape: "oval",
				number: 2,
				fill: "empty",
				image: "src"
			}
		},
		{
			id: 30,
			properties: {
				color: "green",
				shape: "oval",
				number: 3,
				fill: "empty",
				image: "src"
			}
		},
		{
			id: 31,
			properties: {
				color: "green",
				shape: "oval",
				number: 1,
				fill: "stripes",
				image: "src"
			}
		},
		{
			id: 32,
			properties: {
				color: "green",
				shape: "oval",
				number: 2,
				fill: "stripes",
				image: "src"
			}
		},
		{
			id: 33,
			properties: {
				color: "green",
				shape: "oval",
				number: 3,
				fill: "stripes",
				image: "src"
			}
		},
		{
			id: 34,
			properties: {
				color: "green",
				shape: "oval",
				number: 1,
				fill: "full",
				image: "src"
			}
		},
		{
			id: 35,
			properties: {
				color: "green",
				shape: "oval",
				number: 2,
				fill: "full",
				image: "src"
			}
		},
		{
			id: 36,
			properties: {
				color: "green",
				shape: "oval",
				number: 3,
				fill: "full",
				image: "src"
			}
		},
		{
			id: 37,
			properties: {
				color: "green",
				shape: "snake",
				number: 1,
				fill: "empty",
				image: "src"
			}
		},
		{
			id: 38,
			properties: {
				color: "green",
				shape: "snake",
				number: 2,
				fill: "empty",
				image: "src"
			}
		},
		{
			id: 39,
			properties: {
				color: "green",
				shape: "snake",
				number: 3,
				fill: "empty",
				image: "src"
			}
		},
		{
			id: 40,
			properties: {
				color: "green",
				shape: "snake",
				number: 1,
				fill: "stripes",
				image: "src"
			}
		},
		{
			id: 41,
			properties: {
				color: "green",
				shape: "snake",
				number: 2,
				fill: "stripes",
				image: "src"
			}
		},
		{
			id: 42,
			properties: {
				color: "green",
				shape: "snake",
				number: 3,
				fill: "stripes",
				image: "src"
			}
		},
		{
			id: 43,
			properties: {
				color: "green",
				shape: "snake",
				number: 1,
				fill: "full",
				image: "src"
			}
		},
		{
			id: 44,
			properties: {
				color: "green",
				shape: "snake",
				number: 2,
				fill: "full",
				image: "src"
			}
		},
		{
			id: 45,
			properties: {
				color: "green",
				shape: "snake",
				number: 3,
				fill: "full",
				image: "src"
			}
		},
		{
			id: 46,
			properties: {
				color: "green",
				shape: "diamond",
				number: 1,
				fill: "empty",
				image: "src"
			}
		},
		{
			id: 47,
			properties: {
				color: "green",
				shape: "diamond",
				number: 2,
				fill: "empty",
				image: "src"
			}
		},
		{
			id: 48,
			properties: {
				color: "green",
				shape: "diamond",
				number: 3,
				fill: "empty",
				image: "src"
			}
		},
		{
			id: 49,
			properties: {
				color: "green",
				shape: "diamond",
				number: 1,
				fill: "stripes",
				image: "src"
			}
		},
		{
			id: 50,
			properties: {
				color: "green",
				shape: "diamond",
				number: 2,
				fill: "stripes",
				image: "src"
			}
		},
		{
			id: 51,
			properties: {
				color: "green",
				shape: "diamond",
				number: 3,
				fill: "stripes",
				image: "src"
			}
		},
		{
			id: 52,
			properties: {
				color: "green",
				shape: "diamond",
				number: 1,
				fill: "full",
				image: "src"
			}
		},
		{
			id: 53,
			properties: {
				color: "green",
				shape: "diamond",
				number: 2,
				fill: "full",
				image: "src"
			}
		},
		{
			id: 54,
			properties: {
				color: "green",
				shape: "diamond",
				number: 3,
				fill: "full",
				image: "src"
			}
		},
		{
			id: 55,
			properties: {
				color: "red",
				shape: "oval",
				number: 1,
				fill: "empty",
				image: "src"
			}
		},
		{
			id: 56,
			properties: {
				color: "red",
				shape: "oval",
				number: 2,
				fill: "empty",
				image: "src"
			}
		},
		{
			id: 57,
			properties: {
				color: "red",
				shape: "oval",
				number: 3,
				fill: "empty",
				image: "src"
			}
		},
		{
			id: 58,
			properties: {
				color: "red",
				shape: "oval",
				number: 1,
				fill: "stripes",
				image: "src"
			}
		},
		{
			id: 59,
			properties: {
				color: "red",
				shape: "oval",
				number: 2,
				fill: "stripes",
				image: "src"
			}
		},
		{
			id: 60,
			properties: {
				color: "red",
				shape: "oval",
				number: 3,
				fill: "stripes",
				image: "src"
			}
		},
		{
			id: 61,
			properties: {
				color: "red",
				shape: "oval",
				number: 1,
				fill: "full",
				image: "src"
			}
		},
		{
			id: 62,
			properties: {
				color: "red",
				shape: "oval",
				number: 2,
				fill: "full",
				image: "src"
			}
		},
		{
			id: 63,
			properties: {
				color: "red",
				shape: "oval",
				number: 3,
				fill: "full",
				image: "src"
			}
		},
		{
			id: 64,
			properties: {
				color: "red",
				shape: "snake",
				number: 1,
				fill: "empty",
				image: "src"
			}
		},
		{
			id: 65,
			properties: {
				color: "red",
				shape: "snake",
				number: 2,
				fill: "empty",
				image: "src"
			}
		},
		{
			id: 66,
			properties: {
				color: "red",
				shape: "snake",
				number: 3,
				fill: "empty",
				image: "src"
			}
		},
		{
			id: 67,
			properties: {
				color: "red",
				shape: "snake",
				number: 1,
				fill: "stripes",
				image: "src"
			}
		},
		{
			id: 68,
			properties: {
				color: "red",
				shape: "snake",
				number: 2,
				fill: "stripes",
				image: "src"
			}
		},
		{
			id: 69,
			properties: {
				color: "red",
				shape: "snake",
				number: 3,
				fill: "stripes",
				image: "src"
			}
		},
		{
			id: 70,
			properties: {
				color: "red",
				shape: "snake",
				number: 1,
				fill: "full",
				image: "src"
			}
		},
		{
			id: 71,
			properties: {
				color: "red",
				shape: "snake",
				number: 2,
				fill: "full",
				image: "src"
			}
		},
		{
			id: 72,
			properties: {
				color: "red",
				shape: "snake",
				number: 3,
				fill: "full",
				image: "src"
			}
		},
		{
			id: 73,
			properties: {
				color: "red",
				shape: "diamond",
				number: 1,
				fill: "empty",
				image: "src"
			}
		},
		{
			id: 74,
			properties: {
				color: "red",
				shape: "diamond",
				number: 2,
				fill: "empty",
				image: "src"
			}
		},
		{
			id: 75,
			properties: {
				color: "red",
				shape: "diamond",
				number: 3,
				fill: "empty",
				image: "src"
			}
		},
		{
			id: 76,
			properties: {
				color: "red",
				shape: "diamond",
				number: 1,
				fill: "stripes",
				image: "src"
			}
		},
		{
			id: 77,
			properties: {
				color: "red",
				shape: "diamond",
				number: 2,
				fill: "stripes",
				image: "src"
			}
		},
		{
			id: 78,
			properties: {
				color: "red",
				shape: "diamond",
				number: 3,
				fill: "stripes",
				image: "src"
			}
		},
		{
			id: 79,
			properties: {
				color: "red",
				shape: "diamond",
				number: 1,
				fill: "full",
				image: "src"
			}
		},
		{
			id: 80,
			properties: {
				color: "red",
				shape: "diamond",
				number: 2,
				fill: "full",
				image: "src"
			}
		},
		{
			id: 81,
			properties: {
				color: "red",
				shape: "diamond",
				number: 3,
				fill: "full",
				image: "src"
			}
		}
	]
	return cards;
};
