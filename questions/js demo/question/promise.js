

class Promise{
  static STATUS_ENUM = {
    pending: "pending",
    fulfilled: "fulfilled",
    rejected: "rejected",
  };
  
  static HANDLE_TYPE = {
    resolveHandle: "resolveHandle",
    rejectHandle: "rejectHandle",
    finallyHandle: "finallyHandle"
  };
  
  constructor(fn){
    this.status = Promise.STATUS_ENUM.pending;
    this.handles = [];
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);
    
    setTimeout(() => fn(this.resolve, this.reject), 1);
    return this;
  }
  
  resolve(param){
    if(this.status === Promise.STATUS_ENUM.pending){
      this.status = Promise.STATUS_ENUM.fulfilled;
      this.callHandle(0, this.status, param);
    }
  }
  
  reject(param){
    if(this.status === Promise.STATUS_ENUM.pending){
      this.status = Promise.STATUS_ENUM.rejected;
      this.callHandle(0, this.status, param);
    }
  }
  
  callHandle(cur, status, param){
    const fnObj = this.handles[cur];
    if(!fnObj) return true;
    if(
      (status === Promise.STATUS_ENUM.fulfilled
        && fnObj.type === Promise.HANDLE_TYPE.resolveHandle)
      || (status === Promise.STATUS_ENUM.rejected
      && fnObj.type === Promise.HANDLE_TYPE.rejectHandle)
      || fnObj.type === Promise.HANDLE_TYPE.finallyHandle
    ) {
      try{
        const result = fnObj.fn(param);
        if(result && result instanceof Promise ){
          result.finally(param =>
            this.callHandle(cur + 1, result.status, param)
          )
        } else {
          this.callHandle(cur + 1, Promise.STATUS_ENUM.fulfilled, result);
        }
      } catch (e) {
        this.callHandle(cur +  1, Promise.STATUS_ENUM.rejected, e);
      }
    } else {
      this.callHandle(cur + 1, status, param);
    }
  }
  
  then(resolveHandle, rejectHandle){
    this.handles.push({
      type: Promise.HANDLE_TYPE.resolveHandle,
      fn: resolveHandle
    });
    if(typeof rejectHandle === "function"){
      this.handles.push({
        type: Promise.HANDLE_TYPE.rejectHandle,
        fn: resolveHandle
      })
    }
    return this;
  }
  catch(rejectHandle){
    this.handles.push({
      type: Promise.HANDLE_TYPE.rejectHandle,
      fn: rejectHandle
    });
    return this;
  }
  finally(fn){
    this.handles.push({
      type: Promise.HANDLE_TYPE.finallyHandle,
      fn: fn
    });
    return this;
  }
}

const p = new Promise((resolve, reject) => {
  console.log("new Promise");
  setTimeout(() => reject(1), 1000);
});
p.catch(num => {
    console.log(num, "catch1");
    return new Promise((resolve, reject) =>
      reject("exception"))
  })
  .then(num => console.log(num, "then1") || 233)
  .catch(num => {
    console.log(num, "catch2");
    const sub = new Promise(resolve => resolve())
      .then(() => console.log("sub then"));
    return sub;
  } )
  .then(num => console.log(num, "then2"));
