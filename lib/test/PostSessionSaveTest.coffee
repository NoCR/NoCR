vows = require "vows"
assert = require "assert"
nocr = require "../NoCR.js"
_ = require "util"
testBase = require "./ImplTest.js"

credentials = null

getCredentials = ->
    credentials
exports.getCredentials = getCredentials

getCredentialsAsync = (callback)->
    callback null, credentials
exports.getCredentialsAsync = getCredentialsAsync

setCredentials = (creds) ->
    credentials = creds
exports.setCredentials = setCredentials

session = null
exports.getSuite = ->
    suite = '[NoCR] Post Session.save get credentials for obtaining a new session':
        topic: () ->
            self = this
            getCredentialsAsync (err,creds) ->
                 testBase.getRepository().login creds, "admin",  (err,session) ->
                    session.getNode "/testNode2/testDeepNode/", self.callback
        "No errors at function call": (err, node) ->
            assert.ok err == null, "error found : " + _.inspect(err)
        "Node is instance of Node": (err, node) ->
            assert.ok node instanceof nocr.Node, "Invalid return type"