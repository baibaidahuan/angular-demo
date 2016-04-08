/*使用Directive自定义HTML组件
directive 自定义指令
restrict(限制)  replace(更换)  template(模板)*/
var app=angular.module('app',[]);
app.directive('hello',function(){
	return{
		restrict:'E', //E-代表element(标签/HTML元素) A-代表属性 C-代表类名 M-HTML注释
		replace:true, //替换掉自定义的directive名称(hello) false显示 true隐藏
		template:'<div>Hello Angularjs</div>'
	}
})
app.directive('item',function(){
	return{
		restrict:'A',
		link:function(){
			alert('我是属性')
		}
	}
})
app.directive('jike',function(){
	return{
		restrict:'C',
		link:function(){
			alert('我是极客')
		}
	}
})


/*创建指令
指令也是一种服务，只是这种服务的定义有几个特殊要求：

1.必须使用模块的directive()方法注册服务
2.必须以对象工厂/factory()方法定义服务实现
3.对象工厂必须返回一个指令定义对象*/

/*//定义指令的类工厂
var directiveFactory = function(injectables){
    //指令定义对象
    var directiveDefinationObject = {
        ...
    };
    return directiveDefinationObject;
};
//在模块上注册指令
angular.module("someModule",[])
.directive("directiveName",directiveFactory);*/

var ezHoverableFactory = function(){
	return {
		restrict:"A",
		link:function(scope,element,attrs){
			element.on("mouseover",function(){
				element.css({outline:"#f00 dotted thick"});
			}).on("mouseout",function(){
				element.css({outline:"none"});
			})
		}
	};
};
angular.module("ezstuff",[])
.directive("ezHoverable",ezHoverableFactory);


/*template：定义替换模板
最简单的指令只需要使用template属性进行模板替换就可以实现。*/
angular.module("ezstuff",[])
.controller("ezCtrl",["$scope",function($scope){
	$scope.cj = {
		name:"cj",
		address:"1001 Amphitheatre"
	};
	$scope.bxh = {
		name:"bxh",
		address:"1002 Amphitheatre"
	};
}])
.directive("ezCustomer",function(){
	return {
		// restrict：限制指令的出现位置
		restrict:"E",
		// replace：模板的使用方式
		replace:true,
		// scope：使用隔离的作用域
		scope:{
			customer:"=sb",
		},
		template:"<div>Name:{{customer.name}} Address:{{customer.address}}</div>"
	};
})