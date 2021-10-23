//cURD 
const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient
const ObjectId = mongodb.ObjectId
const connectionURL ="mongodb://127.0.0.1:27017"
const databaseName = "task-manager"
MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
 return console.log("unable to connect to database")


}
// console.log("connected correctly")
// const db = client.db(databaseName)
//  db.collection("users").insertOne({
//     name : "andrew",
//     age:22
// }, (error,result)=>{
//     if(error){
//    return console.log("unable to insert")
//     }
//  console.log(result)
// })
// })


// const db = client.db(databaseName)
//  db.collection("users").insertMany([
//      {
//      name :'jen',   
//      age:28
//      },
//      {
//          name:"gunther",
//          age: 27

//      }

//  ],(error,result)=>{
//      if(error){
//          return console.log("error are here")
//      }

//   console.log(result)
//  })
// })
 

//inserting many

// const db = client.db(databaseName)
//  db.collection("task").insertMany([
//      {
//      description :'clean the house',   
//      completed:true
//      },
//      {
//         description :'renew inspection',   
//         completed:false
//      },
//      {
//         description :'pot plants',   
//         completed:false
//      },

//  ],(error,result)=>{
//      if(error){
//          return console.log("error are here")
//      }

//   console.log(result)
//  })
// })
 

//// finding 

// const db = client.db(databaseName)
//  db.collection("users").findOne({_id: new ObjectId("614797995adfb98382d12332")},(error,user)=>{
//      if(error){
//          return console.log("error are here")
//      }

//   console.log(user)
//  })
//  db.collection("users").find({age:22}).toArray((error,users)=>{
//      console.log(users)

//  })


/////////////updating using promise


// const db = client.db(databaseName)
//   const updatepromise = db.collection("users").updateOne({
//       _id: new ObjectId("614797995adfb98382d12332")
//  },{
// //    $set:{
// //        name:"mike"
// $inc:{
//     age:1
//    }
// })
// .then((result)=>{
//     console.log(result)

// }).catch((error)=>{
//     console.log(error)
// })
//  })


//update many

// const db = client.db(databaseName)
//   const updatepromise = db.collection("task").updateMany({
//      completed: false
//  },{
    
// $set:{
//     completed:true
//    }
// })
// .then((result)=>{
//     console.log(result)

// }).catch((error)=>{
//     console.log(error)
// })
//  
  // delete one and many


// const db = client.db(databaseName)
//   db.collection("users").deleteMany({
//      age: 22
//   }).then((result)=>{
//       console.log(result)

//   }).catch((error)=>{
//       console.log(error)

//   })

// const db = client.db(databaseName)
//   db.collection("task").deleteOne({
//      description:"pot plants"
//   }).then((result)=>{
//       console.log(result)

//   }).catch((error)=>{
//       console.log(error)

//   })


})
