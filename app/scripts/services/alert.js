'use strict';

/**
 * @ngdoc service
 * @name projetoFortesApp.alert
 * @description
 * # alert
 * Service in the projetoFortesApp.
 */
angular.module('projetoFortesApp')
  .service('alert', function(SweetAlert) {
    var alter = function(titulo, text, type) {

      var object = {
        title: titulo,
        text: text,
        type: type,
        closeOnConfirm: false
      };
      SweetAlert.swal(object);
    };

    var sucess = function() {
      return alter('Salvo', 'Dados salvo com sucesso', 'success');
    };

    var error = function(error) {
      return alter('Ocorreu um erro', error, 'erro');
    };

    var confirmarDoacao = function() {
     
      SweetAlert.swal({
        title: 'Confirmação de doação!',
        text: 'Você desseja fazer a doação para esse paciente',
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Sim, Desejo doar!",
        cancelButtonText: "Não, doar!!",
        closeOnConfirm: false,
        closeOnCancel: false
      },
        function(isConfirm) {
          if (isConfirm) {
            SweetAlert.swal("Doação Feita", "Sua doação foi feita com sucesso", "success");
          } else {
            SweetAlert.swal("Doação não realizada", "Sua doação não foi cancelada :(", "error");
          }
        });
    };


    return {
      sucess: sucess,
      error: error,
      confirmarDoacao: confirmarDoacao
    };
  });