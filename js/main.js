 //slickslider
 $(document).ready(function(){
    $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    variableWidth: true,
    });
});

//accordion
$(function(){
$("#accordion").accordion({ animate: 1200, heightStyle: "content" });
});


//video tijd
/*var video = videojs('#my-video1').ready(function() {
var speler = this;

speler.on('ended', function() {
$('.popup-scherm').css({
"visibility": "visible",
});
$('.popup-scherm').click(function() {
$(this).css({
    "visibility": "hidden",
});
});
});
});*/


//switch button
$('.nav-switch').click(function(){
    var logoWhite = "img/logoWhite";
    // als class aanwezig is
    if ($(this).hasClass('active')){
        //verwijder de class
        $(this).removeClass('active');
        $('#navigatie').css({'background': 'white'});
        $('ul a').css({'color': '#CC0085'});
        $('.vierkant1, .vierkant2, .vierkant3').css({'background' : '#F4F2FF'})
        $('.balk').css({'background-color': '#FFAFE3'});
        $('.balk .ui-state-active').css({'background-color': '#CC0085'})
        $('body').css({'background': 'white'})
        $('p').css({'color': '#CC0085'})
        $('.contact-button').css({'background': '#CC0085'})
        $('.nav-logo').removeClass('nav-logo-dark');
        $('.nav-switch').removeClass('nav-switch-dark');
        $('.logo-vierkant1').removeClass('logo-vierkant1-dark');
        $('.logo-vierkant2').removeClass('logo-vierkant2-dark');
        $('.logo-vierkant3').removeClass('logo-vierkant3-dark');
        $('header').removeClass('header-dark');
        $('footer').removeClass('footer-dark');
        $('#accordion .play').css({'background-color': '#CC0085'})
        $('#accordion .pauze').css({'background-color': '#CC0085'})
        $('#accordion .rewind').css({'background-color': '#CC0085'})
        $('#accordion .forward').css({'background-color': '#CC0085'})
        $('h4').css({'color': '#CC0085'})
        $('.button-footer').css({'background': 'white', 'color': '#CC0085' })
        $('.team').css({'background': '#F4F2FF'});
        $('h5').css({'color': '#FFAFE3'});
        $('.button-team').css({'background': '#CC0085'});
        

        console.log('accordion uit');

} else { 
    // voeg class toe
    $(this).addClass('active');
    $('#navigatie').css({'background': '#1D00FF'});
    $('ul a').css({'color': 'white'});
    $('.vierkant1, .vierkant2, .vierkant3').css({'background' : '#1D00FF'})
    $('.balk').css({'background-color': '#0076FF'});
    $('.balk .ui-state-active').css({'background-color': '#1D00FF'})
    $('body').css({'background': 'black'})
    $('p').css({'color': 'white'})
    $('.contact-button').css({'background': '#1D00FF'})
    $('.nav-logo').addClass('nav-logo-dark');
    $('.nav-switch').addClass('nav-switch-dark');
    $('.logo-vierkant1').addClass('logo-vierkant1-dark');
    $('.logo-vierkant2').addClass('logo-vierkant2-dark');
    $('.logo-vierkant3').addClass('logo-vierkant3-dark');
    $('header').addClass('header-dark');
    $('footer').addClass('footer-dark');
    $('#accordion .play').css({'background-color': '#1D00FF'})
    $('#accordion .pauze').css({'background-color': '#1D00FF'})
    $('#accordion .rewind').css({'background-color': '#1D00FF'})
    $('#accordion .forward').css({'background-color': '#1D00FF'})
    $('h4').css({'color': 'white'})
    $('.button-footer').css({'background': '#1D00FF', 'color': 'white'})
    $('.team').css({'background': '#1D00FF'});
    $('h5').css({'color': '#0076FF'});
    $('.button-team').css({'background': '#0076FF'});
    

    console.log('accordion aan');
} 
});

$ (document).ready(function(){

    var geklikt = false;

    $('video').each(function(){
        var speler = videojs(this.id);
        console.log(this.id);
        $(this).parents('.video-player').find('.play').click(function(){

            if(!geklikt){
                speler.play();
                geklikt = true;
                $('#accordion .play').addClass('#accordion pauze');
            } else{
                speler.pause();
                geklikt = false;
                $('#accordion .play').removeClass('#accordion pauze');
            }

            $('.rewind').click(function(){
                speler.currentTime(speler.currentTime() -10);
            });

            $('.forward').click(function(){
                speler.currentTime(speler.currentTime() +10);
            });

            
        }); 
    });
});

var speler = videojs('my-video1, my-video2, my-video3, my-video4, my-video5');
var spelerWrap = $('#player-2')

speler.ready(function(){
    
    var duration = speler.duration();

    console.log(duration);

    speler.on('timeupdate', function(){
        var time = speler.currentTime();

        console.log(time);

        if (time >= duration){
            console.log('einde');

            spelerWrap.append('<div class="done"></div>');
        }
    });

    this.addClass('popup')
})