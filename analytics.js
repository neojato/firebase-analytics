var analytics = new Firebase('https://fir-analytics-9bac7.firebaseio.com');
var activeVisitors = analytics.child('activeVisitors');

var visitor = {
  path: window.location.pathname,
  arrivedAt: Firebase.ServerValue.TIMESTAMP,
  userAgent: navigator.userAgent
};

var activeVisitorRef = activeVisitors.push(visitor, function () {
  activeVisitors.child(visitorId).once('value', function (snapshot) {
    visitor.arrivedAt = snapshot.child('arrivedAt').val();
    var pastVisitors = analytics.child('pastVisitors');
    visitor.leftAt = Firebase.ServerValue.TIMESTAMP;
    pastVisitors.child(visitorId).onDisconnect().set(visitor);
  });
});

var visitorId = activeVisitorRef.name();

activeVisitorRef.onDisconnect().remove();

var totalVisitors = analytics.child('totalVisitors');
totalVisitors.transaction(function (currentData) {
  return currentData + 1;
});
