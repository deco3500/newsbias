//Search filter from
//http://stackoverflow.com/questions/31008677/search-using-filter-only-after-click-in-angular

//Clean URL from
//http://stackoverflow.com/questions/5343288/get-the-domain-and-page-name-from-a-string-url

var app = angular.module('myApp', []);

app.controller('newsBias', function($scope) { 

  $scope.newsSites = [
    {
        url:'brisbanetimes.com',
        name:'Brisbane Times',
        bias:'one',
        likes: 0,
        likePercentage: 0,
    	dislikes: 0,
        dislikePercentage: 0,
        totalVotes: 0
    },
      {
        url:'brisbanetimes.com2',
        name:'Brisbane Times2',
        bias:'four',
        likes: 0,
        likePercentage: 0,
    	dislikes: 0,
        dislikePercentage: 0,
        totalVotes: 0
    },
    {
        url:'abc.net.au',
        name:'ABC News',
        bias:'two',
        likes: 0,
        likePercentage: 0,
    	dislikes: 0,
        dislikePercentage: 0,
        totalVotes: 0
    },
    {
        url:'theconversation.com',
        name:'The Conversation',
        bias:'three',
        likes: 0,
        likePercentage: 0,
    	dislikes: 0,
        dislikePercentage: 0,
        totalVotes: 0
    }
  ];
    
    $scope.updatePercentage = function(index) {
      var likes = $scope.newsSites[index].likes;
      var dislikes = $scope.newsSites[index].dislikes;
      var total = $scope.newsSites[index].totalVotes;
    $scope.newsSites[index].likePercentage = ((likes/total) * 100).toFixed(2);
    $scope.newsSites[index].dislikePercentage = ((dislikes/total) * 100).toFixed(2);
    };
    
    
        
  $scope.plusOne = function(index) { 
    $scope.newsSites[index].likes += 1;
    $scope.newsSites[index].totalVotes += 1;
    $scope.updatePercentage(index);
  };
  $scope.minusOne = function(index) { 
  	 $scope.newsSites[index].dislikes += 1; 
      $scope.newsSites[index].totalVotes += 1;
      $scope.updatePercentage(index);
  };
    
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
    $scope.biasVote=function(userInput){
        var vote = document.getElementById(userInput).value;
        console.log(vote);
        

    }
    
    
  });
