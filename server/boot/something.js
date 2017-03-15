module.exports = function(app) {
  app.remotes().phases
    .addBefore('invoke', 'options-from-request')
    .use(function(ctx, next) {
    	console.log(ctx.methodString);
     // if (!ctx.args.options.accessToken) return next();
      /*User.findById(ctx.args.options.accessToken.userId, function(err, user) {
        if (err) return next(err);
        ctx.args.options.currentUser = user;
        next();
      });*/
    	console.log("ordr middle");
    	next();
    });
};
