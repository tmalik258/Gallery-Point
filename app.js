$.when($.ready).then(function () {
	// Document is ready.
	$.each($(".gallery-grid .gallery-item"), function (index, element) {
		const img = element.children[0];
		const galleryItemLarge = element.children[1];
		const closeBtn = galleryItemLarge.children[0];
	
		$(img).click(function (e) {
			e.preventDefault();
			$(galleryItemLarge).removeClass('hide');
			$(galleryItemLarge).addClass('show');
		});
	
		$(closeBtn).click(function (e) {
			e.preventDefault();
			$(galleryItemLarge).removeClass('show');
			$(galleryItemLarge).addClass('hide');
		});
	});
	
	
});
