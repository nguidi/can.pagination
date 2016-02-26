(function () {
	// HTML5 Shiv v3.6.2 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed (Suporte HTML5 para navegadores viejos, ejemplo IE8)
	var supportsUnknownElements = false;

	(function () {
		try {
			var a = document.createElement('a');
			a.innerHTML = '<xyz></xyz>';

			supportsUnknownElements = a.childNodes.length == 1 || (function () {
				(document.createElement)('a');
				var frag = document.createDocumentFragment();
				return (
					typeof frag.cloneNode == 'undefined' ||
						typeof frag.createDocumentFragment == 'undefined' ||
						typeof frag.createElement == 'undefined'
					);
			}());
		} catch (e) {
			supportsUnknownElements = true;
		}
	}());


	System
		.config(
			{
				map:
				{
					'jquery/jquery':	'jquery'
				,	'can':				'bower_components/canjs'
				}
			,	paths:
				{
					'jquery':			'bower_components/jquery/jquery.js'
				,	'bootstrap':		'bower_components/bootstrap/dist/js/bootstrap.js'
				,	'bootstrap.css':	'bower_components/bootstrap/dist/css/bootstrap.css!css'
				}
			,	meta:
				{
					'jquery':
					{
						'exports':	'jQuery'
					,	'deps':		supportsUnknownElements ? undefined : ['can/lib/html5shiv.js']
					}
				}
			,	ext:
				{
					'ejs':		'can/view/ejs/system'
				,	'mustache':	'can/view/mustache/system'
				,	'stache':	'can/view/stache/system'
				}
			,	bundle:
				[
					"pagination.js"
				]
			}
		);
	}
)();


System.buildConfig
=	{
		map:
		{
			'can/util/util':	'can/util/domless/domless'
		}
	};
