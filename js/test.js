$("#hi").show();
$("#Dep").hide();
$("#run").hide();

function changeSelection (selected) {
	$("[class=active]").removeAttr("class");
	$(selected).attr("class","active");
}


$("#hello").click(function(){
	changeSelection(this);
	$("#hi").show();
	$("#Dep").hide();
	$("#run").hide();

});

$("#deplo").click(function(){
	changeSelection(this);
	$("#hi").hide();
	$("#Dep").show();
	$("#run").hide();

});
$("#runt").click(function(){
	changeSelection(this);
	$("#hi").hide();
	$("#Dep").hide();
	$("#run").show();

});

