//Matthew Lewis
//Advanced Visual Frameworks Term: 1308
//Android javascript file

$('#home').on('pageinit', function(){

});

$("#serviceChoose").on('change' ,function(){
		
		if ($("#serviceChoose").val() == "instagram") {
			$("#instagramForm").css("display", "block");
			$("#flickrForm").css("display", "none");
		}
		if ($("#serviceChoose").val() == "flickr") {
			$("#instagramForm").css("display", "none");
			$("#flickrForm").css("display", "block");
		}
});