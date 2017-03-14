'use strict';

module.exports = function(Configuration) {
	/**
	 *  information :
	 */
	Configuration.beforeRemote('information', function(ctx, unused, next) {
		console.log("2. REALITY : beforeRemote in CONFIGURATION model is getting called first");
		next();
	});
	
	Configuration.information = function(cs,cb) {
		cb(null,"OKAY");
	};
	
	Configuration.remoteMethod('information',{
		http:{ path: '/information', verb: 'get'},
		accepts: [{ arg: 'cs', type: 'string', http: { source: 'query' }}],
		returns: {type: 'object', root: true}
	});
};
