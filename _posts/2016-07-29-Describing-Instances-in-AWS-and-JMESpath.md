---
layout: post
title: Describing Instances in AWS and JMESpath
---

Now that I'm digging into AWS for my new job, I've been up to my neck in JSON.  I wouldn't say I'm annoyed yet but trying to search and grab data from Describe outputs is becoming a hassle. Enter [JMESpath](http://jmespath.org/).  JMESpath is the scalpel to use when you need to surgically remove key bits of data from large JSON outputs. For the following example, I will be using data generated using [JSON-Generator](json-generator.com).

### Simple Extraction

Here is a simple example where I am loading the JSON data then extracting names:

```p
>>> import jmespath
>>> from subprocess import call
>>> call(["head", "-15", "random_stuff.json"])
[
  {
    "id": "579f8628aaef83cbbbf73384",
    "index": 0,
    "guid": "5c739ce1-a555-4578-a611-3cf679001564",
    "isActive": true,
    "balance": "$3,747.11",
    "picture": "http://placehold.it/32x32",
    "age": 34,
    "eyeColor": "blue",
    "name": {
      "first": "Cornelia",
      "last": "Edwards"
    },
    "company": "MEGALL",
0
>>> fileobj = open('random_stuff.json', 'r')
>>> import json
>>> rando_json = json.load(fileobj)
>>> jmespath.search("[0].name.first", rando_json)
u'Cornelia'
>>> jmespath.search("[].name.first", rando_json)
[u'Cornelia', u'Fern', u'Reyna', u'Thomas', u'Delacruz', u'Clayton', u'Nola']
>>> jmespath.search("[].name.[first,last]", rando_json)
[[u'Cornelia', u'Edwards'], [u'Fern', u'Fisher'], [u'Reyna', u'Crawford'], [u'Thomas', u'Sims'], [u'Delacruz', u'Owens'], [u'Clayton', u'Robertson'], [u'Nola', u'Lott']]
```

### Going further

If you are new to JMESpath (like I am), I highly recommend going through the official [tutorial](http://jmespath.org/tutorial.html) just to get familiar with how the language works.  It's pretty simple to get started and shouldn't take you too much time to get comfortable with.  One thing I'm learning is that your experience with JMESpath will only really depend on the quality of JSON you are digging through.  Luckily, AWS is okay in that regard.
