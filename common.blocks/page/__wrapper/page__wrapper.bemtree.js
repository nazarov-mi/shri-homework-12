block('page').elem('wrapper')({
	content: () => [
		{
			tag: 'header',
			block: 'header'
		},
		{
			tag: 'main',
			block: 'body'
		}
	]
});