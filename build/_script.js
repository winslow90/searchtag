angular.module("searchmodule",[]),angular.module("searchmodule").controller("maincontroller",function(e,t){function r(){e.searchinputshow?e.searchinputstyle={width:"0px",padding:"0px",left:"100%",opacity:0}:e.searchinputstyle={left:"0%",opacity:1},e.searchinputshow=!e.searchinputshow}e.rawSearchStr="",e.searchResult=["alpha","beta","charlie"],e.searchinputstyle={width:"0px",padding:"0px",left:"100%",opacity:0},e.searchliststyle={display:"none"},e.searchinputshow=!1,e.searchbtnclick=function(){r()}}),angular.module("searchmodule").directive("search",function(e){return{restrict:"E",templateUrl:"modules/searchModule/template/searchtemplate.html",controller:"maincontroller",scope:{},link:function(t,r,a,n,s){function c(e,t){var r=e.sort(),a=t.split(" "),n=r.filter(function(e,t,r){for(var n=0;n<a.length;n++)if(e.trim().toLowerCase().search(a[n].trim())>-1)return!0;return!1});return n}t.$watch("rawSearchStr",function(r,a){!r||/^\s*$/.test(r)?(t.searchResult=[],t.searchliststyle={display:"none"}):e.rawSearch(r).then(function(e){t.searchResult=c(e.data.data,r),t.searchResult.length>0?t.searchliststyle={}:t.searchliststyle={display:"none"}},function(e){t.searchResult=[],$scope.searchliststyle={display:"none"}})})}}}),angular.module("searchmodule").factory("DoSearchService",function(e){var t="api/searchresult.json",r=function(r){return e({method:"GET",url:t+"/?searchstr="+r})};return{rawSearch:function(e){return r(e)}}});