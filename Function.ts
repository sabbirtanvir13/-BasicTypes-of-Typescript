// Normal Function 


function sum (num1:number ,num2:number):number{
    return num1+num2
}
const result =sum(2,5)
console.log(result)

// arrow Function
const oddSum =(num1:number ,num2:number):number=>num1-num2;
const res= oddSum(100,40)
console.log(res)


// obj=> function=> method
const poorUser={
    name :'sabbir',
    balanceAmount: 0,
    AddAmmount (value:number){
         this.balanceAmount+=value
         return this.balanceAmount
    }
}
poorUser.AddAmmount(10000);
console.log(poorUser);