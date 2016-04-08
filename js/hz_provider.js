// 定义构造函数
// var myServiceProvider = function(){
//     this.$get = function(){
//         return ....
//     };
// };
// 在模块中登记
// angular.module("myModule",[])                  //整体模板provider
// .provider("myService",myServiceProvider);

//实例如下
angular.module("ezstuff",[])
.constant("ezCurrency","CN")
.provider("ezCalculator",function(){
	var currency = "$";
	this.setLocal = function(l){
		var money = {
			"CN":"¥",
			"US":"$",
			"JP":"¥",
			"EN":"€"
		};
		if(money[l]){currency = money[l]};
	};
	this.$get = function(){
		return{
			add:function(a,b){return currency + (a+b);},
			subtract:function(a,b){return currency + (a-b);},
			multiply:function(a,b){return currency + (a*b);},
			divide:function(a,b){return currency + (a/b);}
		}
	};
})
//注意：服务提供者provider对象在注入器中的登记名称是：服务名+Provider 例如：ezCalculatorProvider
.config(function(ezCurrency,ezCalculatorProvider){
	ezCalculatorProvider.setLocal(ezCurrency);
});
function doCalc(){
	var injector = angular.injector(["ezstuff"]);
	var mycalculator = injector.get("ezCalculator");
	var ret = mycalculator.multiply(5,6);
	document.querySelector("#result").textContent=ret;
}


/*constant方法
有时我们需要在不同的组件之间共享一个常量，可以将这种情况视为一种服务： provider返回的总是常量的值

angular.module("myModule",[])
.constant("myConstantService","Great Wall");

和value方法不同，AngularJS并没有将constant方法封装成一个provider，而仅仅是在内部登记这个值。
这使得常量在AngularJS的启动配置阶段就可以使用（创建任何 服务之前）：你可以将常量注入到模块的config()方法中*/