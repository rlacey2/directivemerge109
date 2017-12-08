var angularnodeApp = angular.module("angularnodeApp")

 
angularnodeApp.directive('personDetailV1', ['$compile', '$templateCache',function ($compile, $templateCache ) { // custom directive
    
  	  function controllerFunction($scope) {  // initialize scope or set methods etc
 
         $scope.clearPerson = function () // a local function
         {
          //  $scope.person = {"name": "", "email" : ""}; // creates a new object and does not as work expected
              $scope.person.name = "";
              $scope.person.email = "";            
         };
		}  
    
   return { // there are other attributes that can be returned
        restrict: 'E', //E = element, A = attribute, C = class, M = comment         
        scope: { //@ reads the attribute value, = provides two-way binding, & works with functions
            title: '@',
            person: '=',
            
            },
        template: '<hr><div style="background:yellow"><div>{{title}}<br>Name: {{person.name}}<br /> email: {{person.email}}</div><input type="text" ng-model="person.name"/><br><input type="text" ng-model="person.email"/><button ng-click="clearPerson()">X</button></div>',
        //  templateUrl: 'mytemplate.html', // issues with dynamic refresh etc
        controller: ['$scope',  controllerFunction],
        
        link: function ($scope, element, attrs) // does not require the minification array syntax
        { 
            //DOM manipulation tasks
            //var dynamicHTML = $templateCache.get("....../carddetails.html");
            //element.html(dynamicHTML);  
            //$compile(element.contents())(scope); 
        }       
    }
}]); 
  
  
/*  
personDetail has an angular builtin service called personDetailDirective
Any directive that is registered makes available a special service with the name 'Directive' appended to it. 
If you registered <my-dir> (with the name 'myDir') it will create a service called 'myDirDirective'. 

NB in this version they refer to the same scope attributes 

ONLY changing the background colour as proof of concept
*/
angularnodeApp.directive('personDetailV2', function(personDetailV1Directive){
/* extending a directive, inherent some attributes, but replace others */		
	var newerTemplate = '<hr><div style="background:red"><div>{{title}}<br>Name: {{person.name}}<br /> email: {{person.email}}</div><input type="text" ng-model="person.name"/><br><input type="text" ng-model="person.email"/><button ng-click="clearPerson()">X</button></div>';

	
    return angular.extend({}, personDetailV1Directive[0], { template: newerTemplate });
})  
 
angularnodeApp.directive('personDetailV3', function(personDetailV1Directive){
/* extending a directive, inherent some attributes, but replace others */	
	var newerTemplate = '<hr><div style="background:cyan"><div>{{title}}<br>Name: {{person.name}}<br /> email: {{person.email}}</div><input type="text" ng-model="person.name"/><br><input type="text" ng-model="person.email"/><button ng-click="clearPerson()">X</button></div>';

	
    return angular.extend({}, personDetailV1Directive[0], { template: newerTemplate });
}) 
  
 angularnodeApp.directive('personDetailV4', function(personDetailV1Directive){
/* extending a directive, inherent some attributes, but replace others */	
	//var newerTemplate = '<hr><div style="background:cyan"><div>{{title}}<br>Name: {{person.name}}<br /> email: {{person.email}}</div><input type="text" ng-model="person.name"/><br><input type="text" ng-model="person.email"/><button ng-click="clearPerson()">X</button></div>';

	 
  	  function newerControllerFunction($scope) {  // initialize scope or set methods etc
 
         $scope.clearPerson = function () // a local function
         {
          //  $scope.person = {"name": "", "email" : ""}; // creates a new object and does not as work expected
              $scope.person.name = "";
              $scope.person.email = "";   
			  alert("This alert is new!!!!!");
         };
		} 	
	
	
	
    return angular.extend({}, personDetailV1Directive[0], {  controller: ['$scope',  newerControllerFunction] });
})  