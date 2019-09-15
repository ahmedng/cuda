window.onload = function() {

       /* for (var i = 0; i < document.links.length; i++) {
            if (document.links[i].href == document.URL) {
                document.links[i].className = 'active';
            }
        }*/

        var $link = $('a');

$link.on('click', function(event) {
  //event.preventDefault(); // stop normal link function (#)
  $link.removeClass('active');
  $(this).addClass('active');
});

$("a").trigger('click');
    


    }
