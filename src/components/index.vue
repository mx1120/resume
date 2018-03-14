<template>
    <div>
        <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback" class="contain">
            <!-- slides -->
            <swiper-slide class="inner one"></swiper-slide>
            <swiper-slide class="inner two"></swiper-slide>
            <swiper-slide class="inner three"></swiper-slide>
            <swiper-slide class="inner four"></swiper-slide>
            <!-- Optional controls -->
            <!--<div class="swiper-pagination"></div>-->
        </swiper>
        <audio src="/static/like.mp3" autoplay loop="true" ref="music"></audio>
        <div class="music" @click="playSate" ref="control">

        </div>
    </div>
</template>

<script type="text/ecmascript-6">
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		data() {
			return {
				state:false,
				swiperOption:{
					direction : 'vertical',
                    loop: true,
//					pagination: {
//						el: '.swiper-pagination',
//                        type: 'progressbar'
//					},
				}
			}
		},
		methods: {
			callback () {

			},
			playSate() {
				if(!this.state) {
					this.$refs.music.pause()
                    this.$refs.control.style.animationPlayState = 'paused'
                }else {
					this.$refs.music.play()
					this.$refs.control.style.animationPlayState = 'running'
                }
                this.state = !this.state
            }
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "./../assets/scss/base";
    .contain {
        @include clear;
        height: 100vh;
        width: 100vw;
        position: relative;
    }
    .inner {
        width: 100%;
        height: 100vh;
        &.one {
            background: url("./img/cat1.jpg");
            background-size: cover;
        }
        &.two {
            background: url("./img/cat2.jpg");
            background-size: cover;
        }
        &.three {
            background: url("./img/cat3.jpg");
            background-size: cover;
        }
        &.four {
            background: url("./img/cat4.jpg");
            background-size: cover;
        }
    }
    .title{
        line-height: 70px/$ppr;
        text-align: center;
        background: #903;
        color: white;
    }
    .swiper-pagination {
        height: 30px/$ppr;
        width: 100%;
        background: red;
        position: fixed;
        top: 0;
    }
    .music {
        width: 135px/$ppr;
        height: 135px/$ppr;
        position: absolute;
        right: 40px/$ppr;
        top: 30px/$ppr;
        z-index: 10;
        border-radius: 50%;
        background: url("./img/music2.png");
        background-size: cover;
        animation: round 10s linear infinite;
        -webkit-animation:round 15s linear infinite;
        animation-play-state:running;
    }
    @keyframes round {
        from {
            transform: rotate(0deg)
        }
        to {
            transform: rotate(360deg)
        }
    }
</style>