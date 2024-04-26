let array1 =[3,4,5,6,7];
let array2 = [8,9,7,4,10,6];
let arr3 = [];
for(let i = 0;i<arr2.length;i++){
    
  let sum = array1[i]+ array2[i];
   arr3.push(sum) 
}
console.log(arr3)


const combinedArry = (arr1,arr2)=>{
    let arr3 = [...arr1,...arr2];
    return arr3;
}
let arr1 = [1,5,4,3,6,10,8];
let arr2 = [2,4,9,6,5,1,5,6];
// const display = (...arr1)=>{
    
// }
let result = combinedArry(arr1,arr2)
console.log([...new Set(result)].sort())


const restOprator = (...theArgs)=>{
    console.log(theArgs);
    for(let i of theArgs){
        console.log(i)
    }
}
restOprator(5,8,12,24,26,31,25,16);




let employee = {
    name : "govardhan",
    id : 239,
    dept : "DT",
    address : {
        mail : "vardhan@gmail.com",
        branch : "Durgam Cheruvu",
        location : "Hyd" 
    }
}
//let address = Object.values(employee.address)
 for(let [pro,emp] of Object.entries(employee.address))
 console.log(pro);

const nameAslengthOfWords = (name)=>{
    let words = name.split(' ');
    let lengthOfwords = words.map(item=>item.length)
    return lengthOfwords;
}
console.log(nameAslengthOfWords("Chappidi Govardhan Reddy"))





    



