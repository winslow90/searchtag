/**
 * Created by superman90 on 6/30/16.
 */
angular.module('searchmodule')
    .directive('search', function (DoSearchService) {
        return {
            restrict:'E',
            templateUrl:'scripts/template/searchtemplate.html',
            controller:'maincontroller',
            scope:{},
            link:function(scope, element, attrs, controller, transcludeFn) {
                scope.$watch("rawSearchStr",function(newstr,oldstr){
                    if (!newstr || /^\s*$/.test(newstr)){
                        scope.searchResult=[];
                        scope.searchliststyle={'display':'none'};
                    }else{
                        DoSearchService.rawSearch(newstr).then(
                            function(resp){
                                scope.searchResult=resp.data.data;
                                if (resp.data.data.length>0){
                                    $scope.searchliststyle={};
                                }else{
                                    $scope.searchliststyle={'display':'none'};
                                }
                            },
                            function(resp){
                                scope.searchResult=[];
                                $scope.searchliststyle={'display':'none'};
                            }
                        );
                    }
                });
            }

        };
    });