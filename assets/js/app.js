$(window).scroll(function(e){ 

});

$( window ).resize(function() {
});

var p = extractUrlParams();

$('.link_don_45').click( function() {
	woopra.identify({
		email: p['email'],
		name: p['prenom'] + " " + p['lastname'],
		firstname: p['firstname'],
		lastname: p['lastname']
	});

	woopra.track("interaction", {
		action:'clic',
		value:'45€',
		url: document.location.href,
		title: document.title,
	});
});

$('.link_don_45').click( function() {
	woopra.identify({
		email: p['email'],
		name: p['prenom'] + " " + p['lastname'],
		firstname: p['firstname'],
		lastname: p['lastname']
	});

	woopra.track("interaction", {
		action:'clic',
		value:'60€',
		url: document.location.href,
		title: document.title,
	});
});

$('.iraiser_link ').each( function() {
	var p = extractUrlParams();
	var link = $(this).attr("href");
	if ('email' in p )
		link = link + "&" + "email=" + p['email']
	if ('firstname' in p )
		link = link + "&firstname=" + p['firstname'];
	if ('lastname' in p )
		link = link + "&lastname=" + p['lastname'];
	if ('canal' in p && p['canal'] == "orixa") {
		link = link + '&reserved_code_media=W16PI13A';
	} else if ('reserved_code_media' in p && p['reserved_code_media'].length != 0) {
		link = link + '&reserved_code_media=' + p['reserved_code_media'];
	} else {
		link = link + '&reserved_code_media=W16PI13B';
	}
	$('.iraiser_link ').attr("href", link);
});




