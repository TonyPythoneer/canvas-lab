!function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){function main(){var canvasApp=new CanvasApp(150,150),drawFactory=new DrawFactory(canvasApp.canvas),rects={redRect:new Rect({x:10,y:10,w:55,h:50},{r:200,g:0,b:0}),blueRect:new Rect({x:30,y:30,w:55,h:50},{r:0,g:0,b:200,a:.5})};drawFactory.drawRect(rects.redRect),drawFactory.drawRect(rects.blueRect)}var CanvasApp=function(){function CanvasApp(w,h){void 0===w&&(w=300),void 0===h&&(h=150),this._body=document.body,this._canvas=document.createElement("canvas"),this._body.appendChild(this._canvas),this._canvas.width=w,this._canvas.height=h}return Object.defineProperty(CanvasApp.prototype,"canvas",{get:function(){return this._canvas},enumerable:!0,configurable:!0}),CanvasApp}(),Rect=function(){function Rect(rect,style){this._rect=rect,this._style=style}return Object.defineProperty(Rect.prototype,"rect",{get:function(){return this._rect},enumerable:!0,configurable:!0}),Object.defineProperty(Rect.prototype,"style",{get:function(){var _a=this._style,r=_a.r,g=_a.g,b=_a.b,a=_a.a,strStyle=a?"rgba("+r+", "+g+", "+b+", "+a+")":"rgb("+r+", "+g+", "+b+")";return strStyle},enumerable:!0,configurable:!0}),Rect}(),DrawFactory=function(){function DrawFactory(canvas){this._ctx=canvas.getContext("2d")}return DrawFactory.prototype.drawRect=function(Rect){var parsedStyle=Rect.style,_a=Rect.rect,x=_a.x,y=_a.y,w=_a.w,h=_a.h;this._ctx.fillStyle=parsedStyle,this._ctx.fillRect(x,y,w,h)},DrawFactory}();main()},{}]},{},[1]);
