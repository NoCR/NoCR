vows = require "vows"
assert = require "assert"
nocr = require "../NoCR.js"
impltest = require "./ImplTest.js"
_ = require 'util'
sessionInstance = null

getSession = () ->
    impltest.getSession()

getSessionAsync = (callback, err) ->
    callback err,impltest.getSession()


exports.getSuite = ->
    suite = 
        '[NoCR] Testing RootNode nodeType property':
            topic: ()->
                self = this
                getSessionAsync (err,session) ->
                    session.getRootNode (err, node) ->
                        node.getProperty 'nt:primaryType', (err, property) ->
                            self.callback err, property
            "Test property return instance": (err, property) ->
                assert.ok property instanceof nocr.Property, "Returned property is not a Property instance"
            "Test property type": (err, property) ->
                assert.ok property.getType() == 'NAME'
            "Test property value": (err, property) ->
                assert.ok property.getString() == 'nt:unstructured'
        '[NoCR] Testing RootNode set property':
            topic: ()->
                self = this
                getSessionAsync (err,session) ->
                    session.getRootNode (err, node) ->
                        node.setProperty "myproperty", "mavaleur"
                        node.getProperty "myproperty", self.callback
            "verifying setted property": (err, property) ->
                assert.ok property instanceof nocr.Property, "Error at node.getProperty() instanceof Property"
            "Testing value of previously setted property": (err, property) ->
                assert.ok property.getString() == "mavaleur", "Error, incorrect string value returned"
            "deleting property and testing if getProperty throws error (with no callback)": (err, node) ->
                assertfunc = ()-> 
                    node.setProperty "myproperty" # deleting property
                    node.getProperty "myproperty", (err, prop) ->
                        if err != null
                            throw new Error err
                checkerr = (err) ->
                    assert.ok err instanceof Error
                    assert.ok err.message = "Property not found in node"
                    true
                assert.throws assertfunc, checkerr, "Should throw an error"
            "Testing if getProperty with a callback send an error" : (err, node) ->
                assertfunc = ()-> 
                    node.getProperty "myproperty", (err, prop)->
                        if (err != null && typeof prop == 'undefined')
                            throws new Error err
                checkerr = (err) ->
                    assert.ok err instanceof Error
                    assert.ok err.message = "Property not found in node"
                    true
                assert.throws assertfunc, checkerr, "Should throw an error"
        '[NoCR] Testing a created property':
            topic: ->
                self = this
                getSessionAsync (err,session) ->
                    session.getRootNode (err, node) ->
                        node.setProperty "myproperty", "mavaleur"
                        node.getProperty "myproperty", self.callback
            "Testing getPath result": (err, property) ->
                assert.ok property.getPath() == '/myproperty', "Incorrect path " + property.getPath()
                    
