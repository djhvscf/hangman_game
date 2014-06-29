/**
 * Created by Dennis on 21/04/14.
 */

var app = angular.module('ahorcado', ['ahorcado.wordsStackService', 'ahorcado.ahorcadoDirective', 'ahorcado.GeneralService']);

app.config(function ($routeProvider, $provide, $httpProvider){

    $routeProvider.when('/hangman.html', {
        templateUrl: '/hangman.html',
        controller: 'ahorcadoController'
    });
});