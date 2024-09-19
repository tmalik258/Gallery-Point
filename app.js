$.when($.ready).then(function () {
	// Document is ready.
	$.each($(".gallery-grid .gallery-item"), function (index, element) {
		$(element).click(function (e) { 
			e.preventDefault();
			console.log(e.target.nextElementSibling)
			const sibling = e.target.nextElementSibling;
			$(sibling).addClass('active');
		});
	});
});
