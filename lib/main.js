var result, endpoint, resource = {}, self = {};

endpoint = (self) => ({
  n: 1,
  main(n) {
    return self.n + n;
  }
});

self = new Proxy(self, {
  get(target, prop) {
    var obj;
    if (obj === typeof 'function') {
      return resource[prop].call(null);
    }
    return resource[prop];
  }
});

resource = endpoint.call(null, self);
result = resource.main.call(null, 1);
