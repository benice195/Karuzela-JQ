
    
$(function() {
    var carouselList = $("#carousel ul");
    setInterval(changeSlide, 6000);
    function changeSlide() {
        carouselList.animate({'marginLeft': -400}, 900, moveFirstSlide);
    };
    function moveFirstSlide() { 
        
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
    };
    $("#button").click(changeSlide());    
    $(function(){
        
        $('button').click(function(){
            $(moveFirstSlide);
        });
    });
});




/*
<<<--- Pierwsze proby --->>>


$(function() {
    var carouselList = $("#carousel ul");
    
    setInterval(changeSlide, 3000);

    var changeSlide = carouselList.animate({'marginLeft': -400}, 2000, moveFirstSlide)    
    
    
    function moveFirstSlide(moveFirstSlide) { 
        
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
    };
});
  */  