var	pluginifier
=	require('steal-tools').pluginifier
,	fs
=	require('fs')

pluginifier(
	{
		config:	__dirname+'/stealconfig.js'
	,	main:	'pagination'
	}
).then(
	function(pluginify)
	{
		// Get the main module, ignoring a dependency we don't want.
		var paginationPlugin
		=	pluginify(
				'pagination'
		,	{
				ignoreAllDependencies:		true
			,	minify:						true
			,	removeDevelopmentCode:		true
			,	useNormalizedDependencies:	false
			,	format:						'steal'
			}
		)

		// writes the pluginified module.
		fs.writeFileSync(
			'pagination.min.js'
		,	paginationPlugin
		,	'utf8'
		)
	}
)