//>>built
define("dojox/charting/BidiSupport","../main,dojo/_base/lang,dojo/dom-style,dojo/_base/array,dojo/_base/sniff,dojo/dom,dojo/dom-construct,dojox/gfx,dojox/gfx/_gfxBidiSupport,./Chart,./axis2d/common,dojox/string/BidiEngine,dojox/lang/functional".split(","),function(d,e,i,f,m,o,p,j,k,n,l,q,r){var s=new q,d=e.getObject("charting",!0,d);e.extend(n,{textDir:"",getTextDir:function(b){(b="auto"==this.textDir?s.checkContextual(b):this.textDir)||(b=i.get(this.node,"direction"));return b},postscript:function(b,
a){var c=a?a.textDir?/^(ltr|rtl|auto)$/.test(a.textDir)?a.textDir:null:"":"";this.textDir=c=c?c:i.get(this.node,"direction");this.surface.textDir=c;this.htmlElementsRegistry=[];this.truncatedLabelsRegistry=[]},setTextDir:function(b){if(b==this.textDir)return this;if(null!=(/^(ltr|rtl|auto)$/.test(b)?b:null)){this.textDir=b;this.surface.setTextDir(b);this.truncatedLabelsRegistry&&"auto"==b&&f.forEach(this.truncatedLabelsRegistry,function(a){var b=this.getTextDir(a.label);a.element.textDir!=b&&a.element.setShape({textDir:b})},
this);var a=r.keys(this.axes);if(0<a.length){if(f.forEach(a,function(a){a=this.axes[a];if(a.htmlElements[0])a.dirty=!0,a.render(this.dim,this.offsets)},this),this.title){var a="canvas"==j.renderer||!m("ie")&&!m("opera")?"html":"gfx",c=j.normalizedLength(j.splitFontString(this.titleFont).size);p.destroy(this.chartTitle);this.chartTitle=null;this.chartTitle=l.createText[a](this,this.surface,this.dim.width/2,"top"==this.titlePos?c+this.margins.t:this.dim.height-this.margins.b,"middle",this.title,this.titleFont,
this.titleFontColor)}}else f.forEach(this.htmlElementsRegistry,function(a){var c="auto"==b?this.getTextDir(a[4]):b;a[0].children[0]&&a[0].children[0].dir!=c&&(o.destroy(a[0].children[0]),a[0].children[0]=l.createText.html(this,this.surface,a[1],a[2],a[3],a[4],a[5],a[6]).children[0])},this)}},truncateBidi:function(b,a,c){"gfx"==c&&(this.truncatedLabelsRegistry.push({element:b,label:a}),"auto"==this.textDir&&b.setShape({textDir:this.getTextDir(a)}));if("html"==c&&"auto"==this.textDir)b.children[0].dir=
this.getTextDir(a)}});k=function(b,a,c,d,g){if(c){var h=b.prototype[a];b.prototype[a]=function(){var a;d&&(a=d.apply(this,arguments));a=h.apply(this,a);g&&(a=g.call(this,a,arguments));return a}}else h=e.clone(b[a]),b[a]=function(){d&&d.apply(this,arguments);var a=h.apply(this,arguments);g&&g(a,arguments);return a}};d.axis2d&&d.axis2d.Default&&k(d.axis2d.Default,"labelTooltip",!0,function(b,a,c,d,g,h){var e="rtl"==i.get(a.node,"direction"),f="rtl"==a.getTextDir(c);f&&!e&&(c="<span dir='rtl'>"+c+"</span>");
!f&&e&&(c="<span dir='ltr'>"+c+"</span>");return arguments},null);k(l.createText,"html",!1,null,function(b,a){a[0].htmlElementsRegistry.push([b,a[2],a[3],a[4],a[5],a[6],a[7]])});return n});