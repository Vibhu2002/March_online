// console.log("Hello world ")

// //function decalration 
//  function f1(){
//     console.log("Hello world ")

//  }
//  f1();//caling a fucntion .. function caller


//           function f3(){//no arg function 
//                         console.log("Hello world ");
//                     }





//             function f2(name){// arg function
//                 console.log(`My name is ${name}`);
//             }
//             f2();
//             f2('vibhanshu ');//my name is vibhanshu
//             f2('Ajeet');//my name is ajeet


//             let f11= function(){
//                 console.log("function expression");
//             }
//             f11();

//             //====================
//             //Arrow funtion  
//             let f4 = ()=>{
//                 console.log("Arrow function");
//             }
//             f4();

//             //Anonymus function 

//             setTimeout(()=>{
//                 console.log("Anonymus function");
//             },2000);

//             setTimeout(f1(),2000);




// CAll back fucntion
            // function isSuccess(){
            //         console.log("Authnetication success");

            // }




            // function isFailure(){
            //     console.log("login Failed");
            // }











            // function isAuthneticate(userName,password,success ,failure){
            //         if(userName=='user' && password=='user@123'){
            //             success();
            //         }else{
            //             failure();
            //         }

            // }

            // isAuthneticate('admin','user@123',isSuccess,isFailure);//calling fucntion in fucntion we can use variable and fucntion  as an argument 
            


            //constructor function = used to create objects
            
        //     function Student(name ,email,phone,rollno){
        //             // Student properties :name ,email,phone,rollno
        //             this.name=name;
        //             this.email=email;
        //             this.phone=phone;
        //             this.rollno=rollno;

        //     }
        //     let s1= new Student('raja','raja@gmail.com',1345678,101);
        //     let s2 = new  Student('rani','rani@gmail.com',1345678,101);

        //     console.log(s1);
        //     console.log(s2);

//IIFE

//         (
//                 function(){
//                         console.log("IIFE");
                        
//                 }
//         )();




//         (
//                 function(name){
//                         console.log("IIFE",name);
                        
//                 }
//         )('shukla');


// //functiom generator 
// function* generator(){
//         yield 'Hello'
//         yield 'student'
//         yield 'bye'
//         yield 'bye Students'
// }
// let g =generator();
// console.log(g);
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

// console.log(g.next());

// //Excelr
// function* excelrGenrerator(params) {
//         let value = 1 ;
//         while(value<50){
//                 yield`Excelr_00${value}`
//                 value++
//         }

// }

// let g2 = excelrGenrerator();
// let num =1 ;
// while(num<=50){
//         console.log(g2.next().value);
//         num++;
// }


// function f1(){
//         console.log("Hello world ");

        
// }
// f1();
// console.log(f1());


// function f2(){
//         console.log("Hello world ");
//         return'function retuns value '

        
// }
// let result = f2();
// console.log(result);

//higher order function 
function Calculator(a,b,operaton){
    return operaton(a,b);
}
function add(a,b){
        return a+b;
}
function sub(a,b){
        return a-b;
}
console.log(Calculator(10,20,add));
console.log(Calculator(30,20,sub));


