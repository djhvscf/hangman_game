/**
 * Created by Dennis on 21/04/14.
 */
angular.module('ahorcado.wordsStackService', [])
    .factory('wordsStackService', function() {

        var wordsStack = ['chonco','proyecto','navidadsinti','chucknorris','tangamandapio'];
        return {
            getWordsStack: function (index) {
                RandomWord();
				return wordsStack[Math.floor((Math.random()*wordsStack.length))];
            },
            getLengthWordsStack: function()
            {
                return wordsStack.length;
            }
        };
		
		function RandomWord() {
        var requestStr = "http://randomword.setgetgo.com/get.php";

			$.ajax({
				type: "GET",
				url: requestStr,
				dataType: "jsonp",
				success: RandomWordComplete
			});
		}

		function RandomWordComplete(data) {
			wordsStack.push(data.Word.trim());
		}
    });