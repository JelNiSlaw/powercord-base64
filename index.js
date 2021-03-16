const { Plugin } = require('powercord/entities');

module.exports = class Base64 extends Plugin {
	startPlugin() {
		powercord.api.commands.registerCommand({
			command: 'encode64',
			description: 'Encode Base64 text',
			usage: '{c} <text>',
			executor: (args) => ({ send: false, result: btoa(args.join(' ')) })
		});

		powercord.api.commands.registerCommand({
			command: 'decode64',
			description: 'Decodes Base64 text',
			usage: '{c} <text>',
			executor: function (args) {
				let result;

				try {
					result = atob(args.join(' '));
				} catch {
					result = 'Incorrect Base64 string';
				}

				return { send: false, result: result };
			}
		});
	}

	pluginWillUnload() {
		powercord.api.commands.unregisterCommand('encode64');
		powercord.api.commands.unregisterCommand('decode64');
	}
};
