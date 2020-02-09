<template>
<div :class='$style.reviews'>
	<div :class='$style.review' v-for="(review, index) in reviews" :key="index">
		<div :class='$style.sentiment'>{{review.sentiment.score}}</div>
		<div :class='$style.content'>
			<div>{{review.message}}</div>
			<div :class='$style.keyword_list'>
				<div :class="$style.positive_list">
					<div v-for="(keyword, index) in review.sentiment.positive" :key="index" :class='$style.keyword'>
						{{keyword}}
					</div>
				</div>
				<div :class="$style.negative_list">
					<div v-for="(keyword, index) in review.sentiment.negative" :key="index" :class='$style.keyword'>
						{{keyword}}
					</div>
				</div>				
			</div>
		</div>
	</div>
</div>
</template>

<script>

export default {
	name: "Reviews",
	props: {
		reviews: {
			type: Array,
			required: true
		}
	}
}
</script>

<style module lang="scss">
.reviews {
	display: flex;
	flex-flow: column nowrap;
	margin-left: 1em;
	margin-right: 2em;
}
.review {
	display: flex;
	margin: 0.3em 0;
	padding: 1em;
	border: 1px solid lightgray;
	border-radius: 5px;

	.sentiment {
		padding-right: 1em;
		font-weight: bold;
	}
}
.keyword_list {
	display: flex;
	margin: 0.4em 0;
}
.positive_list {
	display: flex;

	.keyword {
		background: lighten($color-success, 15%);
		padding: 0.3em;
		margin-right: 0.4em;
		border: 1px solid $color-divider;
		border-radius: 4px;
	}
}
.negative_list {
	display: flex;
	
	.keyword {
		background: lighten($color-error, 18%);
		padding: 0.3em;
		margin-right: 0.4em;
		border: 1px solid $color-divider;
		border-radius: 4px;
	}
}
</style>