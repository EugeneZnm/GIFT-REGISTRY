
$(document).ready(function(){
 $("p").hide();
 $("#btn").click(function(){
     if ($("p").is(":hidden")==true){
         $("p").show();
         $("#btn").val('Purchase');
     }
     else{
       $("p").hide();
       $("#btn").val('show');
     }
 });
});
