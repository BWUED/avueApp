(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-register"],{"25c7":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{attrs:{id:"page_app"}},[i("v-uni-view",{staticClass:"box"},[i("v-uni-view",{staticClass:"top"},[i("v-uni-view",{staticClass:"z_left"},[i("v-uni-image",{attrs:{src:"../../static/z_index.png"}}),i("p",{staticClass:"z_pp z_6"},[t._v("注册"+t._s(t.z_title.agentName))])],1),i("v-uni-view",{staticClass:"z_right"},[i("v-uni-image",{attrs:{src:"../../static/z_bg.png"}})],1)],1),i("v-uni-view",{staticClass:"z_from"},[i("v-uni-view",{staticClass:"z_flex",staticStyle:{color:"#666"}},[i("v-uni-input",{attrs:{"placeholder-style":"color:#b7b8be",placeholder:"请输入注册手机号",maxlength:"11"},model:{value:t.telnum,callback:function(e){t.telnum=e},expression:"telnum"}})],1),i("v-uni-view",{staticClass:"z_flex zz",staticStyle:{color:"#666"}},[i("v-uni-input",{staticClass:"zbh_input ",attrs:{"placeholder-style":"color:#b7b8be",type:"tel",placeholder:"手机验证码",maxlength:"6"},model:{value:t.valicode,callback:function(e){t.valicode=e},expression:"valicode"}}),i("v-uni-view",{staticClass:"z_btn z_b",domProps:{textContent:t._s(t.timeText)},on:{click:function(e){e=t.$handleEvent(e),t.sendMessage(e)}}},[t._v("获取验证码")])],1),i("v-uni-view",{staticClass:"z_flex",staticStyle:{color:"#666"}},[i("v-uni-input",{attrs:{"placeholder-style":"color:#b7b8be",type:"password",placeholder:"6~12位登录密码",maxlength:"12"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),i("v-uni-view",{staticClass:"z_flex",staticStyle:{color:"#666"}},[i("v-uni-input",{attrs:{"placeholder-style":"color:#b7b8be",type:"password",placeholder:"再次确认密码",maxlength:"12"},model:{value:t.repassword,callback:function(e){t.repassword=e},expression:"repassword"}})],1),i("v-uni-text",{staticClass:"tip_text",domProps:{textContent:t._s(t.tipText)}}),i("v-uni-view",{staticClass:"z_zc  z_b",on:{click:function(e){e=t.$handleEvent(e),t.goDownload(e)}}},[t._v("注册账号")])],1)],1),i("v-uni-view",{staticClass:"z_xiazai z_c"},[t._v("已有账号"),i("v-uni-text",{on:{click:function(e){e=t.$handleEvent(e),t.verify(e)}}},[t._v("直接下载【"+t._s(t.z_title.agentName)+"】APP")])],1)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"5ab2":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("f499")),o=a(i("cf8a")),s={data:function(){return{z_title:"",telnum:"",valicode:"",codeToken:"",tipText:"",password:"",repassword:"",timeText:"获取验证码",referrer:"",timerDisabled:!1,agentId:"20000"}},onLoad:function(t){this.referrer=t.referrer,this.agentId=t.agentId||this.agentId,console.log(this.agentId),this.z_hello()},methods:{getSecond:function(t){var e=this,i=t;0==t?(this.timerDisabled=!1,this.timeText="重新获取",t=i):(this.timerDisabled=!0,this.timeText="("+t+"s)",t--,setTimeout(function(){e.getSecond(t)},1e3))},sendMessage:function(){var t=this;this.timerDisabled||(""!=this.telnum?/^1[3|4|5|6|7|8|9][0-9]\d{8,11}$/.test(this.telnum)?(this.tipText="",uni.request({url:o.default.ZuceUrl+"/anonymous/sms/code",method:"POST",header:{"Content-Type":"application/json;charset=utf8"},data:(0,n.default)({phone:this.telnum}),success:function(e){"200000"===e.data.code?(t.getSecond(60),this.tipText="",uni.showToast({title:"短信发送成功",icon:"none"}),t.codeToken=e.data.data.token):uni.showToast({title:e.data.msg,icon:"none"})},error:function(){uni.showToast({title:"连接服务器失败，请重试",icon:"none"})}})):this.tipText="*手机号格式有误":this.tipText="*手机号不能为空")},goDownload:function(){var t=this;""!=this.telnum?/^1[3|4|5|6|7|8|9][0-9]\d{8,11}$/.test(this.telnum)?""!=this.valicode?/^[0-9]{6}$/.test(this.valicode)?""!=this.password?/^[a-zA-Z0-9_]{6,12}$/.test(this.password)?this.password===this.repassword?(this.tipText="",this.referrer?""!=this.codeToken?uni.request({url:o.default.ZuceUrl+"/anonymous/register",method:"POST",header:{"Content-Type":"application/json;charset=utf8"},data:(0,n.default)({code_input:this.valicode,code_token:this.codeToken,username:this.telnum,password:this.password,reference_username:this.referrer}),success:function(e){"200000"===e.data.code?(uni.showToast({title:"注册成功",duration:2e3}),setTimeout(function(){uni.navigateTo({url:"/pages/download/download?agentId="+t.agentId})},1e3)):uni.showToast({title:e.data.msg,duration:2e3,icon:"none"})}}):uni.showToast({title:"请重新获取验证码！",icon:"none"}):uni.showToast({title:"缺少推荐人手机号码",icon:"none"})):this.tipText="两次输入的密码不一致":this.tipText="请输入6-12位密码(数字或字母)":this.tipText="*请输入您的密码":this.tipText="*验证码格式有误":this.tipText="*验证码不能为空":this.tipText="*手机号格式有误":this.tipText="*手机号不能为空"},z_hello:function(){var t=this;uni.request({url:o.default.baiwangapi+"/version/get",method:"POST",header:{"Content-Type":"application/json;charset=utf8"},data:(0,n.default)({agentId:1e3,terminalType:1}),success:function(e){t.z_title=e.data.data}})},verify:function(){console.log(this.agentId),uni.navigateTo({url:"/pages/download/download?agentId="+this.agentId})}}};e.default=s},"7a05":function(t,e,i){var a=i("991a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("616ab13e",a,!0,{sourceMap:!1,shadowMode:!1})},"991a":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"#page_app[data-v-bdf96d6c]{margin-bottom:%?50?%}.box[data-v-bdf96d6c]{width:86%;margin-left:7%;height:27rem;position:relative;top:%?60?%;border-radius:%?20?%;background:#fff}.box .top[data-v-bdf96d6c]{height:%?340?%}.box .top .z_left[data-v-bdf96d6c]{width:40%;float:left}.box .top .z_left uni-image[data-v-bdf96d6c]{width:%?116?%;height:%?116?%;margin:%?22?% 0 0 %?30?%}.box .top .z_left .z_pp[data-v-bdf96d6c]{font-size:%?32?%;margin:%?30?% 0 0 %?20?%}.box .top .z_right[data-v-bdf96d6c]{float:left;width:60%;margin-left:0}.box .top .z_right uni-image[data-v-bdf96d6c]{width:%?300?%;height:%?300?%;position:relative;top:%?-14?%;left:%?65?%}.box .z_from[data-v-bdf96d6c]{margin-top:%?5?%\n  /* 注册 */}.box .z_from .z_flex[data-v-bdf96d6c]{width:92%;margin-left:2%}.box .z_from .z_flex uni-input[data-v-bdf96d6c]{font-size:%?30?%;padding-left:%?30?%;width:100%;height:%?85?%;margin-bottom:%?40?%;background:#f3f8fe;border:none;outline:none;border-radius:5px}.box .z_from .z_flex .zbh_input[data-v-bdf96d6c]{width:50%;float:left}.box .z_from .z_flex .z_btn[data-v-bdf96d6c]{height:%?80?%;line-height:%?80?%;text-align:center;width:37%;margin-left:5%;color:#fff;float:left;font-size:%?28?%;border-radius:%?10?%}.box .z_from .zz[data-v-bdf96d6c]{width:100%}.box .z_from .tip_text[data-v-bdf96d6c]{display:block;color:#ff2125;text-align:left;font-size:%?28?%;max-height:%?50?%;margin-left:%?25?%;margin-top:%?-18?%;overflow:hidden;height:%?50?%}.box .z_from .z_zc[data-v-bdf96d6c]{width:85%;margin-left:7.5%;margin-top:1%;height:%?90?%;line-height:%?90?%;text-align:center;color:#fff;font-size:%?38?%;letter-spacing:%?15?%;border-radius:%?50?%}.z_xiazai[data-v-bdf96d6c]{text-align:center;font-size:%?30?%;margin-top:11%;margin-bottom:%?20?%;letter-spacing:%?5?%;margin-left:%?10?%;padding-bottom:%?30?%}.z_xiazai uni-text[data-v-bdf96d6c]{margin-left:%?8?%;display:inline-block;color:#ff2125;text-decoration:none;letter-spacing:%?1?%}",""])},bdeb:function(t,e,i){"use strict";i.r(e);var a=i("25c7"),n=i("d482");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("fca5");var s=i("2877"),d=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"bdf96d6c",null);e["default"]=d.exports},cf8a:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a="https://app.baiwang168.com.cn/api",n="https://upgrade.baiwang168.cn/upgrade",o={ZuceUrl:a,baiwangapi:n};e.default=o},d482:function(t,e,i){"use strict";i.r(e);var a=i("5ab2"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},fca5:function(t,e,i){"use strict";var a=i("7a05"),n=i.n(a);n.a}}]);