document.getElementById("heading").innerHTML="await async";
//async functions allow you to write priomise based code as if it were synchronous.
//less clever more readable
//without blocking the main thread
async function logFetch(url)
{
    try{
        const response=await fetch(url);
        console.log(await response.text());
    } catch(err){
        console.log('fetch failed',err);
    }
}
logFetch('https://reqres.in/api/users/2');

//async functions always return a promise whether you uses await or not


