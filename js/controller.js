var app = angular.module('myApp', []);

app.controller('newsBias', function($scope) {  
  $scope.newsSites = [
    {url:'brisbanetime.com',name:'Brisbane Times',bias:'one'},
    {url:'abc.net.au',name:'ABC News',bias:'two'},
    {url:'theconversation.com',name:'The Conversation',bias:'three'}
  ];
});

//http://www.primaryobjects.com/2012/11/19/parsing-hostname-and-domain-from-a-url-with-javascript/

function getHostName(urlInput) {
  url = document.getElementById(urlInput).value;
    var matchProtocol = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
  console.log(matchProtocol);
    if (matchProtocol != null && matchProtocol.length > 2 && typeof matchProtocol[2] === 'string' && matchProtocol[2].length > 0) {
    var result = matchProtocol[2];
    document.getElementById('demo').innerHTML = result;
    }
    else {
        return null;
    }
  
}

//document.getElementById("demo").innerHTML = getHostName('http://www.brisbanetimes.com.au/business/mining-and-resources/clive-palmer-had-full-authority-of-queensland-nickel-court-20160909-grcl09.html');