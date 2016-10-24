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
        owner: 'Fairfax Media',
        type: 'Public Company',
        based: 'Sydney, New South Wales',
        CEO: 'Greg Hywood',
        Chairman: 'Nick Falloon',
        otherNews: ['The Age','The Australian Financial Review','The Herald','The Canberra Times','The Examiner','Illawarra Mercury','The Border Mail','The Advocate','The Courier', 'Brisbane Times'],
        otherOnline: ['theage.com.au','afr.com','theherald.com.au','canberratimes.com.au','examiner.com.au','illawarramercury.com.au','bordermail.com.au','theadvocate.com.au','thecourier.com.au','http://www.brisbanetimes.com.au/'], 
        bias: true,
        totalVotes: 6,
        totalRating: 22,
        averageRating: 3.7
    },
	
    {
        url:'http://www.toowoombachronicle.com.au',
        name:'The Toowoomba Chronicle',
        owner:'APN News & Media',
        type:'Public Company',
        based:'Toowoomba, Queensland',
        CEO:'Ciaran Davis', 
        Chairman:'Rupert Murdoch, Allan Gray', 
        otherNews: ['Sunshine Coast Daily','The Morning Bulletin'], 
        otherOnline: ['coastdaily.com.au','morningbulletin.com.au'], 
        bias: true,
        totalVotes: 0,
        totalRating: 0,
        averageRating: 0
    },

    {
        url:'http://www.coastdaily.com.au',
        name:'Sunshine Coast Daily',
        owner:'APN News & Media',
        type:'Public Company',
        based:'Maroochydore, Queensland',
        CEO:'Ciaran Davis', 
        Chairman:'Rupert Murdoch, Allan Gray', 
        otherNews: ['The Toowoomba Chronicle','The Morning Bulletin'], 
        otherOnline: ['toowoombachronicle.com.au','morningbulletin.com.au'], 
        bias: true,
        totalVotes: 0,
        totalRating: 0,
        averageRating: 0
    },

    {
        url:'http://www.morningbulletin.com.au',
        name:'The Morning Bulletin',
        owner:'APN News & Media',
        type:'Public Company',
        based:'Rockhampton, Queensland',
        CEO:'Ciaran Davis', 
        Chairman:'Rupert Murdoch, Allan Gray', 
        otherNews: ['The Toowoomba Chronicle','Sunshine Coast Daily'], 
        otherOnline: ['toowoombachronicle.com.au','coastdaily.com.au'], 
        bias: true,
        totalVotes: 0,
        totalRating: 0,
        averageRating: 0
    },

    {
        url:'http://www.smh.com.au',
        name:'The Sydney Morning Herald',
        owner:'Fairfax Media',
        type:'Public Company',
        based:'Sydney, New South Wales',
        CEO:'Greg Hywood', 
        Chairman:'Nick Falloon', 
        otherNews: ['The Age','The Australian Financial Review','The Herald','The Canberra Times','The Examiner','Illawarra Mercury','The Border Mail','The Advocate','The Courier', 'Brisbane Times'],
		otherOnline: ['theage.com.au','afr.com','theherald.com.au','canberratimes.com.au','examiner.com.au','illawarramercury.com.au','bordermail.com.au','theadvocate.com.au','thecourier.com.au','http://www.brisbanetimes.com.au/'], 
        bias: true,
        totalVotes: 0,
        totalRating: 0,
        averageRating: 0
    },

    {
        url:'http://www.theage.com.au',
        name:'The Age',
        owner:'Fairfax Media',
        type:'Public Company',
        based:'Melbourne, Victoria',
        CEO:'Greg Hywood', 
        Chairman:'Nick Falloon', 
        otherNews: ['The Sydney Morning Herald','The Australian Financial Review','The Herald','The Canberra Times','The Examiner','Illawarra Mercury','The Border Mail','The Advocate','The Courier','Brisbane Times'],
		otherOnline: ['smh.com.au.com.au','afr.com','theherald.com.au','canberratimes.com.au','examiner.com.au','illawarramercury.com.au','bordermail.com.au','theadvocate.com.au','thecourier.com.au','http://www.brisbanetimes.com.au/'], 
        bias: true,
        totalVotes: 0,
        totalRating: 0,
        averageRating: 0
    },

    {
        url:'http://www.afr.com',
        name:'The Australian Financial Review',
        owner:'Fairfax Media',
        type:'Public Company',
        based:'Melbourne, Victoria',
        CEO:'Greg Hywood', 
        Chairman:'Nick Falloon', 
        otherNews: ['The Sydney Morning Herald','The Age','The Herald','The Canberra Times','The Examiner','Illawarra Mercury','The Border Mail','The Advocate','The Courier','Brisbane Times'],
		otherOnline: ['smh.com.au.com.au','theage.com.au','theherald.com.au','canberratimes.com.au','examiner.com.au','illawarramercury.com.au','bordermail.com.au','theadvocate.com.au','thecourier.com.au','http://www.brisbanetimes.com.au/'], 
        bias: true,
        totalVotes: 0,
        totalRating: 0,
        averageRating: 0
    },

    {
        url:'http://www.theherald.com.au',
        name:'The Herald',
        owner:'Fairfax Media',
        type:'Public Company',
        based:'Newcastle, New South Wales',
        CEO:'Greg Hywood', 
        Chairman:'Nick Falloon', 
        otherNews: ['The Sydney Morning Herald','The Age','The Australian Financial Review','The Canberra Times','The Examiner','Illawarra Mercury','The Border Mail','The Advocate','The Courier','Brisbane Times'],
		otherOnline: ['smh.com.au.com.au','theage.com.au','afr.com','canberratimes.com.au','examiner.com.au','illawarramercury.com.au','bordermail.com.au','theadvocate.com.au','thecourier.com.au','http://www.brisbanetimes.com.au/'], 
        bias: true,
        totalVotes: 0,
        totalRating: 0,
        averageRating: 0
    },

    {
        url:'http://www.canberratimes.com.au',
        name:'The Canberra Times',
        owner:'Fairfax Media',
        type:'Public Company',
        based:'Canberra, Australian Capital Territory',
        CEO:'Greg Hywood', 
        Chairman:'Nick Falloon', 
        otherNews: ['The Sydney Morning Herald','The Age','The Australian Financial Review','The Herald','The Examiner','Illawarra Mercury','The Border Mail','The Advocate','The Courier','Brisbane Times'],
		otherOnline: ['smh.com.au.com.au','theage.com.au','afr.com','theherald.com.au','examiner.com.au','illawarramercury.com.au','bordermail.com.au','theadvocate.com.au','thecourier.com.au','http://www.brisbanetimes.com.au/'], 
        bias: true,
        totalVotes: 0,
        totalRating: 0,
        averageRating: 0
    },

    {
        url:'http://www.examiner.com.au',
        name:'The Examiner',
        owner:'Fairfax Media',
        type:'Public Company',
        based:'Launceston, Tasmania',
        CEO:'Greg Hywood', 
        Chairman:'Nick Falloon', 
        otherNews: ['The Sydney Morning Herald','The Age','The Australian Financial Review','The Herald','The Canberra Times','Illawarra Mercury','The Border Mail','The Advocate','The Courier','Brisbane Times'],
		otherOnline: ['smh.com.au.com.au','theage.com.au','afr.com','theherald.com.au','canberratimes.com.au','illawarramercury.com.au','bordermail.com.au','theadvocate.com.au','thecourier.com.au','http://www.brisbanetimes.com.au/'], 
        bias: true,
        totalVotes: 0,
        totalRating: 0,
        averageRating: 0
    },

    {
        url:'http://www.illawarramercury.com.au',
        name:'Illawarra Mercury',
        owner:'Fairfax Media',
        type:'Public Company',
        based:'Wollongong, New South Wales',
        CEO:'Greg Hywood', 
        Chairman:'Nick Falloon', 
        otherNews: ['The Sydney Morning Herald','The Age','The Australian Financial Review','The Herald','The Canberra Times','The Examiner','The Border Mail','The Advocate','The Courier','Brisbane Times'],
		otherOnline: ['smh.com.au.com.au','theage.com.au','afr.com','theherald.com.au','canberratimes.com.au','examiner.com.au','bordermail.com.au','theadvocate.com.au','thecourier.com.au','http://www.brisbanetimes.com.au/'], 
        bias: true,
        totalVotes: 0,
        totalRating: 0,
        averageRating: 0
    },

    {
        url:'http://www.bordermail.com.au',
        name:'The Border Mail',
        owner:'Fairfax Media',
        type:'Public Company',
        based:'Wodonga, Victoria',
        CEO:'Greg Hywood', 
        Chairman:'Nick Falloon', 
        otherNews: ['The Sydney Morning Herald','The Age','The Australian Financial Review','The Herald','The Canberra Times','The Examiner','Illawarra Mercury','The Advocate','The Courier','Brisbane Times'],
		otherOnline: ['smh.com.au.com.au','theage.com.au','afr.com','theherald.com.au','canberratimes.com.au','examiner.com.au','illawarramercury.com.au','theadvocate.com.au','thecourier.com.au','http://www.brisbanetimes.com.au/'], 
        bias: true,
        totalVotes: 0,
        totalRating: 0,
        averageRating: 0
    },

    {
        url:'http://www.theadvocate.com.au',
        name:'The Advocate',
        owner:'Fairfax Media',
        type:'Public Company',
        based:'Burnie, Tasmania',
        CEO:'Greg Hywood', 
        Chairman:'Nick Falloon', 
        otherNews: ['The Sydney Morning Herald','The Age','The Australian Financial Review','The Herald','The Canberra Times','The Examiner','Illawarra Mercury','The Border Mail','The Courier','Brisbane Times'],
		otherOnline: ['smh.com.au.com.au','theage.com.au','afr.com','theherald.com.au','canberratimes.com.au','examiner.com.au','illawarramercury.com.au','bordermail.com.au','thecourier.com.au','http://www.brisbanetimes.com.au/'], 
        bias: true,
        totalVotes: 0,
        totalRating: 0,
        averageRating: 0
    },

    {
        url:'http://www.thecourier.com.au',
        name:'The Courier',
        owner:'Fairfax Media',
        type:'Public Company',
        based:'Ballarat, Victoria',
        CEO:'Greg Hywood', 
        Chairman:'Nick Falloon', 
        otherNews: ['The Sydney Morning Herald','The Age','The Australian Financial Review','The Herald','The Canberra Times','The Examiner','Illawarra Mercury','The Border Mail','The Advocate','Brisbane Times'],
		otherOnline: ['smh.com.au.com.au','theage.com.au','afr.com','theherald.com.au','canberratimes.com.au','examiner.com.au','illawarramercury.com.au','bordermail.com.au','theadvocate.com.au','http://www.brisbanetimes.com.au/'], 
        bias: true,
        totalVotes: 0,
        totalRating: 0,
        averageRating: 0
    },

    {
        url:'http://www.heraldsun.com.au',
        name:'Herald Sun',
        owner:'News Corp Australia',
        type:'Public Company',
        based:'Melbourne, Victoria',
        CEO:'Julian Clarke ', 
        Chairman:'Rupert Murdoch', 
        otherNews: ['The Daily Telegraph','The Courier-Mail','The Advertiser','The Australian','The Mercury','The Gold Coast Bulletin','Townsville Bulletin','Geelong Advertiser','The Cairns Post','Northern Territory News'],
		otherOnline: ['dailytelegraph.com.au','couriermail.com.au','adelaidenow.com.au','theaustralian.com.au','themercury.com.au','goldcoastbulletin.com.au','townsvillebulletin.com.au','geelongadvertiser.com.au','cairnspost.com.au','darwinnow.com.te'], 
        bias: true,
        totalVotes: 0,
        totalRating: 0,
        averageRating: 0
    },

    {
        url:'http://www.dailytelegraph.com.au',
        name:'The Daily Telegraph',
        owner:'News Corp Australia',
        type:'Public Company',
        based:'Sydney, New South Wales',
        CEO:'Julian Clarke ', 
        Chairman:'Rupert Murdoch', 
        otherNews: ['Herald Sun','The Courier-Mail','The Advertiser','The Australian','The Mercury','The Gold Coast Bulletin','Townsville Bulletin','Geelong Advertiser','The Cairns Post','Northern Territory News'],
		otherOnline: ['heraldsun.com.au','couriermail.com.au','adelaidenow.com.au','theaustralian.com.au','themercury.com.au','goldcoastbulletin.com.au','townsvillebulletin.com.au','geelongadvertiser.com.au','cairnspost.com.au','darwinnow.com.te'], 
        bias: true,
        totalVotes: 0,
        totalRating: 0,
        averageRating: 0
    },

    {
        url:'http://www.couriermail.com.au',
        name:'The Courier-Mail',
        owner:'News Corp Australia',
        type:'Public Company',
        based:'Brisbane, Queensland',
        CEO:'Julian Clarke ', 
        Chairman:'Rupert Murdoch', 
        otherNews: ['Herald Sun','The Daily Telegraph','The Advertiser','The Australian','The Mercury','The Gold Coast Bulletin','Townsville Bulletin','Geelong Advertiser','The Cairns Post','Northern Territory News'],
		otherOnline: ['heraldsun.com.au','dailytelegraph.com.au','adelaidenow.com.au','theaustralian.com.au','themercury.com.au','goldcoastbulletin.com.au','townsvillebulletin.com.au','geelongadvertiser.com.au','cairnspost.com.au','darwinnow.com.te'], 
        bias: true,
        totalVotes: 0,
        totalRating: 0,
        averageRating: 0
    },

    {
        url:'http://www.adelaidenow.com.au',
        name:'The Advertiser',
        owner:'News Corp Australia',
        type:'Public Company',
        based:'Adelaide, South Australia',
        CEO:'Julian Clarke ', 
        Chairman:'Rupert Murdoch', 
        otherNews: ['Herald Sun','The Daily Telegraph','The Courier-Mail','The Australian','The Mercury','The Gold Coast Bulletin','Townsville Bulletin','Geelong Advertiser','The Cairns Post','Northern Territory News'],
		otherOnline: ['heraldsun.com.au','dailytelegraph.com.au','couriermail.com.au','theaustralian.com.au','themercury.com.au','goldcoastbulletin.com.au','townsvillebulletin.com.au','geelongadvertiser.com.au','cairnspost.com.au','darwinnow.com.te'], 
        bias: true,
        totalVotes: 0,
        totalRating: 0,
        averageRating: 0
    },

    {
        url:'http://www.theaustralian.com.au',
        name:'The Australian',
        owner:'News Corp Australia',
        type:'Public Company',
        based:'Sydney, New South Wales',
        CEO:'Julian Clarke ', 
        Chairman:'Rupert Murdoch', 
        otherNews: ['Herald Sun','The Daily Telegraph','The Courier-Mail','The Advertiser','The Mercury','The Gold Coast Bulletin','Townsville Bulletin','Geelong Advertiser','The Cairns Post','Northern Territory News'], 
        otherOnline: ['heraldsun.com.au','dailytelegraph.com.au','couriermail.com.au','adelaidenow.com.au','themercury.com.au','goldcoastbulletin.com.au','townsvillebulletin.com.au','geelongadvertiser.com.au','cairnspost.com.au','darwinnow.com.te'], 
        bias: true,
        totalVotes: 0,
        totalRating: 0,
        averageRating: 0
    },

    {
        url:'http://www.themercury.com.au',
        name:'The Mercury',
        owner:'News Corp Australia',
        type:'Public Company',
        based:'Hobart, Tasmania',
        CEO:'Julian Clarke ', 
        Chairman:'Rupert Murdoch', 
        otherNews: ['Herald Sun','The Daily Telegraph','The Courier-Mail','The Advertiser','The Australian','The Gold Coast Bulletin','Townsville Bulletin','Geelong Advertiser','The Cairns Post','Northern Territory News'], 
        otherOnline: ['heraldsun.com.au','dailytelegraph.com.au','couriermail.com.au','adelaidenow.com.au','theaustralian.com.au','goldcoastbulletin.com.au','townsvillebulletin.com.au','geelongadvertiser.com.au','cairnspost.com.au','darwinnow.com.te'], 
        bias: true,
        totalVotes: 0,
        totalRating: 0,
        averageRating: 0
    },

    {
        url:'http://www.goldcoastbulletin.com.au',
        name:'The Gold Coast Bulletin',
        owner:'News Corp Australia',
        type:'Public Company',
        based:'Gold Coast, Queensland',
        CEO:'Julian Clarke ', 
        Chairman:'Rupert Murdoch', 
        otherNews: ['Herald Sun','The Daily Telegraph','The Courier-Mail','The Advertiser','The Australian','The Mercury','Townsville Bulletin','Geelong Advertiser','The Cairns Post','Northern Territory News'], 
        otherOnline: ['heraldsun.com.au','dailytelegraph.com.au','couriermail.com.au','adelaidenow.com.au','theaustralian.com.au','themercury.com.au','townsvillebulletin.com.au','geelongadvertiser.com.au','cairnspost.com.au','darwinnow.com.te'], 
        bias: true,
        totalVotes: 0,
        totalRating: 0,
        averageRating: 0
    },

    {
        url:'http://www.townsvillebulletin.com.au',
        name:'Townsville Bulletin',
        owner:'News Corp Australia',
        type:'Public Company',
        based:'Queensland, Queensland',
        CEO:'Julian Clarke ', 
        Chairman:'Rupert Murdoch', 
        otherNews: ['Herald Sun','The Daily Telegraph','The Courier-Mail','The Advertiser','The Australian','The Mercury','The Gold Coast Bulletin','Geelong Advertiser','The Cairns Post','Northern Territory News'], 
        otherOnline: ['heraldsun.com.au','dailytelegraph.com.au','couriermail.com.au','adelaidenow.com.au','theaustralian.com.au','themercury.com.au','goldcoastbulletin.com.au','geelongadvertiser.com.au','cairnspost.com.au','darwinnow.com.te'], 
        bias: true,
        totalVotes: 0,
        totalRating: 0,
        averageRating: 0
    },

    {
        url:'http://www.geelongadvertiser.com.au',
        name:'Geelong Advertiser',
        owner:'News Corp Australia',
        type:'Public Company',
        based:'Geelong, Victoria',
        CEO:'Julian Clarke ', 
        Chairman:'Rupert Murdoch', 
        otherNews: ['Herald Sun','The Daily Telegraph','The Courier-Mail','The Advertiser','The Australian','The Mercury','The Gold Coast Bulletin','Townsville Bulletin','The Cairns Post','Northern Territory News'], 
        otherOnline: ['heraldsun.com.au','dailytelegraph.com.au','couriermail.com.au','adelaidenow.com.au','theaustralian.com.au','themercury.com.au','goldcoastbulletin.com.au','townsvillebulletin.com.au','cairnspost.com.au','darwinnow.com.te'], 
        bias: true,
        totalVotes: 0,
        totalRating: 0,
        averageRating: 0
    },

    {
        url:'http://www.cairnspost.com.au',
        name:'The Cairns Post',
        owner:'News Corp Australia',
        type:'Public Company',
        based:'Cairns, Queensland',
        CEO:'Julian Clarke ', 
        Chairman:'Rupert Murdoch', 
        otherNews: ['Herald Sun','The Daily Telegraph','The Courier-Mail','The Advertiser','The Australian','The Mercury','The Gold Coast Bulletin','Townsville Bulletin','Geelong Advertiser','Northern Territory News'], 
        otherOnline: ['heraldsun.com.au','dailytelegraph.com.au','couriermail.com.au','adelaidenow.com.au','theaustralian.com.au','themercury.com.au','goldcoastbulletin.com.au','townsvillebulletin.com.au','geelongadvertiser.com.au','darwinnow.com.te'], 
        bias: true,
        totalVotes: 0,
        totalRating: 0,
        averageRating: 0
    },

    {
        url:'http://www.darwinnow.com.te',
        name:'Northern Territory News',
        owner:'News Corp Australia',
        type:'Public Company',
        based:'Darwin, Northern Territory',
        CEO:'Julian Clarke ', 
        Chairman:'Rupert Murdoch', 
        otherNews: ['Herald Sun','The Daily Telegraph','The Courier-Mail','The Advertiser','The Australian','The Mercury','The Gold Coast Bulletin','Townsville Bulletin','Geelong Advertiser','The Cairns Post'],    otherOnline: ['heraldsun.com.au','dailytelegraph.com.au','couriermail.com.au','adelaidenow.com.au','theaustralian.com.au','themercury.com.au','goldcoastbulletin.com.au','townsvillebulletin.com.au','geelongadvertiser.com.au','cairnspost.com.au'], 
        bias: true,
        totalVotes: 0,
        totalRating: 0,
        averageRating: 0
    },

    {
        url:'http://www.au.news.yahoo.com/thewest',
        name:'The West Australian',
        owner:'West Australian Newspapers',
        type:'Public Company',
        based:'Perth, Western Australia',
        CEO:'Tim Worner', 
        Chairman:'Kerry Stokes', 
        otherNews: [], 
        otherOnline: [], 
        bias: true,
        totalVotes: 0,
        totalRating: 0,
        averageRating: 0
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
      //returns name of domain
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
            //console.log("isvalid");
            document.getElementById('searchResultsModal').style.display='block';
            //gets value of input field passes as urlInput
            var url = document.getElementById(urlInput).value;
            //cleans input in case it is a weblink
            $scope.cleanURL(url);
            
            //copies the result of cleanURL (return domain) to new variable searchQuery
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
    
    //hide show accordian
    $scope.accordian = function(id) {
        console.log("clicked");
        var x = document.getElementById(id);
        if (x.className.indexOf("w3-show") == -1) {
                    console.log("if");

            x.className += " w3-show";
        } else { 
                    console.log("else");

            x.className = x.className.replace(" w3-show", "");
        }
    }
  });

