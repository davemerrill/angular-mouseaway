ng-mouseaway
============

AngularJS directive similar to ng-mouseleave, but in the jQuery mouseleave spirit.
It's not triggered by mousing over contained elements, only by mousing out of the element it's on.

Doesn't support select elements in bound element; events of opened select list may be outside bound element, triggering it.
That's similar to the jQuery version.

This is a temporary workaround; the Angular directive should do this.

By Dave Merrill, https://github.com/davemerrill/ng-mouseaway, free software.
