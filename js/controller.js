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
        people:['CEO: Greg Hywood', 'Chairman: Nick Falloon'],
        otherNews: ['The Age','The Australian Financial Review','The Herald','The Canberra Times','The Examiner','Illawarra Mercury','The Border Mail','The Advocate','The Courier'],
        otherOnline: ['theage.com.au','afr.com','theherald.com.au','canberratimes.com.au','examiner.com.au','illawarramercury.com.au','bordermail.com.au','theadvocate.com.au','thecourier.com.au'], 
        totalVotes: 6,
        totalRating: 22,
        averageRating: 3.7,
        search:['brisbane times', 'brisbanetimes']
    },
	
    {
        url:'http://www.toowoombachronicle.com.au/',
        name:'The Toowoomba Chronicle',
        owner:'APN News & Media',
        type:'Public Company',
        based:'Toowoomba, Queensland',
        people:['CEO: Ciaran Davis', 'Chairman: Rupert Murdoch, Allan Gray'],
        otherNews: ['Sunshine Coast Daily','The Morning Bulletin'], 
        otherOnline: ['coastdaily.com.au','morningbulletin.com.au'], 
        totalVotes: 6,
        totalRating: 22,
        averageRating: 3.7,
        search:['The Toowoomba Chronicle', 'toowoombachronicle']
    },

    {
        url:'http://www.coastdaily.com.au/',
        name:'Sunshine Coast Daily',
        owner:'APN News & Media',
        type:'Public Company',
        based:'Maroochydore, Queensland',
        people:['CEO: Ciaran Davis', 'Chairman: Rupert Murdoch, Allan Gray'], 
        otherNews: ['The Toowoomba Chronicle','The Morning Bulletin'], 
        otherOnline: ['toowoombachronicle.com.au','morningbulletin.com.au'], 
        totalVotes: 6,
        totalRating: 22,
        averageRating: 3.7,
        search:['Sunshine Coast Daily', 'coastdaily']
    },

    {
        url:'http://www.morningbulletin.com.au/',
        name:'The Morning Bulletin',
        owner:'APN News & Media',
        type:'Public Company',
        based:'Rockhampton, Queensland',
        people:['CEO: Ciaran Davis', 'Chairman: Rupert Murdoch, Allan Gray'], 
        otherNews: ['The Toowoomba Chronicle','Sunshine Coast Daily'], 
        otherOnline: ['toowoombachronicle.com.au','coastdaily.com.au'], 
        totalVotes: 6,
        totalRating: 22,
        averageRating: 3.7,
        search:['The Morning Bulletin', 'morningbulletin']
    },

    {
        url:'http://www.smh.com.au/',
        name:'The Sydney Morning Herald',
        owner:'Fairfax Media',
        type:'Public Company',
        based:'Sydney, New South Wales',
        people:['CEO: Greg Hywood', 'Chairman: Nick Falloon'], 
        otherNews: ['The Age','The Australian Financial Review','The Herald','The Canberra Times','The Examiner','Illawarra Mercury','The Border Mail','The Advocate','The Courier', 'Brisbane Times'],
		otherOnline: ['theage.com.au','afr.com','theherald.com.au','canberratimes.com.au','examiner.com.au','illawarramercury.com.au','bordermail.com.au','theadvocate.com.au','thecourier.com.au','http://www.brisbanetimes.com.au/'], 
        totalVotes: 6,
        totalRating: 22,
        averageRating: 3.7,
        search:['The Sydney Morning Herald', 'smh']
    },

    {
        url:'http://www.theage.com.au/',
        name:'The Age',
        owner:'Fairfax Media',
        type:'Public Company',
        based:'Melbourne, Victoria',
        people:['CEO: Greg Hywood', 'Chairman: Nick Falloon'], 
        otherNews: ['The Sydney Morning Herald','The Australian Financial Review','The Herald','The Canberra Times','The Examiner','Illawarra Mercury','The Border Mail','The Advocate','The Courier','Brisbane Times'],
		otherOnline: ['smh.com.au.com.au','afr.com','theherald.com.au','canberratimes.com.au','examiner.com.au','illawarramercury.com.au','bordermail.com.au','theadvocate.com.au','thecourier.com.au','http://www.brisbanetimes.com.au/'], 
        totalVotes: 6,
        totalRating: 22,
        averageRating: 3.7,
        search:['The Age', 'theage']
    },

    {
        url:'http://www.afr.com/',
        name:'The Australian Financial Review',
        owner:'Fairfax Media',
        type:'Public Company',
        based:'Melbourne, Victoria',
        people:['CEO: Greg Hywood', 'Chairman: Nick Falloon'], 
        otherNews: ['The Sydney Morning Herald','The Age','The Herald','The Canberra Times','The Examiner','Illawarra Mercury','The Border Mail','The Advocate','The Courier','Brisbane Times'],
		otherOnline: ['smh.com.au.com.au','theage.com.au','theherald.com.au','canberratimes.com.au','examiner.com.au','illawarramercury.com.au','bordermail.com.au','theadvocate.com.au','thecourier.com.au','http://www.brisbanetimes.com.au/'], 
        totalVotes: 6,
        totalRating: 22,
        averageRating: 3.7,
        search:['The Australian Financial Review', 'afr']
    },

    {
        url:'http://www.theherald.com.au/',
        name:'The Herald',
        owner:'Fairfax Media',
        type:'Public Company',
        based:'Newcastle, New South Wales',
        people:['CEO: Greg Hywood', 'Chairman: Nick Falloon'], 
        otherNews: ['The Sydney Morning Herald','The Age','The Australian Financial Review','The Canberra Times','The Examiner','Illawarra Mercury','The Border Mail','The Advocate','The Courier','Brisbane Times'],
		otherOnline: ['smh.com.au.com.au','theage.com.au','afr.com','canberratimes.com.au','examiner.com.au','illawarramercury.com.au','bordermail.com.au','theadvocate.com.au','thecourier.com.au','http://www.brisbanetimes.com.au/'], 
        totalVotes: 6,
        totalRating: 22,
        averageRating: 3.7,
        search:['The Herald', 'theherald']
    },

    {
        url:'http://www.canberratimes.com.au/',
        name:'The Canberra Times',
        owner:'Fairfax Media',
        type:'Public Company',
        based:'Canberra, Australian Capital Territory',
        people:['CEO: Greg Hywood', 'Chairman: Nick Falloon'],
        otherNews: ['The Sydney Morning Herald','The Age','The Australian Financial Review','The Herald','The Examiner','Illawarra Mercury','The Border Mail','The Advocate','The Courier','Brisbane Times'],
		otherOnline: ['smh.com.au.com.au','theage.com.au','afr.com','theherald.com.au','examiner.com.au','illawarramercury.com.au','bordermail.com.au','theadvocate.com.au','thecourier.com.au','http://www.brisbanetimes.com.au/'], 
        totalVotes: 6,
        totalRating: 22,
        averageRating: 3.7,
        search:['The Canberra Times', 'canberratimes']
    },

    {
        url:'http://www.examiner.com.au/',
        name:'The Examiner',
        owner:'Fairfax Media',
        type:'Public Company',
        based:'Launceston, Tasmania',
        people:['CEO: Greg Hywood', 'Chairman: Nick Falloon'], 
        otherNews: ['The Sydney Morning Herald','The Age','The Australian Financial Review','The Herald','The Canberra Times','Illawarra Mercury','The Border Mail','The Advocate','The Courier','Brisbane Times'],
		otherOnline: ['smh.com.au.com.au','theage.com.au','afr.com','theherald.com.au','canberratimes.com.au','illawarramercury.com.au','bordermail.com.au','theadvocate.com.au','thecourier.com.au','http://www.brisbanetimes.com.au/'], 
        totalVotes: 6,
        totalRating: 22,
        averageRating: 3.7,
        search:['The Examiner', 'examiner']
    },

    {
        url:'http://www.illawarramercury.com.au/',
        name:'Illawarra Mercury',
        owner:'Fairfax Media',
        type:'Public Company',
        based:'Wollongong, New South Wales',
        people:['CEO: Greg Hywood', 'Chairman: Nick Falloon'], 
        otherNews: ['The Sydney Morning Herald','The Age','The Australian Financial Review','The Herald','The Canberra Times','The Examiner','The Border Mail','The Advocate','The Courier','Brisbane Times'],
		otherOnline: ['smh.com.au.com.au','theage.com.au','afr.com','theherald.com.au','canberratimes.com.au','examiner.com.au','bordermail.com.au','theadvocate.com.au','thecourier.com.au','http://www.brisbanetimes.com.au/'], 
        totalVotes: 6,
        totalRating: 22,
        averageRating: 3.7,
        search:['Illawarra Mercury', 'illawarramercury']
    },

    {
        url:'http://www.bordermail.com.au/',
        name:'The Border Mail',
        owner:'Fairfax Media',
        type:'Public Company',
        based:'Wodonga, Victoria',
        people:['CEO: Greg Hywood', 'Chairman: Nick Falloon'], 
        otherNews: ['The Sydney Morning Herald','The Age','The Australian Financial Review','The Herald','The Canberra Times','The Examiner','Illawarra Mercury','The Advocate','The Courier','Brisbane Times'],
		otherOnline: ['smh.com.au.com.au','theage.com.au','afr.com','theherald.com.au','canberratimes.com.au','examiner.com.au','illawarramercury.com.au','theadvocate.com.au','thecourier.com.au','http://www.brisbanetimes.com.au/'], 
        totalVotes: 6,
        totalRating: 22,
        averageRating: 3.7,
        search:['The Border Mail', 'bordermail']
    },

    {
        url:'http://www.theadvocate.com.au/',
        name:'The Advocate',
        owner:'Fairfax Media',
        type:'Public Company',
        based:'Burnie, Tasmania',
        people:['CEO: Greg Hywood', 'Chairman: Nick Falloon'],
        otherNews: ['The Sydney Morning Herald','The Age','The Australian Financial Review','The Herald','The Canberra Times','The Examiner','Illawarra Mercury','The Border Mail','The Courier','Brisbane Times'],
		otherOnline: ['smh.com.au.com.au','theage.com.au','afr.com','theherald.com.au','canberratimes.com.au','examiner.com.au','illawarramercury.com.au','bordermail.com.au','thecourier.com.au','http://www.brisbanetimes.com.au/'], 
        totalVotes: 6,
        totalRating: 22,
        averageRating: 3.7,
        search:['The Advocate', 'theadvocate']
    },

    {
        url:'http://www.thecourier.com.au/',
        name:'The Courier',
        owner:'Fairfax Media',
        type:'Public Company',
        based:'Ballarat, Victoria',
        people:['CEO: Greg Hywood', 'Chairman: Nick Falloon'],
        otherNews: ['The Sydney Morning Herald','The Age','The Australian Financial Review','The Herald','The Canberra Times','The Examiner','Illawarra Mercury','The Border Mail','The Advocate','Brisbane Times'],
		otherOnline: ['smh.com.au.com.au','theage.com.au','afr.com','theherald.com.au','canberratimes.com.au','examiner.com.au','illawarramercury.com.au','bordermail.com.au','theadvocate.com.au','http://www.brisbanetimes.com.au/'], 
        totalVotes: 6,
        totalRating: 22,
        averageRating: 3.7,
        search:['The Courier', 'thecourier']
    },

    {
        url:'http://www.heraldsun.com.au/',
        name:'Herald Sun',
        owner:'News Corp Australia',
        type:'Public Company',
        based:'Melbourne, Victoria',
        people:['CEO: Julian Clarke', 'Chairman: Rupert Murdoch'], 
        otherNews: ['The Daily Telegraph','The Courier-Mail','The Advertiser','The Australian','The Mercury','The Gold Coast Bulletin','Townsville Bulletin','Geelong Advertiser','The Cairns Post','Northern Territory News'],
		otherOnline: ['dailytelegraph.com.au','couriermail.com.au','adelaidenow.com.au','theaustralian.com.au','themercury.com.au','goldcoastbulletin.com.au','townsvillebulletin.com.au','geelongadvertiser.com.au','cairnspost.com.au','http://www.ntnews.com.au/'], 
        totalVotes: 6,
        totalRating: 22,
        averageRating: 3.7,
        search:['Herald Sun', 'heraldsun']
    },

    {
        url:'http://www.dailytelegraph.com.au/',
        name:'The Daily Telegraph',
        owner:'News Corp Australia',
        type:'Public Company',
        based:'Sydney, New South Wales',
        people:['CEO: Julian Clarke', 'Chairman: Rupert Murdoch'], 
        otherNews: ['Herald Sun','The Courier-Mail','The Advertiser','The Australian','The Mercury','The Gold Coast Bulletin','Townsville Bulletin','Geelong Advertiser','The Cairns Post','Northern Territory News'],
		otherOnline: ['heraldsun.com.au','couriermail.com.au','adelaidenow.com.au','theaustralian.com.au','themercury.com.au','goldcoastbulletin.com.au','townsvillebulletin.com.au','geelongadvertiser.com.au','cairnspost.com.au','http://www.ntnews.com.au/'], 
        totalVotes: 6,
        totalRating: 22,
        averageRating: 3.7,
        search:['The Daily Telegraph', 'dailytelegraph']
    },

    {
        url:'http://www.couriermail.com.au/',
        name:'The Courier-Mail',
        owner:'News Corp Australia',
        type:'Public Company',
        based:'Brisbane, Queensland',
        people:['CEO: Julian Clarke', 'Chairman: Rupert Murdoch'], 
        otherNews: ['Herald Sun','The Daily Telegraph','The Advertiser','The Australian','The Mercury','The Gold Coast Bulletin','Townsville Bulletin','Geelong Advertiser','The Cairns Post','Northern Territory News'],
		otherOnline: ['heraldsun.com.au','dailytelegraph.com.au','adelaidenow.com.au','theaustralian.com.au','themercury.com.au','goldcoastbulletin.com.au','townsvillebulletin.com.au','geelongadvertiser.com.au','cairnspost.com.au','http://www.ntnews.com.au/'], 
        totalVotes: 6,
        totalRating: 22,
        averageRating: 3.7,
        search:['The Courier-Mail', 'couriermail', 'The Courier Mail']
    },

    {
        url:'http://www.adelaidenow.com.au/',
        name:'The Advertiser',
        owner:'News Corp Australia',
        type:'Public Company',
        based:'Adelaide, South Australia',
        people:['CEO: Julian Clarke', 'Chairman: Rupert Murdoch'], 
        otherNews: ['Herald Sun','The Daily Telegraph','The Courier-Mail','The Australian','The Mercury','The Gold Coast Bulletin','Townsville Bulletin','Geelong Advertiser','The Cairns Post','Northern Territory News'],
		otherOnline: ['heraldsun.com.au','dailytelegraph.com.au','couriermail.com.au','theaustralian.com.au','themercury.com.au','goldcoastbulletin.com.au','townsvillebulletin.com.au','geelongadvertiser.com.au','cairnspost.com.au','http://www.ntnews.com.au/'], 
        totalVotes: 6,
        totalRating: 22,
        averageRating: 3.7,
        search:['The Advertiser', 'adelaidenow']
    },

    {
        url:'http://www.theaustralian.com.au/',
        name:'The Australian',
        owner:'News Corp Australia',
        type:'Public Company',
        based:'Sydney, New South Wales',
        people:['CEO: Julian Clarke', 'Chairman: Rupert Murdoch'], 
        otherNews: ['Herald Sun','The Daily Telegraph','The Courier-Mail','The Advertiser','The Mercury','The Gold Coast Bulletin','Townsville Bulletin','Geelong Advertiser','The Cairns Post','Northern Territory News'], 
        otherOnline: ['heraldsun.com.au','dailytelegraph.com.au','couriermail.com.au','adelaidenow.com.au','themercury.com.au','goldcoastbulletin.com.au','townsvillebulletin.com.au','geelongadvertiser.com.au','cairnspost.com.au','http://www.ntnews.com.au/'], 
        totalVotes: 6,
        totalRating: 22,
        averageRating: 3.7,
        search:['The Australian', 'theaustralian']
    },

    {
        url:'http://www.themercury.com.au/',
        name:'The Mercury',
        owner:'News Corp Australia',
        type:'Public Company',
        based:'Hobart, Tasmania',
        people:['CEO: Julian Clarke', 'Chairman: Rupert Murdoch'], 
        otherNews: ['Herald Sun','The Daily Telegraph','The Courier-Mail','The Advertiser','The Australian','The Gold Coast Bulletin','Townsville Bulletin','Geelong Advertiser','The Cairns Post','Northern Territory News'], 
        otherOnline: ['heraldsun.com.au','dailytelegraph.com.au','couriermail.com.au','adelaidenow.com.au','theaustralian.com.au','goldcoastbulletin.com.au','townsvillebulletin.com.au','geelongadvertiser.com.au','cairnspost.com.au','http://www.ntnews.com.au/'], 
        totalVotes: 6,
        totalRating: 22,
        averageRating: 3.7,
        search:['The Mercury', 'themercury']
    },

    {
        url:'http://www.goldcoastbulletin.com.au/',
        name:'The Gold Coast Bulletin',
        owner:'News Corp Australia',
        type:'Public Company',
        based:'Gold Coast, Queensland',
        people:['CEO: Julian Clarke', 'Chairman: Rupert Murdoch'],
        otherNews: ['Herald Sun','The Daily Telegraph','The Courier-Mail','The Advertiser','The Australian','The Mercury','Townsville Bulletin','Geelong Advertiser','The Cairns Post','Northern Territory News'], 
        otherOnline: ['heraldsun.com.au','dailytelegraph.com.au','couriermail.com.au','adelaidenow.com.au','theaustralian.com.au','themercury.com.au','townsvillebulletin.com.au','geelongadvertiser.com.au','cairnspost.com.au','http://www.ntnews.com.au/'], 
        totalVotes: 6,
        totalRating: 22,
        averageRating: 3.7,
        search:['The Gold Coast Bulletin', 'goldcoastbulletin']
    },

    {
        url:'http://www.townsvillebulletin.com.au/',
        name:'Townsville Bulletin',
        owner:'News Corp Australia',
        type:'Public Company',
        based:'Queensland, Queensland',
        people:['CEO: Julian Clarke', 'Chairman: Rupert Murdoch'], 
        otherNews: ['Herald Sun','The Daily Telegraph','The Courier-Mail','The Advertiser','The Australian','The Mercury','The Gold Coast Bulletin','Geelong Advertiser','The Cairns Post','Northern Territory News'], 
        otherOnline: ['heraldsun.com.au','dailytelegraph.com.au','couriermail.com.au','adelaidenow.com.au','theaustralian.com.au','themercury.com.au','goldcoastbulletin.com.au','geelongadvertiser.com.au','cairnspost.com.au','http://www.ntnews.com.au/'], 
        totalVotes: 6,
        totalRating: 22,
        averageRating: 3.7,
        search:['Townsville Bulletin', 'townsvillebulletin']
    },

    {
        url:'http://www.geelongadvertiser.com.au/',
        name:'Geelong Advertiser',
        owner:'News Corp Australia',
        type:'Public Company',
        based:'Geelong, Victoria',
        people:['CEO: Julian Clarke', 'Chairman: Rupert Murdoch'], 
        otherNews: ['Herald Sun','The Daily Telegraph','The Courier-Mail','The Advertiser','The Australian','The Mercury','The Gold Coast Bulletin','Townsville Bulletin','The Cairns Post','Northern Territory News'], 
        otherOnline: ['heraldsun.com.au','dailytelegraph.com.au','couriermail.com.au','adelaidenow.com.au','theaustralian.com.au','themercury.com.au','goldcoastbulletin.com.au','townsvillebulletin.com.au','cairnspost.com.au','http://www.ntnews.com.au/'], 
        totalVotes: 6,
        totalRating: 22,
        averageRating: 3.7,
        search:['Geelong Advertiser', 'geelongadvertiser']
    },

    {
        url:'http://www.cairnspost.com.au/',
        name:'The Cairns Post',
        owner:'News Corp Australia',
        type:'Public Company',
        based:'Cairns, Queensland',
        people:['CEO: Julian Clarke', 'Chairman: Rupert Murdoch'], 
        otherNews: ['Herald Sun','The Daily Telegraph','The Courier-Mail','The Advertiser','The Australian','The Mercury','The Gold Coast Bulletin','Townsville Bulletin','Geelong Advertiser','Northern Territory News'], 
        otherOnline: ['heraldsun.com.au','dailytelegraph.com.au','couriermail.com.au','adelaidenow.com.au','theaustralian.com.au','themercury.com.au','goldcoastbulletin.com.au','townsvillebulletin.com.au','geelongadvertiser.com.au','darwinnow.com.te'], 
        totalVotes: 6,
        totalRating: 22,
        averageRating: 3.7,
        search:['The Cairns Post', 'cairnspost']
    },

    {
        url:'http://www.ntnews.com.au/',
        name:'Northern Territory News',
        owner:'News Corp Australia',
        type:'Public Company',
        based:'Darwin, Northern Territory',
        people:['CEO: Julian Clarke', 'Chairman: Rupert Murdoch'], 
        otherNews: ['Herald Sun','The Daily Telegraph','The Courier-Mail','The Advertiser','The Australian','The Mercury','The Gold Coast Bulletin','Townsville Bulletin','Geelong Advertiser','The Cairns Post'],    otherOnline: ['heraldsun.com.au','dailytelegraph.com.au','couriermail.com.au','adelaidenow.com.au','theaustralian.com.au','themercury.com.au','goldcoastbulletin.com.au','townsvillebulletin.com.au','geelongadvertiser.com.au','cairnspost.com.au'], 
        totalVotes: 6,
        totalRating: 22,
        averageRating: 3.7,
        search:['Northern Territory News', 'ntnews']
    },

    {
        url:'http://www.au.news.yahoo.com/thewest/',
        name:'The West Australian',
        owner:'West Australian Newspapers',
        type:'Public Company',
        based:'Perth, Western Australia',
        people:['CEO: Tim Worner', 'Chairman: Kerry Stokes'],  
        totalVotes: 6,
        totalRating: 22,
        averageRating: 3.7,
        search:['The West Australian', 'thewest']
    },
     
    {
        url:'http://www.abc.net.au/',
        name:'ABC News',
        owner:'Australian Government',
        type:'Nationally funded public broadcaster',
        based:'Sydney, New South Wales',
        people:['Chairman: James Spigelman AC, QC', 'Managing Director: Michelle Guthrie'], 
        totalVotes: 6,
        totalRating: 22,
        averageRating: 3.7,
        search:['abc', 'australian broadcasting corporation', 'abce news']
    },
      {
        url:'http://www.sbs.com.au/news/',
        name:'SBS World News',
        owner:'Commonwealth of Australia',
        type:'Hybrid funded public broadcaster',
        based:'Artarmon, New South Wales',
        people:['Acting Chairman: Bulent Hass Dellal', 'Managing Director: Michael Ebeid'], 
        totalVotes: 6,
        totalRating: 22,
        averageRating: 3.7,
        search:['sbs', 'special broadcasting service', 'sbs news']
    },
    {
        url:'https://theconversation.com/',
        name:'The Conversation',
        owner:'The Conversation Trust',
        type:'Independent, not-for-profit media outlet',
        based:'Melbourne, Victoria',
        people:['Editor: Andrew Jaspan', 'Chief Operating Officer: Lisa Watts', 'Managing Editor: Lisa Watts'], 
        totalVotes: 6,
        totalRating: 22,
        averageRating: 3.7,
        search:['the conversation', 'theconversation']
    },
      {
        url:'https://www.crikey.com.au/',
        name:'Crikey',
        owner:'Private Media Pty. Ltd',
        type:'Independent news website ',
        based:'Melbourne, Victoria ',
        people:['Chairman: Eric Beecher', 'Editor: Cassidy Knowlton'], 
        totalVotes: 6,
        totalRating: 22,
        averageRating: 3.7,
        search:['Crikey']
    }
  ];
    
    $scope.detailResults = [
        {
            title: 'Construction figures "fall off a cliff" in Queensland: report',
            url: 'http://www.brisbanetimes.com.au/queensland/construction-figures-fall-off-a-cliff-in-queensland-report-20161024-gs9jhu.html',
            author: 'Tony Moore',
            name: 'Brisbane Times',
            owner: 'Fairfax Media',
            a1: 5,
            a2: 5,
            a3:2,
            a4:3,
            total: 15,
            totalpos: 19,
            percentage: 78,
            grade: 'C',
            color:'w3-yellow'

        }
    ];
    
  $scope.results = [
    {
        url:'http://www.abc.net.au/news/2016-10-28/what-we-know-so-far-about-the-dreamworld-tragedy/7974358',
        name:'Dreamworld: What we know so far about the Thunder Rapids tragedy',
        publication:'ABC News',
        owner: 'Australian Government',
        category: 'Current Events',
        score: 'A',
        color: 'w3-green',
        detail: 'result1'
    },
      {
        url:'https://theconversation.com/what-will-consumers-gain-from-research-into-complementary-medicines-67784',
        name:'What will consumers gain from research into complementary medicines?',
        publication:'The Conversation',
        owner: 'The Conversation Trust',
        category: 'Health',
        score: 'B',
        color: 'w3-blue',
        detail: 'result1'
    },{
        url:'http://www.brisbanetimes.com.au/queensland/construction-figures-fall-off-a-cliff-in-queensland-report-20161024-gs9jhu.html',
        name:'Construction figures "fall off a cliff" in Queensland: report',
        publication:'Brisbane Times',
        owner: 'Fairfax Media Group',
        category: 'Current Events',
        score: 'C',
        color: 'w3-yellow',
        author: 'Tony Moore',
        a1: 5,
        a2: 5,
        a3:2,
        a4:3,
        total: 15,
        totalpos: 19,
        percentage: 78
    },{
        url:'http://www.brisbanetimes.com.au/world/us-election/hillary-clinton-email-scandal-who-is-james-comey-20161029-gsdp1a.html',
        name:"The man who detonated a bomb under Hillary Clinton's campaign",
        publication:'Brisbane Times',
        owner: 'Fairfax Media Group',
        category: 'Politics',
        score: 'D',
        color: 'w3-orange',
        detail: 'result1'
    },{
        url:'http://www.ntnews.com.au/subscribe/news/1/index.html?sourceCode=NTWEB_WRE170_a&mode=premium&dest=http://www.ntnews.com.au/lifestyle/steve-irwins-finals-days/news-story/df34ea8289ef546b2aa92677c166ff0b&memtype=anonymous',
        name:'Steve Irwin’s final days',
        publication:'Northern Territory News',
        owner: 'News Corp Australia',
        category: 'Current Events',
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
   // console.log("cleanURl " + $scope.domain);  
    return $scope.domain;

  }
 // $scope.cleanURL("www.myWebSite.com"); // domain : myWebSite
//  $scope.cleanURL("http://myWebSite.com"); // domain : myWebSite
//  $scope.cleanURL("myWebSite.com/xxx.html"); // domain : myWebSite page : xxx
//  $scope.cleanURL("https://www.myWebSite.com/meowbeans.html"); // domain : myWebSite page : xxx

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
            
            //custom filter
            $scope.filterByNameOrURL = function(news) {
                var filterName = news.name;
                var filterUrl = news.url
                return ($scope.searchQuery.indexOf(filterName || filterUrl) !== -1);
            };
            
            //$scope.searchQuery = angular.copy($scope.newsQuery);
            $scope.urlToFilter=$scope.newsSites;
            $scope.searchResult=true;

            //show search term
            $(".searchTerm").replaceWith("<span class='searchTerm' >" + url + "</span>");
            //console.log('user search query ' + url);
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
        // console.log($scope.newsSites.indexOf(tabs[0].url));
        // console.log(tabs[0].url);
        // console.log($filter('filter')($scope.newsSites, {url: tabs[0].url}, true));
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

