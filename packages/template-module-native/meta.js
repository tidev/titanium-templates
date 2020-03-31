module.exports = {
	prompts: {
		template: {
			type: 'string',
			required: true,
			default: 'default',
			choices: {
				'default': 'Default Module'
			}
		}
	}
};
