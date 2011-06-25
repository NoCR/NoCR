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

repositoryInstance = null

getRepository = () ->
    repositoryInstance

geRepositoryAsync = (callback, err) ->
    callback err,repositoryInstance

setRepository = (session) ->
    repositoryInstance = session

getSuite = ->
    suite = "Direct Access tests (cf jcr-spec v2 pdf p88)":
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

exports.setRepository = setRepository