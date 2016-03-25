//picked up from 
//http://plnkr.co/edit/2Hbbj5u11Las6cG8VsXs?p=info

iornBars.directive('typedjs', function () {
    return {
        restrict: 'E',    
        scope: { strings: '=' },
        template:'<span id="typed-output"></span>',
        link: function ($scope, $element, $attrs) {
          var options = {strings: $scope.strings,
                          typeSpeed: 25,
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


iornBars.directive('clickOn', function () {
  return {
          restrict: 'A',
          link: function(scope, elm, attrs) {
              scope.$on(attrs.clickOn, function() {
                  //setTimeout(function() {
                      document.elm.click()
                //  }, 100);
              });
          }
      };
});