window.App = Ember.Application.create();

App.Router.map(function(){
	this.resource('packinglist', { path: '/' });
});

App.PackinglistRoute = Ember.Route.extend({
	model: function(){
		console.log(packinglist);
		return packinglist;
	}

});