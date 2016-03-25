angular.module('app',[])
//相当于MVC框架
.controller('FirstCtrl',function($scope){
	$scope.msg="hello angular";
})
.controller('NextCtrl',function($scope){
	$scope.msg="hello 品车会";
})
.controller('MyCtrl',function($scope){
	$scope.msg="";
	$scope.user={uname:'',pwd:''};
	$scope.errormsg="";
	$scope.reverse=function(){
		//split()方法分割字符串  reverse()方法用于颠倒数组中元素的顺序
		return $scope.msg.split("").reverse().join("");
	}
	$scope.login=function(){
		// console.log($scope.user);
		if($scope.user.uname=="admin" && $scope.user.pwd=="123"){
			alert("登录成功");
		}else{
			$scope.errormsg="用户名或密码错误";
		}
	}
})