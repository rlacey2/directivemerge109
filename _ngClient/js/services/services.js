 
 angularnodeApp.service('xxx', [function () {	 // service syntax

    var storedName = "";
	
	function setName(n){  storedName = n;}
	function getName(){return   storedName;}
	
	return {
		setName :  setName,
		getName : getName
	}
}]);