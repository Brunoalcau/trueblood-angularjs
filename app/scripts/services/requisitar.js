'use strict';

/**
 * @ngdoc service
 * @name projetoFortesApp.requisitar
 * @description
 * # requisitar
 * Service in the projetoFortesApp.
 */
angular.module('projetoFortesApp')
	.service('requisitar', function($http) {

		var salvar  = function(url,object){
			if (object.id) {
				return $http.put(url, object);
			} else {
				return $http.post(url, object);
			}
		};

		var getPaciente = function(id) {
			return $http.get('api/Paciente/' + id);
		};

		var salvarPaciente = function(paciente) {
			return salvar('api/Paciente/', paciente);
		};

		var listaPaginada = function(url,pagina,quantidade){
			return $http.get(url +'/'+ pagina + '/' + quantidade);
		};

		var listaPaciente = function(pagina, quantidade){
			return listaPaginada(pagina,quantidade);
		};

		var salvarDoador = function(doador){
			return salvar('api/Doador/',doador);
		};

		return {
			salvarPaciente: salvarPaciente,
			getPaciente: getPaciente,
			salvarDoador : salvarDoador,
			listaPaciente : listaPaciente
		};
});