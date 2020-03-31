module.exports = {
	prompts: {
		template: {
			type: 'string',
			required: true,
			default: 'js/two-tabbed',
			choices: {
				'js/two-tabbed': 'Two Tabbed App (JavaScript)',
				'ts/two-tabbed': 'Two Tabbed App (TypeScript)'
			}
		}
	}
};
