var app=angular.module('app',[]); //创建模块app

// 例一  Directive与Controller之间的会话
// app.controller('AppCtrl',function($scope){
// 	$scope.loadMoreData=function(){
// 		alert("数据加载中...");
// 	}
// 	$scope.delData=function(){
// 		alert("数据删除中...");
// 	}
// })
// app.directive('enter',function(){
// 	return function(scope,element,attrs){
// 		element.bind('mouseenter',function(){
// 			scope.$apply(attrs.enter);
// 		})
// 	}
// })

// 例二
app.directive('food',function(){
	return{
		restrict:'E',
		scope:{},
		controller:function($scope){
			$scope.foods=[];
			this.addApple=function(){
				$scope.foods.push('apple');
			}
			this.addOrange=function(){
				$scope.foods.push('orange');
			}
			this.addBanana=function(){
				$scope.foods.push('banana');
			}
		},
		link:function(scope,element,attrs){
			element.bind('mouseenter',function(){
				console.log(scope.foods);
			});
		}
	}
})
app.directive('apple',function(){
	return{
		require:'food',
		restrict:'A',  //默认是属性  可以忽略不写
		link:function(scope,element,attrs,foodctrl){  //foodctrl指向于上面controller
			foodctrl.addApple();
		}
	}
})
app.directive('orange',function(){
	return{
		require:'food',   //require相互调用food
		link:function(scope,element,attrs,foodctrl){  
			foodctrl.addOrange();
		}
	}
})
app.directive('banana',function(){
	return{
		require:'food',
		link:function(scope,element,attrs,foodctrl){
			foodctrl.addBanana();
		}
	}
})

//例三 Angular.element的用法
//link中element的使用/angular.element的类jquery用法
app.directive('enter',function(){     //鼠标移进
	return function(scope,element,attrs){
		// console.log(element);
		element.bind('mouseenter',function(){
			// console.log('coming');
			element.addClass('color');
		})
	}
})
app.directive('leave',function(){     //鼠标移出
	return function(scope,element,attrs){
		element.bind('mouseleave',function(){
			element.removeClass('color');
		})
	}
})

app.directive('hello',function(){
	return{
		restrict:'E',
		template:'<div><input ng-model="txt" type="text" /></div><div>{{txt}}</div>',
		link:function(scope,element){
			scope.$watch('txt',function(newVal){
				if(newVal){
					element.addClass('font');
				}
			})
		}
	}
})

//例四 我们自己定义的ez-clock指令通知编译器生成时钟widget
app.directive('ezClock',function(){  //在模块上注册指令ezClock的类工厂
	return{
		restrict:'E',
		replace:true,
		template:'<div class="clock"></div>',
		link:function(scope,element,attrs){
			setInterval(function(){
				//获取当前时间
				var t=new Date();
				//element对应引用该指令的DOM对象的jqLite封装
				element.text(t);
			},1000);
		}
	}
})

//例五 使用data属性向指令实现代码传递变量名
//sb变量建立在window对象上
var sb ={
	name:'somebody',
	gender:'male',
	age:28
};
app.directive('ezNamecard',function(){
	return{
		restrict:'E',
		template:"<div class='namecard'></div>",
		repkace:true,
		link:function(scope,element,attrs){
			//读取data属性值，获得变量名，通过eval得到其值
			var sb=eval(attrs.data);
			//填充DOM元素内容
			element.append("<div>name:"+sb.name+"</div>")
				.append("<div>gender:"+sb.gender+"</div>")
				.append("<div>age:"+sb.age+"</div>")
		}
	}
})

//例六 使用注入器的get()方法，获得指定名称的服务实例
//在app模块上登记一个服务ezHello
app.provider("ezHello",function(){
	//$get方法是一个类工厂，返回服务的实例
	this.$get=function(){
		return "hello,world!";
	};
});
angular.element(document).ready(function(){
	//直接通过注入器获取ezHello实例对象
	var myHello=angular.injector(["ng","app"]).get("ezHello");
	//将ezHello实例对象转成字符串显示出来
	var e =document.querySelector("#logger");
	angular.element(e).text(myHello);
})

