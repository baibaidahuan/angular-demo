//第二种方法 声明函数ezControllerClass 不需要注意先后顺序
// function ezControllerClass($scope){
// 	$scope.vm = {
// 		sb:{
// 			name:"Beckham",
// 			gender:"male(男性)",
// 			career:"actor",
// 			photo:"./img/Beckham.jpg"
// 		}
// 	};
// };
//第一种方法 先声明变量ezControllerClass再调用 注意先后顺序  
var ezControllerClass = function($scope){
	//view model(视图模型)
	$scope.vm = {
		//属性
		sb:{
			name:"David Beckham",
			gender:"male(男)",
			age:48,
			career:"actor",
			photo:"./img/Beckham.jpg"
		},
		//方法 随机选出一个名人，显示在视图里
		shuffle:function(){
			var info = [
				{name:"David Beckham",gender:"male(男)",age:48,career:"actor",photo:"./img/Beckham.jpg"},
				{name:"Barack Obama",gender:"male(男)",age:58,career:"president",photo:"./img/Obama.jpg"},
				{name:"Владимир Владимирович Путин",gender:"male(男)",age:63,career:"president",photo:"./img/pj.jpg"}
			];
			var idx = Math.floor(Math.random()*info.length);
			$scope.vm.sb=info[idx];
		}
	};
};
angular.module("app",[])
.controller("myController",ezControllerClass);