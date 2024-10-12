const myInfo ={
    name: "Hasan",
    age: 35,
    address: "sirajgonj",
    sosurName: "Momin",
    sosurBari: "B-Baria",
    contract:{
        phone: 45645,
        email: "abcd@gmail.com"
    }
        
    }

// const obj2 = {...myInfo}

// obj2.marrid = false
// obj2.age = 26

// console.log(myInfo)
// console.log(obj2 )

// defucturing

// const myName = myInfo.name
// const myAge = myInfo.age

// const {age:myAge} = myInfo
// console.log(myAge)
const {contract} = myInfo
console.log(contract)
const {email} = contract
console.log(email)