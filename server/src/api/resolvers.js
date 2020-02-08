import Sentiment from 'sentiment';
import * as ReviewService from '../services/review.js';

const sentiment = new Sentiment();

const resolvers = {
	Query: {
		async hello () {
			return "General Kenobi!";
		},
		async reviews () {
			let reviews = await ReviewService.fetchReviews();
			return reviews.map(review => {
				let formattedReview = new Object();
				formattedReview.name = review.userName;
				formattedReview.message = review.text;
				formattedReview.sentiment = sentiment.analyze(review.text);
				return formattedReview;
			});
		},
		async reviewsByLink (root, args) {
			let reviews = await ReviewService.fetchReviewsByLink(args.link);
			return reviews.map(review => {
				let formattedReview = new Object();
				formattedReview.name = review.userName;
				formattedReview.message = review.text;
				formattedReview.sentiment = sentiment.analyze(review.text);
				return formattedReview;
			});
		}
	}
}

export default resolvers;