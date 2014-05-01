/**
 * Created by Dennis on 21/04/14.
 */
angular.module('ahorcado.wordsStackService', [])
    .factory('wordsStackService', function() {

        var wordsStack = ['chonco','proyecto','navidadsinti','chucknorris','tangamandapio'];
        return {
            getWordsStack: function (index) {
                //return wordsStack[Math.floor((Math.random()*wordsStack.length))];//Todo Random
                return wordsStack[index];
            },
            getLengthWordsStack: function()
            {
                return wordsStack.length;
            }
        };
    });