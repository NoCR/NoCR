
class RepositoryManager
    @registry = {}
    register: (id,repository) ->
        @registry[id] = repository
    
    getRepository: (id) ->
        @registry[id]
        
exports.manager = new RepositoryManager
class NEQWorkspace
    constructor: ->
        throw new Error "NEQWorkspace must be implemented"
    getRepository: ->
exports.Workspace = NEQWorkspace

# Session object provides access to repository nodes. It associates a Repository
# and user Credentials
class NEQSession
    constructor: ->
        throw new Error "NEQSession must be implemented"
    getUserID: ->
    
    getItem: (absPath) ->
    
    getRootNode: ->
    
    # gets a node instance giving the absolute path as parameter
    getNode: (absPath) ->
    
    # gets a node instance giving its unique identifier
    getNodeByIdentifier: (uuid) ->
    
    # gets the underlying repository instance
    getRepository: ->
    
    # Returns a new session 
    impersonate: (credentials) ->

exports.session = NEQSession

class NEQRepository
    # returns a session object
    constructor: ->
        throw new Error "NEQRepository must be implemented"
    
    login: (credentials) ->
        
    getRoot: ->
        

exports.Repository = NEQRepository

# Base type for node and Property 
class NEQItem
    constructor: ->
        throw new Error "NEQItem must be implemented"
    
    # accept a visit from a user
    accept: (visitor) ->
        
    getName: ->
    
    getParent: ->
    
    getPath: ->
    
    getDepth: ->
    
    getAncestror: (depth) ->
    
    getSession: ->
    
    isModified: ->
    
    isNew: ->
    
    isNode: ->
    
    isSame: (otherItem) ->
    
    refresh: (keepChanges) ->
    
    remove: ->
 
exports.Item = NEQItem 

class NEQNode extends NEQItem
    constructor: ->
        throw new Error "NEQNode must be implemented"
    addNode: ->
    
    addMixin: ->
    
    getNodes: ->
    
    getProperties: ->
    
    getIdentifier: ->
    
    hasNode: ->

exports.Node = NEQNode

class NEQProperty extends NEQItem
    constructor: ->
        throw new Error "NEQProperty must be implemented"
    getBinary: ->
exports.Property = NEQProperty