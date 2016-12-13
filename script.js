//waits until page is loaded
$(document).ready(function() {
  
  //selects first div and adds click event
  $('#first').click(function() {
    //selects the div containing all divs
    //slides targeted div into #pre div
    $('.text').animate({
      'bottom': "128px" 
    }, function() {
      //opacity to other divs
      $('#second, #third, #fourth').animate({
        'opacity': '0.3'
      });
      //target div extends
      $("#first").animate({
        'width': '650px'
      });
      //pre div extends 
      $("#pre").animate({
        'width': '660px'
      });

      });
  });
  
  //same as above but for second div
  $('#second').click(function() {
    $('.text').animate({
      'bottom': "251px"
    }, function() {
      $('#first, #third, #fourth').animate({
        'opacity': '0.3'
      });
      $("#second").animate({
        'width': '650px'
      });
      $("#pre").animate({
        'width': '660px'
      });

      });
  });
  
  //same as above but for third div
  $('#third').click(function() {
    $('.text').animate({
      'bottom': "374px"
    }, function() {
      $('#first, #second, #fourth').animate({
        'opacity': '0.3'
      });
      $("#third").animate({
        'width': '650px'
      });
      $("#pre").animate({
        'width': '660px'
      });

      });
  });
  
  //same as above but for third div
   $('#fourth').click(function() {
    $('.text').animate({
      'bottom': "497px"
    }, function() {
      $('#first, #second, #third').animate({
        'opacity': '0.3'
      });
      $("#fourth").animate({
        'width': '650px'
      });
      $("#pre").animate({
        'width': '660px'
      });

      });
  });
  
});

//this is used to reverse animation but having trouble
//with toggling it --> to be fixed
/* $('.container').click(function() {
  $("#first").animate({'width': '200px'});
  $("#pre").animate({'width': '210px'});
  $('#second, #third, #fourth').animate({'opacity': '1'});          
  $('.text').animate({'bottom': "0px"});
}); */