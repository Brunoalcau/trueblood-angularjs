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
			"Nome": "Francisco",
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
			"Nome": "Daniel",
			"TipoSanguineo": 'A+',
			"Hospital": {
				"Nome": "Hospital"
			},
			"NumeroDoadores": 2,
			"Prazo": "2015-08-01T12:31:29.4975515-03:00",
			"Cidade": {
				"Nome": "Natal",
				"Estado": "Ceará"
			},
			"Email": "paciente@gmail.com",
			"Id": 5
		},{
			"Nome": "felipe",
			"TipoSanguineo": 'A+',
			"Hospital": {
				"Nome": "Hospital test"
			},
			"NumeroDoadores": 2,
			"Prazo": "2015-08-01T12:31:29.4975515-03:00",
			"Cidade": {
				"Nome": "Natal",
				"Estado": "Ceará"
			},
			"Email": "paciente@gmail.com",
			"Id": 5
		}];


		$scope.alert = function(id) {
			alert.confirmarDoacao();
		};
	});