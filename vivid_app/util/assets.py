from flask_assets import Bundle, Environment
from vivid_app import vivid_app

bundles = {
	
	'vivid_js' : Bundle(
		'js/publisherFilter.js',
		'js/vividCSvExport.js',
		'js/vividSorting.js',
		'/js/dist/vivid.js'),

	'vivid_css' : Bundle(
		'css/vivid.css')


}

assets = Environment(vivid_app)

assets.register(bundles)