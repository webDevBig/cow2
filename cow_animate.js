var h = document.documentElement.clientHeight;
var ph = document.getElementById('flow').clientHeight;


var p = window.pageYOffset;
var scrolled2;
var one2 = ph + (ph * 0.8);
var two2 = ph + (ph * 0.9);
var three2 = 2 * ph + (ph * 0.5);
var three3 = 3 * ph + (ph * 0.5);
var four2 = 4 * ph + (ph * 0.5);
var five2 = 5 * ph + (ph * 0.5);
var six2 = 6 * ph + (ph * 0.5);
var seven2 = 7 * ph + (ph * 0.5);
var eight2 = 8 * ph + (0.5 * h);
console.log(three2);
window.onscroll = function () {
    scrolled2 = window.pageYOffset || document.documentElement.scrollTop;
    //    console.log(scrolled2);

    if (scrolled2 > ph / 2) {
        $('.fa-chevron-up').css({
            display: 'flex'
        });
        $(".share_box").css({
            color: "#A7A9AC"
        });
        $(".menu").css({
            display: "flex"
        });
        $(".f").css({
            'background-image': 'url(img/f_gray@2x.png)',
            border: '2px solid #A7A9AC'
        });
    }
    if (scrolled2 > one2) {
//          $('.india_cow_animate').addClass('opacity')
    }
    if (scrolled2 > two2) {
        //        add class blue cow
        $('.fix_cow').addClass('fix_cow_p3'),


            //remove class for blue cow
            $('.fix_cow').removeClass('fix_cow_p6'),
            $('.fix_cow').removeClass('fix_cow_p7'),
            $('.fix_cow').removeClass('fix_cow_p8'),
            $('.fix_cow').removeClass('fix_cow_p9'),
            $('.fix_cow').removeClass('fix_cow_p10')



        //remove class for india cow
        $('.india_cow_animate').removeClass('india_cow_animate_p6'),
            $('.india_cow_animate').removeClass('india_cow_animate_p7'),
            $('.india_cow_animate').removeClass('india_cow_animate_p8'),
            $('.india_cow_animate').addClass('opacity')
         $('.spain_cow_animate').addClass('opacity')
            


            //remove class for egypt cow
            $('.egypt_cow_animate').removeClass('egypt_cow_animate_p6'),
            $('.egypt_cow_animate').removeClass('egypt_cow_animate_p7'),
            $('.egypt_cow_animate').removeClass('egypt_cow_animate_p8')
    }
    if (scrolled2 > three3) {
//        $('.india_cow_animate').addClass('opacity')
         $('.india_cow_animate').removeClass('opacity')
        
    }
    if (scrolled2 > three2) {
        $('.mexico_cow_animate').addClass('opacity')
         $('.spain_cow_animate').addClass('opacity')
        
    }
    if (scrolled2 > four2) {
//       
        //        add class blue cow
        $('.fix_cow').addClass('fix_cow_p6'),
            //remove class for blue cow
            $('.fix_cow').removeClass('fix_cow_p3'),
            $('.fix_cow').removeClass('fix_cow_p7'),
            $('.fix_cow').removeClass('fix_cow_p8'),
            $('.fix_cow').removeClass('fix_cow_p9'),
            $('.fix_cow').removeClass('fix_cow_p10'),

            //remove class for mexico cow
            $('.mexico_cow_animate').removeClass('mexico_cow_animate_p7'),
            $('.mexico_cow_animate').removeClass('opacity')

        //        add class for india cow
        $('.india_cow_animate').addClass('india_cow_animate_p6'),
            //remove class for india cow
            $('.india_cow_animate').removeClass('india_cow_animate_p7'),
            $('.india_cow_animate').removeClass('india_cow_animate_p8'),

            //        add class for egypt cow
            $('.egypt_cow_animate').addClass('egypt_cow_animate_p6'),
            //remove class for egypt cow
            $('.egypt_cow_animate').removeClass('egypt_cow_animate_p7'),
            $('.egypt_cow_animate').removeClass('egypt_cow_animate_p8')

        $('.greece_cow_animate').addClass('opacity')
         $('.spain_cow_animate').addClass('opacity')

    }
    if (scrolled2 > five2) {
        //        add class blue cow
        $('.fix_cow').addClass('fix_cow_p7'),

            //        remove class for blue cow
            $('.fix_cow').removeClass('fix_cow_p6'),
            $('.fix_cow').removeClass('fix_cow_p3'),
            $('.fix_cow').removeClass('fix_cow_p8'),
            $('.fix_cow').removeClass('fix_cow_p9'),
            $('.fix_cow').removeClass('fix_cow_p10'),


            //        add class for mexico cow
            $('.mexico_cow_animate').addClass('mexico_cow_animate_p7'),
            //           remove class for mexico cow
            $('.greece_cow_animate').removeClass('greece_cow_animate_p8')
        $('.greece_cow_animate').removeClass('opacity')
        $('.mexico_cow_animate').removeClass('mexico_cow_animate_p8'),

            //        add class for india cow
            $('.india_cow_animate').addClass('india_cow_animate_p7'),
            //remove class for india cow
            $('.india_cow_animate').removeClass('india_cow_animate_p6')
        $('.india_cow_animate').removeClass('india_cow_animate_p8')

        //        add class for egypt cow
        $('.egypt_cow_animate').addClass('egypt_cow_animate_p7'),
            //remove class for egypt cow
            $('.egypt_cow_animate').removeClass('egypt_cow_animate_p6')
        $('.egypt_cow_animate').removeClass('egypt_cow_animate_p8')


        //            add class for spain cow
        $('.spain_cow_animate').addClass('opacity')

        $(".share_box").css({
            color: "white"
        });
        $(".menu").css({
            display: "flex"
        });
        $(".f").css({
            'background-image': 'url(img/f_img@2x.png)',
            border: '2px solid white'
        });
    }
    if (scrolled2 > six2) {
        //        add class for blue cow
        $('.fix_cow').addClass('fix_cow_p8'),
            //            remove class for blue cow
            $('.fix_cow').removeClass('fix_cow_p3'),
            $('.fix_cow').removeClass('fix_cow_p6'),
            $('.fix_cow').removeClass('fix_cow_p7'),
            $('.fix_cow').removeClass('fix_cow_p9'),
            $('.fix_cow').removeClass('fix_cow_p10'),
            //            add class for mexico cow
            $('.mexico_cow_animate').addClass('mexico_cow_animate_p8'),
            //           remove class for mexico cow
            $('.mexico_cow_animate').removeClass('mexico_cow_animate_p7'),

            //            add class for greece cow
            $('.greece_cow_animate').addClass('greece_cow_animate_p8'),

            //        add class for india cow
            $('.india_cow_animate').addClass('india_cow_animate_p8'),
            //remove class for india cow
            $('.india_cow_animate').removeClass('india_cow_animate_p6')
        $('.india_cow_animate').removeClass('india_cow_animate_p7')


        //        add class for egypt cow
        $('.egypt_cow_animate').addClass('egypt_cow_animate_p8'),
            //remove class for egypt cow
            $('.egypt_cow_animate').removeClass('egypt_cow_animate_p6')
        $('.egypt_cow_animate').removeClass('egypt_cow_animate_p7')

        //            remove class for spain cow
        $('.spain_cow_animate').removeClass('opacity')
    }
    if (scrolled2 > seven2) {
        //            remove class for blue cow
        $('.fix_cow').addClass('fix_cow_p9'),
        //            remove class for blue cow
        $('.fix_cow').removeClass('fix_cow_p3'),
            $('.fix_cow').removeClass('fix_cow_p6'),
            $('.fix_cow').removeClass('fix_cow_p7'),
            $('.fix_cow').removeClass('fix_cow_p8'),
            $('.fix_cow').removeClass('fix_cow_p10'),

            $(".menu").css({
                display: "flex"
            });
        $(".share_box").css({
            color: "#A7A9AC"
        });
        $(".f").css({
            'background-image': 'url(img/f_gray@2x.png)',
            border: '2px solid #A7A9AC'
        });
    }
    if (scrolled2 > eight2) {
        //        add class for blue cow
        $('.fix_cow').addClass('fix_cow_p10'),
            //            remove class for blue cow
            $('.fix_cow').removeClass('fix_cow_p3'),
            $('.fix_cow').removeClass('fix_cow_p6'),
            $('.fix_cow').removeClass('fix_cow_p7'),
            $('.fix_cow').removeClass('fix_cow_p8'),
            $('.fix_cow').removeClass('fix_cow_p9'),

            $(".menu").css({
                display: "none"
            });
    }

    if (one2 > scrolled2) {
        $('.fix_cow').removeClass('fix_cow_p3')
    }
    if (ph > scrolled2) {
        $(".share_box").css({
            color: "white"
        });
        $(".menu").css({
            display: "flex"
        });
        $(".f").css({
            'background-image': 'url(img/f_img@2x.png)',
            border: '2px solid white'
        });
        $('.fa-chevron-up').css({
            display: 'none'
        });
    }
}
