
    
$(function(move) {
    var carouselList = $("#carousel ul");
    setInterval(changeSlide, 6000);
    function changeSlide() {
        carouselList.animate({'marginLeft': -400}, 1200, moveFirstSlide);
    };
    
    function moveFirstSlide() { 
        
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
    };
    $("#buttonForward").click(changeSlide);
    
    $("#buttonBackward").click(moveLastSlide);
        
        function moveLastSlide() { 
        
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        firstItem.before(lastItem);
        carouselList.css({marginLeft: -400});
        carouselList.animate({'marginLeft': 0}, 1200);
    };
});




/*

function changeBackSlide() {
        carouselList.animate({'marginLeft': +400}, 1200, moveLastSlide);
    };




<<<--- Pierwsze proby --->>>
    function changeSlideBackward() {
        carouselList.animate({'marginLeft': +400}, 900, moveLastSlide);
    };
    function moveLastSlide() { 
        
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        firstItem.after(lastItem);
        carouselList.css({marginLeft:0});
    };
    $("#buttonBackward").click(changeSlideBackward());
    $(function(){
        $('#buttonBackward').click(function(){
            $(moveLastSlide);
        });
    });




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