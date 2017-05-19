var app=angular.module('myApp', []);

/*app.provider('myProvider', function () {
	var myObj={};
	myObj.name="Abhishek";
	myObj.getName= function(){
		return this.name;
	}

	this.$get = function(){
		return myObj;
	}
})

app.service('customerServices', function(){
	this.getcustomerDetails= function(){
		return "This will return customer details"
	}
})
app.run(['customerServices', function(customerServices){
	console.log(customerServices.getcustomerDetails())
	
}])

app.config(['myProviderProvider', function(myProvider){
	console.log(myProvider.$get().name)
	console.log(myProvider.$get().getName())
}])*/


app.controller('myController', 
	['$scope',
	'myProvider',
	'customerServices',
	'CustomerFactory',
	'AppName', 
	function($scope, myProvider,customerServices,CustomerFactory,AppName){
	
// $scope.message="Hello Abhishek";
console.log("My Controller- ProviderServices :" + myProvider.name)
console.log("My Controller- Service :" + customerServices.getcustomerDetails())
$scope.name=myProvider.getName();
$scope.customerMessage=customerServices.getcustomerDetails();
$scope.customerFactoryMessage=CustomerFactory
$scope.constant=AppName
}])
