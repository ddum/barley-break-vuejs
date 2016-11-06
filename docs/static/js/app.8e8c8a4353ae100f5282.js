webpackJsonp([1,0],[function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var a=n(25),r=s(a),i=n(13),u=s(i);new r.default({el:"#app",render:function(t){return t(u.default)}})},function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(17),r=s(a),i=n(18),u=s(i),o=n(16),l=s(o),d=n(14),c=s(d),f=n(15),m=s(f);e.default={name:"app",components:{"github-button":r.default,"restart-button":u.default,steps:l.default,cell:c.default,status:m.default},data:function(){return{title:"Barley-Break",arr_key:{37:"KEY_LEFT",38:"KEY_UP",39:"KEY_RIGHT",40:"KEY_DOWN"},step:10,game:{map:[],xNull:3,yNull:3}}},beforeMount:function(){document.addEventListener("keyup",this.handleKeyUp),this.restartGame()},beforeDestroy:function(){document.removeEventListener("keyup",this.handleKeyUp)},methods:{restartGame:function(){this.step=0;var t=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];t=_.shuffle(t),t.push(0),this.game={map:_.chunk(t,4),xNull:3,yNull:3}},checkEndGame:function(){var t=this.game.map[0].concat(this.game.map[1],this.game.map[2],this.game.map[3]);return t.splice(15,1),t.every(function(t,e){return t==++e})},handleKeyUp:function(t){t.preventDefault();var e=t.which;if("undefined"!=typeof this.arr_key[e]){this.step+=1;var n=this.arr_key[e];"KEY_UP"==n&&3!=this.game.yNull?this.game.map[this.game.yNull][this.game.xNull]=this.game.map[++this.game.yNull][this.game.xNull]:"KEY_DOWN"==n&&0!==this.game.yNull?this.game.map[this.game.yNull][this.game.xNull]=this.game.map[--this.game.yNull][this.game.xNull]:"KEY_LEFT"==n&&3!=this.game.xNull?this.game.map[this.game.yNull][this.game.xNull]=this.game.map[this.game.yNull][++this.game.xNull]:"KEY_RIGHT"==n&&0!==this.game.xNull&&(this.game.map[this.game.yNull][this.game.xNull]=this.game.map[this.game.yNull][--this.game.xNull]),this.game.map[this.game.yNull][this.game.xNull]=0}}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"cell",props:["number"]}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"status"}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["step"],name:"steps"}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"github-button",data:function(){return{href:"https://github.com/ddum/barley-break-vuejs"}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"restart-button",methods:{restart:function(){this.$emit("restart")}}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){var s,a;n(8),s=n(1);var r=n(20);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,t.exports=s},function(t,e,n){var s,a;n(12),s=n(2);var r=n(24);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,t.exports=s},function(t,e,n){var s,a;n(7),s=n(3);var r=n(19);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,t.exports=s},function(t,e,n){var s,a;n(9),s=n(4);var r=n(21);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,t.exports=s},function(t,e,n){var s,a;n(10),s=n(5);var r=n(22);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,t.exports=s},function(t,e,n){var s,a;n(11),s=n(6);var r=n(23);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,t.exports=s},function(module,exports){module.exports={render:function(){with(this)return _m(0)},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"mdl-dialog__overlay"},[_h("dialog",{staticClass:"mdl-dialog bb__status"},[_h("span",["GAME OVER"])])])}]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"bb demo-card-square mdl-card mdl-shadow--2dp",attrs:{id:"app"},on:{keyup:function(t){38===t.keyCode&&handleUp(t)}}},[_h("div",{staticClass:"mdl-card__title mdl-color--indigo"},[_h("h1",{staticClass:"mdl-card__title-text mdl-color-text--white"},[_s(title)])])," ",_h("div",{staticClass:"mdl-card__supporting-text"},[_l(game.map,function(t){return[_l(t,function(t){return _h("cell",{attrs:{number:t}})})]})," ",_h("status",{directives:[{name:"show",rawName:"v-show",value:checkEndGame(),expression:"checkEndGame()"}]})])," ",_h("div",{staticClass:"mdl-card__actions mdl-card--border"},[_h("restart-button",{on:{restart:restartGame}})," ",_h("steps",{attrs:{step:step}})])," ",_h("div",{staticClass:"mdl-card__menu"},[_h("github-button")])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("span",{staticClass:"bb__steps"},[_s(step)])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("button",{staticClass:"mdl-button mdl-button--icon mdl-color-text--white"},[_h("a",{attrs:{href:href}},[_m(0)])])},staticRenderFns:[function(){with(this)return _h("i",{staticClass:"material-icons github"})}]}},function(module,exports){module.exports={render:function(){with(this)return _h("a",{staticClass:"mdl-button mdl-button--colored mdl-button--raised",on:{click:restart}},["\n  Restart\n"])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{class:{bb__cell:!0,bb__cell_empty:!+number}},[_s(number)])},staticRenderFns:[]}}]);
//# sourceMappingURL=app.8e8c8a4353ae100f5282.js.map