var App = {
	controller: function (args) {
		var ctrl = this;

		ctrl.trueOrFalse = m.prop();

		ctrl.progLangs = m.prop([]);
	},

	view: function(ctrl) {
		return m('div', [				
			m('div',[
				m('h2', 'False or True'),
				m.component(mCheckbox, {
					name: 'ClickMe',
					valueProp: ctrl.trueOrFalse,
					iconClass: 'ion-android-done'
				}),
				m('label', {for: 'ClickMe'}, 'Click Me'),
				m('p', ctrl.trueOrFalse() ? 'm.prop= true' : 'm.prop= false')
			]),
			m('div',[
				m('h2', 'Push selected checkboxes to array'),
				m.component(mCheckbox, {
					name:'HTML5',
					pushToArray: ctrl.progLangs,
					iconClass: 'ion-android-done'
				}),
				m('label', {for: 'HTML5'}, 'HTML5'),
				m.component(mCheckbox, {
					name:'CSS3',
					pushToArray: ctrl.progLangs,
					iconClass: 'ion-android-done'
				}),
				m('label', {for: 'CSS3'}, 'CSS3'),
				m.component(mCheckbox, {
					name:'JavaScript',
					pushToArray: ctrl.progLangs,
					iconClass: 'ion-android-done'
				}),
				m('label', {for: 'JavaScript'}, 'JavaScript'),
			]),
			m('div', [
				ctrl.progLangs().map(function(value, index){
					return m('p', value)
				})
			])
		]);
	}
};

m.mount(document.getElementById('content'), App);