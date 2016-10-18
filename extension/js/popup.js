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
      $scope.url = tabs[0].url;
      $scope.searchURLbyTAB(tabs[0].url);
      $scope.$apply();
      // console.log(tabs[0].url);
      // console.log(tabs[0].title);
      // document.getElementById('host').innerHTML = url.hostname;
      });
    });