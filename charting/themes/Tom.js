//>>built
define("dojox/charting/themes/Tom",["../Theme","dojox/gfx/gradutils","./common"],function(e,g,a){var b=e.generateGradient,c={type:"linear",space:"shape",x1:0,y1:0,x2:0,y2:100};a.Tom=new e({chart:{fill:"#181818",stroke:{color:"#181818"},pageStyle:{backgroundColor:"#181818",backgroundImage:"none",color:"#eaf2cb"}},plotarea:{fill:"#181818"},axis:{stroke:{color:"#a0a68b",width:1},tick:{color:"#888c76",position:"center",font:"normal normal normal 7pt Helvetica, Arial, sans-serif",fontColor:"#888c76"}},
series:{stroke:{width:2.5,color:"#eaf2cb"},outline:null,font:"normal normal normal 8pt Helvetica, Arial, sans-serif",fontColor:"#eaf2cb"},marker:{stroke:{width:1.25,color:"#eaf2cb"},outline:{width:1.25,color:"#eaf2cb"},font:"normal normal normal 8pt Helvetica, Arial, sans-serif",fontColor:"#eaf2cb"},seriesThemes:[{fill:b(c,"#bf9e0a","#ecc20c")},{fill:b(c,"#73b086","#95e5af")},{fill:b(c,"#c7212d","#ed2835")},{fill:b(c,"#87ab41","#b6e557")},{fill:b(c,"#b86c25","#d37d2a")}],markerThemes:[{fill:"#bf9e0a",
stroke:{color:"#ecc20c"}},{fill:"#73b086",stroke:{color:"#95e5af"}},{fill:"#c7212d",stroke:{color:"#ed2835"}},{fill:"#87ab41",stroke:{color:"#b6e557"}},{fill:"#b86c25",stroke:{color:"#d37d2a"}}]});a.Tom.next=function(f,b,c){var a="line"==f;if(a||"area"==f){var d=this.seriesThemes[this._current%this.seriesThemes.length];d.fill.space="plot";if(a)d.stroke={width:4,color:d.fill.colors[0].color};a=e.prototype.next.apply(this,arguments);delete d.outline;delete d.stroke;d.fill.space="shape";return a}return e.prototype.next.apply(this,
arguments)};a.Tom.post=function(a,b){a=e.prototype.post.apply(this,arguments);if(("slice"==b||"circle"==b)&&a.series.fill&&"radial"==a.series.fill.type)a.series.fill=g.reverse(a.series.fill);return a};return a.Tom});