// this separate way to write code 

//product count handlebar without function ..

// document.getElementById('case-increase').addEventListener('click',function(event){
//     let caseInput = document.getElementById('case-input');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount + 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = '$ ' + caseTotal;
// })
// document.getElementById('case-decrease').addEventListener('click', function(event){
//     const caseInput = document.getElementById('case-input');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount - 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = caseTotal;
// })

// product count with function..its reduce code no need to use similar code again...
// document.getElementById('case-increase').addEventListener('click',function(event){
//     productCountHandler(true);
// })
// document.getElementById('case-decrease').addEventListener('click', function(event){
//     productCountHandler(false);
// })

// // now i's time to minify above code....

// function productCountHandler(isIncrease){
//     const caseInput = document.getElementById('case-input');
//     const caseCount = parseInt(caseInput.value);
//     let caseNewCount = caseCount;
//     if(isIncrease == true){
//         caseNewCount++;
//     }
//     else if(isIncrease == false && caseNewCount > 0){
//          caseNewCount--;
//     }
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = '$ ' + caseTotal;
// }


// // phone count and pricing are 

// document.getElementById('phone-increase').addEventListener('click', function(){
//     phoneCountHandler(true)
// })
// document.getElementById('phone-decrease').addEventListener('click',function(){
//     phoneCountHandler(false)
// })
// function phoneCountHandler(isIncrease){
//     const phoneInput = document.getElementById('phone-input');
//     const phoneCount = parseInt(phoneInput.value);
//     let phoneNewCount = phoneCount;
//     if(isIncrease == true){
//         phoneNewCount++;
//     }
//     else if(isIncrease == false && phoneNewCount > 0){
//         phoneNewCount--;
//     }
//     phoneInput.value = phoneNewCount;
//     const caseTotal = phoneNewCount * 1219;
//     document.getElementById('phone-total').innerText ='$ ' + caseTotal;
// }

// now it's gonna be above two functions combating in one 

document.getElementById('phone-increase').addEventListener('click', function(){
    productCountHandler('phone' , true)
})
document.getElementById('phone-decrease').addEventListener('click', function(){
    productCountHandler('phone' , false)
})
document.getElementById('case-increase').addEventListener('click', function(){
    productCountHandler('case' , true)
})
document.getElementById('case-decrease').addEventListener('click', function(){
    productCountHandler('case' , false)
})

function productCountHandler(product, isIncrease){
    const productInput = document.getElementById(product + '-input');
    const productCount = parseInt(productInput.value);
    let productNewCount = productCount;
    if(isIncrease == true){
        productNewCount++;
    }
    else if(isIncrease == false && productNewCount > 0){
        productNewCount--;
    }
    let productTotal = 0;
    productInput.value = productNewCount;
    if(product == 'phone'){
        productTotal = productNewCount * 1219;
    }
    else if(product == 'case'){
        productTotal = productNewCount * 59;
    }
    document.getElementById(product + '-total').innerText = '$ ' + productTotal;
    subTotal()
}

function subTotal(){
    const phoneInput = document.getElementById('phone-input');
    const phoneCount = parseInt(phoneInput.value);
    
    const caseInput = document.getElementById('case-input');
    const caseCount = parseInt(caseInput.value);
    
    const subTotal = phoneCount * 1219 + caseCount * 59;
    const text = subTotal * 10 / 100 ;
    document.getElementById('subTotal').innerText = subTotal;
    document.getElementById('tex-amount').innerText = Math.round(text);
    const totalPrice = text + subTotal;
    document.getElementById('totalPrice').innerText = totalPrice;
}
document.getElementById('checkOut').addEventListener('click', function(){
    alert('Thank you for check out...');
})