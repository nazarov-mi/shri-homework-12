block('controls')(
	tag()('nav'),

	content()((node, ctx) => {
		const { channel } = ctx;
		const res = ['more', 'like'].map(name => ({
			name,
			elem: 'link'
		}));

		if (channel) {
			res.unshift({
				elem: 'channel',
				content: channel
			});
		}

		return res;
	})
);