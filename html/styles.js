//>>built
define("dojox/html/styles",["dojo/_base/lang","dojo/_base/array","dojo/_base/window","dojo/_base/sniff"],function(m,i,g,j){var c=m.getObject("dojox.html",!0),f={},e={},l=[];c.insertCssRule=function(a,b,d){var d=c.getDynamicStyleSheet(d),k=a+" {"+b+"}";console.log("insertRule:",k);j("ie")?(d.cssText+=k,console.log("ss.cssText:",d.cssText)):d.sheet?d.sheet.insertRule(k,d._indicies.length):d.appendChild(g.doc.createTextNode(k));d._indicies.push(a+" "+b);return a};c.removeCssRule=function(a,b,d){var c,
e=-1,g,h;for(g in f)if(!(d&&d!==g)){c=f[g];for(h=0;h<c._indicies.length;h++)if(a+" "+b===c._indicies[h]){e=h;break}if(-1<e)break}if(!c)return console.warn("No dynamic style sheet has been created from which to remove a rule."),!1;if(-1===e)return console.warn("The css rule was not found and could not be removed."),!1;c._indicies.splice(e,1);j("ie")?c.removeRule(e):c.sheet&&c.sheet.deleteRule(e);return!0};c.modifyCssRule=function(){};c.getStyleSheet=function(a){if(f[a||"default"])return f[a||"default"];
if(!a)return!1;var b=c.getStyleSheets();if(b[a])return c.getStyleSheets()[a];for(var d in b)if(b[d].href&&-1<b[d].href.indexOf(a))return b[d];return!1};c.getDynamicStyleSheet=function(a){a||(a="default");if(!f[a]){if(g.doc.createStyleSheet){if(f[a]=g.doc.createStyleSheet(),9>j("ie"))f[a].title=a}else f[a]=g.doc.createElement("style"),f[a].setAttribute("type","text/css"),g.doc.getElementsByTagName("head")[0].appendChild(f[a]),console.log(a," ss created: ",f[a].sheet);f[a]._indicies=[]}return f[a]};
c.enableStyleSheet=function(a){if(a=c.getStyleSheet(a))a.sheet?a.sheet.disabled=!1:a.disabled=!1};c.disableStyleSheet=function(a){if(a=c.getStyleSheet(a))a.sheet?a.sheet.disabled=!0:a.disabled=!0};c.activeStyleSheet=function(a){var b=c.getToggledStyleSheets(),d;if(1===arguments.length)i.forEach(b,function(b){b.disabled=b.title===a?!1:!0});else for(d=0;d<b.length;d++)if(!1===b[d].disabled)return b[d];return!0};c.getPreferredStyleSheet=function(){};c.getToggledStyleSheets=function(){var a;if(!l.length){var b=
c.getStyleSheets();for(a in b)b[a].title&&l.push(b[a])}return l};c.getStyleSheets=function(){if(e.collected)return e;i.forEach(g.doc.styleSheets,function(a){var b=a.sheet?a.sheet:a,a=b.title||b.href;j("ie")?-1===b.cssText.indexOf("#default#VML")&&(b.href?e[a]=b:b.imports.length?i.forEach(b.imports,function(a){e[a.title||a.href]=a}):e[a]=b):(e[a]=b,e[a].id=b.ownerNode.id,i.forEach(b.cssRules,function(a){if(a.href)e[a.href]=a.styleSheet,e[a.href].id=b.ownerNode.id}))});e.collected=!0;return e};return c});