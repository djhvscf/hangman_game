/**
 * Created by Dennis on 21/04/14.
 */
var ahorcadoController = function($scope, wordsStackService, generalService, $timeout)
{
    $scope.palabraActual = null;
    $scope.letras = [];
    $scope.intentosGenerales = 0;
    $scope.indexPalabra = 0;

    $scope.init = function()
    {
        $scope.palabraActual = wordsStackService.getWordsStack($scope.indexPalabra);
        var letr = '';

        for(var i = 0; i<$scope.palabraActual.length; i++)
        {
            var showWord = $scope.setVisible()

            if(showWord)
            {
                letr = $scope.palabraActual.charAt(i);
            }

            $scope.letras.push({id:i, letra: letr, visible:showWord});

            letr = '';
        }
    };

    $scope.setVisible = function()
    {
        return Math.floor((Math.random()*2));
    };

    $scope.evaluar = function()
    {
        var letraSubmit = '';
        for(var i = 0; i < $scope.letras.length; i++)
        {
            letraSubmit += $scope.letras[i].letra;
        }

        if(letraSubmit === $scope.palabraActual)
        {
            $scope.indexPalabra += 1;
            if($scope.indexPalabra == wordsStackService.getLengthWordsStack())
            {
                generalService.generateNoty('Ganaste el juego', 'success');
                $scope.palabraActual = null;
                $scope.letras = [];
                $scope.init();
            }else
            {
                var nuevaPalabra = function() {
                    $scope.palabraActual = null;
                    $scope.letras = [];
                    $scope.init();
                };

                generalService.generateNoty('Palabra correcta', 'success');
                $timeout(nuevaPalabra, 3000);
            }
        }
        else
        {
            $scope.intentosGenerales += 1;

            if($scope.intentosGenerales === 3)
            {
                $scope.intentosGenerales = 0;
                $scope.indexPalabra = 0;
                generalService.generateNoty('Máximo de intentos fallidos', 'error');
            }
            else
            {
                generalService.generateNoty('Palabra incorrecta', 'error');
            }
        }
    };

    $scope.init();
};
