$(function() {

    $('.videoModal').on('hide.bs.modal', function(e) {
        var $if = $(e.delegateTarget).find('iframe');
        var src = $if.attr("src");
        $if.attr("src", '/empty.html');
        $if.attr("src", src.replace("&autoplay=1",""));
    });

    $('.videoModal').on('show.bs.modal', function(e) {
        var $if = $(e.delegateTarget).find('iframe');
        var src = $if.attr("src");
        $if.attr("src", '/empty.html');
        $if.attr("src", src + '&autoplay=1');
    });

});
