webpackJsonp([0],{LHg1:function(t,e,s){t.exports=s.p+"static/media/likeyou.f8849bc.mp3"},bTAJ:function(t,e){},dAjm:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s("7QTg");var i={data:function(){return{listName:["三月的抉择"],state:!1,swiperOption:{direction:"vertical",loop:!0}}},methods:{playSate:function(){this.state?this.$refs.music.play():this.$refs.music.pause(),this.state=!this.state},detail:function(t){switch(t){case 0:this.$router.push("/2018/03/one");break;default:console.info("there is something wrong")}}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("swiper",{ref:"mySwiper",staticClass:"contain",attrs:{options:t.swiperOption}},[i("swiper-slide",{staticClass:"inner one"},t._l(t.listName,function(e,s){return i("div",{key:s,class:"march"+(s+1),on:{click:function(e){t.detail(s)}}},[t._v("\n                "+t._s(e)+"\n            ")])})),t._v(" "),i("swiper-slide",{staticClass:"inner two"}),t._v(" "),i("swiper-slide",{staticClass:"inner three"}),t._v(" "),i("swiper-slide",{staticClass:"inner four"})],1),t._v(" "),i("audio",{ref:"music",attrs:{src:s("LHg1"),autoplay:"",loop:"true"}}),t._v(" "),i("div",{ref:"control",class:["music",{player:!t.state}],on:{click:t.playSate}})],1)},staticRenderFns:[]};var a=s("VU/8")(i,n,!1,function(t){s("bTAJ")},"data-v-13ff6959",null);e.default=a.exports}});
//# sourceMappingURL=0.1899b811421dfc22b919.js.map