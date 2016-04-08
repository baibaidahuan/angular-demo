angular.module('app',[])
//$http实现对数据的增删改
.controller('MyCtrl',function($scope,$http){
	$scope.msg="hello";
	//get发送请求  resp==data
	// $http.get('http://192.168.1.125:9098/user/getUsers') //请求后台端口
	// .success(function(resp){
	// 	console.log(resp);
	// })

	//post可以带参数发送请求
	// $http.post('http://192.168.1.125:9098/user/getUsers') //请求后台端口
	// .success(function(resp){
	// 	console.log(resp);
	// })

	$scope.id="";
	$scope.name="";
	$scope.addUser=function(){
		$http.post('http://192.168.1.125:9098/user/addUsers',{name:$scope.name})
		.success(function(resp){
			if(resp.success){
				alert("添加成功");
			}
		})
	}
	$scope.modifyUser=function(){
		$http.post('http://192.168.1.125:9098/user/modifyUsers',{id:$scope.id,name:$scope.name})
		.success(function(resp){
			if(resp.success){
				alert("修改成功");
			}
		})
	}
	$scope.delUser=function(){
		$http.post('./data.json',{id:$scope.id})
		.success(function(resp){
			if(resp.success){
				alert("删除成功");
			}
		})
	}
})

//用户角色权限实例
.controller('UserCtrl',function($scope){
	$scope.roles=[];
	$scope.rights=[];
	$scope.curselect=""; //当前选择

	//监听事件 监听当前选择
	$scope.$watch('curselect',function(){
		$scope.loadRoleRight();
	})

	//声明loadRoleRight()方法
	function loadRoleRight(){
		$http.post("http://192.168.1.125:9098/user/getRoleRight",{roleid:$scope.curselect})
		.success(function(resp){
			var self=resp;
			for(var i=0;i<$scope.rights.length;i++){
				scope.rights[i].ischecked=false;
				for(var j=0;j<self.length;j++){
					if($scope.rights[i].id==self[j].rightid){
						$scope.rights[i].ischecked=true;
					}
				}
			}
		})
	}

	function init(){
		//$http实现用户角色
		$http.get('http://192.168.1.125:9098/user/getRoles')
		.success(function(resp){
			$scope.roles=resp;
		})
		//$http实现用户权限
		$http.get('http://192.168.1.125:9098/user/getRights')
		.success(function(resp){
			$scope.rights=resp;
		})
	}
	init();
})