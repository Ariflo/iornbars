//picked up from 
//http://plnkr.co/edit/2Hbbj5u11Las6cG8VsXs?p=info

iornBars.directive('typedjs', function () {
    return {
        restrict: 'E',    
        scope: { strings: '=' },
        template:'<span id="typed-output"></span>',
        link: function ($scope, $element, $attrs) {
          var options = {strings: $scope.strings,
                          typeSpeed: 20,
                          contentType: "html",
                          showCursor:true,
                          cursorChar:""
                          };

          $(function(){
            $("#typed-output").typed( options );
          });
        }
    };
});