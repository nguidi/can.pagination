var	stealTools
=	require('steal-tools')

stealTools
	.build(
		{
			main:
			[
				'main'
			]
		,	config:	__dirname+'/stealconfig.js'
		}
	,	{
			minify: true
		,	debug: true
		,	quiet: false
		}
	)