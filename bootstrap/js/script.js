// owl carousel script

(function($) {
    "use strict ";

    $(function() {
        var header = $(".start-style ");
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 10) {
                header.removeClass('start-style').addClass("scroll-on ");
            } else {
                header.removeClass("scroll-on ").addClass('start-style');
            }
        });
    });








    // $("#switch ").on('click', function() {
    //     if ($("body ").hasClass("dark ")) {
    //         $("body ").removeClass("dark ");
    //         $("#switch ").removeClass("switched ");
    //     } else {
    //         $("body ").addClass("dark ");
    //         $("#switch ").addClass("switched ");
    //     }
    // });

})(jQuery);

$(document).ready(function() {
    $('body.hero-anime').removeClass('hero-anime');
    $('body').on('mouseenter mouseleave', '.nav-item', function(e) {
        if ($(window).width() > 750) {
            var _d = $(e.target).closest('.nav-item');
            _d.addClass('show');
            setTimeout(function() {
                _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
            }, 1);
        }
    });
    // --------------------------------------tab script --------------------------------------


    // --------------------------------------tab script --------------------------------------
    $("#owl-demo").owlCarousel({
        navigation: true
    });
    $('.carousel-main').owlCarousel({
        autoplayHoverPause: true,
        rtl: true,
        items: 5,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        margin: 10,
        nav: true,
        dots: false,
        navText: ['<span class="fa fa-chevron-circle-left fa-2x"></span>', '<span class="fa fa-chevron-circle-right fa-2x"></span>'],
        autoWidth: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                loop: true
            },
            600: {
                items: 3,
                nav: true
            },
            1000: {
                items: 4,
                nav: true,
                loop: true
            },
            1600: {
                items: 5,
                nav: true,
                loop: true
            },
            1800: {
                items: 6,
                nav: true,
                loop: true
            }
        }

    })
});
// pagination

function login_registery(evt, tab_name) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tab_name).style.display = "block";
    evt.currentTarget.className += " active";
}

// image modal
$("#pop").on("click", function() {
    $('#imagepreview').attr('src', $('#imageresource').attr('src')); // here asign the image to the modal when the user click the enlarge link
    $('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});

// shopping cart script
$(document).ready(function() {
    $("#example").DataTable({
        aaSorting: [],
        responsive: true,

        columnDefs: [{
                responsivePriority: 1,
                targets: 0
            },
            {
                responsivePriority: 2,
                targets: -1
            }
        ]
    });

    $(".dataTables_filter input")
        .attr("placeholder", "Search here...")
        .css({
            width: "300px",
            display: "inline-block"
        });

    $('[data-toggle="tooltip"]').tooltip();
});

// sidebar style
// $(document).ready(function() {
//     $(".accordion-toggle").on("click", function() {
//         $("#accordion").toggleClass("active");
//         $(this).toggleClass("active");
//     });
// });

var $active = $('#accordion .panel-collapse.in').prev().addClass('active');
$active.find('a').append('<span class="fi fi-rr-plus float-left"></span>');
$('#accordion .panel-heading').not($active).find('a').prepend('<span class="fi fi-rr-plus float-left"></span>');
$('#accordion').on('show.bs.collapse', function(e) {

    $('#accordion .panel-heading.active').removeClass('active').find('.fi').toggleClass('fi-rr-plus fi-rr-minus');
    $(e.target).prev().addClass('active').find('.fi').toggleClass('fi-rr-plus fi-rr-minus');
});
$('#accordion').on('hide.bs.collapse', function(e) {

    $(e.target).prev().removeClass('active').find('.fi').removeClass('fi-rr-minus').addClass('fi-rr-plus');
});