import angular from 'angular';

angular.module('app.services',[])
.factory('Store',function(){
	return {
		save:function(key,posts){
			window.localStorage.setItem(key,posts);
		},
		get:function(key){
			return window.localStorage.getItem(key);
		}
	}
})