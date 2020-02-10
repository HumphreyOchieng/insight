<template>
<div :class='$style.container'>
	<div :class="$style.reviews">
		<base-reviews :reviews="reviews"></base-reviews>
	</div>
</div>
</template>

<script>
import Reviews from '@/api/queries/reviews.gql';
import BaseReviews from './views/reviews.vue';

export default {
	name: 'Home',
	data() {
		return {
			reviews: [],
			allReviews: [],
			playStoreLink: ""
		}
	},
	components: {
		BaseReviews
	},
	mounted () {
		alert("Fetch default reviews?");
		this.$apollo.query({
			query: Reviews
		}).then(results => {
			this.allReviews = results.data.reviews;
			this.reviews = this.allReviews;
		}).catch(err => {
			alert(err);
		})
	}
};
</script>

<style module lang="scss">
.container{

}
</style>