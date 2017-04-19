(function() {
   var config = {
    apiKey: "AIzaSyC7iCgnWeAmBYR7hE3HYNYKmhuoyr1CxnA",
    authDomain: "todos-d2049.firebaseapp.com",
    databaseURL: "https://todos-d2049.firebaseio.com",
    projectId: "todos-d2049",
    storageBucket: "todos-d2049.appspot.com",
    messagingSenderId: "283393303907"
  };
  firebase.initializeApp(config);
  
angular.module('Todo', ['firebase'])


.controller('TodoCtrl', function($scope,$firebaseArray) {
 
  $scope.newTodo = '';
  $scope.todos =  $firebaseArray(firebase.database().ref());
  
  $scope.done = function($id) {
   console.log("ref "+firebase.database().ref().child($id));
   var ref  = firebase.database().ref().child($id);
   ref.remove();
  };
  
  $scope.add = function() {
    
      $scope.todos.$add({
        title: $scope.newTodo
      });
      $scope.newTodo = '';
     
  };
});
}());