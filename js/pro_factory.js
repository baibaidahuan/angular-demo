/*factory方法
factory方法要求提供一个对象工厂，调用该类工厂将返回服务实例。

定义构造函数
var myServiceFactory = function(){
    return ...
};
在模块中登记
angular.module("myModule",[])
.factory("myService",myServiceFactory);

AngularJS会将factory方法封装为provider，上面的示例等同于：

定义构造函数
var myServiceFactory = function(){
    return ...
};
在模块中登记
angular.module("myModule",[])
.provider("myService",function(){
    this.$get = myServiceFactory;
});*/

angular.module("app",[])
.factory("ezCalculator",function(){
	return {
		add:function(a,b){return a+b;},
		subtract:function(a,b){return a-b;},
		multiply:function(a,b){return a*b;},
		divide:function(a,b){return a/b;}
	}
})

function doCalc(){
	var injector = angular.injector(["app"]),
		mycalculator = injector.get("ezCalculator"),
		ret = mycalculator.multiply(5,6);
	document.querySelector("#result").textContent=ret;
}


/*service方法
service方法要求提供一个构造函数，AngularJS使用这个构造函数创建服务实例

定义构造函数
var myServiceClass = function(){
    this.method1 = function(){...}
};
在模块中登记
angular.module("myModule",[])
.service("myService",myServiceClass);

AngularJS会将service方法封装为provider，上面的示例等同于：

定义构造函数
var myServiceClass = function(){
    //class definition.
};
在模块中登记
angular.module("myModule",[])
.provider("myService",function(){
    this.$get = function(){
        return new myServiceClass();
    };
});*/

var ezCalculatorClass = function(){
	this.add = function(a,b){return a+b;};
	this.subtract = function(a,b){return a-b;};
	this.multiply = function(a,b){return a*b;};
	this.divide = function(a,b){return a/b;};
};

angular.module("ezstuff",[])
.service("ezCalculator",ezCalculatorClass);

function doSub(){
	var injector = angular.injector(["ezstuff"]),
		mycalculator = injector.get("ezCalculator"),
		ret = mycalculator.divide(2,4);
	document.querySelector("#result").textContent = ret;
}


/*value方法
有时我们需要在不同的组件之间共享一个变量，可以将这种情况视为一种服务： provider返回的总是变量的值

angular.module("myModule",[])
.value("myValueService","cx129800123");

AngularJS会将value方法封装为provider，上面的示例等同于：

angular.module("myModule",[])
.provider("myService",function(){
    this.$get = function(){
        return "cx129800123";
    };
});*/

function showUname(){
	var injector = angular.injector(["ezstuffs"]),
		username = injector.get("ezUsername");
	document.querySelector("#result").textContent = username;
}

angular.module("ezstuffs",[])
.value("ezUsername","baibaidahuan");
