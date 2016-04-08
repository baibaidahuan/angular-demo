angular.module('app',[])
// Services在多个controller中共享数据
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
	// $scope.data=Data;
})

// 常用指令的使用
//ng-bind=={{}},ng-model,ng-show/hide,ng-if,ng-checked
//ng-src,ng-href,ng-class,ng-selected,ng-submit,ng-disabled,ng-change
.controller('UserCtrl',function($scope){
	$scope.user={
		isShowImg:true,
		showicon:true,
		icon:'img/logo.jpg',
		uname:'',
		pwd:'',
		zw:'1',
		sex:'1',
		hobby:[2,3]
	};
	$scope.isChecked=function(n){
		var isok=false;
		for(var i=0;i<$scope.user.hobby.length;i++){
			if(n==$scope.user.hobby[i]){
				isok=true;
				break;
			}
		}
		return isok;
	}
	$scope.register=function(u){
		console.log(u);
	}
})

// 常用指令ng-repeat的使用
.controller('AddressCtrl',function($scope){
	$scope.list=[
		//静态数据
		{id:1,address:'河北大街512号'},
		{id:2,address:'和平里小区一单元1001'},
		{id:3,address:'建设里小区14栋102'}
	];
})