# Nu-Q

Nu-Q (prononce Nu Q as new Queries) is a content repository API for nodejs.

NUQ is the airport code of Moffett Federal Airfield, next to the Hacker Dojo in bay area where this project was bootstrapped.

NUQ stands also for Nu-Q Uses Queries, but this asserts false beacause Queries are not implemented in API.

It describes objects and method to access data stored in a tree-based Repository.

It's API is inspired from JCR.

API is described with coffeescript, but can be implemented either with coffee or javascript.

## Existing implementation :

* karacos-cr-redis - Content Repository with persistence in a Redis key/value store
* [karacos-nuq-mongo](https://github.com/karacos/karacos-nuq-mongodb) - Same as above, but using MongoDB Document Database

## Basic usage

### Getting a Repository


## Implementing

### Using coffe

```
api = require('NuQCore')
class Node extends api.Node
    yourclassdefs
```

### Using javascript