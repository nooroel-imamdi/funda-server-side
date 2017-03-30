self.addEventListener('fetch', function(event) {
	console.log(event.request.url);
	event.respondWith(new Response('hijacked!'));
});