block('controls').elem('link')(
	tag()('a'),

	addAttrs()((node, ctx) => ({
		href: `#${ctx.name}`
	})),

	content()((node, ctx) => {
		const { name } = ctx;

		return {
			name,
			block: 'svg-icon'
		};
	})
);