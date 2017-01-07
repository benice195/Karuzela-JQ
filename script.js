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

