(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{3213:function(e,t,n){"use strict";function r(e){return(parseInt(e)/100).toFixed(2)}n.d(t,"a",(function(){return r}))},"35a1":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("3208");var r=n("c0b2"),a=(n("a44c"),n("e27c")),o=(n("4ddd"),n("9f14")),u=(n("5f5f"),n("f253")),d=(n("c3a6"),n("ad06")),c=(n("c194"),n("7744")),l=(n("0653"),n("34e9")),s=(n("db2c"),n("1125")),m=(n("da3c"),n("0b33")),p=(n("bda7"),n("5e46")),f=(n("e17f"),n("2241")),h=(n("e930"),n("8f80")),g=(n("9a83"),n("f564")),y=(n("e7e5"),n("d399")),C=(n("8a58"),n("e41f")),b=(n("2994"),n("2bdd")),v=(n("ac1e"),n("543e")),k=(n("54ba"),n("2b0e")),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[[n("keep-alive",{attrs:{include:e.keepAliveArr}},[n("router-view")],1)]],2)},x=[];function T(){console.log("checkUpdate");var e=api.require("mam");e.checkUpdate((function(e,t){if(console.log("checkUpdate ret: ",e),console.log("checkUpdate err: ",t),e){var n=e.result;if(1==n.update&&0==n.closed){var r="最新版本号: "+n.version+";\n更新内容: "+n.updateTip+";\n发布时间: "+n.time;api.confirm({title:"有新的版本, 是否下载并安装？",msg:r,buttons:["确定","取消"]},(function(e,t){1==e.buttonIndex&&("android"==api.systemType&&api.download({url:n.source,report:!0},(function(e,t){if(e&&0==e.state&&api.toast({msg:"正在下载应用"+e.percent+"%",duration:2e3}),e&&1==e.state){var n=e.savePath;api.installApp({appUri:n})}})),"ios"==api.systemType&&api.installApp({appUri:n.source}))}))}else console.log("暂无更新")}else console.log("checkUpdate ret false, err: ",t)}))}var E={name:"App",data:function(){return{mode:"",transitionName:""}},computed:{keepAliveArr:function(){return this.$store.getters.keepAliveArr}},beforeCreate:function(){var e=navigator.userAgent.toLowerCase();-1!==e.indexOf("micromessenger")?this.$store.commit("SET_CLIENT_ENV",!0):this.$store.commit("SET_CLIENT_ENV",!1)},created:function(){document.title=document.title||this.STATIC_INFO.appName},mounted:function(){this.$nextTick((function(){VCONSOLE.init(),T()}))}},_=E,A=n("2877"),P=Object(A["a"])(_,w,x,!1,null,null,null),I=P.exports,S=n("8c4f");k["default"].use(S["a"]);var O=[{path:"/",redirect:"/home",name:"index",meta:{index:1}},{path:"/login",name:"login",meta:{index:0},component:function(){return n.e("login").then(n.bind(null,"dc3f"))}},{path:"/register",name:"register",meta:{index:.1},component:function(){return n.e("register").then(n.bind(null,"b953"))}},{path:"/forgetPassword",name:"forgetPassword",meta:{index:.2},component:function(){return n.e("forgetPassword").then(n.bind(null,"e179"))}},{path:"/xieyi",name:"xieyi",meta:{index:.3},component:function(){return n.e("xieyi").then(n.bind(null,"8f4d"))}},{path:"/proceeds",name:"proceeds",meta:{index:1},component:function(){return n.e("proceeds").then(n.bind(null,"2737"))}},{path:"/recommend",name:"recommend",meta:{index:2},component:function(){return n.e("recommend").then(n.bind(null,"0075"))}},{path:"/shareCode",name:"shareCode",meta:{index:2.2},component:function(){return Promise.all([n.e("makeMoney~share~shareCode"),n.e("center~share~shareCode"),n.e("shareCode")]).then(n.bind(null,"cf28"))}},{path:"/selectImg",name:"selectImg",meta:{index:2.1},component:function(){return Promise.all([n.e("home~selectImg"),n.e("selectImg")]).then(n.bind(null,"8661"))}},{path:"/revenueList",name:"revenueList",meta:{index:2.1},component:function(){return n.e("revenueList").then(n.bind(null,"16ac"))}},{path:"/rankingActivities",name:"rankingActivities",meta:{index:2.1},component:function(){return n.e("rankingActivities").then(n.bind(null,"33ba"))}},{path:"/awardRecord",name:"awardRecord",meta:{index:2.2},component:function(){return n.e("awardRecord").then(n.bind(null,"2ff1"))}},{path:"/center",name:"center",meta:{index:3},component:function(){return Promise.all([n.e("center~share~shareCode"),n.e("center")]).then(n.bind(null,"35f1"))}},{path:"/authentication",name:"authentication",meta:{index:3.1},component:function(){return Promise.all([n.e("addCard~addCreditCard~authentication~custom~intelligence~selectCard"),n.e("authentication")]).then(n.bind(null,"ad6c"))}},{path:"/authenticationStatus",name:"authenticationStatus",meta:{index:3.1},component:function(){return n.e("authenticationStatus").then(n.bind(null,"05ad"))}},{path:"/addCard",name:"addCard",meta:{index:3.2},component:function(){return Promise.all([n.e("addCard~addCreditCard~authentication~custom~intelligence~selectCard"),n.e("addAddress~addCard~custom~intelligence~selectCard"),n.e("addCard")]).then(n.bind(null,"a86c"))}},{path:"/addCreditCard",name:"addCreditCard",meta:{index:3.2},component:function(){return Promise.all([n.e("addCard~addCreditCard~authentication~custom~intelligence~selectCard"),n.e("addCreditCard")]).then(n.bind(null,"d099"))}},{path:"/receipt",name:"receipt",meta:{index:3.1},component:function(){return n.e("receipt").then(n.bind(null,"e481"))}},{path:"/bill",name:"bill",meta:{index:3.1},component:function(){return n.e("bill").then(n.bind(null,"20fe"))}},{path:"/myCard",name:"myCard",meta:{index:3.1},component:function(){return n.e("myCard").then(n.bind(null,"991b"))}},{path:"/faq",name:"faq",meta:{index:3.1},component:function(){return n.e("faq").then(n.bind(null,"0a5d"))}},{path:"/statement",name:"statement",meta:{index:3.1},component:function(){return n.e("statement").then(n.bind(null,"5187"))}},{path:"/agreement",name:"agreement",meta:{index:3.1},component:function(){return n.e("agreement").then(n.bind(null,"69a4"))}},{path:"/set",name:"set",meta:{index:3.1},component:function(){return n.e("set").then(n.bind(null,"8621"))}},{path:"/withdraw",name:"withdraw",meta:{index:3.1},component:function(){return n.e("withdraw").then(n.bind(null,"240f"))}},{path:"/tixian",name:"tixian",meta:{index:3.2},component:function(){return n.e("withdraw").then(n.bind(null,"e0c5"))}},{path:"/myWallet",name:"myWallet",meta:{index:3.1},component:function(){return n.e("myWallet").then(n.bind(null,"1c46"))}},{path:"/dailyEarnings",name:"dailyEarnings",meta:{index:3.1},component:function(){return n.e("dailyEarnings").then(n.bind(null,"3ff4"))}},{path:"/editPassword",name:"editPassword",meta:{index:3.2},component:function(){return n.e("editPassword").then(n.bind(null,"c57f"))}},{path:"/receivingAddress",name:"receivingAddress",meta:{index:3.2},component:function(){return n.e("receivingAddress").then(n.bind(null,"6e6d"))}},{path:"/addAddress",name:"addAddress",meta:{index:3.3},component:function(){return Promise.all([n.e("addAddress~addCard~custom~intelligence~selectCard"),n.e("addAddress")]).then(n.bind(null,"bc3f"))}},{path:"/creditChannel",name:"creditChannel",meta:{index:1.1},component:function(){return n.e("creditChannel").then(n.bind(null,"cc66"))}},{path:"/selectCard",name:"selectCard",meta:{index:1.2},component:function(){return Promise.all([n.e("addCard~addCreditCard~authentication~custom~intelligence~selectCard"),n.e("addAddress~addCard~custom~intelligence~selectCard"),n.e("selectCard")]).then(n.bind(null,"672b"))}},{path:"/supplementaryCertification",name:"supplementaryCertification",meta:{index:1.3},component:function(){return n.e("supplementaryCertification").then(n.bind(null,"fa4a"))}},{path:"/changeCard",name:"changeCard",meta:{index:1.3},component:function(){return n.e("changeCard").then(n.bind(null,"500b"))}},{path:"/bindCard",name:"bindCard",meta:{index:1.4},component:function(){return n.e("bindCard").then(n.bind(null,"f933"))}},{path:"/member",name:"member",meta:{index:3.1},component:function(){return Promise.all([n.e("makeMoney~member"),n.e("member")]).then(n.bind(null,"4b59"))}},{path:"/team",name:"team",meta:{title:"我的团队",index:3.2},component:function(){return n.e("team").then(n.bind(null,"4cbe"))}},{path:"/directTeam",name:"directTeam",meta:{title:"会员",index:3.3},component:function(){return n.e("directTeam").then(n.bind(null,"dd0a"))}},{path:"/secondTeam",name:"secondTeam",meta:{title:"二级用户",index:3.4},component:function(){return n.e("secondTeam").then(n.bind(null,"9e46"))}},{path:"/home",name:"home",meta:{title:"首页",index:1},component:function(){return Promise.all([n.e("home~selectImg"),n.e("home")]).then(n.bind(null,"7abe"))}},{path:"/noticeList",name:"noticeList",meta:{title:"公告",index:1.1},component:function(){return n.e("noticeList").then(n.bind(null,"4e0e"))}},{path:"/noticeDetail",name:"noticeDetail",meta:{title:"公告详情",index:1.2},component:function(){return n.e("noticeDetail").then(n.bind(null,"c402"))}},{path:"/planList",name:"planList",meta:{title:"计划列表",index:1.2},component:function(){return n.e("planList").then(n.bind(null,"5741"))}},{path:"/planDetails",name:"planDetails",meta:{title:"计划详情",index:1.3},component:function(){return n.e("planDetails").then(n.bind(null,"e688"))}},{path:"/addPlan",name:"addPlan",meta:{title:"添加计划",index:1.3},component:function(){return n.e("addPlan").then(n.bind(null,"6860"))}},{path:"/intelligence",name:"intelligence",meta:{title:"智能还款",index:1.4},component:function(){return Promise.all([n.e("addCard~addCreditCard~authentication~custom~intelligence~selectCard"),n.e("addAddress~addCard~custom~intelligence~selectCard"),n.e("addCreditCard"),n.e("custom~intelligence"),n.e("intelligence")]).then(n.bind(null,"921b"))}},{path:"/custom",name:"custom",meta:{title:"自定义还款",index:1.4},component:function(){return Promise.all([n.e("addCard~addCreditCard~authentication~custom~intelligence~selectCard"),n.e("addAddress~addCard~custom~intelligence~selectCard"),n.e("addCreditCard"),n.e("custom~intelligence"),n.e("custom")]).then(n.bind(null,"a0b9"))}},{path:"/repayment",name:"repayment",meta:{title:"自定义还款",index:1.1},component:function(){return n.e("login").then(n.bind(null,"a22e"))}},{path:"/weike",name:"weike",meta:{index:1},component:function(){return n.e("weike").then(n.bind(null,"98ca"))}},{path:"/share",name:"share",meta:{index:2},component:function(){return Promise.all([n.e("makeMoney~share~shareCode"),n.e("center~share~shareCode"),n.e("share")]).then(n.bind(null,"8dcc"))}},{path:"/makeMoney",name:"makeMoney",meta:{index:2.1},component:function(){return Promise.all([n.e("makeMoney~share~shareCode"),n.e("makeMoney~member"),n.e("makeMoney")]).then(n.bind(null,"69f7"))}},{path:"/shareMakeMoney",name:"shareMakeMoney",meta:{index:2.1},component:function(){return n.e("shareMakeMoney").then(n.bind(null,"d6c8"))}},{path:"/forward",name:"forward",meta:{index:2.1},component:function(){return n.e("forward").then(n.bind(null,"d15c"))}},{path:"/videoTeaching",name:"videoTeaching",meta:{index:2.1},component:function(){return n.e("videoTeaching").then(n.bind(null,"a33f"))}},{path:"/consult",name:"consult",meta:{index:2.1},component:function(){return n.e("consult").then(n.bind(null,"332e"))}},{path:"/xuetang",name:"xuetang",meta:{index:2.2},component:function(){return n.e("consult").then(n.bind(null,"a364"))}},{path:"/externalSecondLinks",name:"externalSecondLinks",meta:{index:2.1},component:function(){return n.e("externalSecondLinks").then(n.bind(null,"2f69"))}},{path:"/externalLinks",name:"externalLinks",meta:{index:3.1},component:function(){return n.e("externalLinks").then(n.bind(null,"8833"))}}];window.$$ROUTE_NAMES=O.map((function(e){return e.name.toLowerCase()}));var L=new S["a"]({routes:O}),R=n("a34a"),D=n.n(R),N=n("2f62"),U=n("bc3a"),M=n.n(U),j="Client-Token";function B(){return localStorage.getItem(j)}function $(e){return localStorage.setItem(j,e)}function F(){return localStorage.removeItem(j)}var G=n("4328"),q=n.n(G),Y={910009:"该金额少于最小提现金额，请咨询客服",921006:"请完成银行卡认证"},V=M.a.create({baseURL:"http://app.zhr168.com/api",timeout:6e4}),W=function(e){Object(y["a"])({message:e,duration:2500,forbidClick:!1})};V.defaults.headers.common["Content-Type"]="application/json",V.interceptors.request.use((function(e){return e.paramsSerializer=function(e){return q.a.stringify(e,{arrayFormat:"repeat"})},Ce.getters.token&&(e.headers["Authorization"]="Bearer ".concat(B())),console.log("=============== 请求参数 =============== \n"),console.log(e.url),console.log("\n"),console.log(e),e}),(function(e){console.log(e),Promise.reject(e)})),V.interceptors.response.use((function(e){console.log("+++++++++++++++++ 响应 +++++++++++++++++ \n"),console.log(e);var t=e.data;return e.headers.authorization?e:"200000"===t.code?e:void W(t.msg)}),(function(e){console.log("******************** 报错 ******************** \n"),console.log(e);var t=e.response;return t?"403000"===t.data.code?(Ce.dispatch("LogOut").then((function(){W("登录信息已失效,请重新登录"),L.push("/login")})),Promise.reject(t)):Y[t.data.code]?(W(Y[t.data.code]),Promise.reject(t)):500===t.status?(W("抱歉！系统繁忙，请稍后再试！"),Promise.reject(t)):(y["a"].clear(),t.data&&t.data.msg?W(t.data.msg):e.message&&W(e.message),Promise.reject(t)):(y["a"].clear(),W("抱歉！无法连接网络，请稍后再试！"),Promise.reject(e))}));var K=V,H={loginFun:function(e){return K({method:"POST",url:"/anonymous/login",data:e})},userRegister:function(e){return K({method:"POST",url:"/anonymous/register",data:e})},getCode:function(e){return K({method:"POST",url:"/anonymous/sms/code",data:e})},retrievePassword:function(e){return K({method:"POST",url:"/anonymous/password/retrieve",data:e})}},z=H,J={getChannel:function(e){return K({method:"get",url:"/channel",params:e})},getChannelDetail:function(e){return K({method:"get",url:"/channel/"+e})},getSettle:function(e){return K({method:"post",url:"/trade/settle",data:e})},tradePay:function(e){return K({method:"post",url:"/trade/pay",data:e})},getPayProvider:function(){return K({method:"get",url:"/trade/pay/provider"})},getCityList:function(){return K({method:"get",url:"/trade/geo/city"})},getIndustryList:function(e){return K({method:"get",url:"/trade/geo/industry",params:e})}},Z=J,Q={getTradeList:function(e){return K({method:"get",url:"/trade",params:e})},getProfitsList:function(e){return K({method:"get",url:"/market/profits",params:e})},getWithdrawList:function(e){return K({method:"get",url:"/market/balance/withdrawal",params:e})},getBonusList:function(e){return K({method:"get",url:"/market/bonus",params:e})},getPointsList:function(e){return K({method:"get",url:"/market/points",params:e})},getUpgradeList:function(e){return K({method:"get",url:"/market/profits/upgrade",params:e})},getUserInfo:function(){return K({method:"get",url:"/market/users/me"})},authentication:function(e){return K({method:"POST",url:"/auth/bank4Needs/hkj/auth",data:e})},saveYskAuth:function(e){return K({method:"POST",url:"/user/yskAuth",data:e})},getAuthentication:function(){return K({method:"get",url:"/user/auth/identify"})},getOrderDetail:function(e){return K({method:"get",url:"/trade/"+e})},editPassword:function(e){return K({method:"put",url:"/user/password",data:e})},x_postWithdrawal:function(e){return K({method:"post",url:"/x/market/balance/withdrawal/order",data:e})},getUserAddress:function(){return K({method:"get",url:"/user/deliveryAddress/list/me"})},addUserAddress:function(e){return K({method:"post",url:"/user/deliveryAddress",data:e})},editUserAddress:function(e,t){return K({method:"put",url:"/user/deliveryAddress/"+t,data:e})},delUserAddress:function(e){return K({method:"delete",url:"/user/deliveryAddress/"+e})},setDefault:function(e){return K({method:"post",url:"/user/deliveryAddress/setDefault/"+e})},postAgentId:function(e){return K({method:"post",url:"/market/agent/"+e+"/me"})},getqrcode:function(){return K({method:"get",url:"/market/agent/me"})},getWithdrawalDailyList:function(e){return K({method:"get",url:"/market/balance/withdrawal/dailyList",params:e})},getPointsDailyList:function(e){return K({method:"get",url:"/market/points/dailyList",params:e})},getProfitsDailyList:function(e){return K({method:"get",url:"/market/profits/dailyList",params:e})},getBonusDailyList:function(e){return K({method:"get",url:"/market/bonus/dailyList",params:e})},getUpgradeDailyList:function(e){return K({method:"get",url:"/market/rankUpgradeProfits/dailyReport",params:e})}},X=Q,ee={deleteCard:function(e,t){return K({method:"DELETE",url:"/trade/cards/"+e+"/"+t})},editCard:function(e,t,n){return K({method:"PUT",url:"/trade/cards/"+e+"/"+t,data:n})},x_editCard:function(e,t,n){return K({method:"PUT",url:"/x/trade/cards/"+e+"/"+t,data:n})},partEditCard:function(e,t,n){return K({method:"PATCH",url:"/trade/cards/"+e+"/"+t,data:n})},getCardList:function(e){return K({method:"get",url:"/trade/cards/"+e})},bindCard:function(e,t){return K({method:"POST",url:"/trade/cards/"+e,data:t})},x_bindCard:function(e,t){return K({method:"POST",url:"/x/trade/cards/"+e,data:t})},authBindCard:function(e,t){return K({method:"POST",url:"/trade/card/auth/bind/"+e,data:t})},demandChannelCard:function(e,t,n){return K({method:"get",url:"/trade/cards/binding/"+e+"/"+t+"/"+n})},bindChannelCard:function(e,t,n){return K({method:"POST",url:"/trade/cards/binding/"+e+"/"+t+"/"+n})},bindChannelCardConfirm:function(e,t,n,r){return K({method:"POST",url:"/trade/cards/binding/"+e+"/"+t+"/"+n+"/confirm",data:r})},getBankList:function(){return K({method:"get",url:"/trade/banks"})},getCard:function(e,t){return K({method:"get",url:"/trade/cards/"+e+"/"+t})},x_getCard:function(e,t){return K({method:"get",url:"/x/trade/cards/"+e+"/"+t})},getVerificationCode:function(e,t){return K({method:"POST",url:"/trade/card/auth/sms/"+e,data:t})},registrationChannels:function(e){return K({method:"POST",url:"/trade/init",data:e})}},te=ee,ne={getShareImgList:function(){return K({method:"get",url:"/market/share_posters"})},getThirdPartyContent:function(){return K({method:"get",url:"/market/third_party_content"})},getSecondContent:function(e){return K({method:"get",url:"/market/third_party_content/"+e+"/second"})},getUserListShort:function(){return K({method:"get",url:"/market/ranking/total/short"})},getUserListLong:function(){return K({method:"get",url:"/market/ranking/total/long"})},getLatelyEnded:function(){return K({method:"get",url:"/campaign/latelyEnded"})},getLatelyProgressing:function(){return K({method:"get",url:"/campaign/latelyProgressing"})},getPrize:function(e){return K({method:"get",url:"/campaign/prize",params:e})},getRanking:function(e){return K({method:"get",url:"/campaign/ranking",params:e})},setReocrd:function(e,t){return K({method:"post",url:"/campaign/prize/"+e,data:t})},listInfo:function(){return K({method:"get",url:"/market/info_and_video/listInfo"})},listVideo:function(){return K({method:"get",url:"/market/info_and_video/listVideo"})},forwardgraphList:function(e){return K({method:"get",url:"/market/forwardgraph/list",params:e})},listLessonList:function(){return K({method:"get",url:"/market/info_and_video/listLesson"})},listInfoMoney:function(){return K({method:"get",url:"/market/info_and_video/listInfoMoney"})}},re=ne,ae={getMemberFeeMsg:function(){return K({method:"get",url:"/market/rank/fee"})},upgradeOrder:function(e){return K({method:"POST",url:"/market/rank/upgrade/order",data:e})},x_upgradeOrder:function(e){return K({method:"POST",url:"/x/market/rank/upgrade/order",data:e})},getUserTeam:function(){return K({method:"GET",url:"/market/team/me"})},listUserDirectTeam:function(e){return K({method:"GET",url:"/market/team/list/firstChild",params:e})},listMyDirectTeam:function(e){return K({method:"GET",url:"/market/team/list/firstChild/me",params:e})},getRankListMsg:function(){return K({method:"get",url:"/market/rank"})},upgradeUser:function(e){return K({method:"POST",url:"/market/rank/upgrade/points",data:e})}},oe=ae,ie={getText:function(e){return K({method:"get",url:"/anonymous/text/rich",params:e})}},ue=ie,de={firstPageCarousel:function(e){return K({method:"get",url:"/market/firstPageCarousel",params:e})},announcementList:function(e){return K({method:"get",url:"/market/announcement/list",params:e})},announcementDetail:function(e){return K({method:"get",url:"/market/announcement/detail",params:e})},announcementNewest:function(e){return K({method:"get",url:"/market/announcement/newest",params:e})}},ce=de,le={userRepayPlanList:function(e){return K({method:"get",url:"/repayment/plan/userRepayPlanList",params:e})},genCustom:function(e){return K({method:"post",url:"/repayment/plan/genCustom",data:e})},addRepayPlan:function(e){return K({method:"post",url:"/repayment/plan/addRepayPlan",data:e})},genIntelligent:function(e){return K({method:"post",url:"/repayment/plan/genIntelligent",data:e})},planDetail:function(e,t){return K({method:"get",url:"/repayment/plan/planDetail/"+e,params:t})},repayConstraint:function(e){return K({method:"get",url:"/repayment/plan/repayConstraint",params:e})},stopRepayPlan:function(e){return K({method:"get",url:"/repayment/plan/stopRepayPlan/"+e,params:e})},repayChannelList:function(e){return K({method:"get",url:"/repayment/plan/repayChannelList",params:e})},repayChannelConstraint:function(e,t){return K({method:"get",url:"/repayment/plan/repayChannelConstraint/"+e+"/"+t})},genCustomItem:function(e){return K({method:"post",url:"/repayment/plan/genCustomItem",data:e})},deleteRepayPlan:function(e){return K({method:"get",url:"/repayment/plan/deleteRepayPlan/"+e,params:e})}},se=le,me={listFailPlans:function(e){return K({method:"get",url:"/repay/listFailPlans",params:e})},manualRepay:function(e){return K({method:"post",url:"/repay/manualRepay",data:e})},getSinglePlan:function(e){return K({method:"get",url:"/repay/getSinglePlan",params:e})}},pe=me,fe={login:z,proceeds:Z,center:X,card:te,recommend:re,member:oe,richText:ue,home:ce,plan:se,repay:pe};function he(e,t,n,r,a,o,i){try{var u=e[o](i),d=u.value}catch(c){return void n(c)}u.done?t(d):Promise.resolve(d).then(r,a)}function ge(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){he(o,r,a,i,u,"next",e)}function u(e){he(o,r,a,i,u,"throw",e)}i(void 0)}))}}var ye=["Recommend","Home","Center","custom","RankingActivities","Member","Agreement"];k["default"].use(N["a"]);var Ce=new N["a"].Store({state:{token:B(),proceedsAmount:0,userInfo:"",referrer:null,currentDebitCard:"",currentCreditCard:"",isWechat:"",settleMsg:null,orderData:"",bankList:"",payProviderCode:"",agentId:"",chooseCity:null,billMsg:{},keepAliveArr:[]},getters:{userInfo:function(e){return e.userInfo},token:function(e){return e.token},keepAliveArr:function(e){return e.keepAliveArr}},mutations:{SET_TOKEN:function(e,t){e.token=t},SET_PROCEEDS_AMOUNT:function(e,t){e.proceedsAmount=t},SET_USER_INFO:function(e,t){e.userInfo=t},SET_REFERRER:function(e,t){e.referrer=t},SET_AGENTID:function(e,t){e.agentId=t},SET_CURRENT_DEBIT_CARD:function(e,t){e.currentDebitCard=t},SET_CURRENT_CREDIT_CARD:function(e,t){e.currentCreditCard=t},SET_CLIENT_ENV:function(e,t){e.isWechat=t},SET_SETTLE_MSG:function(e,t){e.settleMsg=t},SET_ORDER_DATA:function(e,t){e.orderData=t},SET_BANK_LIST:function(e,t){e.bankList=t},SET_PAY_PROVIDER_CODE:function(e,t){e.payProviderCode=t},SET_CHOOSE_CITY:function(e,t){e.chooseCity=t},SET_BILL:function(e,t){e.billMsg=t},SET_KEEP_ALIVE_ARR:function(e){e.keepAliveArr.length||ye.forEach((function(t){e.keepAliveArr.push(t)}))},SET_KEEP_ALIVE:function(e,t){var n=e.keepAliveArr.indexOf(t);-1===n&&e.keepAliveArr.push(t)},CLEAR_KEEP_ALIVE_ARR:function(e){while(e.keepAliveArr.length)e.keepAliveArr.pop()},CLEAR_KEEP_ALIVE:function(e,t){var n=e.keepAliveArr.indexOf(t);-1!==n&&e.keepAliveArr.splice(n,1)}},actions:{GetUserInfo:function(){var e=ge(D.a.mark((function e(t,n){var r;return D.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,t.state,e.next=3,new Promise((function(e,t){fe.center.getUserInfo().then((function(t){r("SET_USER_INFO",t.data.data),console.log("resolve res: ",t),e(t)})).catch((function(e){t(e)}))}));case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),SetToken:function(){var e=ge(D.a.mark((function e(t,n){var r;return D.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=t.commit,t.state,$(n),r("SET_TOKEN",n);case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),LogOut:function(){var e=ge(D.a.mark((function e(t){var n;return D.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,t.state,F(),n("SET_USER_INFO",null),n("SET_TOKEN",null);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),GetBankList:function(){var e=ge(D.a.mark((function e(t,n){var r;return D.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,t.state,e.next=3,new Promise((function(e){fe.card.getBankList().then((function(t){var n=t.data.data.bank_list,a={};n.forEach((function(e,t,n){a[e.bank_no]=e.name})),r("SET_BANK_LIST",a),e()}))}));case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()}});function be(e){var t="";return t=e.replace(/class="[\s\S]*?"/g,""),t=t.replace(/src="http/g,'class="r-img" src="http'),t=t.replace(/src="\/public\/uploads\/ueditor/g,'class="r-img" src="http://wechat3.walkerbang.com/ymfx/public/uploads/ueditor"'),t}function ve(e){for(var t=window.location.href.substr(window.location.href.indexOf("?")+1),n=t.split("&"),r=0;r<n.length;r++){var a=n[r].split("=");if(a[0]===e)return a[1]}return!1}function ke(e){if(""!=e){for(var t=window.location.search.substring(1),n=t.split("&"),r="",a=0;a<n.length;a++){var o=n[a].split("=");e.contains(o[0])||""!=o[0]&&(r+=0===a?"?"+n[a]:"&"+n[a])}return""!=r?r+"&":r+"?"}}function we(e){return!!/^1\d{10}$/.test(e)}function xe(e){var t=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;return!!t.test(e)}function Te(e){return!isNaN(parseFloat(e))&&isFinite(e)}function Ee(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(t);return null!=n?unescape(n[2]):null}function _e(e,t){var n=["Y","m","d","H","i","s"],r=[],a=new Date(e);for(var o in r.push(a.getFullYear()),r.push(Ae(a.getMonth()+1)),r.push(Ae(a.getDate())),r.push(Ae(a.getHours())),r.push(Ae(a.getMinutes())),r.push(Ae(a.getSeconds())),r)t=t.replace(n[o],r[o]);return t}function Ae(e){return e=e.toString(),e[1]?e:"0"+e}Array.prototype.contains=function(e){for(i in this)if(this[i]===e)return!0;return!1},Array.prototype.contains=function(e){for(i in this)if(this[i]===e)return!0;return!1};var Pe={Cache:{put:function(e,t,n){try{if(!localStorage)return!1;n&&!isNaN(n)||(n=60);var r=new Date-1+1e3*n,a={val:t,exp:r};localStorage.setItem(e,JSON.stringify(a))}catch(o){}},get:function(e){try{if(!localStorage)return!1;var t=localStorage.getItem(e),n=JSON.parse(t),r=new Date-1;return n?r>n.exp?(this.remove(e),""):n.val:null}catch(a){return this.remove(e),""}},remove:function(e){if(!localStorage)return!1;localStorage.removeItem(e)},clear:function(){if(!localStorage)return!1;localStorage.clear()}}},Ie={handleImage:be,getQueryVariable:ve,getAllQueryVariableWithout:ke,isPhone:we,isEmail:xe,getQueryString:Ee,formatTime:_e,MyLocalStorage:Pe,isNumeric:Te},Se=(n("35a1"),n("b059"),n("d738"),n("c241"),n("c2d8"),n("160b"),n("71cf"),n("b657"),n("5448"),n("f9b3"),n("065c"),n("4c83"),n("5f7d"),n("17d1"),n("1885"),n("5b4d"),n("2477"),n("7597"),n("276f"),n("4eb5")),Oe=n.n(Se),Le=n("da28"),Re=n.n(Le),De=(n("4418"),function(e){"#"===e?Object(f["a"])({title:"提示",message:"即将上线，敬请期待！",confirmButtonText:"确定"}):window.location.href=e}),Ne=function(e){"#"===e?Object(f["a"])({title:"提示",message:"即将上线，敬请期待！",confirmButtonText:"确定"}):api.openWin({name:"externalUrlFrame",url:e,bgColor:"#fff",animation:{type:"none"}})},Ue=function(e,t){"#"===e?Object(f["a"])({title:"提示",message:"即将上线，敬请期待！",confirmButtonText:"确定"}):e.indexOf("#")>-1&&e.indexOf("#")<2&&"#"!==e?L.push(e.replace("#","")):L.push({path:"/externalLinks",query:{url:e,title:t}})},Me=function(e,t,n,r){"#"===t?Object(f["a"])({title:"提示",message:"即将上线，敬请期待！",confirmButtonText:"确定"}):t.indexOf("#")>-1&&t.indexOf("#")<2&&"#"!==t?L.push(t.replace("#","")):L.push({path:"/externalSecondLinks",query:{id:e,url:t,title:n,type:r}})},je=n("3213");function Be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $e(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Be(n,!0).forEach((function(t){Fe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Be(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ge=["/login","/register","/forgetPassword","/agreement"];L.beforeEach((function(e,t,n){if(console.warn(".................... router.beforeEach ...................."),console.log("to: ",e),console.log("from: ",t),t)try{var r=t.name.toLowerCase();window.$$_prev_route_name=r}catch(a){console.log("catch beforeEach params from error: ",a)}console.log("store.getters.userInfo: ",Ce.getters.userInfo),console.log("store.getters.token: ",Ce.getters.token),e.query.referrer&&Ce.commit("SET_REFERRER",e.query.referrer),e.query.agentId?localStorage.setItem("AGENTID",e.query.agentId):localStorage.setItem("AGENTID",""),Ce.getters.token?"/login"===e.path?n({path:"/"}):(console.log("store.getters.userInfo: ",Ce.getters.userInfo),Ce.getters.userInfo?n():Ce.dispatch("GetUserInfo").then((function(t){console.log("GetUserInfo one res: ",t),console.log("userInfo: ",Ce.getters.userInfo),n($e({},e,{replace:!0}))})).then((function(e){console.log("GetUserInfo two then res: ",e),localStorage.getItem("AGENTID")&&(console.log("获取agentId向后端发送请求"),fe.center.postAgentId(localStorage.getItem("AGENTID")))})).catch((function(e){console.error("GetUserInfo err: ",e),Ce.dispatch("LogOut").then((function(){n({path:"/login"})}))}))):-1!==Ge.indexOf(e.path)?n():n("/login?redirect=".concat(e.path))}));var qe={install:function(e,t){e.prototype.STATIC_INFO={appName:"APIZAPPdePath:n("7193"),serviceQrCodePath:n("f13f"),servicePhoneNumber:"4006606229",serviceWechatNo:"ZHRFWH",baseAddress:"http://app.zhr168.com",appDownloadUrl:"http://downloadpkg.apicloud.com/app/download?path=http://A6015953323754.qiniucdn.apicloud-system.com/0228603681592a240106784c8a934a58_d",colorTheme:"black"}}},Ye=function(){var e=api.require("ySKAuth");e.startAuth({appKey:"oBRb7EEESRuVZef3Gi2ajx6zLqspaJ1CJocLRA4VzK",secretKey:"EB0FC2857F27636E4AD542620C527FE9",traceId:(new Date).getTime()+"",needUserGuide:!0,isOcrFirst:!1,idCardOperation:{mode:"FRONT_RECOGNIZE_BACK_RECOGNIZE",displayInfo:"1,2",modifyInfo:"1"},livenessOperation:{actionNum:3,actions:"0,1,2",realAuth:!0,isNeedFaceCompare:!0}},(function(e,t){if(t)y["a"].fail(t.resultMessage),L.push("/authentication");else{var n=e.idCardFrontInfo;e.newIDCardInfo&&(n.idNo=e.newIDCardInfo.newIdNo,n.name=e.newIDCardInfo.newName),fe.center.saveYskAuth({id_card_no:n&&n.idNo,id_card_name:n&&n.name,is_auth:e.livenessCompareInfo&&1===e.livenessCompareInfo.verifyStatus,auth_msg:e.livenessCompareInfo&&(e.livenessCompareInfo.reason||"")}).then((function(){Ce.dispatch("GetUserInfo").then((function(){1===e.livenessCompareInfo.verifyStatus?y["a"].success("认证完成"):L.push("/authentication")}))}))}}))},Ve={auth:Ye,judgeUserAuth:function(){return"UNAUTHORIZED"===Ce.getters.userInfo.auth_state?(Object(f["a"])({title:"尚未实名认证",message:"使用前需实名认证",showCancelButton:!0,confirmButtonText:"去认证",cancelButtonText:"返回",className:"dialog",closeOnClickOverlay:!0}).then((function(e){"confirm"===e&&L.push("/authentication")})),!1):"AUTHORIZING"===Ce.getters.userInfo.auth_state?(Object(f["a"])({title:"实名认证中",message:"使用收款服务前需实名认证",showCancelButton:!0,confirmButtonText:"确定",cancelButtonText:"返回",className:"dialog",closeOnClickOverlay:!0}),!1):"DENIED"!==Ce.getters.userInfo.auth_state||(Object(f["a"])({title:"实名认证失败",message:"使用收款服务前需实名认证，请重新认证",showCancelButton:!0,confirmButtonText:"重新认证",cancelButtonText:"返回",className:"dialog",closeOnClickOverlay:!0}).then((function(e){"confirm"===e&&L.push("/authentication")})),!1)}},We={payment:function(){var e=Ce.state.orderData;fe.proceeds.tradePay(e).then((function(e){y["a"].clear(),e=e.data,"200000"===e.code&&Object(f["a"])({title:"请留意信用卡是否扣款成功及储蓄卡是否到账，详细状态可到“我的账单”查看",showCancelButton:!0,confirmButtonText:"我的账单",cancelButtonText:"收银台",className:"dialog",closeOnClickOverlay:!0}).then((function(){L.replace("/bill")})).catch((function(){L.replace("/proceeds")}))})).catch((function(t){y["a"].clear();var n=t.data;if("922002"!==n.code)if("921006"!==n.code&&"921010"!==n.code){if("921008"!==n.code)return"921009"===n.code?(Object(y["a"])({message:n.msg+"...请重新编辑",duration:2500,forbidClick:!0}),void L.push({path:"/bindCard",query:{cardId:e.deposit_bank_id,channelCode:e.channel_code}})):void Object(y["a"])({message:n.msg,duration:3e3,forbidClick:!0});Object(y["a"])({message:n.msg,duration:2500,forbidClick:!0})}else L.push({path:"/bindCard",query:{cardId:e.deposit_bank_id,channelCode:e.channel_code}});else Object(f["a"])({title:"提示",message:"该通道需要补充认证资料请补充后继续使用",showCancelButton:!0,confirmButtonText:"去补充",cancelButtonText:"返回",className:"dialog",closeOnClickOverlay:!0}).then((function(e){"confirm"===e&&L.push("/supplementaryCertification")}))}))}};k["default"].use(Oe.a),k["default"].config.errorHandler=function(e,t,n){console.log("vue errorHandler err: ",e),console.log("vue errorHandler vm: ",t),console.log("vue errorHandler info: ",n)},k["default"].prototype.auth=Ve.auth,k["default"].prototype.judgeUserAuth=Ve.judgeUserAuth,k["default"].prototype.payment=We.payment;var Ke=new k["default"];k["default"].prototype.bus=Ke,k["default"].prototype.$util=Ie,k["default"].prototype.$api=fe,k["default"].prototype.$go=De,k["default"].prototype.$openWin=Ne,k["default"].prototype.$openLinks=Ue,k["default"].prototype.$openThirdLinks=Me,k["default"].prototype.$parseAmount=je["a"],k["default"].use(qe),k["default"].use(v["a"]),k["default"].use(b["a"]),k["default"].use(C["a"]),k["default"].use(y["a"]),k["default"].use(g["a"]),k["default"].use(h["a"]),k["default"].use(f["a"]),k["default"].use(m["a"]).use(p["a"]),k["default"].use(s["a"]),k["default"].use(c["a"]).use(l["a"]),k["default"].use(d["a"]),k["default"].use(u["a"]),k["default"].use(a["a"]).use(o["a"]),k["default"].use(r["a"]),k["default"].use(Re.a,{formats:{title:"MMMM YYYY",weekdays:"W",navMonths:"MMM",input:["L","YYYY-MM-DD","YYYY/MM/DD"],dayPopover:"L"}}),k["default"].config.productionTip=!1,k["default"].use(qe);var He=navigator.userAgent.toLowerCase();-1!==He.indexOf("apicloud")?window.apiready=function(){api.setStatusBarStyle({color:"#484b6d",style:"light",animated:!1});var e=["home","share"];k["default"].mixin({mounted:function(){var t=this.$options.name;console.log("当前name: ",t),"string"===typeof t&&(t=t.toLowerCase(),t!==window.$$_prev_route_name&&-1!==window.$$ROUTE_NAMES.indexOf(t)&&(console.log("window.$$_prev_route_name: ",window.$$_prev_route_name),console.log("name: ",t),-1===e.indexOf(window.$$_prev_route_name)&&-1===e.indexOf(t)||(console.warn("设置状态栏颜色"),"home"===t?api.setStatusBarStyle({color:"#484b6d",style:"light",animated:!1}):api.setStatusBarStyle({color:"#3b3d5b",style:"light",animated:!1}))))}}),new k["default"]({router:L,store:Ce,render:function(e){return e(I)}}).$mount("#app"),api.openWin({name:"index",url:"index.html",bounces:!1}),api.setStatusBarStyle({color:"#484b6d",style:"light"}),window.jpush=api.require("ajpush"),api.addEventListener({name:"appintent"},(function(e,t){if(console.log("通知被点击，收到数据：\n"+JSON.stringify(e)),e&&e.appParam.ajpush){var n=e.appParam.ajpush;console.warn("ajpush"),console.log("ajpush: ",n);var r=n.id,a=n.title,o=n.content,i=n.extra;console.log("id: ",r),console.log("title: ",a),console.log("content: ",o),console.log("extra: ",i),api.alAPIZHRAPP({tAPIZHRAPPe:"APIZHRAPP",msg:o},(function(e,t){console.log("======= app.alert ======="),console.log("ret: ",e),console.log("err: ",t)}))}}))}:new k["default"]({router:L,store:Ce,render:function(e){return e(I)}}).$mount("#app")},7193:function(e,t,n){e.exports=n.p+"static/img/sj_code.fbb80ccf.png"},b059:function(e,t,n){},f13f:function(e,t,n){e.exports=n.p+"static/img/ic_serverCode.25f2dd6c.jpg"}}]);