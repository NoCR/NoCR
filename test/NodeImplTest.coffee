vows = require "vows"
assert = require "assert"
core = require "../src/NuQCore.js"
_ = require "util"


nodeInstance = null

getNode = () ->
    repositoryInstance

setNode = (node) ->
    nodeInstance = node

getNodeAsync = (callback, err) ->
    callback err,nodeInstance

getSuite = ->
    suite = '[Nu-Q] Testing instance of Node':
        topic: () ->
            getNodeAsync this.callback
        "Instance of NuQNode": (err, node) ->
            assert.ok node instanceof core.Node ,"Node is not instance of NuQNode"
        "Instance of NuQItem": (err, node) ->
            assert.ok node instanceof core.Item ,"Node is not instance of NuQItem"
        "GetPath returns String": (err, node) ->
            assert.ok typeof node.getPath() == 'string',"GetPath return type is not string"
exports.getNode = getNode
    
exports.getSuite = getSuite

exports.setNode = setNode
