//http://codepen.io/thelifemgmt/pen/CeLqA
var rangeSlider = function(){
  var slider = $('.range-slider'),
      range = $('.range-slider__range'),
      value = $('.range-slider__value');
    
  slider.each(function(){

    value.each(function(){
      var value = $(this).prev().attr('value');
      $(this).html(value);
        console.log(value);
    });

    range.on('input', function(){
      $(this).next(value).html(this.value);
    });
  });
};

rangeSlider();


//http://jsfiddle.net/6zqFq/305/
$( "#slider" ).slider({
    value: 4,
    min: 1,
    max: 7,
    step: 1
})
.each(function() {

  //
  // Add labels to slider whose values 
  // are specified by min, max and whose
  // step is set to 1
  //

  // Get the options for this slider
  var opt = $(this).data().uiSlider.options;
  
  // Get the number of possible values
  var vals = opt.max - opt.min;
  
  // Space out values
  for (var i = 0; i <= vals; i++) {
    
    var el = $('<label>'+(i+1)+'</label>').css('left',(i/vals*100)+'%');
  
    $( "#slider" ).append(el);
    
  }
  
});
