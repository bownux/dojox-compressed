//>>built
define("dojox/editor/plugins/AutoUrlLink","dojo,dijit,dojox,dijit/_editor/range,dijit/_editor/selection,dijit/_editor/_Plugin,dijit/form/Button,dojo/_base/connect,dojo/_base/declare,dojo/string".split(","),function(e,d,h,o,p,n){e.declare("dojox.editor.plugins.AutoUrlLink",[n],{_template:"<a _djrealurl='${url}' href='${url}'>${url}</a>",setEditor:function(a){this.editor=a;e.isIE||(e.some(a._plugins,function(a){return a.isInstanceOf(d._editor.plugins.EnterKeyHandling)?(this.blockNodeForEnter=a.blockNodeForEnter,
!0):!1},this),this.connect(a,"onKeyPress","_keyPress"),this.connect(a,"onClick","_recognize"),this.connect(a,"onBlur","_recognize"))},_keyPress:function(a){var f=e.keys,c=a.keyCode,b=a.charCode;b==f.SPACE||a.ctrlKey&&(118==b||86==b)?setTimeout(e.hitch(this,"_recognize"),0):c==f.ENTER?setTimeout(e.hitch(this,function(){this._recognize({enter:!0})}),0):this._saved=this.editor.window.getSelection().anchorNode},_recognize:function(a){var f=this._template,c=a?a.enter:!1,a=this.editor,b=a.window.getSelection();
console.log("_recognize: isEnter = ",c,", selection is ",b,b.anchorNode,this._findLastEditingNode(b.anchorNode));if(b){var c=c?this._findLastEditingNode(b.anchorNode):this._saved||b.anchorNode,k=this._saved=b.anchorNode,l=b.anchorOffset;if(3==c.nodeType&&!this._inLink(c)){var g=!1,d=this._findUrls(c,k,l),i=a.document.createRange(),j,m=0,h=k==c;for(j=d.shift();j;)i.setStart(c,j.start),i.setEnd(c,j.end),b.removeAllRanges(),b.addRange(i),a.execCommand("insertHTML",e.string.substitute(f,{url:i.toString()})),
m+=j.end,j=d.shift(),g=!0;if(!(h&&0>=(l-=m))&&g)try{i.setStart(k,0),i.setEnd(k,l),b.removeAllRanges(),b.addRange(i),a._sCall("collapse",[])}catch(n){}}}},_inLink:function(a){for(var f=this.editor.editNode,c=!1,b,a=a.parentNode;a&&a!==f;){b=a.tagName?a.tagName.toLowerCase():"";if("a"==b){c=!0;break}a=a.parentNode}return c},_findLastEditingNode:function(a){var f=d.range.BlockTagNames,c=this.editor.editNode,b;if(!a)return a;if("BR"==this.blockNodeForEnter&&(!(b=d.range.getBlockAncestor(a,null,c).blockNode)||
"LI"!=b.tagName.toUpperCase()))for(;(a=a.previousSibling)&&3!=a.nodeType;);else{for(a=(b||(b=d.range.getBlockAncestor(a,null,c).blockNode))&&"LI"==b.tagName.toUpperCase()?b:d.range.getBlockAncestor(a,null,c).blockNode;(a=a.previousSibling)&&(!a.tagName||!a.tagName.match(f)););if(a)for(a=a.lastChild;a&&!(3==a.nodeType&&""!=e.trim(a.nodeValue));)a=1==a.nodeType?a.lastChild:a.previousSibling}return a},_findUrls:function(a,f,c){var b=/(http|https|ftp):\/\/[^\s]+/ig,e=[],d=0,g=a.nodeValue,h;for(a===f&&
c<g.length&&(g=g.substr(0,c));null!=(a=b.exec(g));)if(0==a.index||" "==(h=g.charAt(a.index-1))||"\u00a0"==h)e.push({start:a.index-d,end:a.index+a[0].length-d}),d=a.index+a[0].length;return e}});e.subscribe(d._scopeName+".Editor.getPlugin",null,function(a){if(!a.plugin&&"autourllink"===a.args.name.toLowerCase())a.plugin=new h.editor.plugins.AutoUrlLink});return h.editor.plugins.AutoUrlLink});