import gplay from 'google-play-scraper';

export async function fetchReviews () {
	let reviews = await gplay.reviews({
		appId: 'com.todoist',
	});
	return reviews;
}

export async function fetchReviewsByLink (link) {
	let packageName = link.split('id=').pop().split('&hl')[0];
	let reviews = await gplay.reviews({
		appId: packageName
	});
	return reviews;
}