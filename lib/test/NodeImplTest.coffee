vows = require "vows"
assert = require "assert"
nocr = require "../NoCR.js"
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
exports.getSession = getSession

getSessionAsync = (callback, err) ->
    callback err,sessionInstance
exports.getSessionAsync = getSessionAsync

setSession = (session) ->
    sessionInstance = session

getSuite = ->
    suite = '[NoCR] Testing instance of Node':
            topic: () ->
                getNodeAsync this.callback
            "Instance of nocr.Node": (err, node) ->
                assert.ok node instanceof nocr.Node ,"Node is not instance of NuQNode"
            "Instance of nocr.Item": (err, node) ->
                assert.ok node instanceof nocr.Item ,"Node is not instance of NuQItem"
            "GetPath returns String": (err, node) ->
                assert.ok typeof node.getPath() == 'string',"GetPath return type is not string"
        "Verify Session":
            topic: () ->
                getSession().getNode getTestedNode().getPath(), this.callback
            "Compare objects": (err, node) ->
                assert.ok node != undefined, "node is undefined"
                assert.ok node instanceof nocr.Node ,"Node is not instance of NuQNode"
                assert.ok node instanceof nocr.Item ,"Node is not instance of NuQItem"
                
                ## Additional test against S.getNode(p(N)) returns N.
                assert.ok getTestedNode() == node, "equality must be verified"

exports.getTestedNode = getTestedNode
    
exports.getSuite = getSuite

exports.setNode = setNode

exports.setSession = setSession