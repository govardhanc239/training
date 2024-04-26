// let arr = [12,54,54]
// console.log(Array.isArray(arr))

// let arr1 = arr;
// arr.length =0;
// console.log(arr1);
// console.log(arr);


// let inStack = [];
// let outStack = [];

// function enque(inSta ,item){
//   return inSta.push(item)
// }
// function deque(inSta, outSta){
//     if(outSta.length<=0){
//         while(inSta.length>0){
//             let outEle = inSta.pop();
//             outSta.push(outEle);
//         }

//     }
  
//     return outSta.pop()

// }

// console.log(enque([12,25,65,85,59] ,99))


// for(i= 1;i<=100;i++){
//     let a = i%3==0;
//     let b = i%5== 0;
//     console.log(a?(b? "fizzbuzz":"fizz"):b?"buzz" :i)
// }


let n = "Prasanth Kumar Reddy Gangireddygari";
let n1 = n.split(" ").map(word=>word.split('').reverse().join('')).join(' ')
console.log(n1)









// let  n  = "Chappidi Govardhan Reddy"
// let n1 =  n.split( " ")
// console.log(n1)


// let n = "ChaPPIdi"
// let m = "PPcHAIID"
// let n1 = n.toLowerCase().split('').sort().join('');
// let n2 = m.toLowerCase().split('').sort().join('');



// if(n.toLowerCase().includes('ppi')){
//     console.log("true")
// }else{
//     console.log("false")
// }


// 

// let s = "cbdxcsbxczxvcDtgaerysgsdgd";
// let c = 0;
// let arr = s.split('');
// console.log(arr)
// for(let i = 1;i<arr.length;i++){
//      if(arr[i]== 's'){
//         c = c+1;
//      }
// }console.log("count of s' " ,c)



// let n = "Chappidi Govardhan Reddy"
// let m = n.split('')
// let arr = [...new Set(n)]
// console.log(arr.join(''))



//  let n= "9347770669";
//  let m = n.split('').map(Number);
//  console.log(m)
//  let c = 0;
//  for(let i = 0;i<m.length;i++){
//     c = c+m[i];
//  }console.log("count is",c)




// let n = "Chappidi Govardhan Reddy";
// let m = n.split(' ');
// console.log(m)

// let p = "";
// for(let i = 0;i<m.length;i++){
//     if(i != m.length-1){
//         p = p + m[i].charAt(0).concat('.');
//     }else{
//         p = p + m[i]
//     }
// }
// console.log(p)





// let word = "qwertyuioplkjhgfdsazxcvbnm"
// let letters1 = word.split('').sort().join('');
// //console.log(letters1)
// let maping = {};
// for(i = 0;i<letters1.length;i++){
//     maping[letters1[i]] = i+1;        
// }
//  console.log(maping)
//  let numbers =[]
// let myName = "govardhanreddy";
// for(i = 0;i<myName.length;i++){
//     let num = maping[myName[i]]
//     if(num){
//         console.log(num)
//     }
// }






// let arr= [4,41,25,13,54,95,58,45,65,32,92,98,37,59,34];

// for(let i = 0;i<arr.length;i++){
//     if(i==8){
//         console.log(arr[i])
//     }
    
// }

// let word = "Gajjala vinod kumar Reddy"
// let arr = word.toLowerCase().split('');
// console.log(arr)


for(let i = 0;i<arr.length;i++){
   if(arr[i]=='a'){
    c++
   }
   
}console.log(c)

// let arr2 = [];
// for(let i = 0;i<arr.length;i++){
//   if(arr2.indexOf(arr[i])==-1){ 
//   arr2.push(arr[i])
//   }
// }
// let word2 = arr2.join('')
// console.log(word2)


// const num = 4521547899658547899963258;
// let num2 = num.toString().split('');
// console.log(num2)
// let str = '';
// for(let i = 0;i<num2.length;i++){
//     if(num2[i]!=='9'){
//         str = str+num2[i];
//     }
// }console.log(str)


// x = 20;
// var x;
// console.log(x)
