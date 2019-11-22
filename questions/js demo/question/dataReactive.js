const a = {
  val: 1
};
function b(obj){
  console.log(obj);
}

function bindData(obj, callback){
  Object.keys(obj).forEach(key => {
    let _v = obj[key];
    Object.defineProperty(obj, key, {
      set(v){
        _v = v;
        callback(this);
      },
      get(){
        return _v;
      }
    })
  });
}

function proxyObj(obj, cb){
  return new Proxy(obj, {
    set(target, key, value, receiver){
      Reflect.set(target, key, value, receiver);
      cb(obj);
    }
  })
}


bindData(a, b);
a.val = 3;

const newA = proxyObj({val: "newA"}, b);
newA.val ="newA 100";


