//waits until page is ready
$(document).ready(function() {

    // select card_image and use slideDown on the paragraph when clicked
    $("img").click(function(){
        $(this).next().children("p").slideDown(2000);
    })
});
