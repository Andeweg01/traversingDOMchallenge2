//waits until page is ready
$(document).ready(function() {

    // select card_image and use slideDown on the paragraph when clicked
    $("button").on("click", function(){
        $(this).prev().slideDown(2000);
    })
});
