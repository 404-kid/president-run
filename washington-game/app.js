$(document).ready(function(){
    let degrees = -45;
    $('.axe').css('transform', `rotate(${degrees}deg)`);
    let clicks = 0;
    let score = 0;
    let down = false
    $('.score').text(score);

    $('.axe').click(function() {
        clicks++;
        if(degrees === -45){
            degrees = 45
            score += 1000;
        } else {
            degrees = -45
        }
        // put axe down
        $('.axe').css('transform', `rotate(${degrees}deg)`);
        $('.score').text(score);
        console.log(score);
    });

    $('#score').text(score);


});

