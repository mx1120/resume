<template>
    <div>
        <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback" class="contain">
            <!-- slides -->
            <swiper-slide class="inner one">

            </swiper-slide>
            <swiper-slide class="inner two"></swiper-slide>
            <swiper-slide class="inner three"></swiper-slide>
            <swiper-slide class="inner four"></swiper-slide>
            <!--<div class="swiper-pagination"></div>-->
        </swiper>
        <audio src="../assets/music/likeyou.mp3" autoplay loop="true" ref="music"></audio>
        <div :class="['music', {'player' : !state}]" @click="playSate" ref="control">

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
                    /*IOS 不支持animationPlayState方法*/
//                    this.$refs.control.style.animationPlayState = 'paused'
                }else {
					this.$refs.music.play()
                    /*IOS 不支持animationPlayState方法*/
//					this.$refs.control.style.animationPlayState = 'running'
                }
                this.state = !this.state
            }
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "./../assets/scss/base.scss";
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
            background: url("../assets/img/index/cat1.jpg");
            background-size: cover;
        }
        &.two {
            background: url("../assets/img/index/cat2.jpg");
            background-size: cover;
        }
        &.three {
            background: url("../assets/img/index/cat3.jpg");
            background-size: cover;
        }
        &.four {
            background: url("../assets/img/index/cat4.jpg");
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
        background: url("../assets/img/index/music2.png");
        background-size: cover;
    }
    .player {
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