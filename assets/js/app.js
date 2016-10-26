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
		value:'45€'
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
		value:'60€'
		url: document.location.href,
		title: document.title,
	});
});
