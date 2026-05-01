// Spread operator

const friends =['Sadia','Nadia']
const Schoolfriends =['afia','sorna','afrose']
const Collagefriends =['Sohan','Sabbir']
friends.push(...Schoolfriends)
friends.push(...Collagefriends)
console.log(friends)


// resat operator
const sendinvite =(...friends:string[])=>{
friends.forEach((friend:string)=>
    console.log(`sent invite ${friend}`)
)
}
sendinvite('ali','shali' ,'kali','tuli')