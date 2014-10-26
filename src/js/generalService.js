/**
 * Created by Dennis on 21/04/14.
 */
angular.module('ahorcado.GeneralService', [])

    .factory('generalService', function() {

        return {
            generateNoty: function(text, type) {
                noty({
                    text        : text,
                    type        : type,
                    maxVisible  : 1,
                    timeout		: 3000,
                    killer		: true,
                    layout      : 'topRight'
                });
            }
        };
    });
