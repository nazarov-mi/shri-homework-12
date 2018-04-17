block('svg-icon')(
	tag()('svg'),

	addAttrs()({
		'xmlns:xlink': 'http://www.w3.osrg/1999/xlink'
	}),

	content()((node, ctx) => {
		const { name } = ctx;

		return {
			tag: 'use',
			attrs: {
				'xlink:href': `#${name}`
			}
		};
	})
);