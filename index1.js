//promise 
//1.the promise are used in asynchronous operation

//2.promise has three state
// a.pending
// b.fulfilled --success
// c.rejected --error

//3.promise is a built-in class

//lets create a promise 
// promise result can be handled using 3 methods

//1.then method      --success
//2.catch method     --error
//3. finally method  --will execute

//let promiseobj= new promiseClass(cbfn);

//global variable 

let a =true;
let promiseObj = new Promise(function(resolve,reject){
    if (a==false){
        resolve("the value is true");
    }else{
        //error
        reject("the value is false");
    }

}) ;

console.log(promiseObj);
// Syntax of then() = promise object.then(onfulfilled,onrejected);
promiseObj.then(function(value){
    console.log('the async task is successful ' +value);
}).catch(function(value){
    console.log('the async task is failed due to error' +value);
}).finally(function(value){
    console.log('this block will execute everytime');
});


