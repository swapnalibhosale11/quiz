(function(app){
	var currentQues = 1;

	$(document).ready(function(){
		$(".submitBtn").bind("click",checkAns);
		$(".nextBtn").bind("click",nextQues);
		$("#ques1").show();
	})
	function checkAns(){
		// var sel = $("#ques"+currentQues).find("input:radio:checked").val();
		var selectAns = $(this).parent().find("input:radio:checked").val();
		console.log($(this).parent().find(".quesText").attr("data-correct"));
		// if(selectAns == $(this).parent().find("data-correct").val())
	}
	function nextQues(){
		currentQues++;
		$(".quesContainer").hide();
		$("#ques"+currentQues).show();
	}
})(player=player||{})
var player