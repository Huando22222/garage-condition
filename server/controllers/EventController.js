const Event = require('../models/Events');
const Haha = require("../models/Hahas");
module.exports = {
	GetEvent: async (req, res) => {
		try {
			const event = await Event.find();
      console.log(event.length);
			res.status(200).json({
				message: "get near garages successfully",
				data: nearGarages,
			});
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: "Server Error" });
		}
	},
	NewEvent: async (req, res) => {
		try {
			const { event_name, description,start_datetime,end_datetime,number_of_vehicle  } = req.body;
			const images = req.file? req.file.filename : "";
		  console.log(images);
		
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: "Internal Server Error" });
		}
	  },
	GetEventHaha: async (req, res) => {
		try {
			const haha = await Haha.find();
			console.log(haha.length);
			res.status(200).json({
				message: "Post location marked as deleted successfully",
				data: haha,
			});
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: "Server Error" });
		}
	},
};