datests = require './DirectAccessTest.js'
nodetest = require './NodeImplTest.js'
nodetypemanagertest = require './NodeTypeManagerTest.js'
repositorytest = require './RepositoryImplTest.js'

exports.setRepository = (repo) ->
    repositorytest.setRepository(repo)
    datests.setRepository(repo)

sessionInstance = null

exports.getSession = ->
    sessionInstance

exports.setSession = (session) ->
    datests.setSession(session)
    nodetest.setSession(session)
    nodetypemanagertest.setSession(session)
    sessionInstance = session

exports.getSessionAsync = (callback) ->
    nodetest.getSessionAsync(callback)

exports.setNode = (node) ->
    nodetest.setNode node
    datests.setNode node

exports.getNode = ->
    nodetest.getNode()

exports.getRepository = ->
    repositorytest.getRepository()

exports.addNoCRBatch = (suite) ->
    suite.addBatch(repositorytest.getSuite())
    suite.addBatch(nodetypemanagertest.getSuite())
    propertytest = require "./RootNodePropertyTest.js"
    suite.addBatch(propertytest.getSuite())
    createnodetest = require "./CreateNodeTest.js"
    suite.addBatch(createnodetest.getSuite())
    sessionsavetest = require "./SaveSessionTest.js"
    suite.addBatch(sessionsavetest.getSuite())
    suite.addBatch(nodetest.getSuite())
    suite.addBatch(datests.getSuite())