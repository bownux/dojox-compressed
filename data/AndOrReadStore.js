//>>built
define("dojox/data/AndOrReadStore","dojo/_base/declare,dojo/_base/lang,dojo/data/ItemFileReadStore,dojo/data/util/filter,dojo/_base/array,dojo/_base/json".split(","),function(t,e,v,u,w,q){return t("dojox.data.AndOrReadStore",[v],{_containsValue:function(l,p,q,i){return w.some(this.getValues(l,p),function(c){if(e.isString(i))return eval(i);if(null!==c&&!e.isObject(c)&&i){if(c.toString().match(i))return!0}else return q===c?!0:!1})},filter:function(l,p,t){var i=[];if(l.query){var c=q.fromJson(q.toJson(l.query));
if("object"==typeof c){var a=0,f;for(f in c)a++;if(1<a&&c.complexQuery){var a=c.complexQuery,m=!1;for(f in c)if("complexQuery"!==f){m||(a="( "+a+" )",m=!0);var j=l.query[f];e.isString(j)&&(j="'"+j+"'");a+=" AND "+f+":"+j;delete c[f]}c.complexQuery=a}}f=l.queryOptions?l.queryOptions.ignoreCase:!1;"string"!=typeof c&&(c=q.toJson(c),c=c.replace(/\\\\/g,"\\"));var c=c.replace(/\\"/g,'"'),a=e.trim(c.replace(/{|}/g,"")),b;if(a.match(/"? *complexQuery *"?:/)){for(var a=e.trim(a.replace(/"?\s*complexQuery\s*"?:/,
"")),m=["'",'"'],k,n=!1,c=0;c<m.length;c++)if(j=a.indexOf(m[c]),b=a.indexOf(m[c],1),k=a.indexOf(":",1),0===j&&-1!=b&&k<b){n=!0;break}n&&(a=a.replace(/^\"|^\'|\"$|\'$/g,""))}m=a;j=/^>=|^<=|^<|^>|^,|^NOT |^AND |^OR |^\(|^\)|^!|^&&|^\|\|/i;b=k="";var g=-1,n=!1,s="",d="";b="";for(c=0;c<p.length;++c){var h=!0,r=p[c];if(null===r)h=!1;else{a=m;for(k="";0<a.length&&!n;){for(b=a.match(j);b&&!n;)a=e.trim(a.replace(b[0],"")),b=e.trim(b[0]).toUpperCase(),b="NOT"==b?"!":"AND"==b||","==b?"&&":"OR"==b?"||":b,b=
" "+b+" ",k+=b,b=a.match(j);if(0<a.length)if(h=(b=a.match(/:|>=|<=|>|</g))&&b.shift(),g=a.indexOf(h),-1==g){n=!0;break}else{s=e.trim(a.substring(0,g).replace(/\"|\'/g,""));a=e.trim(a.substring(g+h.length));if(b=a.match(/^\'|^\"/)){b=b[0];g=a.indexOf(b);b=a.indexOf(b,g+1);if(-1==b){n=!0;break}d=a.substring(g+h.length,b);a=b==a.length-1?"":e.trim(a.substring(b+1));b=":"!=h?this.getValue(r,s)+h+d:u.patternToRegExp(d,f)}else{if(b=a.match(/\s|\)|,/)){for(var d=Array(b.length),o=0;o<b.length;o++)d[o]=a.indexOf(b[o]);
g=d[0];if(1<d.length)for(o=1;o<d.length;o++)g=Math.min(g,d[o]);d=e.trim(a.substring(0,g));a=e.trim(a.substring(g))}else d=e.trim(a),a="";":"!=h?b=this.getValue(r,s)+h+d:(b=u.patternToRegExp(d,f),console.log("regex value: ",d," regex pattern: ",b))}k+=this._containsValue(r,s,d,b)}}h=eval(k)}h&&i.push(r)}n&&(i=[],console.log("The store's _fetchItems failed, probably due to a syntax error in query."))}else for(c=0;c<p.length;++c)f=p[c],null!==f&&i.push(f);t(i,l)}})});