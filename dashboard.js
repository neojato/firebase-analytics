var analytics = new Firebase('https://fir-analytics-9bac7.firebaseio.com');

firebase.auth().signInAnonymously().catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

$(document).on('ready', function () {
  var $totalVisitors = $('#total-visitors');
  analytics.child('totalVisitors').on('value', function (snapshot) {
    $totalVisitors.text(snapshot.val());
  });
});

var $activeVisitors = $('#active-visitors');
var activeVisitors = analytics.child('activeVisitors');
activeVisitors.on('child_added', function (snapshot) {
  var n = snapshot.name();
  var v = snapshot.val();
  $activeVisitors.prepend(
  '<li id="active-visitor' + n + '">' + n + ':' +
    '<ul>' +
      '<li>Arrived: ' + new Date(v.arrivedAt) + '</li>' +
      '<li>Path: ' + v.path + '</li>' +
      '<li>User Agent: ' + v.userAgent + '</li>' +
    '</ul>' + 
  '</li>'
  );
});

activeVisitors.on('child_removed', function (snapshot) {
  $('#active-visitor' + snapshot.name()).remove(); 
});

var pastVisitors = analytics.child('pastVisitors').endAt().limit(3);
pastVisitors.on('child_added', function (snapshot) {
  var n = snapshot.name();
  var v = snapshot.val();
  $pastVisitors.prepend(
  '<li id="past-visitor' + n + '">' + n + ':' +
    '<ul>' +
      '<li>Arrived: ' + new Date(v.arrivedAt) + '</li>' +
      '<li>Left: ' + new Date(v.leftAt) + '</li>' +
      '<li>Spent: ' + ((v.leftAt - v.arrivedAt) / 1000) + ' Seconds </li>' +
      '<li>Path: ' + v.path + '</li>' +
      '<li>User Agent: ' + v.userAgent + '</li>' +
    '</ul>' + 
  '</li>'
  );
});

pastVisitors.on('child_removed', function (snapshot) {
  $('#past-visitor' + snapshot.name()).remove(); 
});
