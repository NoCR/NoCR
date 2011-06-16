api = require('./NEQCore.coffee')
class Node extends api.Node
    accept: ->
	console.log "test"
    
a = new Node()

console.log a

a.accept