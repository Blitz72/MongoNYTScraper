module.exports = function(app) {
	require('./view/htmlRoutes')(app);
	require('./api/apiRoutes')(app);
}