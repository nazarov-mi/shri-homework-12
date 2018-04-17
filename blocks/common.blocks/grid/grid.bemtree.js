block('grid')({
	content: node => node.data.articles.map(data => ({
		data,
		elem: 'item',
		elemMods: {
			size: data.size
		}
	}))
});