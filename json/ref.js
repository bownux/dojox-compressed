//>>built
define("dojox/json/ref","dojo/_base/array,dojo/_base/json,dojo/_base/kernel,dojo/_base/lang,dojo/date/stamp,dojox".split(","),function(B,s,E,w,y,t){w.getObject("json",!0,t);return t.json.ref={resolveJson:function(f,h){function m(d,z,i,a,o,j){var c,x,b,i=n in d?d[n]:i;if(n in d||void 0!==i&&a)i=(p+i).replace(u,"$2$3");a=j||d;if(void 0!==i){if(t)d.__id=i;if(h.schemas&&!(d instanceof Array)&&(b=i.match(/^(.+\/)[^\.\[]*$/)))o=h.schemas[b[1]];if(l[i]&&d instanceof Array==l[i]instanceof Array)a=l[i],delete a.$ref,
delete a._loadObject,x=!0;else if(b=o&&o.prototype)k.prototype=b,a=new k;l[i]=a;if(r)r[i]=h.time}for(;o;){if(b=o.properties)for(c in d){var v=b[c];v&&"date-time"==v.format&&"string"==typeof d[c]&&(d[c]=y.fromISOString(d[c]))}o=o["extends"]}o=d.length;for(c in d){if(c==o)break;if(d.hasOwnProperty(c)){b=d[c];if("object"==typeof b&&b&&!(b instanceof Date)&&"__parent"!=c){g=b[q]||s&&b[n];if((!g||!b.__parent)&&d!=e)b.__parent=a;if(g)if(delete d[c],j=g.toString().replace(/(#)([^\.\[])/,"$1.$2").match(/(^([^\[]*\/)?[^#\.\[]*)#?([\.\[].*)?/),
l[(p+g).replace(u,"$2$3")]?g=l[(p+g).replace(u,"$2$3")]:(g="$"==j[1]||"this"==j[1]||""==j[1]?f:l[(p+j[1]).replace(u,"$2$3")])&&j[3]&&j[3].replace(/(\[([^\]]+)\])|(\.?([^\.\[]+))/g,function(a,c,b,d,e){g=g&&g[b?b.replace(/[\"\'\\]/,""):e]}),g)b=g;else{if(!z){var A;A||e.push(a);A=!0;b=m(b,!1,b[q],!0,v);b._loadObject=h.loader}}else z||(b=m(b,e==d,void 0===i?void 0:D(i,c),!1,v,a!=d&&"object"==typeof a[c]&&a[c]))}d[c]=b;if(a!=d&&!a.__isDirty&&(j=a[c],a[c]=b,x&&b!==j&&!a._loadObject&&!("_"==c.charAt(0)&&
"_"==c.charAt(1))&&"$ref"!=c&&!(b instanceof Date&&j instanceof Date&&b.getTime()==j.getTime())&&!("function"==typeof b&&"function"==typeof j&&b.toString()==j.toString())&&l.onUpdate))l.onUpdate(a,c,j,b)}}if(x&&(n in d||a instanceof Array))for(c in a){if(!a.__isDirty&&a.hasOwnProperty(c)&&!d.hasOwnProperty(c)&&!("_"==c.charAt(0)&&"_"==c.charAt(1))&&!(a instanceof Array&&isNaN(c))){if(l.onUpdate&&"_loadObject"!=c&&"_idAttr"!=c)l.onUpdate(a,c,a[c],void 0);for(delete a[c];a instanceof Array&&a.length&&
void 0===a[a.length-1];)a.length--}}else if(l.onLoad)l.onLoad(a);return a}var h=h||{},n=h.idAttribute||"id",q=this.refAttribute,s=h.idAsRef,p=h.idPrefix||"",t=h.assignAbsoluteIds,l=h.index||{},r=h.timeStamps,g,e=[],u=/^(.*\/)?(\w+:\/\/)|[^\/\.]+\/\.\.\/|^.*\/(\/)/,D=this._addProp,k=function(){};f&&"object"==typeof f&&(f=m(f,!1,h.defaultId,!0),m(e,!1));return f},fromJson:function(f,h){try{var m=eval("("+f+")")}catch(n){throw new SyntaxError("Invalid JSON string: "+n.message+" parsing: "+f);}return m?
this.resolveJson(m,h):m},toJson:function(f,h,m,n){function q(e,f,g){if("object"==typeof e&&e){if(e instanceof Date)return'"'+y.toISOString(e,{zulu:!0})+'"';var k=e.__id;if(k){if("#"!=f&&(w&&!k.match(/#/)||l[k]))return g=k,"#"!=k.charAt(0)&&(g=e.__clientId==k?"cid:"+k:k.substring(0,m.length)==m?k.substring(m.length):k),e={},e[C]=g,q(e,"#");f=k}else e.__id=f,r[f]=e;l[f]=e;var g=g||"",d=h?g+s.toJsonIndentStr:"",n=h?"\n":"",k=h?" ":"";if(e instanceof Array)return"["+B.map(e,function(a,e){var b=q(a,p(f,
e),d);"string"!=typeof b&&(b="undefined");return n+d+b}).join(","+k)+n+g+"]";var i=[],a;for(a in e)if(e.hasOwnProperty(a)){var o;if("number"==typeof a)o='"'+a+'"';else if("string"==typeof a&&("_"!=a.charAt(0)||"_"!=a.charAt(1)))o=s._escapeString(a);else continue;var j=q(e[a],p(f,a),d);"string"==typeof j&&i.push(n+d+o+":"+k+j)}return"{"+i.join(","+k)+n+g+"}"}return"function"==typeof e&&t.json.ref.serializeFunctions?e.toString():s.toJson(e)}var w=this._useRefs,p=this._addProp,C=this.refAttribute,m=
m||"",l={},r={},f=q(f,"#","");if(!n)for(var g in r)delete r[g].__id;return f},_addProp:function(f,h){return f+(f.match(/#/)?1==f.length?"":".":"#")+h},refAttribute:"$ref",_useRefs:!1,serializeFunctions:!1}});