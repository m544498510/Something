function* async() {
  console.log("first");
  const result = yield new Promise(resolve => setTimeout(
    () => resolve(100), 1000
  ));
  console.log(result);
  
  const result1 = yield 101;
  
  console.log(result1);
  
  const result2 = yield new Promise((resolve, reject) => setTimeout(
    () => resolve(102), 1000
  ));
  console.log(result2);
  
  return result + result1 + result2;
}

function spawn(genF) {
  return new Promise(function(resolve, reject) {
    const gen = genF();
    function step(nextF) {
      let next;
      try {
        next = nextF();
      } catch (e) {
        return reject(e);
      }
      if (next.done) {
        return resolve(next.value);
      }
      Promise.resolve(next.value).then(
        function(v) {
          step(function() {
            return gen.next(v);
          });
        },
        function(e) {
          step(function() {
            return gen.throw(e);
          });
        }
      );
    }
    step(function() {
      return gen.next(undefined);
    });
  });
}
spawn(async)
  .then(data => console.log(data))
  .catch(e => console.log(e));


