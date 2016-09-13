//Search filter from
//http://stackoverflow.com/questions/31008677/search-using-filter-only-after-click-in-angular

//Clean URL from
//http://stackoverflow.com/questions/5343288/get-the-domain-and-page-name-from-a-string-url

var app = angular.module('myApp', []);

app.controller('newsBias', function($scope) { 

  $scope.newsSites = [
    {url:'brisbanetimes.com',name:'Brisbane Times',bias:'one'},
    {url:'abc.net.au',name:'ABC News',bias:'two'},
    {url:'theconversation.com',name:'The Conversation',bias:'three'}
  ];
  $scope.domain = "";
  $scope.page = "";
  
  $scope.cleanURL=function(url){
    
    //remove "http://"
    if (url.indexOf("http://") == 0) {
        url = url.substr(7);
    }
  //remove "https://"
    if (url.indexOf("https://") == 0) {
        url = url.substr(8);
    }
    //remove "www."
    if (url.indexOf("www.") == 0) {
        url = url.substr(4);
    }
    $scope.domain = url.split('/')[0].split('.')[0]
    if (url.split('/').length > 1) {
        $scope.page = url.split('/')[1].split('.')[0];
    }
    //document.write("domain : " + domain + (page == "" ? "" : " page : " + page) + "<br/>");
    console.log("domain : " + $scope.domain + ($scope.page == "" ? "" : " page : " + $scope.page));

  }
  //$scope.cleanURL("www.myWebSite.com"); // domain : myWebSite
  //$scope.cleanURL("http://myWebSite.com"); // domain : myWebSite
  //$scope.cleanURL("myWebSite.com/xxx.html"); // domain : myWebSite page : xxx
  //$scope.cleanURL("https://www.myWebSite.com/meowbeans.html"); // domain : myWebSite page : xxx
  
  
    $scope.searchURL=function(urlInput){
        var url = document.getElementById(urlInput).value;
        $scope.cleanURL(url);
      
        $scope.searchQuery = angular.copy($scope.domain);
        //$scope.searchQuery = angular.copy($scope.newsQuery);
        $scope.urlToFilter=$scope.newsSites;
        $scope.searchResult=true;

    }
  });