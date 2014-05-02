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
				var ganarJuego = function() {
                    $scope.cleanVariables();
                };

                generalService.generateNoty('Ganaste el juego', 'success');
                $timeout(ganarJuego, 3000);
				
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
				var regresarAlInicio = function() {
                    $scope.cleanVariables();
                };
                generalService.generateNoty('Maximo de intentos fallidos, volvemos al inicio', 'error');
				$timeout(regresarAlInicio, 3000);
            }
            else
            {
                generalService.generateNoty('Palabra incorrecta', 'error');
            }
        }
    };
	
	$scope.cleanVariables = function()
	{
		$scope.palabraActual = null;
		$scope.letras = [];
		$scope.intentosGenerales = 0;
		$scope.indexPalabra = 0;
		$scope.init();
	};

    $scope.init();
};
