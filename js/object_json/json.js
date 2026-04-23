// let obj = {
//     name:'tej',
//     email:"tej@gmail.com",
//     phone:88888888
// }
// //converts object into json
// let json=JSON.stringify(obj);
// console.log(obj);
// console.log(json);

// //convert json into objects

// let obj2=JSON.parse(json);
// console.log(json)
// console.log(obj2);

// let jsonData = {
//     name:'raj',
//     address:{
//         street:'prayagraj'
//     }
// }

// let array jsondata(){
//     {},{},{}

// }


// async function fetchData(){
//     let res = await fetch ('https://jsonplaceholder.typicode.com/users/1');
//     console.log(res);
//     let user = await res.json();
//     console.log(user);
//     console.log(user.name);
//     console.log(user['username']);
    
//      let res2 = await fetch ('https://jsonplaceholder.typicode.com/users/2');
//     console.log(res);
//     let user2 = await res2.json();
//     console.log(user2);
//     console.log(user2.name);
//     console.log(user2['username']);

//     //re initialize 

//      user.name='new  Name'
//      console.log(user.name);

//      //delete 
//      console.log(user.email);
     
//      delete user.email;
//      console.log(user.email);
     
     
    // let combine = {...res,...res2}
    // console.log(combine);


//     let obj1 = {
//   'firstname  ': "Vibhanshu"
//     }
//     let obj2 ={
//         'firstname':"Vibhanshu",
//         'Surname' : "Shukla"

//     }
//     let combine1=Object.assign(obj1,obj2);
//     console.log(combine1);
    
    
// }
// fetchData();



let obj ={
   "name":'vibhanshu',
   "Email":'vibhanshu@gmail.com',
   "Phone":809876543


}
console.log(obj);

//destructuring the obj
let{name,Email}=obj;
console.log(name);
console.log(Email);
// destructuring the remaining 
let {name:userName,Email:UserEmail}=obj;
console.log(userName);
//add new values 
let{Address="Banglore"}=obj;
console.log(Address);

console.log(obj);

 async function fetchData(){
    let res = await fetch ('https://jsonplaceholder.typicode.com/users/1');
    let user = await res.json();

 console.log(user);

 //printing only keys
 for(const key in user){
    console.log(key);
    
 }

 //printing only values
   for(const key in user){
    console.log(user[key]);
    
 }

 //printing key values pairs

 for(const key in user ){
    console.log(key,"--",user[key]);
    
 }

 let res1 =Object.keys(user);
 console.log(res1);


// user.foreach(
//     (key)=>{
//         console.log(key);
        
//     }
// );


//iterating keys using for each 

Object.keys(user).forEach(
    (key)=>{
        console.log(key);
        
    }
)
 
 Object.Values(user).forEach(
    (values)=>{
        console.log(values);
        
    }
)
//iterating key values pair 
Object.entries(user).forEach(
    (pair)=>{
        console.log(pair);
        
    }
)
 
 


}
fetchData();







