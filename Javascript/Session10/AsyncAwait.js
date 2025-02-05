 async function fun1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("This function 1");
            resolve('success');
        },4000);
    })
   
}

 async function fun2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("This function 2");
            resolve('success');
        },1000);
    })
}

await fun1(); //--> trigger this function but it will not wait for it to get complete 
await fun2(); //--> trigger this function