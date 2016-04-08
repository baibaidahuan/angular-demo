// link:在指令中操作DOM
angular.module("ezstuff",[]).controller("ezCtrl",function($scope){
	$scope.format = "MM/dd/yyyy EEEE hh:mm:ss a ww";
	$scope.name = "Mr.Whoami";
})
.directive("ezCurrentTime",function($interval,dateFilter){
	//定义link函数
	function link(scope,element,attrs){
		var format,timeoutId;
		//更新DOM内容
		function updateTime(){
			element.text(dateFilter(new Date(),format));
		}
		//监听时钟格式
		scope.$watch(attrs.ezCurrentTime,function(value){
			format = value;
			updateTime();
		});
		//在DOM对象销毁时注销定时器
		element.on("$destroy",function(){
			$interval.cancel(timeoutId);
		});
		//启动定时器
		timeoutId = $interval(function(){
			updateTime();//update DOM
		},1000);
	};
	return {link:link};
})
// transclude:包含其他元素
.directive("ezDialog",function(){
	return {
		restrict:"E",
		replace:true,
		transclude:true,
		template:"<div class='ez-dialog'><div class='header'>alert</div><div class='content' ng-transclude></div></div>"
	}
})