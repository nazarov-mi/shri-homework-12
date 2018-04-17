block('article').mod('size', 'sm')(
	content()((node, ctx) => {
		const data = ctx.data;
		const res = [
			{
				elem: 'title',
				content: data.title
			}
		];

		if (data.image) {
			res.push({
				elem: 'preview',
				src: data.image,
				title: data.title,
				content: {
					elem: 'preview-aside',
					mods: {
						direction: 'vertical'
					}
				}
			});
		} else {
			res.push({
				elem: 'description',
				content: data.description
			},
			{
				elem: 'aside',
				channel: data.channelName
			});
		}

		return res;
	})
);