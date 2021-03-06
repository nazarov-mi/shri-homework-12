const fs = require('fs');
const path = require('path');
const nodeEval = require('node-eval');
const config = require('./config');

const isDev = process.env.NODE_ENV === 'development';
const useCache = !isDev;
const cacheTTL = config.cacheTTL;
const cache = {};

function render(req, res, data, context) {
	const query = req.query;
	const user = req.user;
	const cacheKey = req.originalUrl + (context ? JSON.stringify(context) : '') + (user ? JSON.stringify(user) : '');
	const cached = cache[cacheKey];
	const templates = getTemplates( data.page, data.bundle );

	if (useCache && cached && (new Date() - cached.timestamp < cacheTTL)) {
		return res.send(cached.html);
	}

	if (isDev && query.json) return res.send('<pre>' + JSON.stringify(data, null, 4) + '</pre>');

	const bemtreeCtx = {
		block: 'root',
		context: context,
		// extend with data needed for all routes
		data: Object.assign({}, {
			view: data.view || 'page-' + data.page,
			params: req.params,
			url: req._parsedUrl,
			csrf: req.csrfToken()
		}, data)
	};

	let bemjson, html;

	try {
		bemjson = templates.BEMTREE.apply(bemtreeCtx);
	} catch(err) {
		console.error('BEMTREE error', err.stack);
		console.trace('server stack');
		return res.sendStatus(500);
	}

	if (isDev && query.bemjson) return res.send('<pre>' + JSON.stringify(bemjson, null, 4) + '</pre>');

	try {
		html = templates.BEMHTML.apply(bemjson);
	} catch(err) {
		console.error('BEMHTML error', err.stack);
		return res.sendStatus(500);
	}

	useCache && (cache[cacheKey] = {
		timestamp: new Date(),
		html: html
	});

	res.send(html);
}

function dropCache() {
	cache = {};
}

function evalFile(filename) {
	return nodeEval(fs.readFileSync(filename, 'utf8'), filename);
}

function getTemplates(bundleName = 'index', level = 'desktop') {
	const pathToBundle = path.resolve('bundles', level + '.bundles', bundleName);

	return {
		BEMTREE: evalFile(path.join(pathToBundle, bundleName + '.bemtree.js')).BEMTREE,
		BEMHTML: evalFile(path.join(pathToBundle, bundleName + '.bemhtml.js')).BEMHTML
	};
}

module.exports = {
	render: render,
	dropCache: dropCache
};