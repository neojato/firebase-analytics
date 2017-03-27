var analytics = new Firebase('https://fir-analytics-9bac7.firebaseio.com');
var activeVisitors = analytics.child('activeVisitors');

activeVisitors.push({
  path: window.location.pathname,
  arrivedAt: Firebase.ServerValue.TIMESTAMP,
  userAgent: navigator.userAgent
});

var totalVisitors = analytics.child('totalVisitors');
totalVisitors.transaction(function (currentData) {
  return currentData + 1;
});
