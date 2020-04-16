(function($){
  $(function(){

    $('.sidenav').sidenav();

      $('.fixed-action-btn').floatingActionButton({
        direction: top, hoverEnabled: true
      });

      $('.slider').slider({
        indicators:	true,
        height:590
      
      });

      $('.parallax').parallax({
        height:400
      });

      $('.tabs').tabs({

      });

  }); // end of document ready
})(jQuery); // end of jQuery name space
