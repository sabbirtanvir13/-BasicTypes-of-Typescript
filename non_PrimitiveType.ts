// Non-Primitive_Type

let flower: string[] = ['golap', 'joba', 'rojonigondha']
flower.push('podda')
// flower.pop()
console.log(flower)

// ts tuple type
let Electronics: (string | number)[] = ['iPhone 17', 170000, 'Computer', 100000]
console.log(Electronics)

let Couple: [string, string] = ['jamai', 'bow']
console.log(Couple)


// Reference obj type optional type and literal type 

let User: {
    company:'ZentroMart'
    fristName: string;
    middelname?: string;    
    lastName: string;
    isMarried:boolean

} = {
    fristName: 'Tanvir',
    middelname: 'Ahmed',
    lastName: 'Sabbir',
    isMarried: true,
    company:'ZentroMart' 
}
console.log(User)