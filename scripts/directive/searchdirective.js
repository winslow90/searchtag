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

                function bogusFilter(data,rawstr){
                    var sorted = data.sort();
                    var strs=rawstr.split(" ");
                    var filterd = sorted.filter(function(value,index,arr){
                        for (var i=0; i< strs.length;i++){
                            if (value.trim().toLowerCase().search(strs[i].trim()) > -1){
                                return true;
                            }
                        }
                        return false;
                    });
                    return filterd;
                }

                scope.$watch("rawSearchStr",function(newstr,oldstr){
                    if (!newstr || /^\s*$/.test(newstr)){
                        scope.searchResult=[];
                        scope.searchliststyle={'display':'none'};
                    }else{
                        DoSearchService.rawSearch(newstr).then(
                            function(resp){
                                scope.searchResult=bogusFilter(resp.data.data,newstr);
                                if (scope.searchResult.length>0){
                                    scope.searchliststyle={};
                                }else{
                                    scope.searchliststyle={'display':'none'};
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