$(function () {
    $('ytd-expander').each(function (i, v) {
        if ($(v).find("#content-text").height() > $(v).height()) {
            $(v).find("#less").attr("hidden", true);
            $(v).find("#more").removeAttr("hidden");
        } else {
            $(v).find("#less").attr("hidden", true);
            $(v).find("#more").attr("hidden", true);
        }
    });

    $('.wx-user-detail').delegate('#more', 'click', function () {
        $(this).parent().removeAttr("collapsed");
        $(this).prev().removeAttr("hidden");
        $(this).attr("hidden", true);

    })

    $('.wx-user-detail').delegate('#less', 'click', function () {
        $(this).parent().attr("collapsed", true);
        $(this).attr("hidden", true);
        $(this).next().removeAttr("hidden");
    })
})