<template>
    <div>
        <v-touch v-on:swipeleft="left"  v-on:swiperight="right" class="wrapper">

        </v-touch>
    </div>
</template>

<script type="text/ecmascript-6">
	export default {
		data() {
			return {
            }
		},
		created() {
		},
        methods: {
			back() {
				this.$router.go(-1)
            },
            left() {
				console.info(1)
            },
	        right() {
		        this.$router.go(-1)
            }
        }
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
 @import "../../../assets/scss/base";
    .wrapper {
        min-height: 100vh;
        width: 100%;
        background: url("../../../assets/img/index/por1.jpg");
        background-size: cover;
    }
    .back {
        width: 100px/$ppr;
        height: 70px/$ppr;
        background: #000;
        color: white;
        line-height: 70px/$ppr;
    }
</style>