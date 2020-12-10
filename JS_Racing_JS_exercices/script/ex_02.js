$(document).ready(function() {
    var count = 0; 
    $("footer div").click(function (){
        
        count ++;
        
        $(this).html(count);
    });
});
    
