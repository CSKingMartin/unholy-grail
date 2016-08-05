(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
//tabs.js
jQuery(function($) {
	$(".tabs").each(function() {
		$(".tabs__item").each(function() {
			new Tab(this);
		})
	});
});

function Tab(element) {
	this.cacheElements(element.parentElement);
	this.updateEvents();

	this.state = {
		activeTab: 0
	};
}

Tab.prototype = {

	cacheElements: function(el) {
		this.el = el;
		this.tabs = this.el.querySelectorAll('.tabs__item');
	},

	updateEvents: function() {
		var self = this;

		var tabsArray = Array.prototype.slice.call(this.tabs); //convert nodelist to array

		//ES6 Array.from(arrayLike) -- not full support but sugar

		tabsArray.map(function(tab, index) {
			tab.addEventListener('click', function(ev){
				self.setState({
					activeTab: index
				});
			});	
		});
	},

	setState: function(state) {
		//copy the last state for removal reference
		this.lastState = $.extend({}, this.state);

		//update state
		$.extend(this.state, state);

		//only make updates when activeTab is defined
		if (state.activeTab !== undefined) {
			this.tabs[this.lastState.activeTab].classList.remove('is-active');
			this.tabs[this.state.activeTab].classList.add('is-active');
		}
	}
}
},{}],3:[function(require,module,exports){
//main.js
var tabs = require('./components/tabs/tabs.js');

var imageGallery = require('./components/image-gallery/image-gallery.js');



},{"./components/image-gallery/image-gallery.js":1,"./components/tabs/tabs.js":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29tcG9uZW50cy9pbWFnZS1nYWxsZXJ5L2ltYWdlLWdhbGxlcnkuanMiLCJzcmMvY29tcG9uZW50cy90YWJzL3RhYnMuanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiIiwiLy90YWJzLmpzXHJcbmpRdWVyeShmdW5jdGlvbigkKSB7XHJcblx0JChcIi50YWJzXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHQkKFwiLnRhYnNfX2l0ZW1cIikuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0bmV3IFRhYih0aGlzKTtcclxuXHRcdH0pXHJcblx0fSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gVGFiKGVsZW1lbnQpIHtcclxuXHR0aGlzLmNhY2hlRWxlbWVudHMoZWxlbWVudC5wYXJlbnRFbGVtZW50KTtcclxuXHR0aGlzLnVwZGF0ZUV2ZW50cygpO1xyXG5cclxuXHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0YWN0aXZlVGFiOiAwXHJcblx0fTtcclxufVxyXG5cclxuVGFiLnByb3RvdHlwZSA9IHtcclxuXHJcblx0Y2FjaGVFbGVtZW50czogZnVuY3Rpb24oZWwpIHtcclxuXHRcdHRoaXMuZWwgPSBlbDtcclxuXHRcdHRoaXMudGFicyA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCgnLnRhYnNfX2l0ZW0nKTtcclxuXHR9LFxyXG5cclxuXHR1cGRhdGVFdmVudHM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdHZhciB0YWJzQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLnRhYnMpOyAvL2NvbnZlcnQgbm9kZWxpc3QgdG8gYXJyYXlcclxuXHJcblx0XHQvL0VTNiBBcnJheS5mcm9tKGFycmF5TGlrZSkgLS0gbm90IGZ1bGwgc3VwcG9ydCBidXQgc3VnYXJcclxuXHJcblx0XHR0YWJzQXJyYXkubWFwKGZ1bmN0aW9uKHRhYiwgaW5kZXgpIHtcclxuXHRcdFx0dGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXYpe1xyXG5cdFx0XHRcdHNlbGYuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0YWN0aXZlVGFiOiBpbmRleFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcdFxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHJcblx0c2V0U3RhdGU6IGZ1bmN0aW9uKHN0YXRlKSB7XHJcblx0XHQvL2NvcHkgdGhlIGxhc3Qgc3RhdGUgZm9yIHJlbW92YWwgcmVmZXJlbmNlXHJcblx0XHR0aGlzLmxhc3RTdGF0ZSA9ICQuZXh0ZW5kKHt9LCB0aGlzLnN0YXRlKTtcclxuXHJcblx0XHQvL3VwZGF0ZSBzdGF0ZVxyXG5cdFx0JC5leHRlbmQodGhpcy5zdGF0ZSwgc3RhdGUpO1xyXG5cclxuXHRcdC8vb25seSBtYWtlIHVwZGF0ZXMgd2hlbiBhY3RpdmVUYWIgaXMgZGVmaW5lZFxyXG5cdFx0aWYgKHN0YXRlLmFjdGl2ZVRhYiAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRoaXMudGFic1t0aGlzLmxhc3RTdGF0ZS5hY3RpdmVUYWJdLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xyXG5cdFx0XHR0aGlzLnRhYnNbdGhpcy5zdGF0ZS5hY3RpdmVUYWJdLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsIi8vbWFpbi5qc1xyXG52YXIgdGFicyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy90YWJzL3RhYnMuanMnKTtcclxuXHJcbnZhciBpbWFnZUdhbGxlcnkgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvaW1hZ2UtZ2FsbGVyeS9pbWFnZS1nYWxsZXJ5LmpzJyk7XHJcblxyXG5cclxuIl19
