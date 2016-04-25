
angular.module('starter', ['ionic', 'firebase'])

.factory('Items', ['$firebaseArray', function($firebaseArray) {
  var itemsRef = new Firebase('https://intense-torch-1332.firebaseio.com/ToDo');
  return $firebaseArray(itemsRef);
}])

.controller('ListCtrl', function($scope, $ionicListDelegate, Items) {

  $scope.items = Items;

  $scope.addItem = function() {
    var name = prompt('What is the new Task?','The new Task');
    if (name) {
      $scope.items.$add({
        'name': name
      });
    }
  };

  $scope.CompleteTask = function(item) {
    var itemRef = new Firebase('https://intense-torch-1332.firebaseio.com/ToDo/' + item.$id);
    
      if(item.status==='Completed'){
          itemRef.child('status').set('NotCompleted');
        }
      else {
            itemRef.child('status').set('Completed');
      }
    $ionicListDelegate.closeOptionButtons();
  };
    $scope.DeleteItem = function (){
      
        
    };
    $scope.DeleteItem = function(item){
        var mRef = new Firebase('https://intense-torch-1332.firebaseio.com/ToDo/' + item.$id);
        mRef.remove();
        
    };
    
});