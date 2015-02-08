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
