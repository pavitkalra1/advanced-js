

document.getElementById("heading").innerHTML="Async-Comparison";

/*function print(string){
    setTimeout(function(){
   
        console.log(string)
    },Math.random()*100)
}

function printLetters(){
    print("a");
    print("b");
    print("c");
}
printLetters();*/


//using callbacks
/*function print(string,callback){
    setTimeout(function(){
   
        console.log(string);
        callback();
    },Math.random()*100)
}
function printLetters(){
    print("a",function(){
        print("b",function(){
            print("c",function(){
    });
});
});  
}
printLetters();*/

//using promises
/*function print(string){
   return new Promise(function(resolve,reject){
    setTimeout(function(){
console.log(string);
resolve();
    },Math.random()*100);
});
}

function printLetters()
{
    print("a")
    .then(function(){
        return print("b");
    })
    .then(function(){
        return print("c");
    })
}
    printLetters();*/

    
    
    //using async await
      function  print(string) {
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log(string);
                resolve();
            },Math.random()*100);
          
        });
    }

    async function printLetters(){
        await print("a");
        await print("b");
        await print("c");
    }

    printLetters();