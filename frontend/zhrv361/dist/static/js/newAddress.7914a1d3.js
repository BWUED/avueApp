(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["newAddress"],{2381:function(e,t,s){},"2c92":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.isWechat?e._e():s("div",{staticClass:"header"},[s("div",{staticClass:"header_body"},[s("span",{staticClass:"goBack",on:{click:e.goBack}},[s("van-icon",{attrs:{name:"arrow-left"}})],1),s("div",{staticClass:"flex-vertical-centering"},[s("p",{staticClass:"textEllipsis",on:{click:e.showLog}},[e._v("\n        "+e._s(e.headerName)+"\n      ")])]),e.shareShow?s("span",{staticClass:"shareSheet",on:{click:e.shareSheet}},[e._v("分享")]):e._e()])])},i=[],n={name:"TopMsg",props:{headerName:{type:String,default:""},required:{type:Boolean,default:!0},shareShow:{type:Boolean,default:!1}},data:function(){return{clickNum:0}},computed:{isWechat:function(){return this.$store.state.isWechat}},watch:{$route:function(){this.clickNum=0}},created:function(){},methods:{goBack:function(){var e=this;e.$router.go(-1)},shareSheet:function(){this.$emit("shareSheet")},showLog:function(){if(this.clickNum++,5===this.clickNum){this.clickNum=0;var e=document.getElementsByClassName("vc-switch")[0],t=window.getComputedStyle(e,null).getPropertyValue("display");"block"===t?VCONSOLE.hide():VCONSOLE.show()}}}},o=n,c=(s("88d0"),s("2877")),r=Object(c["a"])(o,a,i,!1,null,"0fe7e72d",null);t["a"]=r.exports},"366e":function(e,t,s){},"3c32":function(e,t,s){"use strict";s("68ef"),s("2381")},"417e":function(e,t,s){"use strict";var a=s("a142"),i=s("0a26"),n=Object(a["h"])("checkbox"),o=n[0],c=n[1];t["a"]=o({mixins:[Object(i["a"])("van-checkbox-group",c)],computed:{checked:{get:function(){return this.parent?-1!==this.parent.value.indexOf(this.name):this.value},set:function(e){this.parent?this.setParentValue(e):this.$emit("input",e)}}},watch:{value:function(e){this.$emit("change",e)}},methods:{toggle:function(){var e=this,t=!this.checked;clearTimeout(this.toggleTask),this.toggleTask=setTimeout((function(){e.checked=t}))},onClickIcon:function(){this.isDisabled||this.toggle()},onClickLabel:function(){this.isDisabled||this.labelDisabled||this.toggle()},setParentValue:function(e){var t=this.parent,s=t.value.slice();if(e){if(t.max&&s.length>=t.max)return;-1===s.indexOf(this.name)&&(s.push(this.name),t.$emit("input",s))}else{var a=s.indexOf(this.name);-1!==a&&(s.splice(a,1),t.$emit("input",s))}}}})},"88d0":function(e,t,s){"use strict";var a=s("a4c5"),i=s.n(a);i.a},a4c5:function(e,t,s){},a65d:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("top-msg",{attrs:{"header-name":"管理地址"}}),s("div",{staticClass:"con_body"},[s("div",{staticClass:"content size28 color666"},[s("div",{staticClass:"content_line flex-row-center"},[s("span",{staticClass:"color333"},[e._v("选择地区")]),s("div",{staticClass:"color666",on:{click:e.showArea}},[e._v("\n          "+e._s(e.area||"请选择地区")+"\n        ")]),s("i",{staticClass:"iconfont icon-Path"}),s("van-popup",{attrs:{position:"bottom"},model:{value:e.areashow,callback:function(t){e.areashow=t},expression:"areashow"}},[s("van-area",{attrs:{"area-list":e.areaList,"columns-num":2},on:{confirm:e.addArea,cancel:e.cancel}})],1)],1),s("div",{staticClass:"content_line flex-row"},[s("span",{staticClass:"color333"},[e._v("详细地址")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],attrs:{rows:"3",placeholder:"请输入详细地址信息"},domProps:{value:e.address},on:{input:function(t){t.target.composing||(e.address=t.target.value)}}})]),"bianji"!=e.type?s("div",{staticClass:"default flex-row-center"},[s("span",{staticClass:"color333"},[e._v("设为默认地址")]),s("van-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}})],1):e._e()])]),s("div",{staticClass:"btn_footer"},[s("div",{staticClass:"flex-vertical-centering"},["bianji"==e.type?s("button",{staticClass:"btn btn_submit",attrs:{type:"button"},on:{click:e.add}},[e._v("\n        确认修改\n      ")]):s("button",{staticClass:"btn btn_submit",attrs:{type:"button"},on:{click:e.add}},[e._v("\n        确认添加\n      ")])])])],1)},i=[],n=(s("3c32"),s("417e")),o=(s("e13f"),s("2c92")),c=s("494e");function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var l={name:"NewAddress",components:r({topMsg:o["a"]},n["a"].name,n["a"]),data:function(){return{checked:!1,type:"",items:[],address:"",area:"",name:"移动",phone:"10086",areashow:!1,areaList:c["a"]}},created:function(){this.thisTitle(),this.type=this.$route.query.type,this.items=this.$route.query.items,console.log(this.items),this.items&&(this.address=this.items.address_info.address,this.area=this.items.address_info.area,this.name=this.items.address_info.name,this.phone=this.items.address_info.phone,this.checked=this.items.use_default)},methods:{thisTitle:function(){console.log(this.type),"bianji"===this.type?document.title="编辑地址":document.title="添加地址"},showArea:function(){this.areashow=!0},addArea:function(e){this.area=e[0].name+"  "+e[1].name,this.all=e[0].name+"  "+e[1].name,this.province=e[0].name,this.city=e[1].name,this.region=e[1].code,this.areashow=!1},cancel:function(){this.areashow=!1},add:function(){var e=this;if(e.area)if(e.address){var t={all:e.all,province:e.province,city:e.city,region:e.region},s={address_tag:JSON.stringify(t),address:e.address,area:e.area,name:e.name,phone:e.phone,use_default:e.checked};"bianji"===this.type?e.$api.center.editUserAddress(s,e.items.id).then((function(t){console.log(t),e.$router.go(-1)})):e.$api.center.addUserAddress(s).then((function(t){console.log(t),e.$router.go(-1)}))}else e.$toast({message:"请输入详细地址",position:"middle"});else e.$toast({message:"请选择收货地区",position:"middle"})}}},d=l,h=(s("eef2"),s("2877")),u=Object(h["a"])(d,a,i,!1,null,"484d3f8c",null);t["default"]=u.exports},b384:function(e,t,s){},e13f:function(e,t,s){s("a29f"),s("366e")},eef2:function(e,t,s){"use strict";var a=s("b384"),i=s.n(a);i.a}}]);