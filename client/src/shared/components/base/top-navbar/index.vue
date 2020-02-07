<template>
<div :class='$style.container'>
	<div :class="$style.app">{{$route.name}}</div>
	<base-button @click="showModal" style="display:none">+ Add</base-button>
</div>
</template>

<script>
import { mapMutations} from 'vuex';
import BaseButton from '@/shared/components/base/button';
export default {
	name: 'TopNavBar',
	data() {
		return {
			app: ""
		}
	},
	components: {
		BaseButton
	},
	methods: {
		...mapMutations(['showModal'])
	}
};
</script>

<style module lang="scss">
.container{
	position: sticky;
	top: 0;
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: $color-content;
	background: darken($color-background, 10%);
	border-bottom: 1px solid $color-divider;
	padding: 0 10px;
}
.app {
	font-weight: bold;
	line-height: 50px;
	font-size: 22px;
}
</style>