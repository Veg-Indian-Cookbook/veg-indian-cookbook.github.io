(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{310:function(e,t,n){var content=n(314);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(63).default)("5d848c5a",content,!0,{sourceMap:!1})},311:function(e,t,n){var content=n(316);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(63).default)("49cc00b1",content,!0,{sourceMap:!1})},313:function(e,t,n){"use strict";var r=n(310);n.n(r).a},314:function(e,t,n){(t=n(62)(!1)).push([e.i,".card[data-v-384cf6a0]{width:200px;height:230px}.image-container[data-v-384cf6a0]{height:170px}.image[data-v-384cf6a0]{width:100%;position:relative;top:50%;transform:translateY(-50%)}.text-container[data-v-384cf6a0]{margin-top:10px}",""]),e.exports=t},315:function(e,t,n){"use strict";var r=n(311);n.n(r).a},316:function(e,t,n){(t=n(62)(!1)).push([e.i,".time-taken[data-v-bdd0916e]{width:160px;min-width:160px;height:40px;line-height:40px;margin:0 10px}.el-select[data-v-bdd0916e],.el-slider[data-v-bdd0916e]{width:30%;min-width:260px;margin-left:10px;margin-right:10px}.row1[data-v-bdd0916e],.row2[data-v-bdd0916e]{flex-flow:row wrap}.recipe-card[data-v-bdd0916e]{margin:10px}",""]),e.exports=t},322:function(e,t,n){"use strict";n.r(t);n(92),n(93),n(28),n(15),n(64),n(47);var r=n(5),c={props:{recipe:{type:String,required:!0}}},o=(n(313),n(31)),l={components:{RecipeCard:Object(o.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("router-link",{attrs:{to:"/"+this.recipe}},[t("el-card",{staticClass:"card"},[t("div",{staticClass:"image-container"},[t("img",{staticClass:"image",attrs:{src:"https://veg-indian-cookbook.github.io/recipes/"+this.recipe+"/photo.jpg"}})]),this._v(" "),t("div",{staticClass:"text-container"},[t("span",{staticClass:"text"},[this._v(this._s(this.recipe))])])])],1)}),[],!1,null,"384cf6a0",null).exports},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,t.next=3,n.$get("https://veg-indian-cookbook.github.io/recipes/recipes.json");case 3:return r=t.sent,t.abrupt("return",{recipes:r,ingredients:Object.keys(r).reduce((function(e,t){return e.concat(r[t].ingredients.filter((function(t){return!e.includes(t)})))}),[])});case 5:case"end":return t.stop()}}),t)})))()},data:function(){return{timeTaken:20,selectedIngredients:[],recipes:{},ingredients:[]}},methods:{getRecipes:function(){var e=this,t=function(t){return t.filter((function(t){return e.recipes[t].timeTaken<e.timeTaken}))};return 0===this.selectedIngredients.length?t(Object.keys(this.recipes)):t(Object.keys(this.recipes)).filter((function(t){return e.selectedIngredients.every((function(n){return e.recipes[t].ingredients.includes(n)}))}))}}},d=(n(315),Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("el-row",{staticClass:"row1",attrs:{type:"flex"}},[n("p",{staticClass:"time-taken"},[e._v("Time Taken: "+e._s(e.timeTaken)+" mins")]),e._v(" "),n("el-slider",{attrs:{min:10,max:120,step:10,"show-stops":"",offset:1},model:{value:e.timeTaken,callback:function(t){e.timeTaken=t},expression:"timeTaken"}}),e._v(" "),n("el-select",{attrs:{filterable:"",multiple:"",placeholder:"Ingredients"},model:{value:e.selectedIngredients,callback:function(t){e.selectedIngredients=t},expression:"selectedIngredients"}},e._l(e.ingredients,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),e._v(" "),n("el-row",{staticClass:"row2",attrs:{type:"flex"}},e._l(e.getRecipes(),(function(e){return n("div",{key:e,staticClass:"recipe-card"},[n("RecipeCard",{attrs:{recipe:e}})],1)})),0)],1)}),[],!1,null,"bdd0916e",null));t.default=d.exports}}]);