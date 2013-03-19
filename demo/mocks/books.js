{
    "took": 1,
    "timed_out": false,
    "_shards": {
        "total": 5,
        "successful": 5,
        "failed": 0
    },
    "hits": {
        "total": 1,
        "max_score": 0.095891505,
        "hits": [
            {
                "_index": "test",
                "_type": "book",
                "_id": "1",
                "_score": 0.095891505,
                "_source": {
                    "book": {
                        "isbn": "0812504321",
                        "name": "Call of the Wild",
                        "author": {
                            "first_name": "Jack",
                            "last_name": "London"
                        },
                        "pages": 128,
                        "tag": [
                            "fiction",
                            "children"
                        ]
                    }
                }
            }
        ]
    }

}