# NoCR - NodeJs Content Repository

It describes objects and method to access data stored in a tree-based Repository.

It brings a [vows](http://vowsjs.org/) testSuite for implementations.

It's API is inspired from JCR, and extended for asynchronous model.

API is described with coffeescript, but can be implemented either with coffee or javascript.

## Existing implementation :

* karacos-cr-redis - Content Repository with persistence in a Redis key/value store
* [karacos-nocr-mongodb](https://github.com/karacos/karacos-nocr-mongodb) - Same as above, but using MongoDB Document Database

## Basic usage

see example files in toplevel dir

### Getting a Repository


## Implementing

### Using coffe

```
api = require('NuQCore')
class Node extends api.Node
    yourclassdefs
```

### Using javascript

more to come here

### Testing your implementation

NoCR provides an interface to allow you to inject your implementation instances into a generic testsuite using vows.

```
npm install vows

```
Interface is described in module ImplTest, in order to work, you should invoque first :

ImplTest.setRepository
ImplTest.setSession
ImplTest.setNode

then, on a described vows testSuite, invoke : `ImplTest.addNoCRBatch(testSuite);`

Your implementation must pass all tests of test suite,

[Javascript example](https://github.com/karacos/karacos-NoCR-mongodb/blob/master/test/testSuite.js)



### what does Nu-Q stands for ?

it's the original project code name.
Nu-Q (prononce Nu Q as new Queries) is a content repository API for nodejs.

NUQ is the airport code of Moffett Federal Airfield, next to the Hacker Dojo in bay area where this project was bootstrapped.

NUQ stands also for Nu-Q Uses Queries, but this asserts false beacause Queries are not implemented in API.
