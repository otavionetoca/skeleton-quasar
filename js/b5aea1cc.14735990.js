(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["b5aea1cc"],{2555:function(t,e,r){"use strict";var o=r("35a5"),s=r.n(o);s.a},"35a5":function(t,e,r){},cc9c:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-page",{staticClass:"flex row items-center justify-center",attrs:{padding:""}},[r("q-card",{staticClass:"app-login-card"},[r("q-card-section",{staticClass:"text-center"},[r("div",[r("img",{staticClass:"app-login-logo",attrs:{alt:"",src:"statics/quasar-logo.png"}})]),r("div",{staticClass:"app-beauty-label"},[t._v("\n        Quasar Skeleton\n      ")]),r("small",[t._v("Just an example about the possibilities")])]),r("q-separator"),r("q-card-section",[r("form",{on:{submit:function(e){return e.preventDefault(),t.attempt(e)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 q-pa-sm"},[r("q-input",{attrs:{label:"Login",type:"email"},scopedSlots:t._u([{key:"prepend",fn:function(){return[r("q-icon",{attrs:{name:"mail"}})]},proxy:!0}]),model:{value:t.record.login,callback:function(e){t.$set(t.record,"login",e)},expression:"record.login"}})],1),r("div",{staticClass:"col-12 q-pa-sm q-pb-md"},[r("q-input",{attrs:{label:"Password",type:"password"},scopedSlots:t._u([{key:"prepend",fn:function(){return[r("q-icon",{attrs:{name:"vpn_key"}})]},proxy:!0}]),model:{value:t.record.password,callback:function(e){t.$set(t.record,"password",e)},expression:"record.password"}})],1)]),r("hr"),r("div",{staticClass:"q-pa-sm"},[r("q-btn",{staticClass:"full-width",attrs:{color:"primary",label:"Sign In",size:"md",type:"submit"}})],1)])])],1)],1)},s=[],i=r("b5ae"),a=(r("cadf"),r("456d"),r("ac6a"),r("097d"),r("faf1")),n={service:a["default"].build(),data:function(){return{recordDevelopment:{},loading:!1}},methods:{attemptFail:function(){console.log("~> override attemptFail")},attempting:function(){console.log("~> override attempting")},attemptSuccess:function(){console.log("~> override attemptSuccess")},attemptError:function(){console.log("~> override attemptError")},attempt:function(){var t=this;if(this.$v.$touch(),this.$v.$error)this.attemptFail();else{this.setLoading(!0);try{this.attempting().then(function(t){return t.data}).then(this.attemptSuccess).catch(this.attemptError).finally(function(){return t.setLoading(!1)})}catch(e){console.error("You need implement 'attempting' and return a promise")}}},setLoading:function(t){this.loading=!!t},follow:function(t){this.$route.query.redirect&&(t=this.$route.query.redirect),this.$browse(t)},fillRecordDevelopment:function(){var t=this;Object.keys(this.recordDevelopment).forEach(function(e){t.record[e]=t.recordDevelopment[e],console.log("~> recordDevelopment:",e,"=>",t.record[e])})}},mounted:function(){!this.$dev&&this.recordDevelopment&&this.record||this.fillRecordDevelopment()}},c={name:"AuthLogin",mixins:[n],data:function(){return{recordDevelopment:{login:"you@gmail.com",password:"@aq1sw2de3"},record:{login:"",password:""}}},validations:function(){return{record:{login:{required:i["required"]},password:{required:i["required"]}}}},methods:{attempting:function(){return this.$service.login(this.record.login,this.record.password)},attemptSuccess:function(t){var e=this;this.$store.dispatch("auth/login",t).then(function(){return e.follow("/dashboard")})},attemptError:function(){this.$message.error(this.$t("auth.sigin.error"))}},created:function(){var t=this;if(this.$store.getters["app/getClipboard"]){var e=this.$store.getters["app/getClipboard"],r=function(){e.login&&(t.record.login=e.login),e.password&&(t.record.password=e.password)};this.$store.dispatch("app/clearClipboard").then(r)}}},l=c,d=(r("2555"),r("2877")),p=Object(d["a"])(l,o,s,!1,null,"383d7d80",null);e["default"]=p.exports}}]);