<template>
<div :class='$style.container'>
  <top-nav-bar></top-nav-bar>
	<slot></slot>
	<tab-bar :routes="routes"></tab-bar>
</div>
</template>

<script>
import TopNavBar from '@/shared/components/base/top-navbar';
import TabBar from '@/shared/components/base/tab-bar';
export default {
  name: 'Default',
  data() {
    return {
      routes: [
        { label: "Home", routeName: "home", icon: "home-icon"}
      ]
    };
  },
  components: {
    TabBar, TopNavBar
  },
};
</script>

<style module lang="scss">
.container {
  
}
</style>