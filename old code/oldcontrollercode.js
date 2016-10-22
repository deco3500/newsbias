 /*{
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
    },*/


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