vows = require "vows"
assert = require "assert"
core = require "../src/NuQCore.js"
_ = require "util"


nodeInstance = null

getTestedNode = () ->
    nodeInstance

setNode = (node) ->
    nodeInstance = node

getNodeAsync = (callback, err) ->
    callback err,nodeInstance

sessionInstance = null

getSession = () ->
    sessionInstance

setSession = (session) ->
    sessionInstance = session

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
        "getNode node.getPath == node":
            topic: () ->
                getSession().getNode getTestedNode().getPath(), this.callback
            "Compare objects": (err, node) ->
                assert.ok getTestedNode() == node, "equality should be verified"
exports.getTestedNode = getTestedNode
    
exports.getSuite = getSuite

exports.setNode = setNode

exports.setSession = setSession