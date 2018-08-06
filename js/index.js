$(document).ready(function()
{
    const body = $("body");
    const hbPane = $('.hb-pane');
    const coupon = $('.coupon');

    function drawFish() {

        const startHeight = Math.random()*100;
        const endHeight = Math.random()*100;
        const reverse = Math.random() > 0.5;

        const width = 50 + 300*Math.random();
        const height = width*2;

        const fishNo = 1 + Math.floor(Math.random()*4);
        const zIndex = 1 + Math.floor(Math.random()*4);

        const direction = reverse ? "rl" : "";
        const fish = $(`<div class='fish${fishNo} ${direction}'></div>`);
        fish.css('top', startHeight + 'vh');
        fish.css('width', width);
        fish.css('height', height);
        fish.css('right', reverse ? "100vw" : -height*1.1);
        fish.css('z-index', zIndex);

        body.append(fish);

        function onComplete()
        {
            fish.remove();
            drawFish();
        }

        fish.animate({right: !reverse ? '100vw' : "-400px", top: endHeight + 'vh'}, {duration: 2000 + Math.random()*6000, easing: "linear", complete: onComplete});
    }

    setTimeout(function(){
        $('.to-dad').animate({opacity: 0}, 1000);
    }, 6000);

    setTimeout(function(){
        for(let i = 0; i < 50; i++)
        {
            setTimeout(function() {
                drawFish();
            }, Math.random()*5000);
        }
        hbPane.addClass('full-scale');
    }, 7000);

    setTimeout(function(){
        hbPane.animate({opacity: 0}, 2000);
    }, 25000);

    setTimeout(function(){
        coupon.animate({opacity: 100}, 5000);
    }, 27000);
});