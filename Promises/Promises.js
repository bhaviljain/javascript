const cart = ["pant", "shoes"]

const promise = createOrder(cart)

promise
.then(function(orderId)  {
    console.log(orderId);
    return orderId;
})

.then(function(orderId){
   return proceedPay(orderId)
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function(err)  {
    console.log(err.message);
})



function createOrder(cart){
 
    const pr = new Promise(function(resolve, reject){
        if(!validateOrder(cart)){
            const err =  new Error("cart is not valid")
            reject(err)
        }
        const orderId = "12345"
        if(orderId)
        {
            resolve(orderId)
        }
    })
    return pr
}

function proceedPay (orderId)
 {
    return new Promise(function(resolve,reject){
        resolve("succes")
    })
 }
function validateOrder (cart){
return false
}