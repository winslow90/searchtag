/**
 * Created by superman90 on 6/30/16.
 */
angular.module('searchmodule')
    .controller('maincontroller',function($scope,DoSearchService){
            //data
            $scope.rawSearchStr="";
            $scope.searchResult=["alpha","beta","charlie"];
            $scope.searchinputstyle={'width':'0px','padding':'0px','left':'100%','opacity':0};
            $scope.searchliststyle={'display':'none'};
            $scope.searchinputshow=false;

            //utility functions
            function dosearch(str){

            }
            function triggerinputview(){
                if ($scope.searchinputshow){
                    $scope.searchinputstyle={'width':'0px','padding':'0px','left':'100%','opacity':0};
                }else{
                    $scope.searchinputstyle={'left':'0%','opacity':1};
                }
                $scope.searchinputshow=!$scope.searchinputshow;
            }



            //event handler
            $scope.searchbtnclick=function(){
                triggerinputview();
            }
        }
    );