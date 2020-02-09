<template>
<div :class='$style.container'>
	Dashboard
</div>
</template>

<script>
import Reviews from '@/api/queries/reviews.gql';

export default {
	name: 'Home',
	mounted () {
		alert("Fetch default reviews?");
		this.$apollo.query({
			query: Reviews
		}).then(results => {
			alert(results);
			let reviews = results.data.reviews;
			reviews = JSON.stringify(reviews);
			alert(reviews);
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