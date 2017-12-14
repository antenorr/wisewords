'use strict';
// hmmm it seems to just disable the button without toggleing the card as expected - i want once card is toggled THEN disable

$("#quoteShower").on("click", function() {
    $(this).prop("disabled", true)
})

console.log("chicken");
