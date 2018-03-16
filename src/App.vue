<template>
  <div id="app">
    <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
      <router-view/>
    </transition>
      <audio src="./assets/music/likeyou.mp3" autoplay loop="true" ref="music"></audio>
      <div :class="['music', {'player' : !state}]" @click="playSate" ref="control"></div>
  </div>
</template>

<script>
  import * as types from 'vuex'
export default {
  name: 'App',
    data() {
  	    return {
  	    	state:false
        }
    },
    methods: {
        playSate() {
            if(!this.state) {
                this.$refs.music.pause()
                /*IOS 不支持animationPlayState方法
                * this.$refs.control.style.animationPlayState = 'paused'
                * */
            }else {
                this.$refs.music.play()
                /*IOS 不支持animationPlayState方法
                * this.$refs.control.style.animationPlayState = 'running'
                * */
            }
            this.state = !this.state
        },
    },
    computed: {
	    ...types.mapState({
		    direction: state => state.direction
	    })
    },
    destroyed() {
  	    alert(1)
    }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  @import './assets/scss/reset';
  @import "./assets/scss/base";
  .vux-pop-out-enter-active,
  .vux-pop-out-leave-active,
  .vux-pop-in-enter-active,
  .vux-pop-in-leave-active {
    will-change: transform;
    transition: all 0.25s linear;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    backface-visibility: hidden;
    perspective: 1000;
  }

  .vux-pop-out-enter {
    transform: translate3d(-100%, 0, 0);
  }

  .vux-pop-out-leave-active {
    transform: translate3d(100%, 0, 0);
  }

  .vux-pop-in-enter {
    transform: translate3d(100%, 0, 0);
  }

  .vux-pop-in-leave-active {
    transform: translate3d(-100%, 0, 0);
  }
  .music {
      width: 100px/$ppr;
      height: 100px/$ppr;
      position: absolute;
      right: 40px/$ppr;
      top: 30px/$ppr;
      box-sizing: border-box;
      border: 1px solid black;
      z-index: 10;
      border-radius: 50%;
      background: url("./assets/img/index/music2.png");
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
