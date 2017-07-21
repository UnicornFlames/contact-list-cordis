
  angular.module('contactList').controller('contactListController', ['$scope', '$rootScope', '$state', '$stateParams', '$http', function ($scope, $rootScope, $state, $stateParams, $http) {
           $scope.contactList = [
        {
            "firstName": "Joe",
            "lastName": "Perry",
            "contactNumber": "444-888-1223",
            "contactEmail": "joe@cordis.us"
        },
        {
            "firstName": "Kate",
            "lastName": "Will",
            "contactNumber": "244-838-1213",
            "contactEmail": "kate@cordis.us"
        },
        {
            "firstName": "Harry",
            "lastName": "Robert",
            "contactNumber": "744-138-1292",
            "contactEmail": "harry@cordis.us"
        },
        {
            "firstName": "Tom",
            "lastName": "Bill",
            "contactNumber": "241-188-1191",
            "contactEmail": "tom@cordis.us"
        },
        {
            "firstName": "Roger",
            "lastName": "Steel",
            "contactNumber": "111-177-1231",
            "contactEmail": "roger@cordis.us"
        }
    ]
           
            $scope.addMe = function(){
                return {
                    firstName: $scope.newFirstName,
                    lastName:$scope.newLastName,
                    contactNumber:$scope.newContactNumber,
                    contactEmail:$scope.newContactEmail
                }
            }
            $scope.addItem = function(){debugger
           
            if(!$scope.contactForm.$valid)
            return;
             $scope.contactList.push($scope.addMe());
              }
                
            $scope.removeItem = function(){
                $scope.contactList.splice(this.$index,1)
            }
            $scope.change = function(){
              index = this.$index;
              $scope.showMe = function(indx){
                  if(indx == index){
                   return true;                 
                  }
              }    
            }
            $scope.save = function(){
              index = this.$index;
              $scope.showMe = function(indx){
                  if(indx == index){
                   return false;                 
                  }
              }    
            }            
        }]).directive("numericOnly", function(){
            return{
                require:"ngModel",
                link:function(scope, element, attrs, ngModel){
                    ngModel.$parsers.push(function(inputValue) {
					var transformedInput = inputValue ? inputValue.replace(/[^\d]/g, '') : null;

					if (transformedInput != inputValue) {
						ngModel.$setViewValue(transformedInput);
						ngModel.$render();
					}

					return transformedInput;
				});
                }
            }
        })
        .directive("noSpecialchar", function(){
            return{
                require:"ngModel",
                link:function(scope, element, attrs, ngModel){
                    ngModel.$parsers.push(function(inputValue) {
					var transformedInput = inputValue ? inputValue.replace(/^[a-zA-Z0-9]*$/, '') : null;

					if (transformedInput != inputValue) {
						ngModel.$setViewValue(transformedInput);
						ngModel.$render();
					}

					return transformedInput;
				});
                }
            }
        })