'use strict';
// hmmm it seems to just disable the button without toggleing the card as expected - i want once card is toggled THEN disable

// $("#quoteShower").on("click", function() {
//     $(this).prop("disabled", true)
// })






$("button").on("click", function(e) {
    console.log("chicken");
    e.preventDefault();
    var url = "http://quotes.stormconsultancy.co.uk/random.json";
    var $content = $('.incoming');
    var $contentAuthor = $('.incomingAuthor')



    $.ajax({
            type: "GET",
            url: url,
            beforeSend: function(){
                $content.append('<div id="load">LOADING</div>');
            },

            complete: function() {
                $('load').remove();
            },
            success: function(data) {
                $content.html( $(data).find('#container') ).hide().fadeIn(400);
                $content.text(data.quote); 
                $contentAuthor.text(data.author);
                // console.log(data.author);
            },
            error: function() {
                $content.text('Please try again later!');
            }
            
    });
});







