(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["shareCode"],{2472:function(e,t,a){e.exports=a.p+"static/img/fenxiang3.997c1df7.png"},"2c92":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isWechat?e._e():a("div",{staticClass:"header"},[a("div",{staticClass:"header_body"},[a("span",{staticClass:"goBack",on:{click:e.goBack}},[a("van-icon",{attrs:{name:"arrow-left"}})],1),a("div",{staticClass:"flex-vertical-centering"},[a("p",{staticClass:"textEllipsis",on:{click:e.showLog}},[e._v("\n        "+e._s(e.headerName)+"\n      ")])]),e.shareShow?a("span",{staticClass:"shareSheet",on:{click:e.shareSheet}},[e._v("分享")]):e._e()])])},n=[],s={name:"TopMsg",props:{headerName:{type:String,default:""},required:{type:Boolean,default:!0},shareShow:{type:Boolean,default:!1}},data:function(){return{clickNum:0}},computed:{isWechat:function(){return this.$store.state.isWechat}},watch:{$route:function(){this.clickNum=0}},created:function(){},methods:{goBack:function(){var e=this;e.$router.go(-1)},shareSheet:function(){this.$emit("shareSheet")},showLog:function(){if(this.clickNum++,5===this.clickNum){this.clickNum=0;var e=document.getElementsByClassName("vc-switch")[0],t=window.getComputedStyle(e,null).getPropertyValue("display");"block"===t?VCONSOLE.hide():VCONSOLE.show()}}}},o=s,c=(a("88d0"),a("2877")),r=Object(c["a"])(o,i,n,!1,null,"0fe7e72d",null);t["a"]=r.exports},"475d":function(e,t,a){e.exports=a.p+"static/img/fenxiang2.db41daa5.png"},"589d":function(e,t,a){},"5e76":function(e,t,a){},"6ecd":function(e,t,a){e.exports=a.p+"static/img/fenxiang6.df9e1476.png"},"88d0":function(e,t,a){"use strict";var i=a("a4c5"),n=a.n(i);n.a},"8f5f":function(e,t,a){e.exports=a.p+"static/img/fenxiang4.8b669021.png"},9415:function(e,t,a){},"9b0f":function(e,t,a){a("a29f"),a("f251"),a("589d"),a("9415"),a("5e76")},a4c5:function(e,t,a){},ba95:function(e,t,a){e.exports=a.p+"static/img/fenxiang5.699d94bf.png"},cf28:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",["APICloud"===e.J_udge?a("top-msg",{attrs:{"header-name":"分享二维码","share-show":"true"},on:{shareSheet:function(t){return e.shareSheet()}}}):e._e(),"APIyun"===e.J_udge?a("top-msg",{attrs:{"header-name":"分享二维码","share-show":"true"},on:{shareSheet:function(t){return e.onShareSelectLx()}}}):e._e(),a("div",{staticClass:"con_body"},[a("div",{ref:"shareBox",staticClass:"share_codeImg"},[a("qrcode",{class:e.isWechat?"share_code":"share_code share_code2",attrs:{id:"qrcodeImg",value:e.codeValue,src:e.codeValue,options:{width:144},tag:"img"}}),a("img",{ref:"posterImg",attrs:{id:"backgroundImg",src:e.posterURL,crossOrigin:"anonymous"}})],1)]),"APICloud"===e.J_udge?a("van-actionsheet",{attrs:{actions:e.shareActions},on:{select:e.onShareSelect},model:{value:e.isShareSheet,callback:function(t){e.isShareSheet=t},expression:"isShareSheet"}}):e._e(),"APIyun"===e.J_udge?a("van-actionsheet",{attrs:{actions:e.shareActions},on:{select:e.onShareSelectLx},model:{value:e.isShareSheet,callback:function(t){e.isShareSheet=t},expression:"isShareSheet"}}):e._e()],1)},n=[],s=a("b2e5"),o=a.n(s),c=a("2c92"),r=a("c0e9"),h=a.n(r),u=(a("9b0f"),{name:"ShareCode",components:{topMsg:c["a"],Qrcode:o.a},data:function(){return{J_udge:"APIyun",z_img:{fenxiang1:a("d8e7"),fenxiang2:a("475d"),fenxiang3:a("2472"),fenxiang4:a("8f5f"),fenxiang5:a("ba95"),fenxiang6:a("6ecd")},loading:!0,codeValue:"",shareURL:"",posterURL:"",isLoading:"",isTime:"",imgPreview:"",imgName:"",isShareSheet:!1,shareActions:[{key:"session",name:"微信朋友"},{key:"timeline",name:"微信朋友圈"}]}},computed:{userInfo:function(){return this.$store.state.userInfo},canvasRenderWidth:function(){return this.canvasWidth*this.rate},canvasRenderHeight:function(){return this.canvasHeight*this.rate},isWechat:function(){return this.$store.state.isWechat}},watch:{shareURL:function(e,t){}},created:function(){var e=this;this.z_pack(),console.log("shareCode"),this.thisTitle(),console.log("分享图片 二维码:this.STATIC_INFO.sharecodeUrl ",this.codeValue),console.log("分享图片: ",this.$route.query.src),this.posterURL=this.$route.query.src+"?random="+Math.round(new Date/1e3);var t=this.$route.query.src,a=t.split("/"),i=a[a.length-1],n=i.split(".")[0];this.posterURL=this.z_img[n],this.isLoading=this.$toast.loading({duration:0,forbidClick:!0,loadingType:"spinner",message:"图片正在生成中,请稍等..."}),this.$api.login.getQrcodeUrl(null).then((function(t){t.data.data&&(e.codeValue=t.data.data.qr_code_url,console.log("分享图片 二维码 (VUE_APP_SHARECODE_URL):",e.codeValue),e.isLoading.clear())})).catch((function(t){console.log(t),e.isLoading.clear()}))},mounted:function(){this.printQrcodePosterT()},destroyed:function(){clearTimeout(this.isTime),this.$toast.clear()},methods:{z_pack:function(){var e=this;this.$api.login.getclientTextShowConfig({name:"APP打包方式"}).then((function(t){t.data.data&&t.data.data["APP打包方式"]&&(e.J_udge=t.data.data["APP打包方式"])})).catch((function(e){console.log(e)}))},shareSheet:function(){this.isShareSheet=!0},onShareSelectLx:function(){var e=this.$route.query.src,t=e.split("/"),a=t[t.length-1];console.log("...分享背景图...:"+a),console.log("...二维码地址...:"),console.log(this.codeValue);var i=navigator.userAgent,n=i.indexOf("Android")>-1||i.indexOf("Adr")>-1,s=!!i.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);if(n&&(console.log("智慧人###分享二维码###99###2###h5/static/img/"+a+"###"+this.codeValue),baiwangxinxi.showShare("智慧人###分享二维码###99###2###h5/static/img/"+a+"###"+this.codeValue)),s){var o={method:"post",params:{title:"智慧人",content:"分享二维码",url:"",imgurl:"h5/static/img/"+a,type:2,imgName:a,QRUrl:this.codeValue},callback:"http://h5.baiwang168.com.cn/index.html"};window.webkit.messageHandlers.showShare.postMessage(o)}},onShareSelect:function(e){var t=this,a=api.require("wx");a.shareImage({apiKey:"wx02df33802d384b32",scene:e.key,contentUrl:"fs://img/zhihuiren/"+t.imgName},(function(e,a){e.status?t.$toast({message:"分享成功",position:"middle",duration:2e3}):t.$toast({message:a.code,position:"middle",duration:2e3})})),this.isShareSheet=!1},thisTitle:function(){document.title="推荐码"},printQrcodePosterT:function(){var e=this;setTimeout((function(){h()(e.$refs.shareBox,{scale:2,useCORS:!0}).then((function(t){var a=t.toDataURL("image/png");e.shareURL=a,e.imgName="shareCode_".concat((new Date).getTime(),".png");var i=api.require("trans");i.saveImage({base64Str:a.replace("data:image/png;base64,",""),album:!0,imgPath:"fs://img/zhihuiren",imgName:e.imgName},(function(t,a){e.isLoading.clear(),t.status?(e.isShareSheet=!0,e.$toast({message:"图片已保存, 分享给你的好友吧",position:"middle",duration:2e3})):e.$toast({message:"图片保存失败：".concat(a.msg),position:"middle",duration:2e3})}))}))}),1e3)},printQrcodePoster:function(){var e=this;setTimeout((function(){h()(e.$refs.shareBox,{scale:2,useCORS:!0}).then((function(t){var a=t.toDataURL("image/png");e.shareURL=a,e.imgName="shareCode_".concat((new Date).getTime(),".png");var i=api.require("trans");i.saveImage({base64Str:a.replace("data:image/png;base64,",""),album:!0,imgPath:"fs://img/zhihuiren",imgName:e.imgName},(function(t,a){e.isLoading.clear(),t.status?(e.isShareSheet=!0,e.$toast({message:"图片已保存, 分享给你的好友吧",position:"middle",duration:2e3})):e.$toast({message:"图片保存失败：".concat(a.msg),position:"middle",duration:2e3})}))}))}),1e3)}},beforeRouteLeave:function(e,t,a){this.imgPreview&&this.imgPreview.close(),clearTimeout(this.isTime),a()}}),d=u,l=(a("fc78"),a("2877")),g=Object(l["a"])(d,i,n,!1,null,"1f80669f",null);t["default"]=g.exports},d8e7:function(e,t,a){e.exports=a.p+"static/img/fenxiang1.19eeec9d.png"},dc23:function(e,t,a){},fc78:function(e,t,a){"use strict";var i=a("dc23"),n=a.n(i);n.a}}]);