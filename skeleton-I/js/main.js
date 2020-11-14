$(document).ready(function(){
    $(".show-more a").on("click", function() {
    var $this = $(this);
    var $content = $this.parent().parent().parent();
    var linkText = $this.text().toUpperCase();  
    if(linkText === "MEHR ANZEIGEN"){
        linkText = "Weniger anzeigen";
        $content.switchClass("hideContent", "showContent", 0);
    } else {
        linkText = "Mehr anzeigen";
        $content.switchClass("showContent", "hideContent", 0);
    };
    $this.text(linkText);
});});