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