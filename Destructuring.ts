const User={
    id:123,
    Name:{
        FristName :'Tanvir',
         MiddelName :'Ahmed',
         LastName :'Sabbir',
    },
    Gender:'male',
    ismarried: true 
}
const {Name:{MiddelName}}=User;
console.log(MiddelName)



const friends=['rahim','korim','porim'];
const [, , MyBestFriends,]=friends
console.log(MyBestFriends)
