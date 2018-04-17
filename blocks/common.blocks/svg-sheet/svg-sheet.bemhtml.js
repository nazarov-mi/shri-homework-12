block('svg-sheet')(
	tag()('svg'),

	addAttrs()({
		'xmlns:xlink': 'http://www.w3.org/1999/xlink'
	}),

	content()([
		{
			tag: 'symbol',
			attrs: { id: 'like', viewBox: '0 0 510 510' },
			content: {
				tag: 'path',
				attrs: { d: 'M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z' }
			}
		},
		{
			tag: 'symbol',
			attrs: { id: 'more', viewBox: '2 2 20 20' },
			content: [
				{
					tag: 'path',
					attrs: { d: 'M0 0h24v24H0z', fill: 'none' }
				},
				{
					tag: 'path',
					attrs: { d: 'M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' }
				}
			]
		}
	])
);