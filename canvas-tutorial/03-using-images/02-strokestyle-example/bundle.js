!function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){function main(){for(var canvasApp=new CanvasApp(150,150),drawFactory=new DrawFactory(canvasApp.canvas),i=0;6>i;i++)for(var j=0;6>j;j++){var rgb={r:Math.floor(255-42.5*i),g:Math.floor(255-42.5*j),b:0};drawFactory.strokeStyle("rgb("+rgb.r+", "+rgb.g+", "+rgb.b+")").beginPath().arc(12.5+25*j,12.5+25*i,10,0,2*Math.PI,!0).stroke()}}var CanvasApp=function(){function CanvasApp(w,h){void 0===w&&(w=300),void 0===h&&(h=150),this._body=document.body,this._canvas=document.createElement("canvas"),this._body.appendChild(this._canvas),this._canvas.width=w,this._canvas.height=h}return Object.defineProperty(CanvasApp.prototype,"canvas",{get:function(){return this._canvas},enumerable:!0,configurable:!0}),CanvasApp}(),DrawFactory=function(){function DrawFactory(canvas){this._ctx=canvas.getContext("2d")}return Object.defineProperty(DrawFactory.prototype,"ctx",{get:function(){return this._ctx},enumerable:!0,configurable:!0}),DrawFactory.prototype.beginPath=function(){return this._ctx.beginPath(),this},DrawFactory.prototype.moveTo=function(x,y){return this._ctx.moveTo(x,y),this},DrawFactory.prototype.lineTo=function(x,y){return this._ctx.lineTo(x,y),this},DrawFactory.prototype.fill=function(){return this._ctx.fill(),this},DrawFactory.prototype.arc=function(x,y,radius,startAngle,endAngle,anticlockwise){return this._ctx.arc(x,y,radius,startAngle,endAngle,anticlockwise),this},DrawFactory.prototype.stroke=function(){return this._ctx.stroke(),this},DrawFactory.prototype.closePath=function(){return this._ctx.closePath(),this},DrawFactory.prototype.fillStyle=function(style){return this._ctx.fillStyle=style,this},DrawFactory.prototype.fillRect=function(x,y,w,h){return this._ctx.fillRect(x,y,w,h),this},DrawFactory.prototype.strokeStyle=function(style){return this._ctx.strokeStyle=style,this},DrawFactory}();main()},{}]},{},[1]);
