var iri = com.iota.iri;

var Callable = iri.service.CallableRequest;
var Response = iri.service.dto.IXIResponse;

API.put(
  'getParser',
  new Callable({
    call: function(req) {
      var message = 'hello iota';
      var r = IXIResponse.create({ message: message })
      return r;
    },
  }),
);
