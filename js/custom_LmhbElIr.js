/* Panel Top 01 */
$(document).ready(function(){
    function panelTopBg(){
      if($(window).scrollTop() > 1){
        $(".panel.top").addClass("black");
      }else{
        $(".panel.top").removeClass("black");
      }
    }
    $(window).scroll(panelTopBg);
    panelTopBg();
  });

/* Example Contact Form Redirect (#3) */

  // This script will redirect your visitors on the successful form submit
  $(document).ajaxSuccess(function() {
    window.location.href = 'https://designmodo.com/affiliate/';
  });