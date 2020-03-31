module.exports = {
	prompts: {
		template: {
			type: 'string',
			required: true,
			default: 'js/default',
			choices: {
				'js/default': 'Default App (JavaScript)',
				'js/two-tabbed': 'Two Tabbed App (JavaScript)',
				'ts/greeter': 'Greeter App (TypeScript)'
			}
		}
	}
};
