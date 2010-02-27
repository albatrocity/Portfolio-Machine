var go=true;

function cycle() {
  if(go) {
    $("ul.showoff" ).each(function () {
      $('.showoff li:last-child').hide('fast', function() {
        var selfList = $(this).parent();
        $(this).prependTo(selfList).slideDown({duration: 1000, easing: 'easeInOutQuad'});
      });
    });
  };
  time = setTimeout('cycle();', 4000);
}

$(function() {

  _.each(audio_projects, function (project) { $('#music .shelf .showoff').append(project_template(project)); });
  _.each(web_projects, function (project) { $('#web .shelf .showoff').append(project_template(project)); });

  cycle();

  $('.showoff li').hover(
    function() {
      go=false;
    },
    function() {
      if (!$('ul.showoff').hasClass('expanded')) {
        go=true;
      }
    }
  );

  $('.showoff li').live('click', function() {
    if (!$(this).hasClass('active')) {
      go=false;
      $('a#eject').fadeOut();
      $('#screen').fadeIn(600);
      clearTimeout(time);
      $('.showoff li.active .details').animate({left: 0}, 500).parent('li').removeClass('active');
      $(this).addClass('active').children('.details').animate({left: 600}, 600);
      $('.showoff li[class!=active] .details').animate({opacity: .5}, 200);
      $(this).animate({opacity: 1}, 500);

      current_element = $(this);
      var description = '';
      if ($(this).parent().parent().attr('id') == 'music') {
        project = _.select(audio_projects, function (project) { return project.css == current_element.attr('id'); })[0];
      } else {
        project = _.select(web_projects, function (project) { return project.css == current_element.attr('id'); })[0];
      }

      $('#spotlight').fadeOut('fast', function() {
        $(this).html(project_details_template(project));
        $('<a href="#" id="eject">return to shelf</a>').prependTo('ul.showoff li.active');
      }).fadeIn(600);
    }
  });

  $('a#eject').live('click', function() {
    $(this).fadeOut();
    cycle();
    $('.showoff li .details').animate({opacity: 1}, 200).removeClass('active');
    $('.showoff li.active .details').animate({left: 0}, 500).parent('li').removeClass('active');
    $('#screen').fadeOut(300);
    $('#spotlight').fadeOut();
    return false;
    go=true;
  });

  $('#viewall').click(function() {
    go=false;
    var audioHeight = $('ul.showoff li').outerHeight() * $('#music ul.showoff li').size();
    var webHeight = $('ul.showoff li').outerHeight() * $('#web ul.showoff li').size();
    var tallestHeight = Math.max(audioHeight, webHeight);
    $('.shelf').addClass('expanded').animate({height:tallestHeight + 305}, 1000);
  });

});