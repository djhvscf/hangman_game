/**
 * Created by Dennis on 21/04/14.
 */

var app = angular.module('ahorcado', ['ahorcado.wordsStackService', 'ahorcado.ahorcadoDirective', 'ahorcado.GeneralService']);

app.config(function ($routeProvider, $provide, $httpProvider){

    $routeProvider.when('/ahorcado.html', {
        templateUrl: 'ahorcado',
        controller: 'ahorcadoController'
    });
});