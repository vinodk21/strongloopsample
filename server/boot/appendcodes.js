module.exports = function(server) {
	var remotes = server.remotes();
	var app = require('../server');
	remotes.before('**', function (ctx, next, method) {
		console.log("1. EXPECTATION: This remotes.before hook in SERVER/BOOT to be called first");
		next();
	});
};