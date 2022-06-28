$(function () {
    var current_content = 'home';

    window.addEventListener('resize', function () {
        if ($(window).width() > 640) {
            if (current_content == 'portrait') {
                $('#home').show();
                current_content = 'home';
                $('.navbar .home').addClass("currentpage")
                $('.navbar .portrait').removeClass("currentpage")
            } else {
                $('#portrait').show();
            }
        } else {
            $('#portrait').hide();
            $('.navbar .portrait').removeClass("currentpage")
        }
    });

    $("#menu").bind('click', function (event) {
        event.preventDefault();
        if (event.target.tagName == "LI") {
            var new_content = event.target.classList[1];
        } else {
            var new_content = event.target.parentNode.classList[1];
        }

        if (typeof new_content === "undefined" | current_content == new_content) {
            return;
        }

        $('#' + current_content).toggle('slide', { direction: 'right' }, 1000);
        $('#' + new_content).toggle('slide', { direction: 'left' }, 1000);

        $('.navbar .' + current_content).removeClass("currentpage")
        $('.navbar .' + new_content).addClass("currentpage")

        var new_height = $('#' + new_content).height() > $(window).height() ? $('#' + new_content).height() : $(window).height();
        $('.contents').animate({ height: new_height });

        current_content = new_content;
    });
});