Router.configure({
	layoutTemplate: 'layout'
})
Router.map(function(){
	this.route('home', {path:'/'});
	this.route('pageTwo');
	this.route('calendarPage', {path: '/calendarPage/:calendarname'});
});
