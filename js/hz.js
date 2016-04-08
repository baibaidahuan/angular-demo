// // 自动引导启动框架 ng-app
// angular.module('ezstuff',[])
// .directive('ezDuang',function(){
// 	return {
// 		restrict:'E',
// 		template:"<img src='./img/ha.gif'>"
// 	};
// })

// //手工引导启动框架 利用angular.bootstrap()方法进行手动引导
// //angular.bootstrap(element, [modules], [config]);
// angular.module('app',[])
// .directive('ezDuang',function(){
// 	return {
// 		restrict:'E',
// 		template:"<img src='./img/ha.gif'>"
// 	};
// })
// angular.element(document).ready(function(){
// 	var e=document.querySelector('#btn');
// 	angular.element(e).on('click',function(){	
// 		angular.bootstrap(document,["app"]);
// 	})
// })

//
angular.module('ezstuff',[])
.directive("ezPlay",function(){
	return{
		restrict:"E",
		template:"<img src='./img/play.gif'>"
	};
})
//模拟引导启动过程
angular.element(document).ready(function(){
	//第一步：创建注入器并保存到根对象的data中
	var injector = angular.injector(["ng","ezstuff"]);
	angular.element(document).data("$injector",injector);
	//第二步：创建根作用域并保存到根对象的data中
	var rootScope = injector.get("$rootScope");
	angular.element(document).data("$rootScope",rootScope);
	// console.log(rootScope);
	//第三步：编译DOM树
	var compile = injector.get("$compile")
	compile(document)(rootScope);
});