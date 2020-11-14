$( document ).ready(function() {
    $('a').on('click', function(e) {
      if($(this).hasClass("link")){
        return;
      }

      e.preventDefault();

      var linkhref = $(this).attr('href');

      location.href = '../..'+linkhref;

    });
});
