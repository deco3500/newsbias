//Search filter from
//http://stackoverflow.com/questions/31008677/search-using-filter-only-after-click-in-angular

//Clean URL from
//http://stackoverflow.com/questions/5343288/get-the-domain-and-page-name-from-a-string-url

var app = angular.module('myApp', ['rzModule']);

app.controller('newsBias', function($scope) { 

  $scope.newsSites = [
    {
        url:'http://www.brisbanetimes.com.au/',
        name:'Brisbane Times',
        owner: 'Fairfax Media Group',
        type: 'Public Company',
        based: 'Sydney',
        CEO: 'Greg Hywood',
        Chairman: 'Nick Falloon',
        otherNews: 'The Sydney Morning Herald, The Age, The Australian Financial Review, The Canberra Times, The Sun-Herald, The Land, BrisbaneTimes.com.au, WAtoday.com.au',
        otherOnline: 'traveller.com.au, essentialbaby.com.au, essentialkids.com.au, goodfood.com.au, oversixty.com.au, findababysitter.com.au',
        bias: true,
        totalVotes: 6,
        totalRating: 22,
        averageRating: 3.7
    },
      {
        url:'http://www.brisbanetimes.com.au/',
        name:'Brisbane Times v2',
        owner: 'Fairfax Media Group',
        type: 'Public Company',
        based: 'Sydney',
        CEO: 'Greg Hywood',
        Chairman: 'Nick Falloon',
        otherNews: 'The Sydney Morning Herald, The Age, The Australian Financial Review, The Canberra Times, The Sun-Herald, The Land, BrisbaneTimes.com.au, WAtoday.com.au',
        otherOnline: 'traveller.com.au, essentialbaby.com.au, essentialkids.com.au, goodfood.com.au, oversixty.com.au, findababysitter.com.au',
        bias: false,
        likes: 25,
    	dislikes: 12,
        likePercentage: 67.57,
        dislikePercentage: 32.43,
        totalVotesPercent: 37
    },
    {
        url:'abc.net.au',
        name:'ABC News',
        bias:'two',
        likes: 0,
        likePercentage: 0,
    	dislikes: 0,
        dislikePercentage: 0,
        totalVotes: 0,
        totalRating: 0,
        averageRating: 0
    },
    {
        url:'theconversation.com',
        name:'The Conversation',
        bias:'three',
        likes: 0,
        likePercentage: 0,
    	dislikes: 0,
        dislikePercentage: 0,
        totalVotes: 0,
        totalRating: 0,
        averageRating: 0
    }
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

  //search
  $scope.searchResult=false;
    $scope.searchURL=function(urlInput){
        var url = document.getElementById(urlInput).value;
        $scope.cleanURL(url);
      
        $scope.searchQuery = angular.copy($scope.domain);
        //$scope.searchQuery = angular.copy($scope.newsQuery);
        $scope.urlToFilter=$scope.newsSites;
        $scope.searchResult=true;
        
        //show search term
        $("#searchTerm").replaceWith("<span id='searchTerm' >" + url + "</span>");
        
        //scroll down page to search result
       // $.scrollTo($('#searchResultScroll'), 1000);

    }
   
    $scope.updatePercentage = function(index) {
      var likes = $scope.newsSites[index].likes;
      var dislikes = $scope.newsSites[index].dislikes;
      var total = $scope.newsSites[index].totalVotesPercent;
    $scope.newsSites[index].likePercentage = ((likes/total) * 100).toFixed(2);
        console.log('likes' + $scope.newsSites[index].likePercentage);
    $scope.newsSites[index].dislikePercentage = ((dislikes/total) * 100).toFixed(2);
        console.log('dislikes' + $scope.newsSites[index].dislikePercentage);
    };
    
  $scope.plusOne = function(index) { 
    $scope.newsSites[index].likes += 1;
      console.log('likes' + $scope.newsSites[index].likes);
    $scope.newsSites[index].totalVotesPercent += 1;
      console.log('total' + $scope.newsSites[index].totalVotesPercent);
    $scope.updatePercentage(index);
      console.log("done");
  };
  $scope.minusOne = function(index) { 
     $scope.newsSites[index].dislikes += 1; 
      console.log('dislikes' + $scope.newsSites[index].dislikes);
      $scope.newsSites[index].totalVotesPercent += 1;
      console.log('total' + $scope.newsSites[index].totalVotesPercent);
      $scope.updatePercentage(index);
      console.log("done");
  };
    
    //on click function to vote
    $scope.biasVote=function(index){
        //var vote = document.getElementById(userInput).value;
        //update total number votes
        $scope.newsSites[index].totalVotes += 1;
        var total = $scope.newsSites[index].totalVotes;
        //console.log('total ' + total);
        //update total vote value
        var newVote = $scope.slider.value
        //console.log('newVote ' + newVote);
        $scope.newsSites[index].totalRating += newVote;
        var totalVotes = $scope.newsSites[index].totalRating;
        //console.log('totalVotes ' + totalVotes);
        //get vote average
        $scope.newsSites[index].averageRating = (totalVotes/total).toFixed(1);
        //console.log('average ' + $scope.newsSites[index].averageRating);
    }

    
    $scope.slider = {
      value: 3,
      options: {
        showTicksValues: true,
        stepsArray: [
          {value: 1, legend: 'Not at all'},
          {value: 2},
          {value: 3, legend: 'Average'},
          {value: 4},
          {value: 5, legend: 'Very much'}
        ]
      }
    };
    
    
    
  });
