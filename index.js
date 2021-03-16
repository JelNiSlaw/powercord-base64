const { Plugin } = require('powercord/entities');

module.exports = class Base64 extends Plugin {
	startPlugin() {
		powercord.api.commands.registerCommand({
			command: 'encode64',
			description: 'Encode text to Base64',
			usage: '{c} <text>',
			executor: (args) => ({ send: false, result: btoa(args.join(' ')) })
		});

		powercord.api.commands.registerCommand({
			command: 'decode64',
			description: 'Decode Base64 to text',
			usage: '{c} <Base64 string>',
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
