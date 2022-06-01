$(document).ready(function(){

    $('.bio-arrow').click(function(){
        var card = $(this).parent().parent();
        var bio_btn = $(this);
        var grid = $(this).closest('.team-grid');
        var inner = $(this).parent();
        var bio = card.next('.bio');
        var otherCards = $('.member-card-wrapper').not(card).not(bio);
        var otherBios = $('.member-card-wrapper.bio');

        otherCards.css({'display' : 'none'});
        bio.fadeIn(900);

        card.addClass('bio-visible');
        grid.removeClass('team-grid');
        grid.addClass('team-grid-bio-open');
        inner.addClass('bio-open');
        $('.card-info').hide();
        $(this).hide();

        $('.close, .team-title, .back').click(function(){
            card.removeClass('bio-visible');
            grid.removeClass('team-grid-bio-open');
            inner.removeClass('bio-open');
            grid.addClass('team-grid');

            otherCards.not(otherBios).fadeIn(300);
            bio.hide();

            
            bio_btn.show();
            $('.card-info').show();

        });

      console.log('clicked');
      console.log(card_info);
    });


    //Subtle hover effect over Bio button
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

   
