import angular from 'angular';

angular.module('app.controllers',[])
.controller("PostsController",function($scope,$state,Post){
	$scope.posts=Post.all();
	$scope.save=function(post){
		if(!post) return;
		Post.save(post);
		// $state.go('posts.list')
	}
	$scope.delete=function(index){
		if(!confirm('确定删除?')){
			return;
		}
		$scope.posts.splice(index,1);
		Post.saveAll($scope.posts);
	}
})