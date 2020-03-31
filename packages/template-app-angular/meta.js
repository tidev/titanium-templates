module.exports = {
	prompts: {
		template: {
			type: 'string',
			required: true,
			default: 'angular6',
			choices: {
				'angular6/tap': 'Tap App (Angular 6)'
			}
		}
	}
};
