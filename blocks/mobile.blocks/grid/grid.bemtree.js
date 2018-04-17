block('grid')({
	content: node => node.data.articles.map(data => {
		const filterdData = { ...data };

		delete filterdData.size;

		return {
			data: filterdData,
			elem: 'item'
		};
	})
});