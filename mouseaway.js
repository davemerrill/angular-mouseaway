/*
  mouseaway directive, essentially ng-mouseleave, but in the jQuery mouseleave spirit
	it's not triggered by mousing over contained elements, only by mousing out of the element it's on
	doesn't support select elements in bound element; events of opened select list may be outside bound element, triggering it
  by Dave Merrill, https://github.com/davemerrill/ng-mouseaway/, free software
*/
angular.module('directives.mouseaway', [])

.directive('mouseaway', function ()
{
  return {
    restrict: 'A',
    link: function (scope, element, attrs)
    {
      var callbackFn = $parse(attrs.mouseaway);
      element.bind
      (
        'mouseout',
        function (event)
        {
          var elem = event.toElement || event.relatedTarget;
          while (elem)
          {
            if (elem === element[0]) // still inside bound elem, not triggered
              return;
            elem = elem.parentNode;
          }
          scope.$apply(function ()
          {
            callbackFn(scope, {$event: event});
          });
        }
      );
    }
  };
});
