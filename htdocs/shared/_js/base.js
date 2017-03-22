/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright ﾂｩ 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright ﾂｩ 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
 
window.onunload = function() {};

var kurosawa= {};

kurosawa.top = {
	init : function() {
		this.randomImg();
		$('#logoImg').animate({'opacity':1},1000, this.delay());
	},
	delay : function () {
		setTimeout('kurosawa.top.show()' , 1500);
	},
	show : function() {
		$('header#header').animate({'opacity':1},1500);
		$('#navCol').animate({'opacity':1},1500);
		$('footer#footer').animate({'opacity':1},1500);
		$('#topImgs').delay(1500).animate({'opacity':1},1500,'easeOutQuad');
		$('#logoImg').animate({'opacity':0},1000,'easeOutCubic');
	},
	randomImg : function (argument) {
		// body...
		var ranNum = Math.floor(Math.random()*5)+1;
		var imgSrc = 'TOP_0'+ ranNum +'.jpg';
		$('#topImgs').attr('src','/shared/imgs/top/' + imgSrc);

	}
}

kurosawa.works = {
	init : function (argument) {
		// body...
		this.setEvent();

	},
	setEvent : function() {
		var self = this;
		$('html,body').mousewheel(function(event, delta) {
			this.scrollLeft -= (delta * 30);
			event.preventDefault();
		}); 

		$(window).resize(function() {
			var sizeObj = self.getSize_();
			$('#worksBody table img').height(sizeObj.iH);
		}).resize();

		$('#wNav a').hover(
			function () {
				// body...
				if($(this).hasClass('current')) return false;
				$('span',this).stop().animate({'opacity':1},500);
			},
			function () {
				// body...
				if($(this).hasClass('current')) return false;
				$('span',this).stop().animate({'opacity':0},700);
			}
		).click(function() {
			if($(this).hasClass('current')) return false;

			if($(this).attr('rel') == 'left' || $(this).attr('rel') == 'right') {
				//console.debug($(this).attr('rel'));
				var durationTime = 500;
				var easingType = 'easeInOutCirc';
				var num = '';
				$(this).attr('rel') == 'left' ?  num = '-=475' : num = '+=475';
				$('html,body').animate({ scrollLeft: num }, durationTime, easingType);
				return false;
			}

			$('#wNav a').removeClass('current').find('span').css({opacity:0});
			var cID = $(this).addClass('current').attr('rel');
			//alert(cID);
			$('#worksBody ul').animate({'opacity':0},700,function() {
				$(this).find('li').css({display:'none'}).end().css({opacity:1}).find('.c-' + cID).fadeIn(500);
			});
			return false;
		});
	},
	getSize_ : function() {
		var wH = $(window).height();
		var iH = wH - (129*2);
		return {
			wH : wH,
			iH : iH
		}
	}
}

kurosawa.util= {
	_ua:function(){return{ltIE6:"undefined"==typeof window.addEventListener&&"undefined"==typeof document.documentElement.style.maxHeight,ltIE7:"undefined"==typeof window.addEventListener&&"undefined"==typeof document.querySelectorAll,ltIE8:"undefined"==typeof window.addEventListener&&"undefined"==typeof document.getElementsByClassName,IE:document.uniqueID,Firefox:window.sidebar,Opera:window.opera,Webkit:!document.uniqueID&&!window.opera&&!window.sidebar&&window.localStorage&&"undefined"==
typeof window.orientation,Mobile:"undefined"!=typeof window.orientation}},
	showContent:function(){kurosawa.util._ua().ltIE7||$("#contents .inner").animate({opacity:1})},
	block: function(msec){
		var dt= new Date();
		dt.setTime(dt.getTime()+msec);
		while(new Date().getTime()<dt.getTime());
	},
	choice: function(array){
		return array[Math.random()*array.length|0];
	},
	getID: function(index){
		return index<9 ? "0"+(Number(index)+1) : ""+(Number(index)+1);	
	},
	getIndex: function(id){
		return Number(id.replace(/^0/, ""))-1;
	},
	loadScripts: function(scripts, callback){

		var load= function(){

			if(!scripts||scripts.length<=0){
				callback();
				return;
			}
			
			var script= document.createElement("script");
			script.onload= function(){
				load();
			};
			script.src= scripts.shift();
			
			document.getElementsByTagName("head")[0].appendChild(script);
		};
		
		load();
	},
	loadImages: function(images, callback){
	
		var load= function(){
		
			if(!images||images.length<=0){
				callback();
				return;
			}
		
			var image= new Image();
			image.onload= function(){
				load();
			};
			image.src= images.shift();
		
		};
	
		load();
	}
};

$(document).ready(function(){

	// $('a[href="#"]').click(function(e){
	// 	return false;
	// });
	
	var pageID = $('body').attr('id');
	
	switch(pageID) {
		case 'pagetop': //top
			kurosawa.top.init();
			break;
		case 'pageblog': //BLOG
		  	kurosawa.util.showContent();
			$('#navBlog a').click(function() { return false;}).addClass('current');
			break;
		case 'pageabout': //ABOUT
			kurosawa.util.showContent();
			$('#navAbout a').click(function() { return false;}).addClass('current');
			break;
		case 'pagenews': //NEWS
			kurosawa.util.showContent();
			$('#navNews a').click(function() { return false;}).addClass('current');
			break;
		case 'pageworks': //WORKS 
			kurosawa.util.showContent();
			kurosawa.works.init();
			$('#navWorks a').click(function() { return false;}).addClass('current');
			break;
		case 'pagepost':
			kurosawa.util.showContent();
			break;
	}
	
	$('#navGloval li a:not(.current)').hover(
		function() {
			$('.hover',this).stop().animate({'opacity':1},500);
		},
		function () {
			$('.hover',this).stop().animate({'opacity':0},700);
		}
	).click(function() {
		var selflink = this.href;
		$('#navGloval li .hover').stop().animate({'opacity':0},500);
		$('#contents .inner').animate({'opacity':0},500,'easeOutCubic',function() {
			location.href = selflink;
		});
		return false;
	});
	
});