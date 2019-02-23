try {
  Promise.reject(() => ({
    msg: 'xxxx'
  }))
    .catch(e => {
      console.log('promise catch')
    });
} catch (e){
  console.log('try catch');
}

function a (time){
  let cbs = [time];
  
  setTimeout(() => {
    cbs.reduce((value, cb) => {
      return cb(value);
    });
  }, time);
  
  let chainObj = {
    then: (fn) => {
      cbs.push(fn);
      return chainObj;
    }
  };
  
  return chainObj;
}

a(100)
  .then(data => {
    return data + ' then1 ';
  })
  .then(data => {
    return data + ' then2 ';
  })
  .then(data => {
    console.log(data);
  });

console.log([...new Set([1,2,1,2,3])]);