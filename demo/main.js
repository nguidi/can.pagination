steal(
	'can/view/mustache'
,	'pagination.js'
,	function()
	{
		can.$('#paginationDemo')
			.pagination(
				{
					limit:		5
				,	count:		can.$('#paginationDemo').find('ul li').length
				,	maxIndex:	5
				,	view:		'#bootstrapView'
				}
			)

		function toggleLi(page,limit)
		{
			can.$('#listToPaginate li').hide()
				.filter(
					function(index)
					{
						return	(index >= (page*limit - limit ) && (index < page*limit))
					}
				).show()
		}

		can.$('body')
			.on(
				'pagechange.can.pagination'
			,	function(ev,change)
				{
					toggleLi(change.page,change.limit)
				}
			)

		toggleLi(1,5)
	}
)