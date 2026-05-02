//  Task 1: Primitive Data Types
// variable set করো যেখানে:
// name → string
// age → number
// isStudent → boolean
//  এগুলো type annotation দিয়ে declare করো এবং console.log করো এবং OutPut 
// StudentName jone Student age 28  isStudent true

const Name: String = 'Sabbir';
const age: number = 18;
const isStudent: boolean = true
console.log(`StudentName ${Name} Student age ${age} Runnig Student ${isStudent}`)


//  Task 2: Object Type (Reference Type)
// একটা user object বানাও:
// name (string)
// email (string)
// age (number)
// তারপর এর জন্য আলাদা type বা interface define করো।

type UserInfo = {
    name: string;
    email: string;
    age: number;
}
let User: UserInfo = {
    name: 'sabbir',
    email: 'sabbir@gmail.com',
    age: 18
}
console.log(User)

//  Task 3: Optional Property
// একটা Product type বানাও:
// id (number)
// name (string)
// price (number)
// discount (optional number)
// একটা product create করো যেখানে discount থাকবে না।


const products: {
    id: number
    name: string
    price: number
    discount?: number|string
}={
    id: 123,
    name: 'Sabbir',
    price: 1100,
    discount:'50%'
}
console.log(products)
// //  Task 4: Literal Type
// একটা variable বানাও:
// status: "success" | "error" | "loading"
// function বানাও যেটা status অনুযায়ী message return করবে।


type Status ="success" | "loading" |  "error"

const getMessage =(Status:Status)=>{
    if (Status ==="success") {
        console.log('message Success')
    }
    else if (Status ==="loading") {
        console.log('message loading')
    }
   else {
        console.log('message error')
    }
}
getMessage('loading')

// //  Task 5: Function Type
// একটা function লিখো:
// 2টা number নিবে
// return করবে sum
// function এর parameter & return type explicitly লিখো।

const sum =(num1:number,num2:number):number=>num1*num2;
const result = sum(4,4)
console.log(result)

//  Task 6: Spread Operator
// দুইটা array নাও:
// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// spread operator দিয়ে merge করো।
// তারপর object merge করো:
// { name: "Tanvir" } + { age: 22 }


const arr1 = [1,2,3]
const arr2 = [4,5,6]
arr1.push(...arr2)
console.log(arr1)

//  object merge
const obj1 = { name: "Tanvir" }
const obj2 = { age: 22 }
const mergedObj = { ...obj1, ...obj2 }
console.log(mergedObj)

