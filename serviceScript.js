app.config(['AppName',function(AppName) {
	console.log("this is config :"+AppName)
	AppName='New Angular Example'
	console.log("this is config :"+AppName)
}])
app.run(['AppName', function(AppName){
	console.log("this is run:"+ AppName)
}])


app.provider('myProvider', function () {    //seperate file use
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
//creating congiuration
app.config(['myProviderProvider', function(myProvider){
	console.log(myProvider.$get().name)
	console.log(myProvider.$get().getName())
}])
//creating factory
app.factory('CustomerFactory', function(){
	return 'this is factory'
})
// creating constant
app.constant('AppName', "Angular Example")