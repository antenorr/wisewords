'use strict';
// hmmm it seems to just disable the button without toggleing the card as expected - i want once card is toggled THEN disable

// $("#quoteShower").on("click", function() {
//     $(this).prop("disabled", true)
// })






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

                    $.ajax({ 
                        type: "GET",
                        url: "https://api.unsplash.com/photos/?client_id=18dca1c976622fd5af0df12efba1de97d40aa22d8b508dd4b7a6ec24d7aea598",
                        success: function(event) {
                            console.log("chichichichic", event[0].urls["small"])
                                 //   console.log(event[0].urls['small']);
                                //  $('.background-img').css({"background-image" : "event[0].urls['small']" });
                                //  $(".background-img").attr("src", "event[0].urls['small']");
                               //  document.getElementById("background-img").src = "https://placekitten.com/g/700/300";
                                 console.log("https://placekitten.com/g/700/300");
                                  console.log(event[0].urls['small']);
                                  



                        }
                        
                    }) 
                // console.log(data.author);
            },
            error: function() {
                $content.text('Please try again later!');
            }
            
    });
});







