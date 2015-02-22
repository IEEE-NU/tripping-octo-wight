if (Meteor.isClient) {
  Meteor.subscribe('calendar', function () {
  Session.set('superCalendarReady', true);
});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    Meteor.publish('calendar', function () {
  return Calendar.find();
});
  });
}

Template.pageTwo.events({
	'submit form': function(event){
		event.preventDefault();
		event.stopPropagation();
		var thefile = event.target.fileuploader.files[0];
		console.log(event.target.fileuploader.files);
		Files.insert({file: thefile, name:thefile.name, text:"boobop"});
		alert("file upload successful");
		console.log(Files.findOne());
	},
	'click button': function(event){
		event.preventDefault();
		event.stopPropagation();
		Router.go('/calendarPage/'+event.target.name);
	}
});
Template.pageTwo.helpers({
	files: function(){
		return Files.find();
	}
})