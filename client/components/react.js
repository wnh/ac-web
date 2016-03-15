
'use strict';

angular.module('avalancheCanadaApp')
.value('MenuTest', window.AcReact.MenuTest)
.directive('testMenu', function(window, reactDirective){
    return reactDirective('TestMenu');
})
