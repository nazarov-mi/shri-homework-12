block('article')(
	tag()('article'),

	def()((node, ctx) => {
		return applyNext({ mods: node.extend(node.mods, { size: ctx.data.size }) });
	}),

	content()((node, ctx) => {
		const data = ctx.data || {};

		return [
			{
				elem: 'title',
				content: data.title,
				color: data.titleColor
			},
			{
				elem: 'preview',
				src: data.image,
				title: data.title
			},
			{
				elem: 'description',
				content: data.description
			},
			{
				elem: 'aside',
				channel: data.channelName
			}
		];
	})
);