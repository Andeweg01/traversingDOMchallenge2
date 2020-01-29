//waits until page is ready
$(document).ready(function() {

    // select card_image and use slideDown on the paragraph when clicked
    $("card-image").on("click", function(){
        $("card_para").css("card_paravisible").slideDown(2000);
    })
});
