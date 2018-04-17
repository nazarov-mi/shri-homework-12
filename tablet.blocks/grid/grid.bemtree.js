block('grid')({
	content: node => node.data.articles.map(data => {
		const filterdData = { ...data };

		if (filterdData.size !== 'sm') {
			delete filterdData.size;
		}

		return {
			data: filterdData,
			elem: 'item',
			elemMods: {
				size: filterdData.size
			}
		};
	})
});