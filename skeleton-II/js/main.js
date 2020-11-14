$(document).ready(function(){
    $(".show-more a").on("click touch", function() {
    var $this = $(this);
    var $content = $this.parent().parent().next();
    var linkText = $this.text().toUpperCase();  
    if(linkText === "MEHR ANZEIGEN"){
        linkText = "Weniger anzeigen";
        $content.slideDown();
    } else {
        linkText = "Mehr anzeigen";
        $content.slideUp();
    };
    $this.text(linkText);
});
    
    function hideAndShowHamburgerMenu() {
        if($(".hamburger-menu").css('display') == 'none'){
            $(".hamburger-menu").show();
            $(".hamburger-menu").addClass("animated zoomIn").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(".hamburger-menu").removeClass("animated zoomIn");
            });
            $(".hamburger").addClass("active-hamburger");
            
        }else{
            $(".hamburger-menu").addClass("animated zoomOut").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(".hamburger-menu").removeClass("animated zoomOut");
                $(".hamburger-menu").hide();
            });
            $(".hamburger").removeClass("active-hamburger");
        }
    }   
    
    $(".hamburger").on("click touch", hideAndShowHamburgerMenu);
    
    $(".hamburger-menu a").on("click touch", hideAndShowHamburgerMenu);

});