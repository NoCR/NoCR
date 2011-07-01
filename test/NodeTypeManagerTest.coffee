vows = require "vows"
assert = require "assert"
core = require "../src/NuQCore.js"
_ = require "util"

sessionInstance = null

getSession = () ->
    sessionInstance

getSessionAsync = (callback, err) ->
    callback err,sessionInstance

setSession = (session) ->
    sessionInstance = session

getSuite = ->
    suite = '[Nu-Q] Testing NodeTypeManager':
            topic: ()->
                self = this
                getSessionAsync (err,session) -> 
                    self.callback null, session.getWorkspace().getNodeTypeManager()
            "has function getNodeType": (err, nodeTypeManager) ->
                assert.ok typeof nodeTypeManager.getNodeType != 'undefined' ,"getNodeType method not found"
            "Check for type 'nt:base'": (err, nodeTypeManager) ->
                type = nodeTypeManager.getNodeType 'nt:base'
                assert.ok type instanceof core.NodeType, "nodeTypeManager.getNodeType('nt:base') doesn't returns a valid type object"
                assert.ok type.isNodeType 'nt:base', "type.isNodeType 'nt:base' false"
            "Check for type 'nt:unstructured'": (err, nodeTypeManager) ->
                type = nodeTypeManager.getNodeType 'nt:unstructured'
                assert.ok type instanceof core.NodeType, "nodeTypeManager.getNodeType('nt:unstructured') doesn't returns a valid type object"
                assert.ok type.isNodeType 'nt:unstructured', "type.isNodeType 'nt:unstructured' false"
exports.getSuite = getSuite

exports.setSession = setSession