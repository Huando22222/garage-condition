const userRouter = require("./users");
const postsRouter = require("./posts");
const postsLocationRouter = require("./postLocations");
const nearGaragesRouter = require("./nearGarages");
function route(app) {
	app.use("/user", userRouter);
	app.use("/post", postsRouter);
	app.use("/post-location", postsLocationRouter);
	app.use("/", nearGaragesRouter);
}

module.exports = route;
