(function(){

    $(document).ready(function(){

        $('.chatIcon').click(function(){
            $('.chatPopup').removeClass('minimized');
            $('.chatIcon').addClass('active');
        });

        $('.chatPopup .close').click(function(){
            $('.chatPopup').addClass('minimized');
            $('.chatIcon').removeClass('active');
        });

        $('.slide-achievements .clicker').click(function(){
            $('.popup-achievement').show();
        });

        $('.popup-achievement .close').click(function(){
            $('.popup-achievement').hide();
        });

        $('.appLoader').hide();
        $('.webpage').show();

        if($('.parallax').length > 0) {
            lax.init();
    
            lax.addDriver('scrollY', function () {
                return window.scrollY
            });
    
            lax.addElements('#parallax', {
                scrollY: {
                    translateY: [
                        ["elInY", "elOutY"],
                        [0, '-' + window.innerWidth * 0.3]
                    ],
                }
            });
        }

    });

})(jQuery);

