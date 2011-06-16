# Nodejs Extensible & Queryable Repository

NEQ-R is a content repository API for nodejs.

It describes objects and method to access data stored in a tree-based Repository.

It's API is inspired from JCR.

API definition is written with coffeescript, but can be implemented either with coffee or javascript.

## Existing implementation :

* karacos-cr-redis - Content Repository with persistence in a Redis key/value store
* karacos-cr-mongo - Same as above, but using MongoDB Document Database

## Basic usage

## Implementing

### Using coffe

```
api = require('NEQCore')
class Node extends api.Node
    yourclassdefs
```

### Using javascript