/**
 * Created by superman90 on 6/30/16.
 */
angular.module('searchmodule')
    .factory('DoSearchService', function ($http) {
        var baseUrl = "api/searchresult.json";
        var doRawSearch= function (rawsearchstr) {
            return $http({
                method:'GET',
                url:baseUrl+'/?searchstr='+rawsearchstr
            });
        };
        return {
            rawSearch: function (str) {
                return doRawSearch(str);
            }
        };
    });