$(window).load(function(){

$.fn.orion = function(options){
 var settings = {
  speed     : 300,         // dropdown speed (ms)
  animation   : "fading",    // dropdown or panel animation
  indicator   : true     // dropdown indicator
 }
 $.extend( settings, options );
 $(".orion-menu").prepend("<li class='showhide'><span class='title'>القائمة</span><span class='icon'><em></em><em></em><em></em><em></em></span></li>");
 
 var firstClick = 0;
 
 if(settings.indicator == true){
  $(".orion-menu").find("li").each(function(){
   if($(this).children("ul").length > 0){
    $(this).append("<span class='indicator'></span>");
   }
  });
 }
 
 detectScreen();
 
 $(window).resize(function() {
  detectScreen();
 });
 
 function detectScreen(){
  $(".orion-menu").find("li, a").unbind();
  $(".orion-menu").find("ul").hide(0);
  if(window.innerWidth <= 768){
   showCollapse();
   bindClick();
   if(firstClick == 0){
    $(".orion-menu > li:not(.showhide)").hide(0);
   }
  }
  else{
   hideCollapse();
   bindHover();
  }
 }

 function bindHover(){
  $(".orion-menu li").bind("mouseover", function(){
   $(this).children("ul").stop(true, true).fadeIn(settings.speed).addClass(settings.animation);
  }).bind("mouseleave", function(){
   $(this).children("ul").stop(true, true).fadeOut(settings.speed).removeClass(settings.animation);
  });  
 }
 function bindClick(){  
  $(".orion-menu li:not(.showhide)").each(function(){
   if($(this).children("ul").length > 0){
    $(this).children("a").bind("click", function(){
     $(this).siblings("ul").slideToggle(settings.speed).addClass(settings.animation);
     firstClick = 1;
    });
   }
  });
 }
 function showCollapse(){
  $(".orion-menu > li.showhide").show(0);
  $(".orion-menu > li.showhide").bind("click", function(){
   if($(".orion-menu > li").is(":hidden")){
    $(".orion-menu > li").slideDown(300);
    firstClick = 1;
   }
   else{
    $(".orion-menu > li:not(.showhide)").slideUp(300);
    $(".orion-menu > li.showhide").show(0);
    firstClick = 0;
   }
  });
 }
 function hideCollapse(){
  $(".orion-menu > li").show(0);
  $(".orion-menu > li.showhide").hide(0);
 }
}
$(document).ready(function(){
    $(".panel a").click(function(e){
     e.preventDefault();
     var style = $(this).attr("class");
     $(".orion-menu").removeAttr("class").addClass("orion-menu").addClass(style);
    });
   });
jQuery(document).ready(function(){  
    $().orion({
     speed: 500
    });
   });
});
