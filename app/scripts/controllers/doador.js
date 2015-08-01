'use strict';

/**
 * @ngdoc function
 * @name projetoFortesApp.controller:DoadorCtrl
 * @description
 * # DoadorCtrl
 * Controller of the projetoFortesApp
 */
angular.module('projetoFortesApp')
	.controller('DoadorCtrl', function($scope,alert) {
		$scope.listaPaciente = [{
			"Nome": "Paciente",
			"Hospital": {
				"Nome": "Hospital"
			},
			"TipoSanguineo": 'AB+',
			"NumeroDoadores": 2,
			"Prazo": "2015-08-01T12:31:29.4975515-03:00",
			"Cidade": {
				"Nome": "Fortaleza",
				"Estado": "Ceará"
			},
			"Email": "paciente@gmail.com",
			"Id": 5
		}, {
			"Nome": "Paciente2",
			"TipoSanguineo": 'A+',
			"Hospital": {
				"Nome": "Hospital"
			},
			"NumeroDoadores": 2,
			"Prazo": "2015-08-01T12:31:29.4975515-03:00",
			"Cidade": {
				"Nome": "Fortaleza",
				"Estado": "Ceará"
			},
			"Email": "paciente@gmail.com",
			"Id": 5
		}];


		$scope.alert = function(id) {
			alert.confirmarDoacao();
		};
	});