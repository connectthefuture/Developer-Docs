// Scrolls Sidebar with window

$(function() {
    var $sidebar   = $("#sidebar"),
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 15;

    $window.scroll(function() {
        if ($window.scrollTop() > offset.top) {
            $sidebar.stop().animate({
                marginTop: $window.scrollTop() - offset.top + topPadding
            }, 0);
        } else {
            $sidebar.stop().animate({
                marginTop: 0
            }, 0);
        }
    });
});

// SlideToggle FAQ content interaction
$('.faq-trigger').click(function(){
    event.preventDefault();
    $(this).next('.faq-content').slideToggle(500).end().parent('li').toggleClass('content-visible');

    // add active states to sidebar when a question is clicked in a category
    $('.active').removeClass('active');
    var id = $(this).attr('id');
    $('[href="#' + id + '"]').addClass('active');

});


// Add active class to categories in the sidebar when clicked on
$(".faq-categories li a").click(function() {
  $(".faq-categories li").not(this).find('a').removeClass("active");
  $(this).toggleClass("active");
});


// Smooth scrolling
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 50
        }, 800);
        return false;
      }
    }
  });
});