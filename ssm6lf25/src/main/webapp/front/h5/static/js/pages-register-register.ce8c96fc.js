(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-register"],{"09a2":function(e,t,r){var i=r("d1ea");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=r("4f06").default;n("0fd8ea7d",i,!0,{sourceMap:!1,shadowMode:!1})},3735:function(e,t,r){"use strict";r.r(t);var i=r("7226"),n=r("48c7");for(var a in n)"default"!==a&&function(e){r.d(t,e,(function(){return n[e]}))}(a);r("4857");var o,l=r("f0c5"),u=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,"2d5caed4",null,!1,i["a"],o);t["default"]=u.exports},4857:function(e,t,r){"use strict";var i=r("09a2"),n=r.n(i);n.a},"48c7":function(e,t,r){"use strict";r.r(t);var i=r("4e2d"),n=r.n(i);for(var a in i)"default"!==a&&function(e){r.d(t,e,(function(){return i[e]}))}(a);t["default"]=n.a},"4e2d":function(e,t,r){"use strict";var i=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("28a5"),r("96cf");var n=i(r("3b8d")),a={data:function(){return{chezhuxingbieOptions:[],chezhuxingbieIndex:0,ruleForm:{},tableName:""}},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:[],t=uni.getStorageSync("loginTable"),this.tableName=t,"chezhu"==this.tableName&&(this.chezhuxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.chezhuxingbieOptions[0]),this.styleChange();case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{chezhuxingbieChange:function(e){this.chezhuxingbieIndex=e.target.value,this.ruleForm.xingbie=this.chezhuxingbieOptions[this.chezhuxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.zhanghao||"chezhu"!=this.tableName){e.next=3;break}return this.$utils.msg("账号不能为空"),e.abrupt("return");case 3:if(this.ruleForm.mima||"chezhu"!=this.tableName){e.next=6;break}return this.$utils.msg("密码不能为空"),e.abrupt("return");case 6:if("chezhu"!=this.tableName||!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){e.next=9;break}return this.$utils.msg("手机应输入手机格式"),e.abrupt("return");case 9:if(this.ruleForm.shangjiazhanghao||"shangjia"!=this.tableName){e.next=12;break}return this.$utils.msg("商家账号不能为空"),e.abrupt("return");case 12:if(this.ruleForm.mima||"shangjia"!=this.tableName){e.next=15;break}return this.$utils.msg("密码不能为空"),e.abrupt("return");case 15:return e.next=17,this.$api.register("".concat(this.tableName),this.ruleForm);case 17:this.$utils.msgBack("注册成功");case 19:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}};t.default=a},7226:function(e,t,r){"use strict";var i,n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"content"},[r("v-uni-view",{staticClass:"logo"},[r("v-uni-image",{style:{boxShadow:"0 0 16rpx #59f43e",borderColor:"#ccc",borderRadius:"40rpx",borderWidth:"2rpx",width:"160rpx",borderStyle:"solid",url:"http://codegen.caihongy.cn/20210109/b69290a5ed224b8ea7c7b8e71fd51035.jpg",isShow:!0,height:"160rpx"},attrs:{src:"http://codegen.caihongy.cn/20210109/b69290a5ed224b8ea7c7b8e71fd51035.jpg",mode:"aspectFill"}})],1),"chezhu"==e.tableName?r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-input",{staticClass:"uni-input",style:{borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"16rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"账号"},model:{value:e.ruleForm.zhanghao,callback:function(t){e.$set(e.ruleForm,"zhanghao",t)},expression:"ruleForm.zhanghao"}})],1):e._e(),"chezhu"==e.tableName?r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-input",{staticClass:"uni-input",style:{borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"16rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"密码"},model:{value:e.ruleForm.mima,callback:function(t){e.$set(e.ruleForm,"mima",t)},expression:"ruleForm.mima"}})],1):e._e(),"chezhu"==e.tableName?r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-input",{staticClass:"uni-input",style:{borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"16rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"姓名"},model:{value:e.ruleForm.xingming,callback:function(t){e.$set(e.ruleForm,"xingming",t)},expression:"ruleForm.xingming"}})],1):e._e(),"chezhu"==e.tableName?r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-input",{staticClass:"uni-input",style:{borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"16rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"年龄"},model:{value:e.ruleForm.nianling,callback:function(t){e.$set(e.ruleForm,"nianling",t)},expression:"ruleForm.nianling"}})],1):e._e(),"chezhu"==e.tableName?r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-picker",{attrs:{value:e.chezhuxingbieIndex,range:e.chezhuxingbieOptions},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.chezhuxingbieChange.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"uni-input",style:{borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"16rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.ruleForm.xingbie?e.ruleForm.xingbie:"请选择性别"))])],1)],1):e._e(),"chezhu"==e.tableName?r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-input",{staticClass:"uni-input",style:{borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"16rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"手机"},model:{value:e.ruleForm.shouji,callback:function(t){e.$set(e.ruleForm,"shouji",t)},expression:"ruleForm.shouji"}})],1):e._e(),"chezhu"==e.tableName?r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-input",{staticClass:"uni-input",style:{borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"16rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"车牌号"},model:{value:e.ruleForm.chepaihao,callback:function(t){e.$set(e.ruleForm,"chepaihao",t)},expression:"ruleForm.chepaihao"}})],1):e._e(),"shangjia"==e.tableName?r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-input",{staticClass:"uni-input",style:{borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"16rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"商家账号"},model:{value:e.ruleForm.shangjiazhanghao,callback:function(t){e.$set(e.ruleForm,"shangjiazhanghao",t)},expression:"ruleForm.shangjiazhanghao"}})],1):e._e(),"shangjia"==e.tableName?r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-input",{staticClass:"uni-input",style:{borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"16rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"密码"},model:{value:e.ruleForm.mima,callback:function(t){e.$set(e.ruleForm,"mima",t)},expression:"ruleForm.mima"}})],1):e._e(),"shangjia"==e.tableName?r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-input",{staticClass:"uni-input",style:{borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"16rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"商家姓名"},model:{value:e.ruleForm.shangjiaxingming,callback:function(t){e.$set(e.ruleForm,"shangjiaxingming",t)},expression:"ruleForm.shangjiaxingming"}})],1):e._e(),"shangjia"==e.tableName?r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-input",{staticClass:"uni-input",style:{borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"16rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"联系方式"},model:{value:e.ruleForm.lianxifangshi,callback:function(t){e.$set(e.ruleForm,"lianxifangshi",t)},expression:"ruleForm.lianxifangshi"}})],1):e._e(),"shangjia"==e.tableName?r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-input",{staticClass:"uni-input",style:{borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"16rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"停车场名称"},model:{value:e.ruleForm.tingchechangmingcheng,callback:function(t){e.$set(e.ruleForm,"tingchechangmingcheng",t)},expression:"ruleForm.tingchechangmingcheng"}})],1):e._e(),"shangjia"==e.tableName?r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-input",{staticClass:"uni-input",style:{borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"16rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"位置"},model:{value:e.ruleForm.weizhi,callback:function(t){e.$set(e.ruleForm,"weizhi",t)},expression:"ruleForm.weizhi"}})],1):e._e(),r("v-uni-view",[r("v-uni-button",{style:{borderColor:"#ccc",backgroundColor:"rgba(23, 152, 242, 1)",borderRadius:"20rpx",color:"rgba(255, 255, 255, 1)",borderWidth:"2rpx",fontSize:"32rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.register.apply(void 0,arguments)}}},[e._v("注册")])],1)],1)},a=[];r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return i}))},d1ea:function(e,t,r){var i=r("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-2d5caed4]{padding:%?100?%}.content[data-v-2d5caed4]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}.logo[data-v-2d5caed4]{text-align:center}.logo uni-image[data-v-2d5caed4]{height:%?200?%;width:%?200?%;margin:0 0 %?60?%}.uni-form-item[data-v-2d5caed4]{margin-bottom:%?40?%;padding:0}.uni-form-item .uni-input[data-v-2d5caed4]{font-size:%?30?%;padding:7px 0}uni-button[type="primary"][data-v-2d5caed4]{background-color:#b49950;border-radius:0;font-size:%?34?%;margin-top:%?60?%}.links[data-v-2d5caed4]{text-align:center;margin-top:%?40?%;font-size:%?26?%;color:#999}.links uni-view[data-v-2d5caed4]{display:inline-block;vertical-align:top;margin:0 %?10?%}.links .link-highlight[data-v-2d5caed4]{color:#b49950}.picker-select-input[data-v-2d5caed4]{line-height:%?88?%}',""]),e.exports=t}}]);