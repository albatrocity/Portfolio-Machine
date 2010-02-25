var go=true;

function cycle() {
if(go){
  $( "ul.showoff" ).each(
    function () {      
      $('li:last-child').hide('fast', function() {
        var selfList = $(this).parent()
        $(this).prependTo(selfList).slideDown(1000, "easeInOutQuint");
      });
  });
};
  time = setTimeout('cycle();', 4000);  
}

$(function() {

  
  
  // cycle();

  $('.showoff li').hover(
    function() {
      go=false;
    },
    function() {
      go=true;  
    }
  );

  // $('.showoff li').live('click', function() {
  //    go=false;
  //    clearTimeout(time);
  //    var fullName = $(this).attr('id') + '_full'
  //    $('.showoff li').removeClass('active');
  //    $(this).addClass('active');
  //    $('.showoff li[class!=active]').animate({opacity: .2}, 200);
  //    $(this).animate({opacity: 1}, 200);
  //    $('#spotlight').fadeOut('fast', function() {
  //      $(this).html($('#' + fullName).html());
  //      $('<a href="#" id="return">return</a>').prependTo('#spotlight');
  //    }).fadeIn();
  //  });
  //  
  //  $('a#return').live('click', function() {
  //    cycle();
  //    $('#spotlight').fadeOut();
  //    $('.showoff li').animate({opacity: 1}, 200).removeClass('active');
  //    return false;
  //    go=true;
  //  });
  //  
  //  $('#viewall').click(function() {
  //    var listHeight = 130 * $('ul.showoff li').size()
  //    $('ul.showoff').animate({height:listHeight}, 200, function() {
  //      $(this).css('overflow', 'visible');
  //    });
  //  });
  
});