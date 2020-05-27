$(function() {

    $('.videoModal').on('hide.bs.modal', function(e) {
        var $if = $(e.delegateTarget).find('iframe');
        var src = $if.attr("src");
        $if.attr("src", '/empty.html');
        $if.attr("src", src);
    });


    $('.videoModal').on('shown.bs.modal', function () {
      $('#video1')[0].play();
    })
    $('.videoModal').on('hidden.bs.modal', function () {
      $('#video1')[0].pause();
    })

});
