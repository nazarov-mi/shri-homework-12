block('article').elem('aside')(
	tag()('aside'),

	content()((node, ctx) => ({
		block: 'controls',
		channel: ctx.channel,
		mods: {
			direction: ctx.direction
		}
	}))
);

block('article').mod('size', 'md').elem('aside')(
	content()((node, ctx) => ({
		block: 'controls',
		channel: ctx.channel,
		mods: {
			direction: 'vertical'
		}
	}))
);