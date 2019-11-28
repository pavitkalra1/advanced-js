
document.getElementById("heading").innerHTML="Async-Promises";

function logFetch(url) {
    return fetch(url)
     .then(response => response.text())
    .then(text => {
        console.log(text);
    })
    .catch(err => {
        console.error('fetch failed',err);
    })
}
logFetch('https://reqres.in/api/users/2');


var getPromise=new Promise(function (resolve,reject){
    //do something async here
    var check=false;
    if(check)
    {
        //call resolve if everything is ok
       // resolve();
        //resolve with parameters
        resolve('everything is ok');
    }
    else{
        //reject();
        reject('everything is not okay');
    }
});


getPromise.then(function(resolvemessage){
    console.log('success');
    console.log(resolvemessage);
})
.catch(function(rejectMessage){
    console.log('error');
    console.log(rejectMessage);
})