const mongoose = require("mongoose")
 const validator = require("validator")
mongoose.connect( process.env.MONGODB_URL),{
    useNewUrlParser:true,
    useCreateIndex:true
}
// const User = mongoose.model("User",{
//     name:{
//         type:"String",
//          required:true,
//          trim: true
//     },
//     email:{
//       type : String,
//       required:true,
//       trim:true,
//       lowercase:true,
//       validate(value){
//           if(!validator.isEmail(value)){
//              throw new error("email is invalid") 
//           }
//       }  

//     },
    
//     age:{
//         type:"Number",
//         default:0,
//         validate(value){
//             if(value<0){
//              throw new error("age must be positive")
//             }

//         }

//     },

// })
// // const me =new User({
// //     name:"andrew",
// //     email:"and@gamil.com        "
// // })
// // me.save().then(()=>{
// //     console.log(me)

// // }).catch((error)=>{
// //     console.log("error occure",error)
// // })

// const Task = mongoose.model("Task",{
//     description:{
//         type:"String",
//          required:true,
//          trim: true
//     },
//     completed:{
//       type : Boolean,
//       default:false
//       }
//     })

//     //  const task = new Task({
//     //      description:"Eat lunch",
         
//     //  })

//     //  task.save().then(()=>{
//     //      console.log(task)

//     //  }).catch(()=>{
//     //      console.log(err)

//     //  })