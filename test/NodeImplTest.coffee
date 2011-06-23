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

getSessionAsync = (callback, err) ->
    callback err,sessionInstance

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
        "Verify Session":
            topic: () ->
                getSession().getNode getTestedNode().getPath(), this.callback
            "Compare objects": (err, node) ->
                assert.ok node != undefined, "node is undefined"
                assert.ok node instanceof core.Node ,"Node is not instance of NuQNode"
                assert.ok node instanceof core.Item ,"Node is not instance of NuQItem"
                
                ## Additional test against S.getNode(p(N)) returns N.
                assert.ok getTestedNode() == node, "equality must be verified"
        "Direct Access tests (cf jcr-spec.pdf p88, v2)":
            topic: () ->
                getSessionAsync this.callback
            "S.getItem(p(N)) returns N.": (err,S) ->
                S.getItem getTestedNode().getPath(), (err, N) ->
                    assert.ok N == getTestedNode(),  "equality must be verified"
            "S.itemExists(p(N)) returns true": (err,S) ->
                S.itemExists getTestedNode().getPath(), (err,res)->
                    assert.ok res
            "S.getNode(p(N)) returns N.": (err,S) ->
                S.getNode getTestedNode().getPath(), (err, N) ->
                    assert.ok N == getTestedNode(),  "equality must be verified"
            "S.nodeExists(p(N)) returns true": (err,S) ->
                S.nodeExists getTestedNode().getPath(), (err, res) ->
                    assert.ok res
            "S.getNodeByIdentifier(id(N)) returns N": (err, S) ->
                S.getNodeByIdentifier getTestedNode().getIdentifier(), (err, N) ->
                    assert.ok N == getTestedNode(),  "equality must be verified"
            "If N is the primary item of a node M then M.getPrimaryItem() returns N": (err, S) ->
                assert.ok false, "Test not implemented"
            "If N is the root node of the workspace then S.getRootNode() returns N": (err, S) ->
                assert.ok false, "Test not implemented"
            "For all nodes M to which S has direct access, M.getNode(p(M,N)) returns N": (err, S) ->
                assert.ok false, "Test not implemented"
            "For all nodes M to which S has direct access, M.hasNode(p(M,N)) returns true": (err, S) ->
                assert.ok false, "Test not implemented"
            
exports.getTestedNode = getTestedNode
    
exports.getSuite = getSuite

exports.setNode = setNode

exports.setSession = setSession