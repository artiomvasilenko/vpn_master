SmoothScroll({
                AnimationTime: 800,
                stepSize: 300
            });

$(document).ready(function () {
    $('.button_to_down').click(function () {
        $('html, body').animate({
            scrollTop: $('.scrollto').offset().top
        }, 600);
    });
    $('#checkbox').click(function () {
        if ($(this).is(':checked')) {
            $('.price').text('ЦЕНА 16.200')
        }
        else {
            $('.price').text('ЦЕНА 15.000')
        }
    });

    var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'))
    $('.policy_link').click(function () {
        myModal.show();
    })
    $('.btn-close').click(function () {
        myModal.hide();
    })
});



