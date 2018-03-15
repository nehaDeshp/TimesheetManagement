var app =angular.module("employeeApp",["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
	.when("/addEmployee",{
		templateUrl:"templates/add.html",	
	})
	.when("/listEmployee",{
		templateUrl:"templates/list.html",	
	})
	
	.when("/editEmployeedtls",{
		templateUrl:"templates/edit.html",	
	})
	
	.when("/showEmployeedtls",{
		templateUrl:"templates/show.html",	
	})
});	

app.controller('employeeController',function($scope,$http){
	$http.get('http://127.0.0.1:3000/api/employees').then(function(response){
		$scope.employeelist=response.data;
		console.log($scope.employeelist);
	});
	
		
	$scope.addUser = function(){
		var data = {
		name: $scope.name,
		dept: $scope.dept,
		area: $scope.area,
		status: $scope.status,
		contact: $scope.contact,
		salary: $scope.salary
	}
		$http.post('http://127.0.0.1:3000/api/employees',JSON.stringify(data)).then(function(response){
		console.log(response.data);
	});
	}
	
	$scope.editUser = function(){
		var data = {
		name: $scope.name,
		dept: $scope.dept,
		area: $scope.area,
		status: $scope.status,
		contact: $scope.contact,
		salary: $scope.salary
	}
		$http.put('http://127.0.0.1:3000/api/employees/:id',JSON.stringify(data)).then(function(response){
		console.log(response.data);
	});
	}
	
	
	
});				
