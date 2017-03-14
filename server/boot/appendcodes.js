module.exports = function(server) {
	var remotes = server.remotes();
	var app = require('../server');
	remotes.before('**', function (ctx, next, method) {
		console.log("1. EXPECTATION: This before remote in SERVER/BOOT gets called first");
		next();
	});
};