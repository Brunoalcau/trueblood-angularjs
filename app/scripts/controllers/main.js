'use strict';

/**
 * @ngdoc function
 * @name projetoFortesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projetoFortesApp
 */
angular.module('projetoFortesApp')
  .controller('MainCtrl', function ($scope,alert) {
   	
  	$scope.alert = function(){
  		// alert.sucess('Salvo','Salvo com sucess',"success");
  		alert.confirmarDoacao();
  	}


  });
