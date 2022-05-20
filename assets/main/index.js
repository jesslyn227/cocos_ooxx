System.register("chunks:///_virtual/Game.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,r,n,i,a,o,s,u,c,l,p,m,f,g;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,n=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){a=e.cclegacy,o=e._decorator,s=e.Sprite,u=e.Label,c=e.Button,l=e.resources,p=e.ImageAsset,m=e.SpriteFrame,f=e.director,g=e.Component}],execute:function(){var h,v,d,b,S,y,G;a._RF.push({},"abeb2csAtFJKYIkzbWyNMAg","Game",void 0);var R=o.ccclass,C=o.property,M=0,O=[],z=[],F=!0;e("Game",(h=R("Game"),v=C(s),d=C(u),h((y=t((S=function(e){function t(){for(var t,r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return t=e.call.apply(e,[this].concat(a))||this,n(i(t),"GameOverSprite",y,i(t)),n(i(t),"ResultMsg",G,i(t)),t}r(t,e);var a=t.prototype;return a.start=function(){M=0,F=!0,O=[],z=[],this.GameOverSprite.node.active=!1},a.gameStart=function(){var e=this;if(0!=F){var t;if(t=(M+=1)%2!=0?"Circle":"Cross",this.node.getComponent(c).enabled=!1,l.load(t,p,(function(t,r){e.node.getComponent(s).spriteFrame=m.createWithImage(r)})),"Cross"==t?z.push(this.node.name):O.push(this.node.name),M>4){var r="",n=null;"Cross"==t?(n=this.gameResult(z),r="查理布朗"):(n=this.gameResult(O),r="史努比"),1==n?(F=!1,this.ResultMsg.string=r+" 獲勝!!",this.GameOverSprite.node.active=!0):2==n&&(this.ResultMsg.string="和局!",this.GameOverSprite.node.active=!0)}}},a.gameResult=function(e){var t=[],r=0,n=0;return[["1","2","3"],["4","5","6"],["7","8","9"],["1","4","7"],["2","5","8"],["3","6","9"],["1","5","9"],["3","5","7"]].forEach((function(i){t=i.filter((function(t){return-1!==e.indexOf(t)})),9==M?(3==t.length?r=1:n++,8==n&&(r=2)):3==t.length&&(r=1)})),r},a.reStart=function(){f.loadScene("Game")},a.backMenu=function(){f.loadScene("HomePage")},t}(g)).prototype,"GameOverSprite",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=t(S.prototype,"ResultMsg",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=S))||b));a._RF.pop()}}}));

System.register("chunks:///_virtual/HomePage.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var o,t,r,n,c;return{setters:[function(e){o=e.inheritsLoose},function(e){t=e.cclegacy,r=e._decorator,n=e.director,c=e.Component}],execute:function(){var i;t._RF.push({},"f5b71Zpdw1HZ5FhOs/koqGw","HomePage",void 0);var s=r.ccclass;r.property,e("HomePage",s("HomePage")(i=function(e){function t(){return e.apply(this,arguments)||this}return o(t,e),t.prototype.homeClick=function(e){n.loadScene("Game")},t}(c))||i);t._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Game.ts","./HomePage.ts"],(function(){"use strict";return{setters:[null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});