$(document).ready(function(){
    $(".show-more .show-circle").on("click touch", function() {
    var $this = $(this);
    var $content = $this.parent().parent().next();
    var linkText = $this.children().text().toUpperCase();  
    if(linkText === "MEHR"){
        linkText = "weniger";
        $content.slideDown();
        $this.children().removeClass("show-text");
        $this.children().addClass("show-text-less");
    } else {
        linkText = "mehr";
        $content.slideUp();
        $this.children().removeClass("show-text-less");
        $this.children().addClass("show-text");
    };
    $this.children().text(linkText);
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
    
    function goToByScroll(id){
            $('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');
        }
    
    $(".navbutton").on("click touch", function(){
        var $this = $(this);
        if($this.text() == "Über mich"){
            goToByScroll("about");
        }
        if($this.text() == "Veranstaltungen"){
            goToByScroll("events");
        }
        if($this.text() == "Software"){
            goToByScroll("software");
        }
        if($this.text() == "Arduino"){
            goToByScroll("arduino");
        }
    });
});