<script type="text/javascript"> 
 function closeMyAd() { 
    
   document.getElementById("a").style.display = "none" ;
                  setTimeout("newad();",5 * (60 * 1000));
                 }

  var milisec=0 
  var seconds=30
     
  function display(){ 
   if (milisec<=0){ 
      milisec=9 
      seconds-=1 
   } 
   if (seconds<=-1){ 
      milisec=0 
      seconds+=1 
   } 
   else 
      milisec-=1 
   
    if( seconds > 0 ) {
      document.getElementById( "closingtimer" ).innerHTML = seconds ;
      setTimeout("display()",100) ;
    }else{
   closeMyAd() ;
    }
 } 
 
 if( document.getElementById( "closingtimer" ) )
  display() ;

</script>

<script type="text/JavaScript">
 function  newad() {
  document.getElementById("a").style.display = "block" ;
  milisec=0 ;
   seconds=35;  
  display();
 } ?>
</div>
