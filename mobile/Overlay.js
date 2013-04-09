//>>built
define("dojox/mobile/Overlay","dojo/_base/declare,dojo/_base/lang,dojo/_base/sniff,dojo/_base/window,dojo/dom-class,dojo/dom-geometry,dojo/dom-style,dojo/window,dijit/_WidgetBase,dojo/_base/array,dijit/registry".split(","),function(k,e,f,h,c,i,j,l,m,n,o){return k("dojox.mobile.Overlay",m,{baseClass:"mblOverlay mblOverlayHidden",_reposition:function(){var a=i.position(this.domNode),b=l.getBox();if(a.y+a.h!=b.h||"absolute"!=j.get(this.domNode,"position")&&3>f("android"))a.y=b.t+b.h-a.h,j.set(this.domNode,
{position:"absolute",top:a.y+"px",bottom:"auto"});return a},show:function(a){n.forEach(o.findWidgets(this.domNode),function(a){a&&"auto"==a.height&&"function"==typeof a.resize&&a.resize()});var b=this._reposition();a&&(a=i.position(a),b.y<a.y&&(h.global.scrollBy(0,a.y+a.h-b.y),this._reposition()));var d=this.domNode;c.replace(d,["mblCoverv","mblIn"],["mblOverlayHidden","mblRevealv","mblOut","mblReverse","mblTransition"]);setTimeout(e.hitch(this,function(){var a=this.connect(d,"webkitTransitionEnd",
function(){this.disconnect(a);c.remove(d,["mblCoverv","mblIn","mblTransition"]);this._reposition()});c.add(d,"mblTransition")}),100);var g=!1;this._moveHandle=this.connect(h.doc.documentElement,f("touch")?"ontouchmove":"onmousemove",function(){g=!0});this._repositionTimer=setInterval(e.hitch(this,function(){g?g=!1:this._reposition()}),50);return b},hide:function(){var a=this.domNode;if(this._moveHandle)this.disconnect(this._moveHandle),this._moveHandle=null,clearInterval(this._repositionTimer),this._repositionTimer=
null;f("webkit")?(c.replace(a,["mblRevealv","mblOut","mblReverse"],["mblCoverv","mblIn","mblOverlayHidden","mblTransition"]),setTimeout(e.hitch(this,function(){var b=this.connect(a,"webkitTransitionEnd",function(){this.disconnect(b);c.replace(a,["mblOverlayHidden"],["mblRevealv","mblOut","mblReverse","mblTransition"])});c.add(a,"mblTransition")}),100)):c.replace(a,["mblOverlayHidden"],["mblCoverv","mblIn","mblRevealv","mblOut","mblReverse"])},onBlur:function(){return!1}})});