//Variables
var height = $(window).height();

//Hide First Page
if (window.matchMedia('(max-width: 414px)').matches) {
    // is mobile device
} else {
    $(window).scroll(function (e) {
        var scroll = $(window).scrollTop();
        var heightScroll = scroll - 50;
        if (scroll > 300) {
            $('.part-1').attr('data-aos', 'fade-up');
        } else if ($(this).scrollTop() < 300) {
            $('.part-1').removeAttr('data-aos');
        }

        //Hide Footer
        // if(heightScroll > 800) {
        //     $('.section-footer').attr('data-aos', 'flip-down');
        // } else  if (heightScroll < 800) {
        //     $('.section-footer').removeAttr('data-aos');
        // }
        
        $('.part-2').blur(function () {
            $('.section-footer').css('display', 'flex');
        });

        e.preventDefault();
    });
}



//Tab
$('#tabs li a').click(function (e) {
    $(this).addClass('tab-active');
    $(this).parent().siblings('li').find('a').removeClass('tab-active');
    var T = $(this).attr('data-tab');
    $(T).addClass('card-active');
    $(T).siblings().removeClass('card-active');
});

//Collapse
$(".api-head").click(function () {
    $header = $(this);
    $content = $header.next();
    $content.slideToggle("slow");
    return false;
});

//Preloader
$(window).on('load', function () {
    $('.preloader').fadeOut('slow', function () {
        $('html').remove('.preloeader');
    });
});

//Kopyala
$('.api-code').on('click', '#kopyala', function (evt) {
    var value = $(this).next(); //Upto this I am getting value
    var copyText = value.text();
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(copyText).select();
    document.execCommand("copy");
    $temp.remove();
});

//Projects Animation

if (window.matchMedia('(max-width: 414px)').matches) {

    // is mobile device

} else {
    $('.project').mouseover(function () {
        $(this).height('400px');
        $(this).siblings().css('height', '200px');
    }).mouseout(function () {
        var P = $(this).parent().children();
        P.eq(0).css('height', '250px');
        P.eq(1).css('height', '400px');
        P.eq(2).css('height', '180px');
    });

}


//Async to nodejs

$(function () {
    $('#letstogether').on('submit', function (e) {
        e.preventDefault();
        var services = new Array();
        $("input:checked").each(function () {
            services.push($(this).val());
        });
        let name = $('#name').val(), email = $('#email').val(), message = $('#message').val();
        $.ajax({
            url: '/together',
            method: "POST",
            data: {
                services,
                name,
                email,
                message
            }
        }).done(function () {
        });
        $('#open-dialog')
            .text('Your message was sent!')
            .attr('disabled', true);
        $('#name').attr('disabled', true);
        $('#email').attr('disabled', true);
        $('#message').attr('disabled', true);

    });
});


$(document).ready(function() {
    var form = $('#hire-form-serial');
    form.validate({
        rules: {
            name : {
                required: true,
                minlength: 3
            },
            message : {
                required: true,
                minlength: 100
            },
            email: {
                required: true,
                email: true
            }
        },
        messages : {
            name: {
                required: "Please, give us your name :)",
                minlength: "Name should be at least 3 characters"
            },
            email: {
                required: "The email should be in the format: abc@domain.tld",
            },   
            message: {
                required: "You cannot sent without your message :)",
                minlength: "Name should be at least 100 characters"
            },
            
          }
    });
});