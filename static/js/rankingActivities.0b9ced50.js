(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["rankingActivities"],{"2c36":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAAAyCAMAAADYxuFLAAAANlBMVEVHcEwAhfMAhfIAhPIAhfIAhvMAhfQAhvMAhfIAhfIAhvMAhPQAhfIAhfIAhvIAhfIAefMAhvIwnoBtAAAAEXRSTlMAO5wyZbshi3fy4BBYRcytBsUN7ugAAAQpSURBVGje7ZjZdqswDEXxjEes///Zi/HsAHHS9uGuxXkJaWPYSLIka1kePXr06NGjLI34/Q+sr9er/eWnm4sbeiQcvV9KQbz+kWOdL0Xzfw5S/yo3ARB+ZCZGMAkAzn8OzkBlP3AJ9uwlzha1ElPkVoEiwe/GULqueHPqWC3ZSpqfIdEI3YD7DWTGtaCSmbUEPtgrSUZwqbLkJPiiMUgTfFnlBCV+tG4jegO+RzOASZc4/2IFPDg6kWZw1CwXs+FCD+/QlVJqLOFbeW4burYRvwVfzGGJZGgSPyUfwFm8kD8BX5B0zc7BZ+DTMR7JoY8mAevyF+ALb3f8DLgOoc72mIoaM5PZcqShmFKU/xvwTjPgvEsDoz0TQdnMDlj4ML8K7r8C33OQMRg2Ez9PwR0Mwr8JLhz/BryL8fUK3KJG9Bbc8CwxBa5dyrp6K1Lg6pe7xRm4guv4bJ3Au1qJbsE/LkBexAjlcCr5GfgWV7HPwR3LUrOb0xylylefMljrl1yTVSeWyjgdwIULmgP3h36SVYjsy9pZjKveEa774RDjfAp8KPkz4Hxd+0aNq66unYF7vWsDq5OW9nFfgc+V/JZVq2yxehs0k1V2t/ohbfD0KPo5+FQ67FhtcBD/ogBZGHKMBN/Fenq/Ch66nyLxBXjHGvKH9F+ARz5rqmXdcgLeWPzHBahnNcqhsbMNPZxZoxxs6coOG1SHw0E5yZhMcmFxG+wM6jA2C9foEtwBXrNYG+OvrENCxi9V4KUSkGjgWthKyyd6F2XwwyTHtR268Rdw9cUJKL4wOcBX0wr3d0i5QxeTx1UvseVbcHIgvwWXUPfCNg+Ooi0ZkLt2W5UcIpIx5fmmaMFp3BdvwH1boT9oa1N3dw9O8lbMpxlakgwGe2VxfNzzHThp8/M8eHb+PTguOzBFuSt23jrwZHESU79aJsBpm2jnwfOyW/D8dnxPOseIhNc81SazbHEkSb1FBreCF3AVu88jSLqGfh5cJYPdgofEo60I1IyF5zRbd1gYwJEM/vBpX2RwWrzW9yqqvcE0uAG1vAXfGzEWCorERh9HSN5UX9cV4mDxveOkhyWTpdPnWmJqj+raf5Kue54Gd9kMd+BhrKK2FcXo2BxnTdjm0l8bqDhZoXkelMFxeQJpNnB5v8/AbYnVvWS1vQVtgsFzYXjTKu5MtaEk2WV1OHGcqgxItHTgrLRdLXgevnwIzsrGeFM5hxa+VHnPhpyxQTjHhqOVqa+m+6znm0Gv6JvV7fwE+zr0LL0HaxqGoOsSxlVMRAjvUjBMqSzeXYhcHSEGm4b2+9wS+25JP1y3DWMGMDWQJgxfJIfrQdUeBHHypeMJk5xGoGv+bJ3c5YQ/9d7Wzydns2G52YqH+d71LD452vv9WD8x1H9jO17G24QTPr3u0aNHjx79P/oHhY1LzCVeFp4AAAAASUVORK5CYII="},"2c92":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isWechat?t._e():a("div",{staticClass:"header"},[a("div",{staticClass:"header_body"},[a("span",{staticClass:"goBack",on:{click:t.goBack}},[a("van-icon",{attrs:{name:"arrow-left"}})],1),a("div",{staticClass:"flex-vertical-centering"},[a("p",{staticClass:"textEllipsis",on:{click:t.showLog}},[t._v("\n        "+t._s(t.headerName)+"\n      ")])]),t.shareShow?a("span",{staticClass:"shareSheet",on:{click:t.shareSheet}},[t._v("分享")]):t._e()])])},n=[],s={name:"TopMsg",props:{headerName:{type:String,default:""},required:{type:Boolean,default:!0},shareShow:{type:Boolean,default:!1}},data:function(){return{clickNum:0}},computed:{isWechat:function(){return this.$store.state.isWechat}},watch:{$route:function(){this.clickNum=0}},created:function(){},methods:{goBack:function(){var t=this;t.$router.go(-1)},shareSheet:function(){this.$emit("shareSheet")},showLog:function(){if(this.clickNum++,5===this.clickNum){this.clickNum=0;var t=document.getElementsByClassName("vc-switch")[0],e=window.getComputedStyle(t,null).getPropertyValue("display");"block"===e?VCONSOLE.hide():VCONSOLE.show()}}}},c=s,r=(a("9243"),a("2877")),o=Object(r["a"])(c,i,n,!1,null,"2cd8e979",null);e["a"]=o.exports},"33ba":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("top-msg",{attrs:{"header-name":"排行活动"}}),a("div",{staticClass:"con_body"},[a("div",{staticClass:"top"},[a("div",{staticClass:"w100 flex-row-between top_tab maincolor"},[a("div",{class:0==t.tabType?"tab_selected":"",on:{click:function(e){return t.changeType(0)}}},[t._v("\n          上期活动回顾\n        ")]),a("div",{class:1==t.tabType?"tab_selected":"",on:{click:function(e){return t.changeType(1)}}},[t._v("\n          近期活动进展\n        ")])])]),a("div",{staticClass:"w100 flex-column-center"},[a("div",{staticClass:"w100 cen colorfff size44 bold"},[t._v("\n        "+t._s(t.name)+"\n      ")]),a("div",{staticClass:"w100 cen colorccc size24 mt5"},[t._v("\n        "+t._s(t._f("timeToFormatDay")(t.start_time))+"至"+t._s(t._f("timeToFormatDay")(t.end_time))+"\n      ")])]),a("router-link",{staticClass:"reward size24",attrs:{to:"/awardRecord"}},[a("div",[t._v("奖励")]),a("div",[t._v("记录")])]),a("div",{staticClass:"rankingList_warp flex-column-center"},[a("div",{staticClass:"rankingList_items w100"},t._l(t.rankingList,(function(e,i){return a("div",{key:i,staticClass:"rankingList_item flex-row-between"},[0==i?a("div",{staticClass:"item_img"},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-yi"}})])]):t._e(),1==i?a("div",{staticClass:"item_img"},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-er"}})])]):t._e(),2==i?a("div",{staticClass:"item_img"},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-san"}})])]):t._e(),i>2?a("div",{staticClass:"item_img"},[a("i",{staticClass:"item_imgs size24"},[t._v(t._s(i))])]):t._e(),a("div",{staticClass:"flex1"},[a("div",{staticClass:"flex-row-between size30 bold"},[a("span",{staticClass:"color333"},[t._v(t._s(e.id_card_name))]),a("span",{staticClass:"colorED02"},[t._v(t._s(e.income_amount))])]),a("div",{staticClass:"flex-row-between mt5 size24 color999"},[a("span",[t._v("成功推荐"+t._s(e.team_effective_member_count)+"人")]),a("span",[t._v("累计收入(元)")])])])])})),0)]),a("div",{staticClass:"tip color333 size24 jiangpin"},[t._m(0),a("div",{domProps:{innerHTML:t._s(t.prize_description)}})]),a("div",{staticClass:"tip color333 size24 huodong"},[t._m(1),a("div",{domProps:{innerHTML:t._s(t.activity_description)}})])],1)],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tip_title"},[i("img",{attrs:{src:a("b4c22")}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tip_title"},[i("img",{attrs:{src:a("2c36")}})])}],s=a("2c92"),c=a("c466"),r={name:"RankingActivities",components:{topMsg:s["a"]},filters:{timeToFormatDay:c["c"]},data:function(){return{msg:!0,rankingList:"",tabType:1,campaignId:"",activity_description:"",end_time:"",limit_number:null,name:"",prize_description:"",start_time:"",status:""}},created:function(){this.thisTitle(),1===this.tabType?this.getLatelyProgressingFun():this.getLatelyEndedFun()},methods:{thisTitle:function(){document.title="排行活动"},getLatelyEndedFun:function(){var t=this;t.$api.recommend.getLatelyEnded().then((function(e){if(!e.data.data)return t.$toast({message:"无近期活动",position:"middle"}),Promise.reject({notRealPromiseException:!0});t.campaignId=e.data.data.id,t.activity_description=e.data.data.activity_description,t.end_time=e.data.data.end_time,t.name=e.data.data.name,t.prize_description=e.data.data.prize_description,t.start_time=e.data.data.start_time})).then((function(){t.getRankingFun()})).catch((function(t){return console.log("ex: ",t),!!t.notRealPromiseException}))},getLatelyProgressingFun:function(){var t=this;t.$api.recommend.getLatelyProgressing().then((function(e){if(!e.data.data)return t.$toast({message:"无进行中活动",position:"middle"}),Promise.reject({notRealPromiseException:!0});t.campaignId=e.data.data.id,t.activity_description=e.data.data.activity_description,t.end_time=e.data.data.end_time,t.name=e.data.data.name,t.prize_description=e.data.data.prize_description,t.start_time=e.data.data.start_time})).then((function(){t.getRankingFun()})).catch((function(t){return console.log("ex: ",t),!!t.notRealPromiseException}))},getRankingFun:function(){var t=this,e=this;e.$api.recommend.getRanking({campaignId:e.campaignId}).then((function(e){console.log(e),t.rankingList=e.data.data.sort(t.compareUp(e.data.data,"rank"))}))},compareUp:function(t,e){return"number"!==typeof t[0][e]?function(t,a){var i=t[e],n=a[e];return i.localeCompare(n)}:function(t,a){var i=t[e],n=a[e];return i-n}},changeType:function(t){this.tabType=t,1===this.tabType?this.getLatelyProgressingFun():this.getLatelyEndedFun()}}},o=r,d=(a("7c41"),a("2877")),l=Object(d["a"])(o,i,n,!1,null,"4a4e4312",null);e["default"]=l.exports},"7c41":function(t,e,a){"use strict";var i=a("f643"),n=a.n(i);n.a},"8c64":function(t,e,a){},9243:function(t,e,a){"use strict";var i=a("8c64"),n=a.n(i);n.a},b4c22:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAAAyCAMAAADYxuFLAAAAM1BMVEVHcEwAhvIAhfIAhvIAhvMAhvIAhfMAhvMAhfIAhPcAhfIAhvIAhvMAhPQAhvIAhvIAhvIMJNnAAAAAEHRSTlMAvEeImecq8zkLc2CsG8nYBmLGsgAAA6pJREFUaN7tmImOtCoQhWXfod7/af8SBcHWbrdJbm48mcx0TxQ+i7LqwDC8evXq1av/q6Ssn3R4Zkhqls+W/hW4gDJNghuTBF5pGfAlLKDCs7w1uhXcAdmLIP/U+hoCqSxdEEsEOPAvEARasSPcRijbg0sFVs8y/cUMPqQ+BvSgCi4FMY9gFHQB1/0ABESVOgjOAZJuwE1qsPQanNNen+D58WiN8wxhVwHXoFJWAV9mssfAMcIElKvgIQFhsxTINZJdPfYWOOZaIcdkkdPfVYbrko7qOvh46XhtBtcCvKkLHYdL4Hin0uUZ2OaNz4Ajrs7gBle5Lqn5LC5HwQfn69BTSUnmT8AHM6UKrqjD1JkG8eCHq+ATAeM54ziLOf24ex58KiYm10YqcsozEOEeeFxXIP4H4BKLS6nj+H5aLDZKDnfBqW7kvoK7UMROgEuPNVHVzhkiJBByq9D9KIdmnnwGN31afwM/3YBwModrKmzT8gOGP2416J8NyE//JOfBIylKx8DdOFdyZumcgStQ9mjL7ydhEZWugJ/NcSNAeb20/GDHVeO3/JA8BL5q+UfAA7PLiM6ZxmRhKwLBbtq4Y+BqciY/wFtWDPJHSyzgIXFqbhv751KlY6XjAm0ElWKfNFTv5ZRsNO07FoUdcGvd8sMugHesckyHvd6/a8XlupK0JtLvgN9uQD2rS3EvrnTX7ksQflYBL9/JDjh1KBD4iwEZP+td8AjcFpE2x7+wrgwp+5G4da4Ei4v0e5diayWb8ViBp/MNKMJXmZvgMiP/BBdgXZE/Bk5EqzGlOt0Fd9nd/ARvG/BZd1jagns0VXx+636By7Y+XwHHAiZEeAZcTntkMRwAd+0IF8A5PriDaJ4A13nzNr/sBZwyWcFFU6J4a5fPg/O8deCQwn1wrcZ9n5n3yAXc1UTsvUpqjxPOggcyW3Dkd3fBncoxLKdABdzWXayGWDYYOfzDVXBjVbXg6LqJvgWupnfclfOgAs5BbrXo/pTrDHhg6NKWyzX2A0LX4CrOKp2zfE8rcAfTWZarhxQFfLFdLTg6KX0FfMuCO6zoojOKJ7yKn9auOdDS0/EE/qmwWjb7qtjfbo9Ubp62LbjL28Bkm1Qxs0qqhPn7OlXoeF6Lq1aPEPN2JSWx3cylKg9oscpwAofOinWO7PZKOC+WdiRVpRP5VYqqLrvyW3YtNrttGhUqsa1Ku9zuPkzkN1slv+4JbhzqH994hM7z397IvHr16tWr/57+AaU4RfXo41uiAAAAAElFTkSuQmCC"},c466:function(t,e,a){"use strict";function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd HH:mm:ss",a={"M+":t.getMonth()+1,"d+":t.getDate(),"H+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(var i in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),a)new RegExp("("+i+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?a[i]:("00"+a[i]).substr((""+a[i]).length)));return e}function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd HH:mm:ss";return i(new Date(t),e)}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd";return i(new Date(t),e)}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"HH:mm:ss";return i(new Date(t),e)}a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"d",(function(){return c}))},f643:function(t,e,a){}}]);