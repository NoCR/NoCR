
class NEQWorkspace
    getRepository: ->
        throw new Error("NEQWorkspace must be implemented")

# Session object provides access to repository nodes. It associates a Repository
# and user Credentials
class NEQSession
    getUserID: ->
        throw new Error("NEQSession must be implemented")
    
    getItem: (absPath) ->
        throw new Error("NEQSession must be implemented")
    
    getRootNode: ->
        throw new Error("NEQSession must be implemented")
    
    # gets a node instance giving the absolute path as parameter
    getNode: (absPath) ->
        throw new Error("NEQSession must be implemented")
    
    # gets a node instance giving its unique identifier
    getNodeByIdentifier: (uuid) ->
        throw new Error("NEQSession must be implemented")
    
    # gets the underlying repository instance
    getRepository: ->
        throw new Error("NEQSession must be implemented")
    
    # Returns a new session 
    impersonate: (credentials) ->
        throw new Error("NEQSession must be implemented")


class NEQRepository
    login: ->
        throw new Error("NEQRepository must be implemented")
    
    getRoot: ->
        throw new Error("NEQRepository must be implemented")

	
# Base type for node and Property 
class NEQItem
    # 
    accept: (visitor) ->
        throw new Error("NEQItem must be implemented")
    
    getName: ->
        throw new Error("NEQItem must be implemented")
    
    getParent: ->
        throw new Error("NEQItem must be implemented")
    
    getPath: ->
        throw new Error("NEQItem must be implemented")
    
    getDepth: ->
        throw new Error("NEQItem must be implemented")
    
    getAncestror: (depth) ->
        throw new Error("NEQItem must be implemented")
    
    getSession: ->
        throw new Error("NEQItem must be implemented")
    
    isModified: ->
        throw new Error("NEQItem must be implemented")
    
    isNew: ->
        throw new Error("NEQItem must be implemented")
    
    isNode: ->
        throw new Error("NEQItem must be implemented")
    
    isSame: (otherItem) ->
        throw new Error("NEQItem must be implemented")
    
    refresh: (keepChanges) ->
        throw new Error("NEQItem must be implemented")
    
    remove: ->
        throw new Error("NEQItem must be implemented")
    

class NEQNode extends NEQItem
    addNode: ->
        throw new Error("NEQNode must be implemented")
    
    addMixin: ->
        throw new Error("NEQNode must be implemented")
    
    getNodes: ->
        throw new Error("NEQNode must be implemented")
    
    getProperties: ->
        throw new Error("NEQNode must be implemented")
    
    getIdentifier: ->
        throw new Error("NEQNode must be implemented")
    
    hasNode: ->
        throw new Error("NEQNode must be implemented")
	
class NEQProperty extends NEQItem
    getBinary: ->
        throw new Error("NEQProperty must be implemented")

exports.Node = NEQNode