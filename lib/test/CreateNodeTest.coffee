vows = require "vows"
assert = require "assert"
nocr = require "../NoCR.js"
impltest = require "./ImplTest.js"
_ = require 'util'

getSession = () ->
    impltest.getSession()

getSessionAsync = (callback, err) ->
    callback err,impltest.getSession()

exports.getSuite = () ->
    suite =
        "[NoCR] Testing node creation feature":
            topic: ()->
                self = this
                node = getSession().getRootNode this.callback
            "Test addnode": (err, node) ->
                createNode = ->
                    node.addNode("testNode1","nt:unstructured")
                assert.doesNotThrow createNode
        "Get a created Node via getNode":
            topic: () ->
                self = this
                getSession().getRootNode (err, rootnode) ->
                    rootnode.addNode "testNode2", "nt:unstructured", (err, node) ->
                        rootnode.getNode "testNode2", (err, newNode) ->
                            self.callback err, newNode
            "is created node instance of Node": (err, node) ->
                assert.ok err == null, err
                assert.ok node instanceof nocr.Node, "node is not instance of nocr.Node" + _.inspect node
            "is getPath returning absolute path": (err, node) ->
                assert.ok node.getPath() == "/testNode2/", "Incorrect path returned : " + node.getPath()
            "Create a node with deep path":
                topic: () ->
                    self = this
                    getSession().getRootNode (err, rootnode) ->
                        rootnode.addNode "testNode2/testDeepNode", "nt:unstructured", (err, node) ->
                            rootnode.getNode "testNode2", (err, newNode) ->
                                self.callback err, newNode
                "Is deep node instance of node": (err, node) ->
                    assert.ok err == null, err
                    assert.ok node instanceof nocr.Node, "node is not instance of nocr.Node" + _.inspect node
            