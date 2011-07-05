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
                node.addNode("mynode","nt:unstructured")