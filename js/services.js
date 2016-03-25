angular.module('app',[])
//value constant(常量) factory(工厂模式) service(服务) 四种创建模式
//provider  最高级的 相比较上面4个
.value('username','供应商') //是可改变值的
.value('username','购买商') 
.constant('http','www.baidu.com') //是不可改变值的
// .constant('http','http://www.xxx') //服务器接口
.factory('Data',function(){
	return{
		msg:'hello word',
		setMsg:function(){
			this.msg="hi Man";
		}
	}
})
.service('User',function(){
	this.firstname="欧阳";
	this.lastname="峰";
	this.getName=function(){
		return this.firstname+this.lastname;
	}
})
.controller('MyCtrl',function($scope,username,http,Data,User){
	$scope.msg="hello";
	$scope.name=username;
	$scope.http=http;
	// $http.post(http)
	$scope.data=Data;
	Data.setMsg();
	$scope.uname=User.getName()
})


//factory service的区别 factory创建模式是service的复杂版
// function dd(){
// 	this.firstname="欧阳";
// 	this.lastname="峰";
// 	this.getName=function(){
// 		return this.firstname+this.lastname;
// 	}
// }
// .factory('User',function(){
// 	return new dd()
// })
// 相当于==
// .service('User',function(){
// 	this.firstname="欧阳";
// 	this.lastname="峰";
// 	this.getName=function(){
// 		return this.firstname+this.lastname;
// 	}
// })