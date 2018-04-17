block('logo')({
	content: () => ({
		tag: 'img',
		attrs: {
			src: 'img/zen_logo.png',
			alt: 'ZEN',
			title: 'ZEN',
			srcset: 'img/zen_logo.png 320w, img/zen_logo@2x.png 480w, img/zen_logo@3x.png 800w',
			sizes: '(max-width: 320px) 280px, (max-width: 480px) 440px, 800px'
		}
	})
});