$(document).ready(function(){

    $('.bio-arrow').click(function(){
        var card = $(this).parent().parent();
        var otherCards = $('.member-card-wrapper').not(card);

        otherCards.css ({
            'display' : 'none'
        })

        card.css ({
            '-webkit-transform' : 'scale(150%)',
            '-moz-transform'    : 'scale(150%)',
            '-ms-transform'     : 'scale(150%)',
            '-o-transform'      : 'scale(150%)',
            'transform'         : 'scale(150%)',
            'transform-origin'  : 'left',
            'margin-top'        : '100px',
            'transition'        : '0.6s ease-in-out',
            'transition-delay'  : '70ms'
        });
        

        // card.animate({width: '100%'}, "slow");


    //   $('.team-grid').addClass('team-grid-bio-open');
    //   $('.team-grid').removeClass('team-grid');
      console.log('clicked');
    });
  });
   
