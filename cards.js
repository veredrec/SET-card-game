var cards;
var setCards = function() {
	cards = [{
			id: 1,
			properties: {
				color: "purple",
				shape: "oval",
				number: 1,
				fill: "empty",
				image: "./assets/cards/O-E-1-P.png"
			}
		},
		{
			id: 2,
			properties: {
				color: "purple",
				shape: "oval",
				number: 2,
				fill: "empty",
				image: "./assets/cards/O-E-2-P.png"
			}
		},
		{
			id: 3,
			properties: {
				color: "purple",
				shape: "oval",
				number: 3,
				fill: "empty",
				image: "./assets/cards/O-E-3-P.png"
			}
		},
		{
			id: 4,
			properties: {
				color: "purple",
				shape: "oval",
				number: 1,
				fill: "stripes",
				image: "./assets/cards/O-S-1-P.png"
			}
		},
		{
			id: 5,
			properties: {
				color: "purple",
				shape: "oval",
				number: 2,
				fill: "stripes",
				image: "./assets/cards/O-S-2-P.png"
			}
		},
		{
			id: 6,
			properties: {
				color: "purple",
				shape: "oval",
				number: 3,
				fill: "stripes",
				image: "./assets/cards/O-S-3-P.png"
			}
		},
		{
			id: 7,
			properties: {
				color: "purple",
				shape: "oval",
				number: 1,
				fill: "full",
				image: "./assets/cards/O-F-1-P.png"
			}
		},
		{
			id: 8,
			properties: {
				color: "purple",
				shape: "oval",
				number: 2,
				fill: "full",
				image: "./assets/cards/O-F-2-P.png"
			}
		},
		{
			id: 9,
			properties: {
				color: "purple",
				shape: "oval",
				number: 3,
				fill: "full",
				image: "./assets/cards/O-F-3-P.png"
			}
		},
		{
			id: 10,
			properties: {
				color: "purple",
				shape: "snake",
				number: 1,
				fill: "empty",
				image: "./assets/cards/S-E-1-P.png"
			}
		},
		{
			id: 11,
			properties: {
				color: "purple",
				shape: "snake",
				number: 2,
				fill: "empty",
				image: "./assets/cards/S-E-2-P.png"
			}
		},
		{
			id: 12,
			properties: {
				color: "purple",
				shape: "snake",
				number: 3,
				fill: "empty",
				image: "./assets/cards/S-E-3-P.png"
			}
		},
		{
			id: 13,
			properties: {
				color: "purple",
				shape: "snake",
				number: 1,
				fill: "stripes",
				image: "./assets/cards/S-S-1-P.png"
			}
		},
		{
			id: 14,
			properties: {
				color: "purple",
				shape: "snake",
				number: 2,
				fill: "stripes",
				image: "./assets/cards/S-S-2-P.png"
			}
		},
		{
			id: 15,
			properties: {
				color: "purple",
				shape: "snake",
				number: 3,
				fill: "stripes",
				image: "./assets/cards/S-S-3-P.png"
			}
		},
		{
			id: 16,
			properties: {
				color: "purple",
				shape: "snake",
				number: 1,
				fill: "full",
				image: "./assets/cards/S-F-1-P.png"
			}
		},
		{
			id: 17,
			properties: {
				color: "purple",
				shape: "snake",
				number: 2,
				fill: "full",
				image: "./assets/cards/S-F-2-P.png"
			}
		},
		{
			id: 18,
			properties: {
				color: "purple",
				shape: "snake",
				number: 3,
				fill: "full",
				image: "./assets/cards/S-F-3-P.png"
			}
		},
		{
			id: 19,
			properties: {
				color: "purple",
				shape: "diamond",
				number: 1,
				fill: "empty",
				image: "./assets/cards/D-E-1-P.png"
			}
		},
		{
			id: 20,
			properties: {
				color: "purple",
				shape: "diamond",
				number: 2,
				fill: "empty",
				image: "./assets/cards/D-E-2-P.png"
			}
		},
		{
			id: 21,
			properties: {
				color: "purple",
				shape: "diamond",
				number: 3,
				fill: "empty",
				image: "./assets/cards/D-E-3-P.png"
			}
		},
		// {
		// 	id: 22,
		// 	properties: {
		// 		color: "purple",
		// 		shape: "diamond",
		// 		number: 1,
		// 		fill: "stripes",
		// 		image: "./assets/cards/D-S-1-P.png"
		// 	}
		// },
		// {
		// 	id: 23,
		// 	properties: {
		// 		color: "purple",
		// 		shape: "diamond",
		// 		number: 2,
		// 		fill: "stripes",
		// 		image: "./assets/cards/D-S-2-P.png"
		// 	}
		// },
		// {
		// 	id: 24,
		// 	properties: {
		// 		color: "purple",
		// 		shape: "diamond",
		// 		number: 3,
		// 		fill: "stripes",
		// 		image: "./assets/cards/D-S-3-P.png"
		// 	}
		// },
		// {
		// 	id: 25,
		// 	properties: {
		// 		color: "purple",
		// 		shape: "diamond",
		// 		number: 1,
		// 		fill: "full",
		// 		image: "./assets/cards/D-F-1-P.png"
		// 	}
		// },
		// {
		// 	id: 26,
		// 	properties: {
		// 		color: "purple",
		// 		shape: "diamond",
		// 		number: 2,
		// 		fill: "full",
		// 		image: "./assets/cards/D-F-2-P.png"
		// 	}
		// },
		// {
		// 	id: 27,
		// 	properties: {
		// 		color: "purple",
		// 		shape: "diamond",
		// 		number: 3,
		// 		fill: "full",
		// 		image: "./assets/cards/D-F-3-P.png"
		// 	}
		// },
		// {
		// 	id: 28,
		// 	properties: {
		// 		color: "green",
		// 		shape: "oval",
		// 		number: 1,
		// 		fill: "empty",
		// 		image: "./assets/cards/O-E-1-G.png"
		// 	}
		// },
		// {
		// 	id: 29,
		// 	properties: {
		// 		color: "green",
		// 		shape: "oval",
		// 		number: 2,
		// 		fill: "empty",
		// 		image: "./assets/cards/O-E-2-G.png"
		// 	}
		// },
		// {
		// 	id: 30,
		// 	properties: {
		// 		color: "green",
		// 		shape: "oval",
		// 		number: 3,
		// 		fill: "empty",
		// 		image: "./assets/cards/O-E-3-G.png"
		// 	}
		// },
		// {
		// 	id: 31,
		// 	properties: {
		// 		color: "green",
		// 		shape: "oval",
		// 		number: 1,
		// 		fill: "stripes",
		// 		image: "./assets/cards/O-S-1-G.png"
		// 	}
		// },
		// {
		// 	id: 32,
		// 	properties: {
		// 		color: "green",
		// 		shape: "oval",
		// 		number: 2,
		// 		fill: "stripes",
		// 		image: "./assets/cards/O-S-2-G.png"
		// 	}
		// },
		// {
		// 	id: 33,
		// 	properties: {
		// 		color: "green",
		// 		shape: "oval",
		// 		number: 3,
		// 		fill: "stripes",
		// 		image: "./assets/cards/O-S-3-G.png"
		// 	}
		// },
		// {
		// 	id: 34,
		// 	properties: {
		// 		color: "green",
		// 		shape: "oval",
		// 		number: 1,
		// 		fill: "full",
		// 		image: "./assets/cards/O-F-1-G.png"
		// 	}
		// },
		// {
		// 	id: 35,
		// 	properties: {
		// 		color: "green",
		// 		shape: "oval",
		// 		number: 2,
		// 		fill: "full",
		// 		image: "./assets/cards/O-F-2-G.png"
		// 	}
		// },
		// {
		// 	id: 36,
		// 	properties: {
		// 		color: "green",
		// 		shape: "oval",
		// 		number: 3,
		// 		fill: "full",
		// 		image: "./assets/cards/O-F-3-G.png"
		// 	}
		// },
		// {
		// 	id: 37,
		// 	properties: {
		// 		color: "green",
		// 		shape: "snake",
		// 		number: 1,
		// 		fill: "empty",
		// 		image: "./assets/cards/S-E-1-G.png"
		// 	}
		// },
		// {
		// 	id: 38,
		// 	properties: {
		// 		color: "green",
		// 		shape: "snake",
		// 		number: 2,
		// 		fill: "empty",
		// 		image: "./assets/cards/S-E-2-G.png"
		// 	}
		// },
		// {
		// 	id: 39,
		// 	properties: {
		// 		color: "green",
		// 		shape: "snake",
		// 		number: 3,
		// 		fill: "empty",
		// 		image: "./assets/cards/S-E-3-G.png"
		// 	}
		// },
		// {
		// 	id: 40,
		// 	properties: {
		// 		color: "green",
		// 		shape: "snake",
		// 		number: 1,
		// 		fill: "stripes",
		// 		image: "./assets/cards/S-S-1-G.png"
		// 	}
		// },
		// {
		// 	id: 41,
		// 	properties: {
		// 		color: "green",
		// 		shape: "snake",
		// 		number: 2,
		// 		fill: "stripes",
		// 		image: "./assets/cards/S-S-2-G.png"
		// 	}
		// },
		// {
		// 	id: 42,
		// 	properties: {
		// 		color: "green",
		// 		shape: "snake",
		// 		number: 3,
		// 		fill: "stripes",
		// 		image: "./assets/cards/S-S-3-G.png"
		// 	}
		// },
		// {
		// 	id: 43,
		// 	properties: {
		// 		color: "green",
		// 		shape: "snake",
		// 		number: 1,
		// 		fill: "full",
		// 		image: "./assets/cards/S-F-1-G.png"
		// 	}
		// },
		// {
		// 	id: 44,
		// 	properties: {
		// 		color: "green",
		// 		shape: "snake",
		// 		number: 2,
		// 		fill: "full",
		// 		image: "./assets/cards/S-F-2-G.png"
		// 	}
		// },
		// {
		// 	id: 45,
		// 	properties: {
		// 		color: "green",
		// 		shape: "snake",
		// 		number: 3,
		// 		fill: "full",
		// 		image: "./assets/cards/S-F-3-G.png"
		// 	}
		// },
		// {
		// 	id: 46,
		// 	properties: {
		// 		color: "green",
		// 		shape: "diamond",
		// 		number: 1,
		// 		fill: "empty",
		// 		image: "./assets/cards/D-E-1-G.png"
		// 	}
		// },
		// {
		// 	id: 47,
		// 	properties: {
		// 		color: "green",
		// 		shape: "diamond",
		// 		number: 2,
		// 		fill: "empty",
		// 		image: "./assets/cards/D-E-2-G.png"
		// 	}
		// },
		// {
		// 	id: 48,
		// 	properties: {
		// 		color: "green",
		// 		shape: "diamond",
		// 		number: 3,
		// 		fill: "empty",
		// 		image: "./assets/cards/D-E-3-G.png"
		// 	}
		// },
		// {
		// 	id: 49,
		// 	properties: {
		// 		color: "green",
		// 		shape: "diamond",
		// 		number: 1,
		// 		fill: "stripes",
		// 		image: "./assets/cards/D-S-1-G.png"
		// 	}
		// },
		// {
		// 	id: 50,
		// 	properties: {
		// 		color: "green",
		// 		shape: "diamond",
		// 		number: 2,
		// 		fill: "stripes",
		// 		image: "./assets/cards/D-S-2-G.png"
		// 	}
		// },
		// {
		// 	id: 51,
		// 	properties: {
		// 		color: "green",
		// 		shape: "diamond",
		// 		number: 3,
		// 		fill: "stripes",
		// 		image: "./assets/cards/D-S-3-G.png"
		// 	}
		// },
		// {
		// 	id: 52,
		// 	properties: {
		// 		color: "green",
		// 		shape: "diamond",
		// 		number: 1,
		// 		fill: "full",
		// 		image: "./assets/cards/D-F-1-G.png"
		// 	}
		// },
		// {
		// 	id: 53,
		// 	properties: {
		// 		color: "green",
		// 		shape: "diamond",
		// 		number: 2,
		// 		fill: "full",
		// 		image: "./assets/cards/D-F-2-G.png"
		// 	}
		// },
		// {
		// 	id: 54,
		// 	properties: {
		// 		color: "green",
		// 		shape: "diamond",
		// 		number: 3,
		// 		fill: "full",
		// 		image: "./assets/cards/D-F-3-G.png"
		// 	}
		// },
		// {
		// 	id: 55,
		// 	properties: {
		// 		color: "red",
		// 		shape: "oval",
		// 		number: 1,
		// 		fill: "empty",
		// 		image: "./assets/cards/O-E-1-R.png"
		// 	}
		// },
		// {
		// 	id: 56,
		// 	properties: {
		// 		color: "red",
		// 		shape: "oval",
		// 		number: 2,
		// 		fill: "empty",
		// 		image: "./assets/cards/O-E-2-R.png"
		// 	}
		// },
		// {
		// 	id: 57,
		// 	properties: {
		// 		color: "red",
		// 		shape: "oval",
		// 		number: 3,
		// 		fill: "empty",
		// 		image: "./assets/cards/O-E-3-R.png"
		// 	}
		// },
		// {
		// 	id: 58,
		// 	properties: {
		// 		color: "red",
		// 		shape: "oval",
		// 		number: 1,
		// 		fill: "stripes",
		// 		image: "./assets/cards/O-S-1-R.png"
		// 	}
		// },
		// {
		// 	id: 59,
		// 	properties: {
		// 		color: "red",
		// 		shape: "oval",
		// 		number: 2,
		// 		fill: "stripes",
		// 		image: "./assets/cards/O-S-2-R.png"
		// 	}
		// },
		// {
		// 	id: 60,
		// 	properties: {
		// 		color: "red",
		// 		shape: "oval",
		// 		number: 3,
		// 		fill: "stripes",
		// 		image: "./assets/cards/O-S-3-R.png"
		// 	}
		// },
		// {
		// 	id: 61,
		// 	properties: {
		// 		color: "red",
		// 		shape: "oval",
		// 		number: 1,
		// 		fill: "full",
		// 		image: "./assets/cards/O-F-1-R.png"
		// 	}
		// },
		// {
		// 	id: 62,
		// 	properties: {
		// 		color: "red",
		// 		shape: "oval",
		// 		number: 2,
		// 		fill: "full",
		// 		image: "./assets/cards/O-F-2-R.png"
		// 	}
		// },
		// {
		// 	id: 63,
		// 	properties: {
		// 		color: "red",
		// 		shape: "oval",
		// 		number: 3,
		// 		fill: "full",
		// 		image: "./assets/cards/O-F-3-R.png"
		// 	}
		// },
		// {
		// 	id: 64,
		// 	properties: {
		// 		color: "red",
		// 		shape: "snake",
		// 		number: 1,
		// 		fill: "empty",
		// 		image: "./assets/cards/S-E-1-R.png"
		// 	}
		// },
		// {
		// 	id: 65,
		// 	properties: {
		// 		color: "red",
		// 		shape: "snake",
		// 		number: 2,
		// 		fill: "empty",
		// 		image: "./assets/cards/S-E-2-R.png"
		// 	}
		// },
		// {
		// 	id: 66,
		// 	properties: {
		// 		color: "red",
		// 		shape: "snake",
		// 		number: 3,
		// 		fill: "empty",
		// 		image: "./assets/cards/S-E-3-R.png"
		// 	}
		// },
		// {
		// 	id: 67,
		// 	properties: {
		// 		color: "red",
		// 		shape: "snake",
		// 		number: 1,
		// 		fill: "stripes",
		// 		image: "./assets/cards/S-S-1-R.png"
		// 	}
		// },
		// {
		// 	id: 68,
		// 	properties: {
		// 		color: "red",
		// 		shape: "snake",
		// 		number: 2,
		// 		fill: "stripes",
		// 		image: "./assets/cards/S-S-2-R.png"
		// 	}
		// },
		// {
		// 	id: 69,
		// 	properties: {
		// 		color: "red",
		// 		shape: "snake",
		// 		number: 3,
		// 		fill: "stripes",
		// 		image: "./assets/cards/S-S-3-R.png"
		// 	}
		// },
		// {
		// 	id: 70,
		// 	properties: {
		// 		color: "red",
		// 		shape: "snake",
		// 		number: 1,
		// 		fill: "full",
		// 		image: "./assets/cards/S-F-1-R.png"
		// 	}
		// },
		// {
		// 	id: 71,
		// 	properties: {
		// 		color: "red",
		// 		shape: "snake",
		// 		number: 2,
		// 		fill: "full",
		// 		image: "./assets/cards/S-F-2-R.png"
		// 	}
		// },
		// {
		// 	id: 72,
		// 	properties: {
		// 		color: "red",
		// 		shape: "snake",
		// 		number: 3,
		// 		fill: "full",
		// 		image: "./assets/cards/S-F-3-R.png"
		// 	}
		// },
		// {
		// 	id: 73,
		// 	properties: {
		// 		color: "red",
		// 		shape: "diamond",
		// 		number: 1,
		// 		fill: "empty",
		// 		image: "./assets/cards/D-E-1-R.png"
		// 	}
		// },
		// {
		// 	id: 74,
		// 	properties: {
		// 		color: "red",
		// 		shape: "diamond",
		// 		number: 2,
		// 		fill: "empty",
		// 		image: "./assets/cards/D-E-2-R.png"
		// 	}
		// },
		// {
		// 	id: 75,
		// 	properties: {
		// 		color: "red",
		// 		shape: "diamond",
		// 		number: 3,
		// 		fill: "empty",
		// 		image: "./assets/cards/D-E-3-R.png"
		// 	}
		// },
		// {
		// 	id: 76,
		// 	properties: {
		// 		color: "red",
		// 		shape: "diamond",
		// 		number: 1,
		// 		fill: "stripes",
		// 		image: "./assets/cards/D-S-1-R.png"
		// 	}
		// },
		// {
		// 	id: 77,
		// 	properties: {
		// 		color: "red",
		// 		shape: "diamond",
		// 		number: 2,
		// 		fill: "stripes",
		// 		image: "./assets/cards/D-S-2-R.png"
		// 	}
		// },
		// {
		// 	id: 78,
		// 	properties: {
		// 		color: "red",
		// 		shape: "diamond",
		// 		number: 3,
		// 		fill: "stripes",
		// 		image: "./assets/cards/D-S-3-R.png"
		// 	}
		// },
		// {
		// 	id: 79,
		// 	properties: {
		// 		color: "red",
		// 		shape: "diamond",
		// 		number: 1,
		// 		fill: "full",
		// 		image: "./assets/cards/D-F-1-R.png"
		// 	}
		// },
		// {
		// 	id: 80,
		// 	properties: {
		// 		color: "red",
		// 		shape: "diamond",
		// 		number: 2,
		// 		fill: "full",
		// 		image: "./assets/cards/D-F-2-R.png"
		// 	}
		// },
		// {
		// 	id: 81,
		// 	properties: {
		// 		color: "red",
		// 		shape: "diamond",
		// 		number: 3,
		// 		fill: "full",
		// 		image: "./assets/cards/D-F-3-R.png"
		// 	}
		// }
	]
	return cards;
};
