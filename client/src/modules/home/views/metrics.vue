<template>
<div :class='$style.container'>
	<div :class='$style.percentages'>
		<div><span :class='$style.percentage'>{{positivePercentage}}%</span> Positive</div>
		<div><span :class='$style.percentage'>{{neutralPercentage}}%</span> Neutral</div>
		<div><span :class='$style.percentage'>{{negativePercentage}}%</span> Negative</div>
	</div>
	<div :class='$style.metrics'>
		<div><span :class='$style.percentage'>{{npsScore}}%</span> NPS Score</div>
		<div><span :class='$style.percentage'>{{csatScore}}%</span> CSAT Score</div>
	</div>
</div>
</template>

<script>

export default {
	name: "Metrics",
	props: {
		reviews: {
			type: Array,
			required: false,
		}
	},
	computed: {
		positivePercentage () {
			let positiveReviews = this.reviews.filter(review => review.sentiment.score > 0);
			return Math.round((positiveReviews.length)/(this.reviews.length)*100);
		},
		negativePercentage () {
			let negativeReviews = this.reviews.filter(review => review.sentiment.score < 0);
			return Math.round((negativeReviews.length)/(this.reviews.length)*100);
		},
		neutralPercentage() {
			let neutralReviews = this.reviews.filter(review => review.sentiment.score == 0);
			return Math.round((neutralReviews.length)/(this.reviews.length)*100);
		},
		npsScore() {
			return this.positivePercentage - this.negativePercentage;
		},
		csatScore() {
			return this.positivePercentage;
		}
	}
}
</script>

<style module lang="scss">
.metrics {
	margin: 0.3em 0.5em;
	padding: 0.5em;
	border: 1px solid lightgray;
	border-radius: 4px;

	div {
		margin: 0.5em 0;
	}
}
.percentages {
	margin: 0.3em 0.5em;
	padding: 0.5em;
	border: 1px solid lightgray;
	border-radius: 4px;

	div {
		margin: 0.5em 0;
	}
}
.percentage {
	font-weight: bold;
	padding-right: 10px;
}
</style>