'use strict';

$("button").on("click", function(e) {
    // console.log("chicken");
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

                $('.background-img').css({                
                    "background-image": "url('https://source.unsplash.com/1000x300/?nature,water')",
                    "background-repeat": "none",
                    "background-size": "100%",
                });
            },
            error: function() {
                $content.text('Please try again later!');
            }
            
    });
});







