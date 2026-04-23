//  let arr=[10,3,43,23,44];
//   //find sum of array elements
//   //1.Iterating a loop
//   //2. Reduce function
// //using inbuilt function  
// let sum = arr.reduce(
//     (sum, value)=>{
//     return sum+=value;
//     },0
// );
// console.log(sum);


// //using for loop 
//  sum2=0;
//  for(let i=0;i<=arr.length;i++){
//     sum2+=arr[i];
//  }
// console.log(sum2);
// //==================finding maximum  number ======================

// // sorting in order
// //========== 1.sorted

//   let sorted =arr.sort((a,b)=>a-b);//ascending == a-b  for descendig order b-a
//   console.log(sorted);
  
//   console.log('maximum',sorted[arr.length-1]);
//   console.log('minimum',sorted[0]);
  

//             //or 


//             let min=Math.min(...arr);
//             console.log('Minimum number by using ',min);
            
//     let max=Math.max(...arr);
//     console.log('maximum num by using .min ',max);
    
//   //=== sort users based on marks 
//     let users=[
//         {"Name":"StudentA",marks:78},
//         {"Name":"StudentB",marks:88},
//         {"Name":"StudentC",marks:98},
//         {"Name":"StudentD",marks:92},


//     ]
//   //highrt to lover 
//   let sortedUserslow=users.sort((a,b)=>a.marks-b.marks);
//   console.log(sortedUserslow);


//     let sortedUsershigh=users.sort((a,b)=>b.marks-a.marks);
//   console.log(sortedUsershigh);

//   let rev =users.reverse();
//   console.log("using reverse ",rev);


//   //======= remove duplicates from the array 
//  let arr2=["apple ","ball","apple","carrot","Dog","dog"];
//   let unique = new Set(arr2);
//   console.log(arr2);
  
//   console.log(unique);

//   //==================second largest number in an array


//   let arr3 =[10,34,12,24,44,48];
//  //  let uniqueArray = new Set[arr3];
//    let uniqueArray=[...new Set(arr3)];//converting array into set and storing set in array format 
//    uniqueArray.sort((a,b)=>a-b);//sorted in ascending order 

//    console.log(uniqueArray);
//    console.log('second minimum ',uniqueArray[1]); //second laregest number based on index
//    console.log('second largest',uniqueArray[uniqueArray.length-2]);
   
   
  
//  //  console.log(uniqueArray(uniqueArray.lastIndexOf-2));
let array =[10,34,12,24,44,48];
let  sl=0;
let fl = 0;
for(let index =0;index< array.length;index++){
    const element =array[index];
      if (element>fl) {
        sl=fl;
        fl = element;
      } else if (element>sl && element==fl) {
        sl=element;
        
      }
}
console.log(fl);
console.log(sl);





   

  
  


