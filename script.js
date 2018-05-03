


$(document).ready(function(){
	$("#price1").hide();
	$("#price2").hide();
	$("#price3").hide();
	
    $(".click1").click(function(){
        $("#price1").toggle();
    });
	$(".click2").click(function(){
        $("#price2").toggle();
    });
	$(".click3").click(function(){
        $("#price3").toggle();
    });
	
});
