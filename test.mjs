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