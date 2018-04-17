block('body')({
	content: node => ({
		tag: 'section',
		block: node.data.view
	})
});