//waits until page is ready
$(document).ready(function() {

    // select card_image and use slideDown on the paragraph when clicked
    $("img").click(function(){
        $(this).next().children("p").slideDown(2000);
    })
    $(".card").click(function(){
        $(this).toggleClass("highlight");
    })

    // clicking select only shows the highlighted panel
    $("#select_btn").click(function(){
        $(".card:not(.highlight)").hide();
    })

    $("#all_btn").click(function(){
        $(".card").show();
    })
});
