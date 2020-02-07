<template>
<div :class='$style.container'>
	<button 
		:type="type"
		:class="buttonClasses"
		@click="$emit('click')"
	>
		<slot></slot>
	</button>
</div>
</template>

<script>

export default {
	name: 'Button',
	props: {
		// Button(default), Reset or Submit
		type: {
			type: String,
			required: false,
			default: 'button'
		},
		large: {
			type: Boolean,
			required: false
		},
		small: {
			type: Boolean,
			required: false
		},
		primary: {
			type: Boolean,
			required: false
		},
		danger: {
			type: Boolean,
			required: false
		},
		warning: {
			type: Boolean,
			required: false
		},
		success: {
			type: Boolean,
			required: false
		},
		disabled: {
			type: Boolean,
			requird: false
		},
		fluid: {
			type: Boolean,
			required: false
		},
		circle: {
			type: Boolean,
			required: false
		}
	},
	computed: {
		buttonClasses() {
			let classList = [
				this.$style.button,
				this.$style.default_size,
				{[this.$style.large_size]: this.large},
				{[this.$style.small_size]: this.small},
				this.$style.default_type,
				{[this.$style.primary_type]: this.primary},
				{[this.$style.danger_type]: this.danger},
				{[this.$style.warning_type]: this.warning},
				{[this.$style.success_type]: this.success},
				{[this.$style.disabled_type]: this.disabled},
				{[this.$style.fluid]: this.fluid},
				this.$style.default_shape,
				{[this.$style.circle_shape]: this.circle}
			];
			return classList;
		}
	}
};
</script>

<style lang="scss" module>
@import './style.scss';

.container {
	
}
.button {
	font-weight: $font-weight-semibold;
	font-family: inherit;
}
.button:hover {
	cursor: pointer;
}
.default_size {
	font-size: ms(0);
	padding: 0.5em 1em;
}
.large_size {
	font-size: ms(2);
	padding: 0.5em 1em;
}
.small_size {
	font-size: 16px;
	padding: 0.3em 0.7em;
}
.default_shape {
	border-radius: $border-radius;
}
.circle_shape {
	border-radius: 50%;
}
.default_type {
	border: $border-width solid $color-divider;
	background: $color-background;
	color: $color-content;
}
.default_type:hover {
	background: $color-content;
	color: $color-background;
}
.primary_type {
	border: $border-width-button solid $color-primary;
	background: $color-primary;
	color: #fff;
	outline-color: #000;
}
.primary_type:hover {
	background: darken($color-primary, 5%);
}
.danger_type {
	border: $border-width-button solid $color-error;
	background: $color-error;
	color: lighten($color-error, 90%);
}
.warning_type {
	border: $border-width-button solid $color-warning;
	background: $color-warning;
	color: lighten($color-warning, 90%);
}
.success_type {
	border: $border-width-button solid $color-success;
	background: $color-success;
	color: lighten($color-success, 90%);
}
.disabled_type {
	opacity: 0.4;
	cursor: not-allowed;
	outline: none;
}
.fluid {
	width: 100%;
}
</style>
