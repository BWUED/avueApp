(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"122f":function(t,e,i){"use strict";i.r(e);var n=i("fc3f"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"5b41":function(t,e,i){"use strict";var n=i("c93d"),a=i.n(n);a.a},"5e45":function(t,e,i){var n=i("b041");e=t.exports=i("2350")(!1),e.push([t.i,".content .bj uni-image[data-v-4bdef218]{display:block;width:100%;height:100%;position:fixed;z-index:999999;top:0;left:0;bottom:0;right:0}.content .z_content[data-v-4bdef218]{background:url("+n(i("51e9"))+") 100% 100%;background-size:cover;width:100%;height:100%;position:fixed;top:0;left:0}.content .BOX[data-v-4bdef218]{position:relative;z-index:9999}.content .BOX .z_logo uni-image[data-v-4bdef218]{width:%?200?%;height:%?200?%;position:relative;left:50%;margin-left:%?-100?%;margin-top:%?80?%;border-radius:%?40?%}.content .BOX .z_title[data-v-4bdef218]{text-align:center;margin-top:%?35?%;font-size:%?44?%}.content .BOX .z_hr[data-v-4bdef218]{margin:0 auto;margin-top:%?50?%;width:60%;height:%?1?%;background:#dbdbdb}.content .BOX .z_upgrade[data-v-4bdef218]{text-align:center;margin-top:%?50?%}.content .BOX .z_upgrade p[data-v-4bdef218]{color:#999;font-size:%?24?%;margin-top:%?15?%}.content .BOX .z_xzaz[data-v-4bdef218]{text-align:center;margin-top:%?50?%}.content .BOX .z_xzaz .view1[data-v-4bdef218]{background:#6399ff}.content .BOX .z_xzaz .view2[data-v-4bdef218]{background:#3eafb9}.content .BOX .z_xzaz uni-view[data-v-4bdef218]{margin-left:%?175?%;width:%?400?%;height:%?90?%;border-radius:%?45?%}.content .BOX .z_xzaz uni-view uni-image[data-v-4bdef218]{width:%?40?%;height:%?48?%;display:inline-block;margin-top:%?21?%;margin-left:%?-36?%}.content .BOX .z_xzaz span[data-v-4bdef218]{color:#fff;font-size:%?28?%;position:relative;top:%?-14?%;left:%?24?%}.content .BOX .z_xzaz uni-image[data-v-4bdef218]{width:%?360?%;height:%?90?%;border-radius:%?45?%}.content .BOX .z_nr[data-v-4bdef218]{width:80%;margin-left:10%;margin-top:%?48?%;font-size:%?32?%}.content .BOX .z_nr span[data-v-4bdef218]{margin-top:%?35?%;display:inline-block}.content .BOX .pre[data-v-4bdef218]{width:90%;font-size:%?24?%;color:#999;line-height:%?38?%;margin-left:10%;font-family:微软雅黑;margin-top:%?35?%}",""])},a193:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[1==t.z_hide?i("v-uni-view",{staticClass:"bj"},[i("v-uni-image",{attrs:{src:"../../static/XZBJ.png"}})],1):t._e(),i("v-uni-view",{staticClass:"z_content"}),i("v-uni-view",{staticClass:"BOX"},[i("v-uni-view",{staticClass:"z_logo"},[i("v-uni-image",{attrs:{src:"../../static/z_logo.png"}})],1),i("v-uni-view",{staticClass:"z_title"},[t._v(t._s(t.z_title.agentName))]),i("v-uni-view",{staticClass:"z_hr"}),i("v-uni-view",{staticClass:"z_upgrade"},[i("p",[t._v(t._s(t.z_title.version)+" (Build 1)")]),i("p",[t._v("更新于: "+t._s(t.gx_time))])]),i("v-uni-view",{staticClass:"z_xzaz"},["ios"==t.tertype?i("v-uni-view",{staticClass:"view1",on:{click:function(e){e=t.$handleEvent(e),t.GoIphone(e)}}},[i("v-uni-image",{attrs:{src:"../../static/iphone.png"}}),i("span",[t._v("iPhone 下载")])],1):t._e(),"android"==t.tertype?i("v-uni-view",{staticClass:"view2",on:{click:function(e){e=t.$handleEvent(e),t.GoAndroid(e)}}},[i("v-uni-image",{attrs:{src:"../../static/Android.png"}}),i("span",[t._v("Android 下载")])],1):t._e()],1),i("v-uni-view",{staticClass:"z_nr"},[i("span",[t._v("更新内容：")])]),i("pre",{staticClass:"pre"},[t._v(t._s(t.z_title.remark))])],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},c93d:function(t,e,i){var n=i("5e45");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("69319bca",n,!0,{sourceMap:!1,shadowMode:!1})},d6f6:function(t,e,i){"use strict";i.r(e);var n=i("a193"),a=i("122f");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("5b41");var r=i("2877"),d=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"4bdef218",null);e["default"]=d.exports},fc3f:function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("f499"));i("4917");var o=n(i("cf8a")),r={data:function(){return{z_hide:!1,z_title:"",tertype:"",agentId:"20000",gx_time:"",andriodUrl:"",iosUrl:""}},onLoad:function(t){this.z_open(),this.agentId=t.agentId||this.agentId,this.z_hello(),this.portal_download()},methods:{z_open:function(){var t=navigator.userAgent.toLowerCase();"micromessenger"==t.match(/MicroMessenger/i)?this.z_hide=!0:this.z_hide=!1},portal_download:function(){var t=this;uni.request({url:o.default.baiwangapi+"/config/reg/get",method:"POST",header:{"Content-Type":"application/json;charset=utf8"},data:(0,a.default)({agentId:this.agentId}),success:function(e){t.andriodUrl=e.data.data.andriodUrl,t.iosUrl=e.data.data.iosUrl}})},z_hello:function(){var t=this;"android"===uni.getSystemInfoSync().platform?(this.tertype="android",uni.request({url:o.default.baiwangapi+"/version/get",method:"POST",header:{"Content-Type":"application/json;charset=utf8"},data:(0,a.default)({agentId:1e3,terminalType:1}),success:function(e){t.z_title=e.data.data,t.gx_time=t.z_title.createTime.slice(0,10)}})):"ios"==uni.getSystemInfoSync().platform&&(console.log("88888888ios"),this.tertype="ios",uni.request({url:o.default.baiwangapi+"/version/get",method:"POST",header:{"Content-Type":"application/json;charset=utf8"},data:(0,a.default)({agentId:1e3,terminalType:2}),success:function(e){t.z_title=e.data.data,t.gx_time=t.z_title.createTime.slice(0,10)}}))},GoAndroid:function(){window.location.href=this.andriodUrl},GoIphone:function(){window.location.href=this.iosUrl}}};e.default=r}}]);