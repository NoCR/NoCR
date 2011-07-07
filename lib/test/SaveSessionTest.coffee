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
        "[NoCR] Testing session.save feature":
            topic: () ->
                getSession().save this.callback
            "Session.save doesn't returns an error": (err, results) ->
                assert.ok err == null, "Error returned : " + err