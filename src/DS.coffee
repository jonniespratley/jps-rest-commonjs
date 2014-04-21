###
  DS
  This is a class that has database access methods and routes method calls to the adapter specficied.
###
class exports.DS
	constructor: (@options) ->
		return @
	findOne: (col, id) ->
		"findOne #{col} #{id}"
	findAll: (col) ->
		"findAll #{col}"
	createRecord: (col, obj) ->
		#Create record logic
		return obj
	save: (col, obj) ->
		#save record logic
		return obj

