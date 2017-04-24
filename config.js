(function (firebase) {
  // Anonymously Sign-in Visitor
  // TODO: Enable 'Anonymous Sign-in' via Firebase Console
  firebase.auth().signInAnonymously().catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
})(firebase);
