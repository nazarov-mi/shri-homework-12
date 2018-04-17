block('article').elem('preview-aside')(
	tag()('aside'),

	content()((node, ctx) => ({
		block: 'controls',
		channel: ctx.channel,
		mods: {
			direction: 'vertical'
		}
	}))
);