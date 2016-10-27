$(".logo-cord").click(function(event){
    event.stopPropagation()
    $("body").toggleClass("night");

});

$("html").click(function(){
    $("body").removeClass("night");
});