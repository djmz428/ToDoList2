//check off ToDos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//click on X to delete To-Do
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

//add new To-Do when 'enter' is pressed
$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		//get todo from input, then clear it
		var todoText = ($(this).val());
		$(this).val("");
		//create new li and add it to ul
		$("ul").append("<li><span>X</span> " + todoText + "</li>");
	}
});