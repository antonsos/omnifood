$(document).ready(function() {

  $('.jq--features').waypoint(function(direction) {
    if (direction == "down") {
      $('.nav-main').addClass('sticky');
    } else {
      $('.nav-main').removeClass('sticky');
    }
  }, {
       offset: '63px'
     }
  );


  // var waypoints = $('#handler-first').waypoint(function(direction) {
  //   notify(this.element.id + ' hit 25% from top of window') 
  // }, {
  //   offset: '25%'
  // })
});