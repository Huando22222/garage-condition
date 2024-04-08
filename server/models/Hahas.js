const mongoose = require("mongoose");

const nearGarages = new mongoose.Schema({
	haha_: { type: "string", required: true },
});

module.exports = mongoose.model("hahas", nearGarages);
