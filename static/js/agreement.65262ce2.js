(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["agreement"],{"2c92":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isWechat?t._e():s("div",{staticClass:"header"},[s("div",{staticClass:"header_body"},[s("span",{staticClass:"goBack",on:{click:t.goBack}},[s("van-icon",{attrs:{name:"arrow-left"}})],1),s("div",{staticClass:"flex-vertical-centering"},[s("p",{staticClass:"textEllipsis",on:{click:t.showLog}},[t._v("\n        "+t._s(t.headerName)+"\n      ")])]),t.shareShow?s("span",{staticClass:"shareSheet",on:{click:t.shareSheet}},[t._v("分享")]):t._e()])])},n=[],c={name:"TopMsg",props:{headerName:{type:String,default:""},required:{type:Boolean,default:!0},shareShow:{type:Boolean,default:!1}},data:function(){return{clickNum:0}},computed:{isWechat:function(){return this.$store.state.isWechat}},watch:{$route:function(){this.clickNum=0}},created:function(){},methods:{goBack:function(){var t=this;t.$router.go(-1)},shareSheet:function(){this.$emit("shareSheet")},showLog:function(){if(this.clickNum++,5===this.clickNum){this.clickNum=0;var t=document.getElementsByClassName("vc-switch")[0],e=window.getComputedStyle(t,null).getPropertyValue("display");"block"===e?VCONSOLE.hide():VCONSOLE.show()}}}},i=c,o=(s("9243"),s("2877")),r=Object(o["a"])(i,a,n,!1,null,"2cd8e979",null);e["a"]=r.exports},"4fa4":function(t,e,s){"use strict";var a=s("d7cb"),n=s.n(a);n.a},"69a4":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"top"},[a("img",{attrs:{src:s("e3ee")},on:{click:t.backHistory}}),a("div",{staticClass:"text"},[t._v(t._s(t.text))])]),a("div",{staticClass:"con_body"},[a("div",{staticStyle:{color:"#000000ff"},domProps:{innerHTML:t._s(t.msg)}})])])},n=[],c=s("2c92"),i={name:"Agreement",components:{topMsg:c["a"]},data:function(){return{text:"用户协议及服务条款",msg:"",html:"<b style='color:red'>v-html</b>"}},created:function(){var t=this;this.thisTitle(),this.$api.richText.getText({type:"agreement"}).then((function(e){console.log(e),t.msg=e.data.data.content}))},methods:{thisTitle:function(){document.title="用户协议及服务条款"},backHistory:function(){this.$router.go(-1)}}},o=i,r=(s("4fa4"),s("2877")),l=Object(r["a"])(o,a,n,!1,null,"29ea3a5d",null);e["default"]=l.exports},"8c64":function(t,e,s){},9243:function(t,e,s){"use strict";var a=s("8c64"),n=s.n(a);n.a},d7cb:function(t,e,s){},e3ee:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAA4CAYAAAB3yEEBAAACvklEQVRYR82Zv2sVQRSFvwjBwtLKIp3/gLWNYoKoCaKNiIWNNiFdxB9gYTpj7CzstBIEJSAWIkpAEdKksLFIYSFYCEIgiBIRk3BkRoZHdubOvpl9e8vHvJ1v58zcc+fuGKOJ48BtYAb45RHGRsAyDSwD48AH4KQH6hrmMvAI2BcsgoCmgK0uYa4Diw1KrABnuoJZAq4ltsRybRjJIVkkTyw2gVM1YfYDzwFt2Fh8A44B67VgDgCvgaMJkM8O5KvG1YA5CLwBjiRA1tyx3qiVZyYAnYzDCZC3LuFtheNKrowA3gOHEiDPgIvA38FxpWAkiaSRRLG4B9xoGlACRj7zEtCmjcUs8DA2YFiY0Gea5pEckkXyRGMYmL18ZnAyOfJZQBs2GW1hpPvdxNN1ZE8AH5MUbkAbmAfAXGICJTFlVSU1c+TAWH3mEzAJKM1nhRXG6jOrLqv+yKLIkMnqM6+Ac8DvNiD6T2plrD6jMuEqsN0WJAVj9ZkF4M4wEP6/TStj8Zkd4Iornkqw7CmTxWe0Ly4AL4pQNGxgi8/opOh6oZNTNEKZzgNP3X2maZLvgICVS4qHh5HPPE6cLmVTpfcvxSkCmXSF0FUiFvIXgfwvEWsAaWV6BaOXtJQDncjkV9xSKHWygT1Qb462B+pN0vNAvbEDD9Qbo/RAOSWETFPm2TpS9YwebC2uZJoyz2rFlX/L3pSdHiinIFeKUE7KCotMgw+0XFVkpvKyaleVECrWLPTjOrnE+cksfqbr7WngnUWvNjKFz7X42R/gUu2Lf46faWz1lkiOn2msmtI3myQbVqbwuRY/0/gnrn6q1kbL9bPqDcZcP1PrVd0Kdcf/RUmZQsmsfrbugKo1pXP9rHq7PtfPJNVkLZkGT+99YD6Rhat/4gnnjzUlO/34FfOzkXwW9EC9+WAa+tkt1wP86X/cBQn4mhB2t026AAAAAElFTkSuQmCC"}}]);