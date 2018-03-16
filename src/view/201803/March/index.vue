<template>
    <div>
        <v-touch v-on:on:swipeleft class="wrapper">Swipe me!</v-touch>
    </div>
</template>

<script type="text/ecmascript-6">
	export default {
		data() {
			return {}
		},
		created() {
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
 @import "../../../assets/scss/base";
    .wrapper {
        min-height: 100vh;
        width: 100%;
        background: #703;
    }
</style>