$(document).ready(function(){

    $('.bio-arrow').click(async function(){
        var card = $(this).parent().parent();
        var otherCards = $('.member-card-wrapper').not(card);
        var grid = $(this).closest('.team-grid');

        // $('body').css({'height' : '100vh'});

        // otherCards.animate({
        //     opacity: '0',
        //   }, 500, function(noDisplay){
        //     $(this).css('display', 'none');
        // })

        otherCards.css({'display' : 'none'});
        card.closest('.member-card-wrapper').addClass('open');
        $(this).closest('.member-card-inner').css({
            'width' : '30%',
            'transition' : '2s ease',
            'transition.delay' : '2s'
            });
        
        // $(this).closest('.member-card-wrapper').css ({
        //     // 'width' : '70vw',
        //     'transform' : 'scale(0,60w)',
        //     'transition' : '.8s ease-in-out',
        //     'transition-delay' : '6s',
        //     'transition-property' : 'scale',
        // });
        // }
        // $when(noDisplay).done.member-card-wrapper').css({
        //     'width' : '70vw',
        //     // 'transition' : '.4s ease-in-out'
        // });
        // $('.member-card-inner').css({
        //     'width' : '25%'
        // });

      

        // card.css ({
        //     '-webkit-transform' : 'scale(125%)',
        //     '-moz-transform'    : 'scale(125%)',
        //     '-ms-transform'     : 'scale(125%)',
        //     '-o-transform'      : 'scale(125%)',
        //     'transform'         : 'scale(125%)',
        //     'transform-origin'  : 'left',
        //     'margin-top'        : '1.2em',
        //     'grid-area'         : '1',
        //     'transition'        : '0.3s ease-in-out',
        // });

        grid.addClass('team-grid-bio-open');
        grid.removeClass('team-grid');


    //   $('.team-grid').addClass('team-grid-bio-open');
    //   $('.team-grid').removeClass('team-grid');

      console.log('clicked');
    });
    $('.bio-arrow').hover(
        function(){
            $(this).find('img').addClass('hover');
            $(this).find('p').addClass('hover');
        },
        function(){
            $(this).find('img').removeClass('hover');
            $(this).find('p').removeClass('hover');
        }   
    )
    });

   
