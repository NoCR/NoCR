###
 * This file is part of Nu-Q.
 *
 * Nu-Q is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.
 *
 * Nu-Q is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Nu-Q.  If not, see <http://www.gnu.org/licenses/>.
###
class RepositoryManager
    @registry = {}
    register: (id,repository) ->
        @registry[id] = repository
    
    getRepository: (id) ->
        @registry[id]
        
exports.manager = new RepositoryManager
class NuQWorkspace
    constructor: ->
        throw new Error "NuQWorkspace must be implemented"
    getRepository: ->
        throw new Error "method not implemented"
exports.Workspace = NuQWorkspace

# Session object provides access to repository nodes. It associates a Repository
# and user Credentials
class NuQSession
    constructor: ->
        throw new Error "NuQSession must be implemented"
    getUserID: ->
        throw new Error "method not implemented"
    getItem: (absPath) ->
        throw new Error "method not implemented"
    getRootNode: ->
        throw new Error "method not implemented"
    # gets a node instance giving the absolute path as parameter
    getNode: (absPath) ->
        throw new Error "method not implemented"
    # gets a node instance giving its unique identifier
    getNodeByIdentifier: (uuid) ->
        throw new Error "method not implemented"
    # gets the underlying repository instance
    getRepository: ->
        throw new Error "method not implemented"
    # Check if action is allowed on node requested by abspath
    checkPermission: (abspath, action) ->
        throw new Error "method not implemented"
    # Returns a new session 
    impersonate: (credentials) ->
        throw new Error "method not implemented"
exports.session = NuQSession

class NuQRepository
    # returns a session object
    constructor: ->
        throw new Error "NuQRepository must be implemented"
    
    login: (credentials) ->
            throw new Error "method not implemented"
    getRoot: ->
            throw new Error "method not implemented"

exports.Repository = NuQRepository

# Base type for node and Property 
class NuQItem
    constructor: ->
        throw new Error "NuQItem must be implemented"
    
    # accept a visit from a user
    accept: (visitor) ->
        throw new Error "method not implemented"
    getName: ->
        throw new Error "method not implemented"
    getParent: ->
        throw new Error "method not implemented"
    getPath: ->
        throw new Error "method not implemented"
    getDepth: ->
        throw new Error "method not implemented"
    getAncestror: (depth) ->
        throw new Error "method not implemented"
    getSession: ->
        throw new Error "method not implemented"
    isModified: ->
        throw new Error "method not implemented"
    isNew: ->
        throw new Error "method not implemented"
    isNode: ->
        throw new Error "method not implemented"
    isSame: (otherItem) ->
        throw new Error "method not implemented"
    refresh: (keepChanges) ->
        throw new Error "method not implemented"
    remove: ->
        throw new Error "method not implemented"
 
exports.Item = NuQItem 

class NuQNode extends NuQItem
    constructor: ->
        throw new Error "NuQNode must be implemented"
    addNode: ->
        throw new Error "method not implemented"
    addMixin: ->
        throw new Error "method not implemented"
    getNodes: ->
        throw new Error "method not implemented"
    getProperties: ->
        throw new Error "method not implemented"
    getIdentifier: ->
        throw new Error "method not implemented"
    hasNode: ->
        throw new Error "method not implemented"
exports.Node = NuQNode

class NuQProperty extends NuQItem
    constructor: ->
        throw new Error "NuQProperty must be implemented"
    getBinary: ->
exports.Property = NuQProperty