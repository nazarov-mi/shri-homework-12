block('article').elem('preview')(
	tag()('figure'),

	content()((node, ctx) => {
		const { src, title } = ctx;
		const res = [ ctx.content ];

		if (src) {
			const dotIndex = src.indexOf('.');
			const name = src.slice(0, dotIndex);
			const ext = src.slice(dotIndex);

			const srcset = `${name}${ext} 320w, ${name}@2x${ext} 480w, ${name}@3x${ext} 800w`;
			const sizes = '(max-width: 320px) 280px, (max-width: 480px) 440px, 800px';

			res.unshift({
				tag: 'img',
				attrs: {
					src,
					title,
					sizes,
					srcset,
					alt: title
				}
			});
		}
		
		return res;
	})
);