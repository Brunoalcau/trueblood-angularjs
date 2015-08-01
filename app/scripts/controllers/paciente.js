'use strict';

/**
 * @ngdoc function
 * @name projetoFortesApp.controller:PacienteCtrl
 * @description
 * # PacienteCtrl
 * Controller of the projetoFortesApp
 */
angular.module('projetoFortesApp')
  .controller('PacienteCtrl', function($scope) {
   
    $scope.paciente = {
      "Nome": "Paciente",
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
    };
  });