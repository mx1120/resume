webpackJsonp([0],{LHg1:function(e,t,s){e.exports=s.p+"static/media/likeyou.f8849bc.mp3"},V8eL:function(e,t){},dAjm:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s("7QTg");var i=this,n={data:function(){return{listName:["三月的抉择"],state:!1,swiperOption:{direction:"vertical",loop:!0}}},methods:{playSate:function(){i.state?i.$refs.music.play():i.$refs.music.pause(),i.state=!i.state},detail:function(e){switch(e){case 0:this.$router.push("/2018/03/one");break;default:console.info("there is something wrong")}}}},a={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("swiper",{ref:"mySwiper",staticClass:"contain",attrs:{options:e.swiperOption}},[i("swiper-slide",{staticClass:"inner one"},e._l(e.listName,function(t,s){return i("div",{key:s,class:"march"+(s+1),on:{click:function(t){e.detail(s)}}},[e._v("\n                "+e._s(t)+"\n            ")])})),e._v(" "),i("swiper-slide",{staticClass:"inner two"}),e._v(" "),i("swiper-slide",{staticClass:"inner three"}),e._v(" "),i("swiper-slide",{staticClass:"inner four"})],1),e._v(" "),i("audio",{ref:"music",attrs:{src:s("LHg1"),autoplay:"",loop:"true"}}),e._v(" "),i("div",{ref:"control",class:["music",{player:!e.state}],on:{click:e.playSate}})],1)},staticRenderFns:[]};var r=s("VU/8")(n,a,!1,function(e){s("V8eL")},"data-v-9d688e8c",null);t.default=r.exports}});
//# sourceMappingURL=0.34aa217d980977971af4.js.map