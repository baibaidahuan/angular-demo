// 例一
/*在视图模板中使用过滤器
过滤器也是一种服务，负责对输入的内容进行处理转换，以便更好地向用户显示。
过滤器可以在模板中的{{}}标记中使用：
{{ expression | filter:arg1:arg2}}*/

/*angular.module("ezstuff",[])
// .controller("ezCtrl",function($scope){
// 	$scope.total = 123;
// })
.controller("ezCtrl",function($scope,numberFilter,currencyFilter){
	//
	$scope.abc=numberFilter(1234.4,2);
	$scope.aa = currencyFilter(3.4,"&$$11");
	$scope.total = currencyFilter(numberFilter(123,1));
})*/


// 例二
/*创建过滤器
和指令类似，过滤器也是一种特殊的服务，与创建一个普通的服务相比较：

必须使用模块的filter()接口注册服务
必须提供对象工厂/factory方法
对象工程必须返回一个过滤器函数，其第一个参数为输入变量*/

/*//定义过滤器类工厂
var filterFactory = function(){
    //定义过滤器函数
    var filter = function(input,extra_args(额外的参数)){
        //process input and generate output
        return output
    }
};
//在模块上注册过滤器
angular.module("someModule",[])
.filter("filterName",filterFactory);*/

/*//过滤器对象工厂定义
var ezUCFilterFactory = function(){
	//过滤器对象返回的是一个过滤函数
	var filter = function(input){
		return input.toUpperCase();
	}
	return filter;
};
angular.module("ezstuff",[])
//使用模块的filter()接口注册过滤器
.filter("ezUC",ezUCFilterFactory);*/


// 例三
// 为过滤器增加参数
// 通过在过滤器类工厂返回的过滤器函数中传入额外的参数，就可以实现这个功能
// var filter = function(input,argument1,argument2){...}

// 在使用过滤器时，额外的参数通过前缀:引入，比如
// {{expression|filter:argument1:argument2}}

//过滤器对象工厂定义
var ezUCFilterFactory = function(){
	//过滤器对象返回的是一个过滤函数
	return function(input,cap){
		if(!cap){return input.toUpperCase();}
		//把一个字符串的首写都变大写
		var output = input.replace(/\b\w+\b/g,function(word){
			return word.substring(0,1).toUpperCase()+word.substring(1);
		});
		return output;
	}
};
angular.module("ezstuff",[])
//使用模块的filter()接口注册过滤器
.filter("ezUC",ezUCFilterFactory);