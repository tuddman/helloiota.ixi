# helloiota.ixi
bare-bones iota IXI module


### Installation

copy or clone this repo into `<IRI base dir>/ixi/HelloIota/`

After installing, you should see this in the IRI logs:

```bash
06/02 03:01:11.406 [main] INFO  com.iota.iri.IXI - Searching: /iri/ixi/HelloIota
06/02 03:01:11.467 [main] INFO  com.iota.iri.IXI - Loading module: HelloIota
06/02 03:01:11.479 [main] INFO  com.iota.iri.IXI - Starting script: /iri/ixi/HelloIota/index.js
```


### Test to see that the IXI module is working

```bash
curl http://localhost:14265 
  -X POST 
  -H 'X-IOTA-API-Version: 1.4.2.4' 
  -H 'Content-Type: application/json'   
  -d '{"command": "HelloIota.getMessage"}'
```

