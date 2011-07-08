datests = require './DirectAccessTest.js'
nodetest = require './NodeImplTest.js'
nodetypemanagertest = require './NodeTypeManagerTest.js'
repositorytest = require './RepositoryImplTest.js'
sessionsavetest = require "./SaveSessionTest.js"
postsavetest = require "./PostSessionSaveTest.js"
repository = null

exports.setRepository = (repo) ->
    repositorytest.setRepository(repo)
    datests.setRepository(repo)
    repository = repo

exports.getRepository = ->
    repository

    
credentials = null

getCredentials = ->
    credentials
exports.getCredentials = getCredentials

getCredentialsAsync = (callback)->
    callback null, credentials
exports.getCredentialsAsync = getCredentialsAsync

setCredentials = (creds) ->
    credentials = creds
    postsavetest.setCredentials(creds)

exports.setCredentials = setCredentials

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


exports.addNoCRBatch = (suite) ->
    suite.addBatch(repositorytest.getSuite())
    suite.addBatch(nodetypemanagertest.getSuite())
    suite.addBatch(nodetest.getSuite())
    suite.addBatch(datests.getSuite())
    propertytest = require "./RootNodePropertyTest.js"
    suite.addBatch(propertytest.getSuite())
    createnodetest = require "./CreateNodeTest.js"
    suite.addBatch(createnodetest.getSuite())
    suite.addBatch(sessionsavetest.getSuite())
    suite.addBatch(postsavetest.getSuite())