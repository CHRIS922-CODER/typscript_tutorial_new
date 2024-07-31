type StringOrNumber = string | number
type ObjectWithName = { name:string, uuid:StringOrNumber}

const logDetails = (uuid:StringOrNumber,  item:string)=>{
    console.log(`${item} has uuid of ${uuid}`);
    
}

const greet = (user:ObjectWithName)=>{
    console.log(`${user.name} says hello`);
    
}
const greetAgain = (user:ObjectWithName)=>{
    console.log(`${user.name} says hello`);
    
}