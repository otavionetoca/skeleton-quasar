(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["1660a238"],{f98b:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("app-form",{ref:"form",attrs:{status:e.status},on:{"form:status":e.eventStatus,"form:submit":e.actionSubmit,"form:reset":e.actionReset},scopedSlots:e._u([{key:"body",fn:function(t){return[i("app-field",{attrs:{as:"input",name:"id",errors:e.errors.id,label:e.$t("example.textWithTemplateForm.fields.id"),width:"100",hidden:!1,readonly:!0},model:{value:e.storage.id,callback:function(t){e.$set(e.storage,"id",t)},expression:"storage.id"}}),i("app-field",{attrs:{as:"input",errors:e.errors.name,name:"name",label:e.$t("example.textWithTemplateForm.fields.name"),width:"50"},model:{value:e.storage.name,callback:function(t){e.$set(e.storage,"name",t)},expression:"storage.name"}}),i("app-field",{attrs:{as:"number",errors:e.errors.age,name:"age",label:e.$t("example.textWithTemplateForm.fields.age"),width:"50"},model:{value:e.storage.age,callback:function(t){e.$set(e.storage,"age",t)},expression:"storage.age"}}),i("app-field",{attrs:{as:"checkbox",errors:e.errors.active,name:"active",label:e.$t("example.textWithTemplateForm.fields.active"),width:"45",hidden:e.activeHidden},on:{input:e.configureChangeActive},model:{value:e.storage.active,callback:function(t){e.$set(e.storage,"active",t)},expression:"storage.active"}}),i("app-field",{attrs:{as:"radio",errors:e.errors.gender,name:"gender",label:e.$t("example.textWithTemplateForm.fields.gender"),width:"55"},on:{input:e.configureChangeGender},model:{value:e.storage.gender,callback:function(t){e.$set(e.storage,"gender",t)},expression:"storage.gender"}}),i("app-field",{attrs:{as:"text",errors:e.status.description,name:"description",label:e.descriptionLabel,hidden:e.descriptionHidden},on:{input:e.configureChangeDescription},model:{value:e.storage.description,callback:function(t){e.$set(e.storage,"description",t)},expression:"storage.description"}})]}},{key:"buttons",fn:function(){return[i("app-button",{attrs:{icon:"reply",label:e.$t("prototype.actions.back.label")},on:{click:e.actionBack}}),i("app-button",{attrs:{primary:"",submit:"",icon:"save",label:e.$t("prototype.actions.save.label"),position:"right"}}),i("app-button",{attrs:{icon:"cancel",label:e.$t("prototype.actions.cancel.label"),position:"right"},on:{click:e.actionCancel}}),i("app-button",{attrs:{reset:"",icon:"360",label:e.$t("prototype.actions.reset.label"),color:"red","text-color":"white",position:"right"}})]},proxy:!0},{key:"debuggers",fn:function(t){return[i("app-debugger",e._b({attrs:{label:"Record"}},"app-debugger",{inspect:e.storage},!1)),i("app-debugger",e._b({attrs:{label:"Schema"}},"app-debugger",{inspect:t},!1)),i("app-debugger",e._b({attrs:{label:"Errors"}},"app-debugger",{inspect:e.errors},!1))]}}]),model:{value:e.storage,callback:function(t){e.storage=t},expression:"storage"}})},o=[],a=(i("7f7f"),i("097d"),{recordName:"record",errorsName:"errors",props:{service:{type:Object,required:!0},path:{type:String,default:""},fallback:{type:String,default:""}},computed:{debuggers:function(){return this.$store.getters["app/getDebuggers"]}},data:function(){return{record:{},errors:{},hooks:{}}},methods:{actionSubmit:function(e){this.form().$hasError()?this.$message.error(this.$t("prototype.actions.save.validation")):(this.$q.loading.show(),this.debuggers&&window.alert(JSON.stringify(this[this.$options.recordName])),this.attempt(e).finally(this.lastly))},lastly:function(){this.$q.loading.hide()},attempt:function(e){throw new Error("Please override this method and answer a promise")},actionBack:function(){this.$browse(-1)},actionCancel:function(){this.$browse(this.fallback)},eventStatus:function(e){this[this.$options.errorsName]=e},actionReset:function(e){this.form().$reset(this.$payload)},form:function(){for(var e in this.$children)if(this.$children.hasOwnProperty(e)&&"AppForm"===this.$children[e].$options.name)return this.$children[e];throw new Error('This mixin need an "AppForm" to works')},hook:function(e,t){this.hooks[e]=t},triggerHook:function(e){if(this.hooks[e]){var t=this.hooks[e];"function"===typeof t&&t.call(this)}}}}),s=i("2000"),n=i("fe03"),c={extends:a,mixins:[s["a"]],name:"TestWithTemplateForm",recordName:"storage",schema:{id:{},name:{default:"William"},age:{validate:{required:!0}},active:{default:!1},gender:{attrs:{options:n["gender"]}},description:{}},data:function(){return{storage:{},errors:{},status:{description:[]},activeHidden:!1,descriptionLabel:"",descriptionHidden:!1}},methods:{attempt:function(e){return this.$service.create(this[this.$options.recordName]).then(this.success).catch(this.fail)},success:function(e){this.debuggers&&window.alert(JSON.stringify(e)),this.$message.success(this.$lang("prototype.operations.create.success"))},fail:function(){},configureChangeDescription:function(e){this.status.description=void 0,this.originalLabel||(this.originalLabel=this.descriptionLabel);var t=e;t||(t=this.originalLabel,this.originalLabel=void 0),this.descriptionLabel=t},configureChangeActive:function(e){this.descriptionHidden=e},configureChangeGender:function(e){this.activeHidden="male"===e}},created:function(){this.hook("fetch:record",function(){var e=this;window.setTimeout(function(){e.status.description=["Houston, we have a problem"]},500)}),this.descriptionLabel=this.$t("example.textWithTemplateForm.fields.description")},mounted:function(){this.fetchRecord(1)}},l=c,p=i("2877"),d=Object(p["a"])(l,r,o,!1,null,"192d12b6",null);t["default"]=d.exports},fe03:function(e,t,i){"use strict";i.r(t),i.d(t,"gender",function(){return r}),i.d(t,"yesNo",function(){return o});var r=[{value:"male",label:"prototype.options.gender.male"},{value:"female",label:"prototype.options.gender.female"}],o=[{value:!0,label:"prototype.options.yesNo.yes"},{value:!1,label:"prototype.options.yesNo.no"}]}}]);