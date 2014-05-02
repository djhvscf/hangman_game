/**
 * Created by Dennis on 21/04/14.
 */

angular.module('ahorcado.ahorcadoDirective', []).
    directive('ahorcadoMaxlength', function () {
        return {
            require: 'ngModel',
            link: function (scope, element, attrs, ahorcadoController) {
                var maxlength = Number(attrs.ahorcadoMaxlength);
				var element = element;
                function fromUser(text) {
					text = text.substr(0,1);
					var textActual = $('#'+element[0].id)[0];
					textActual.value = text;
					ahorcadoController.$setValidity('unique', text.length <= maxlength);
                    return text;
                }
                ahorcadoController.$parsers.push(fromUser);
            }
        };
    });