const Message = require("../models/Messages");
const Room = require("../models/Rooms");
const User = require("../models/Users");
// function generateRandomRoomName(length) {
// 	const characters =
// 		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// 	let result = "";
// 	for (let i = 0; i < length; i++) {
// 		const randomIndex = Math.floor(Math.random() * characters.length);
// 		result += characters.charAt(randomIndex);
// 	}
// 	return result;
// }

module.exports = function (io) { 

	let campusAB = Math.floor(Math.random() * (1001 - 500) + 500);

	const increaseCampusAB = () => {
		const randomIncrement = Math.floor(Math.random() * (10 - 2 + 1)) + 2; 
		campusAB = Math.min(campusAB + randomIncrement, 2000);
		io.emit("garage-campus-AB", campusAB);
	};

	const decreaseCampusAB = () => {
		const randomDecrement = Math.floor(Math.random() * (5 - 1 + 1)) + 1; 
		campusAB = Math.max(campusAB - randomDecrement, 0); 
		console.log("Campus AB decrease " + campusAB);
		io.emit("garage-campus-AB", campusAB);
	};

	const interval = setInterval(increaseCampusAB, 5000);
	const decrementInterval = setInterval(decreaseCampusAB, 2000);

	io.on("connection", (socket) => {
		console.log(`Chat Socket connected: ${socket.id}`);

		socket.on("disconnect", () => {
			console.log(`disconnect : ${socket.id}` );
			// clearInterval(decrementInterval);
			// clearInterval(interval); 
		});
	});

};
