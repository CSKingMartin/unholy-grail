(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
//main.js
var tabs = require('./components/tabs/tabs.js');
},{"./components/tabs/tabs.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29tcG9uZW50cy90YWJzL3RhYnMuanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvL3RhYnMuanNcclxualF1ZXJ5KGZ1bmN0aW9uKCQpIHtcclxuXHQkKFwiLnRhYnNcIikuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdCQoXCIudGFic19faXRlbVwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRuZXcgVGFiKHRoaXMpO1xyXG5cdFx0fSlcclxuXHR9KTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBUYWIoZWxlbWVudCkge1xyXG5cdHRoaXMuY2FjaGVFbGVtZW50cyhlbGVtZW50LnBhcmVudEVsZW1lbnQpO1xyXG5cdHRoaXMudXBkYXRlRXZlbnRzKCk7XHJcblxyXG5cdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRhY3RpdmVUYWI6IDBcclxuXHR9O1xyXG59XHJcblxyXG5UYWIucHJvdG90eXBlID0ge1xyXG5cclxuXHRjYWNoZUVsZW1lbnRzOiBmdW5jdGlvbihlbCkge1xyXG5cdFx0dGhpcy5lbCA9IGVsO1xyXG5cdFx0dGhpcy50YWJzID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKCcudGFic19faXRlbScpO1xyXG5cdH0sXHJcblxyXG5cdHVwZGF0ZUV2ZW50czogZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0dmFyIHRhYnNBcnJheSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMudGFicyk7IC8vY29udmVydCBub2RlbGlzdCB0byBhcnJheVxyXG5cclxuXHRcdC8vRVM2IEFycmF5LmZyb20oYXJyYXlMaWtlKSAtLSBub3QgZnVsbCBzdXBwb3J0IGJ1dCBzdWdhclxyXG5cclxuXHRcdHRhYnNBcnJheS5tYXAoZnVuY3Rpb24odGFiLCBpbmRleCkge1xyXG5cdFx0XHR0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldil7XHJcblx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHRhY3RpdmVUYWI6IGluZGV4XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1x0XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cclxuXHRzZXRTdGF0ZTogZnVuY3Rpb24oc3RhdGUpIHtcclxuXHRcdC8vY29weSB0aGUgbGFzdCBzdGF0ZSBmb3IgcmVtb3ZhbCByZWZlcmVuY2VcclxuXHRcdHRoaXMubGFzdFN0YXRlID0gJC5leHRlbmQoe30sIHRoaXMuc3RhdGUpO1xyXG5cclxuXHRcdC8vdXBkYXRlIHN0YXRlXHJcblx0XHQkLmV4dGVuZCh0aGlzLnN0YXRlLCBzdGF0ZSk7XHJcblxyXG5cdFx0Ly9vbmx5IG1ha2UgdXBkYXRlcyB3aGVuIGFjdGl2ZVRhYiBpcyBkZWZpbmVkXHJcblx0XHRpZiAoc3RhdGUuYWN0aXZlVGFiICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0dGhpcy50YWJzW3RoaXMubGFzdFN0YXRlLmFjdGl2ZVRhYl0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XHJcblx0XHRcdHRoaXMudGFic1t0aGlzLnN0YXRlLmFjdGl2ZVRhYl0uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XHJcblx0XHR9XHJcblx0fVxyXG59IiwiLy9tYWluLmpzXHJcbnZhciB0YWJzID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3RhYnMvdGFicy5qcycpOyJdfQ==
