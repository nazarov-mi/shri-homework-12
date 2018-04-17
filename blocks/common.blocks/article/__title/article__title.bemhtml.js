block('article').elem('title')(
	tag()('h2'),

	addAttrs()((node, ctx) => {
		const { color } = ctx;

		if (color) {
			return { style: `color: ${color};` };
		}

		return {};
	}),

	content()((node, ctx) => ({
		tag: 'a',
		attrs: { href: '#' },
		content: ctx.content
	}))
);