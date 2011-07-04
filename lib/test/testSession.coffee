vows = require "vows"
assert = require "assert"
core = require "../NoCR.js"
_ = require "util"

sessionInstance = null

getSession = () ->
    sessionInstance

getSessionAsync = (callback, err) ->
    callback err,sessionInstance

setSession = (session) ->
    sessionInstance = session
