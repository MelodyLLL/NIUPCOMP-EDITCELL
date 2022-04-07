/*!
  * niucomp-editcell v1.0.2
  * (c) 2022 test
  * @license ISC
  */
import{defineComponent as e,reactive as t,ref as n,computed as o,nextTick as l,resolveComponent as i,openBlock as d,createElementBlock as a,createElementVNode as u,normalizeStyle as r,createBlock as c,withCtx as p,withKeys as s,renderSlot as f,createCommentVNode as y,resolveDynamicComponent as m,mergeProps as v,withDirectives as C,createVNode as h,vShow as w}from"vue";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var g=function(){return g=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},g.apply(this,arguments)},b=e({name:"EditableCell",inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},toolTipContent:{type:String,default:"可编辑的单元格"},toolTipDelay:{type:Number,default:500},toolTipPlacement:{type:[Object,String],default:"top-start"},showInput:{type:Boolean,default:!1},editableComponent:{type:String,default:"el-input"},closeEvent:{type:String,default:"onBlur"},showEditBtn:{type:Boolean,default:!1},controlVal:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},contentStyle:{type:[String,Object],default:""}},emits:["input"],setup:function(e,i){var d=t({editMode:!1});console.log(11);var a=n(null),u=function(){d.editMode=!1},r=o({get:function(){return e.modelValue},set:function(t){e.controlVal||i.emit("input",t)}}),c=o((function(){var t;return g(((t={})[e.closeEvent]=u,t),i.attrs)}));return{state:d,model:r,newAttrs:c,inputRef:a,onInputChange:function(e){i.emit("input",e)},onFieldClick:function(){e.disabled||(d.editMode=!0,l((function(){a.value&&a.value.focus()})))},onInputExit:u}}}),E={class:"editCell"};!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===n&&o.firstChild?o.insertBefore(l,o.firstChild):o.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}(".editCell[data-v-4eea0fd2] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin: auto;\n  justify-content: center;\n}\n.editCell[data-v-4eea0fd2] .editBtn[data-v-4eea0fd2] {\n  margin-left: 8px;\n}\n"),b.render=function(e,t,n,o,l,g){var b=i("el-tooltip"),k=i("el-button");return d(),a("div",E,[u("div",{style:r(e.showEditBtn?void 0:{flexGrow:1}),onClick:t[2]||(t[2]=function(){return e.onFieldClick&&e.onFieldClick.apply(e,arguments)})},[e.state.editMode||e.showInput?y("v-if",!0):(d(),c(b,{key:0,"show-after":e.toolTipDelay,content:e.toolTipContent},{default:p((function(){return[u("div",{tabindex:"0",style:r(e.contentStyle),onKeyup:t[0]||(t[0]=s((function(){return e.onFieldClick&&e.onFieldClick.apply(e,arguments)}),["enter"]))},[f(e.$slots,"content")],36)]})),_:3},8,["show-after","content"])),e.state.editMode||e.showInput?(d(),c(m(e.editableComponent),v({key:1,ref:"inputRef"},e.newAttrs,{modelValue:e.model,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.model=t}),onFocus:e.onFieldClick,onKeyup:s(e.onInputExit,["enter"])}),{default:p((function(){return[f(e.$slots,"edit-component-slot")]})),_:3},16,["modelValue","onFocus","onKeyup"])):y("v-if",!0)],4),C(h(k,{class:"editBtn",icon:"Edit",type:"text",onClick:e.onFieldClick},null,8,["onClick"]),[[w,!e.state.editMode&&!e.showInput&&e.showEditBtn&&!e.disabled]])])},b.__scopeId="data-v-4eea0fd2",b.__file="src/component/EditCell.vue";var k=[b],B=function(e){B.installed||k.map((function(t){return e.component(t.name,t)}))};"undefined"!=typeof window&&window.Vue&&B(window.Vue);var x={install:B,EditCell:b};export{x as default};
