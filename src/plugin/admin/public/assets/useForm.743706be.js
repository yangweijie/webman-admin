var t=(c,o,n)=>new Promise((r,i)=>{var f=s=>{try{a(n.next(s))}catch(l){i(l)}},e=s=>{try{a(n.throw(s))}catch(l){i(l)}},a=s=>s.done?r(s.value):Promise.resolve(s.value).then(f,e);a((n=n.apply(c,o)).next())});import{r as d,bR as u,k as m,cz as h,V as y,cA as F,cx as w,ac as p}from"./index.82c0877f.js";function V(c){const o=d(null),n=d(!1);function r(){return t(this,null,function*(){const e=m(o);return e||w("The form instance has not been obtained, please make sure that the form has been rendered when performing the form operation!"),yield p(),e})}function i(e){u(()=>{o.value=null,n.value=null}),!(m(n)&&h()&&e===m(o))&&(o.value=e,n.value=!0,y(()=>c,()=>{c&&e.setProps(F(c))},{immediate:!0,deep:!0}))}return[i,{scrollToField:(e,a)=>t(this,null,function*(){(yield r()).scrollToField(e,a)}),setProps:e=>t(this,null,function*(){(yield r()).setProps(e)}),updateSchema:e=>t(this,null,function*(){(yield r()).updateSchema(e)}),resetSchema:e=>t(this,null,function*(){(yield r()).resetSchema(e)}),clearValidate:e=>t(this,null,function*(){(yield r()).clearValidate(e)}),resetFields:()=>t(this,null,function*(){r().then(e=>t(this,null,function*(){yield e.resetFields()}))}),removeSchemaByFiled:e=>t(this,null,function*(){var a;(a=m(o))==null||a.removeSchemaByFiled(e)}),getFieldsValue:()=>{var e;return(e=m(o))==null?void 0:e.getFieldsValue()},setFieldsValue:e=>t(this,null,function*(){(yield r()).setFieldsValue(e)}),appendSchemaByField:(e,a,s)=>t(this,null,function*(){(yield r()).appendSchemaByField(e,a,s)}),submit:()=>t(this,null,function*(){return(yield r()).submit()}),validate:e=>t(this,null,function*(){return(yield r()).validate(e)}),validateFields:e=>t(this,null,function*(){return(yield r()).validateFields(e)})}]}export{V as u};