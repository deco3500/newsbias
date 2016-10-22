//Search filter from
//http://stackoverflow.com/questions/31008677/search-using-filter-only-after-click-in-angular

//Clean URL from
//http://stackoverflow.com/questions/5343288/get-the-domain-and-page-name-from-a-string-url

var app = angular.module('myApp', ['rzModule']);


// app.config(function($routeProvider){
//   $routeProvider
//   .when('/',{templateUrl: 'login.html'})
//   .when('/dashboard',{templateUrl:'dashboard.html'})
//   .otherwise({templateUrl: '/'});
// });





app.controller('newsBias', function($scope,$location,$window,$filter) { 

  $scope.newsSites = [
    {
        url:'http://www.brisbanetimes.com.au/',
        name:'Brisbane Times',
        owner: 'Fairfax Media Group',
        type: 'Public Company',
        based: 'Sydney',
        CEO: 'Greg Hywood',
        Chairman: 'Nick Falloon',
        otherNews: ['The Sydney Morning Herald', 'The Age', 'The Australian Financial Review', 'The Canberra Times', 'The Sun-Herald', 'The Land', 'BrisbaneTimes.com.au', 'WAtoday.com.au'],
        otherOnline: ['traveller.com.au', 'essentialbaby.com.au', 'essentialkids.com.au', 'goodfood.com.au', 'oversixty.com.au', 'findababysitter.com.au'],
        bias: true,
        totalVotes: 6,
        totalRating: 22,
        averageRating: 3.7
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
    
    //function to split comma list into seperate elements it iterate over
    $scope.splitString=function(listaroo){
        $scope.stringArray = new Array();
        $scope.stringArray = $scope.listaroo.split(',');
        console.log(stringArray);
    }

    //otherNews: ['The Sydney Morning Herald, The Age, The Australian Financial Review, The Canberra Times, The Sun-Herald, The Land, BrisbaneTimes.com.au, WAtoday.com.au'],
    
  $scope.results = [
    {
        url:'http://www.brisbanetimes.com.au/',
        name:'article name1',
        publication:'Brisbane Times',
        owner: 'Fairfax Media Group',
        category: 'IT',
        score: 'A',
        color: 'w3-green',
        detail: 'result1'
    },
      {
        url:'http://www.brisbanetimes.com.au/',
        name:'article name2',
        publication:'Brisbane Times',
        owner: 'Fairfax Media Group',
        category: 'IT',
        score: 'B',
        color: 'w3-blue',
        detail: 'result1'
    },{
        url:'http://www.brisbanetimes.com.au/',
        name:'article name3',
        publication:'Brisbane Times',
        owner: 'Fairfax Media Group',
        category: 'IT',
        score: 'C',
        color: 'w3-grey',
        detail: 'result1'
    },{
        url:'http://www.brisbanetimes.com.au/',
        name:'article name4',
        publication:'Brisbane Times',
        owner: 'Fairfax Media Group',
        category: 'IT',
        score: 'D',
        color: 'w3-yellow',
        detail: 'result1'
    },{
        url:'http://www.brisbanetimes.com.au/',
        name:'article name4',
        publication:'Brisbane Times',
        owner: 'Fairfax Media Group',
        category: 'IT',
        score: 'F',
        color: 'w3-red',
        detail: 'result1'
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
    //remove "file://"
    if (url.indexOf("file://") == 0) {
        url = url.substr(0);
    }
    $scope.domain = url.split('/')[0].split('.')[0]
    if (url.split('/').length > 1) {
        $scope.page = url.split('/')[1].split('.')[0];
    }
    //document.write("domain : " + domain + (page == "" ? "" : " page : " + page) + "<br/>");
    //console.log("domain : " + $scope.domain + ($scope.page == "" ? "" : " page : " + $scope.page));
    return $scope.domain;

  }
  //$scope.cleanURL("www.myWebSite.com"); // domain : myWebSite
  //$scope.cleanURL("http://myWebSite.com"); // domain : myWebSite
  //$scope.cleanURL("myWebSite.com/xxx.html"); // domain : myWebSite page : xxx
  //$scope.cleanURL("https://www.myWebSite.com/meowbeans.html"); // domain : myWebSite page : xxx

  //search
    $scope.searchResult=false;
    $scope.searchURL=function(urlInput, isValid){
        if (isValid) {
            console.log("isvalid");
            document.getElementById('searchResultsModal').style.display='block';
            var url = document.getElementById(urlInput).value;
            $scope.cleanURL(url);

            $scope.searchQuery = angular.copy($scope.domain);
            //$scope.searchQuery = angular.copy($scope.newsQuery);
            $scope.urlToFilter=$scope.newsSites;
            $scope.searchResult=true;

            //show search term
            $(".searchTerm").replaceWith("<span class='searchTerm' >" + url + "</span>");
            console.log(url);
        }
        

    }
    

    $scope.searchURLbyTAB=function(urlInput){
        var url = urlInput;
        $scope.cleanURL(url);
      
        $scope.searchQuery = angular.copy($scope.domain);
        $scope.urlToFilter=$scope.newsSites;
    }
   
   
    $scope.submitVote=false;
    //on click function to vote
    $scope.biasVote=function(index){
        $scope.submitVote=true;
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
        alert('Thanks for voting!');
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

    //google chrome extension controller
    if($scope.cleanURL($location.absUrl())!="file:")
    {
      chrome.windows.getCurrent(function(w) 
      {
      // chrome.tabs.getSelected(w.id,function (response)
      // {
      //     var url = new URL(response.url)
      //     document.getElementById('host').innerHTML = url.hostname;
      // });

        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        var url = new URL(tabs[0].url)
        $scope.title = tabs[0].title;
        $scope.url = $scope.cleanURL(tabs[0].url);
        $scope.searchURLbyTAB(tabs[0].url);
        $scope.search_newsSites = $filter('filter')($scope.newsSites, {url: tabs[0].url}, true);
        $scope.$apply();
        // console.log(tabs[0].url);
        // console.log(tabs[0].title);
        // document.getElementById('host').innerHTML = url.hostname;
        });
      });
    }

    $scope.login=function(name,psw){
      var name = document.getElementById(name).value;
      var password = document.getElementById(psw).value;
      if(name=='test' && password=='test')
      {    
        $window.location.href = $location.$$absUrl.replace('login.html',"index.html");
      }
    }
  });

