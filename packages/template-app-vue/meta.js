module.exports = {
	prompts: {
		template: {
			type: 'string',
			required: true,
			default: 'vue2/default',
			choices: {
				'vue2/default': 'Default App (Vue 2)'
			}
		}
	}
};
