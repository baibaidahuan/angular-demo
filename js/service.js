angular.module('app',[])
.factory('Data',function(){
	return{
		msg:"我来自factory"
	}
})
.controller('FCtrl',function($scope,Data){
	// $scope.data={msg:'one'}
	$scope.data=Data;
})

.controller('SCtrl',function($scope){
	$scope.data={msg:'two'}
})