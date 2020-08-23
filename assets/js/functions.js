

$(document).ready(function(){

	// edit button
	$(".btn-edit").click(function() {
		$(this).hide();
		var secID = $(this).closest(".list-group-item-action").attr("id");
		$("#" + secID + " .btn-close").show();
		$("#" + secID + " .btn-check").show();
		$("#" + secID + " .list-group-item-view-mode").hide();
		$("#" + secID + " .list-group-item-edit-mode").show();
 	});

	// cancel button
	$(".btn-close, .btn-check").click(function() {
		var secID = $(this).closest(".list-group-item-action").attr("id");
		$("#" + secID + " .btn-edit").show();
		$("#" + secID + " .btn-close").hide();
		$("#" + secID + " .btn-check").hide();
		$("#" + secID + " .list-group-item-view-mode").show();
		$("#" + secID + " .list-group-item-edit-mode").hide();
	});

});
