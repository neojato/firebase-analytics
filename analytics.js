(function (firebase) {
  var analytics = firebase.database().ref();
  var activeVisitors = analytics.child('activeVisitors');

  var visitor = {
    path: window.location.pathname,
    arrivedAt: firebase.database.ServerValue.TIMESTAMP,
    userAgent: navigator.userAgent
  };

  var activeVisitorRef = activeVisitors.push();
  var visitorId = activeVisitorRef.key;
  activeVisitorRef.set(visitor);
  
  activeVisitors.child(visitorId).once('value', function (snapshot) {
    visitor.arrivedAt = snapshot.val().arrivedAt;
    var pastVisitors = analytics.child('pastVisitors');
    visitor.leftAt = firebase.database.ServerValue.TIMESTAMP;
    pastVisitors.child(visitorId).onDisconnect().set(visitor);
    activeVisitorRef.onDisconnect().remove();
  });

  var totalVisitors = analytics.child('totalVisitors');
  totalVisitors.once('value', function (snapshot) {
    totalVisitors.set(snapshot.val() + 1);
  });

})(firebase);
