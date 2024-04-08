// chatSocketManager.js
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

	let campusAB = Math.floor(Math.random() * (2001 - 1000) + 1000);




	io.on("connection", (socket) => {
		console.log(`Chat Socket connected: ${socket.id}`);

		const interval = setInterval(() => {
			const randomIncrement =
				Math.floor(Math.random() * (10 - 2 + 1)) + 2;
			campusAB = Math.min(campusAB + randomIncrement, 5000); // Cộng dồn và giới hạn giá trị tối đa là 5000
		}, 2000);	
		
		const decrementInterval = setInterval(() => {
			const randomDecrement = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
			campusAB = Math.max(campusAB - randomDecrement, 0); 
			// socket.emit("garage-campus-AB", campusAB);
		}, 5000);

		// setInterval(() => {
		// 	socket.emit("garage-campus-AB", campusAB);
		// }, 2000);

		socket.on("disconnect", () => {
			console.log(`disconnect : ${socket.id}` );
			clearInterval(decrementInterval);
			clearInterval(interval); 
		});
	});

};
