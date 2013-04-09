//>>built
define("dojox/timing/Streamer",["./_base"],function(){dojo.experimental("dojox.timing.Streamer");dojox.timing.Streamer=function(c,d,e,f,b){var g=[];this.interval=e||1E3;this.minimumSize=f||10;this.inputFunction=c||function(){};this.outputFunction=d||function(){};var a=new dojox.timing.Timer(this.interval);this.setInterval=function(b){this.interval=b;a.setInterval(b)};this.onTick=function(){};this.start=function(){if("function"==typeof this.inputFunction&&"function"==typeof this.outputFunction)a.start();
else throw Error("You cannot start a Streamer without an input and an output function.");};this.onStart=function(){};this.stop=function(){a.stop()};this.onStop=function(){};a.onTick=this.tick;a.onStart=this.onStart;a.onStop=this.onStop;b&&g.concat(b)};return dojox.timing.Streamer});