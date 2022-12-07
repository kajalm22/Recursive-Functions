const express = require("express")
const mongoose = require("mongoose")
const { db, insertMany, collection } = require("../models/studentModel")
const students = require("../models/studentModel")
const users = require("../models/userModel")
const newUsers = require("../models/newUser")
const chunk = require("chunk")


const addDetails = ( async (req , res) => {
    try {

        for(i = 0 ; i< 5000 ; i++){
        students.bulkWrite([
            {
                insertOne: {
                    document: {
                        name: "jennifer johnsons",
                        email: "km@mail.com",
                        contact: 37483896,
                        department: "IT"
                    }
                }
            },
            {
                insertOne: {
                    document: {
                        name: "jon allen",
                        email: "jon@mail.com",
                        contact: 864723991,
                        department: "Accounts"
                    }
                }
            },
            {
                insertOne: {
                    document: {
                        name: "christina downey",
                        email: "christy@mail.com",
                        contact: 3745239910,
                        department: "HR"
                    }
                }
            },
            {
                insertOne: {
                    document: {
                        name: "robert evans",
                        email: "re@mail.com",
                        contact: 973862375,
                        department: "Finance"
                    }
                }
            }
            
        ])
    }
        res.status(201).json("Details added successfully")
        // console.log(addDetails)
        
    } catch (error) {
        res.status(500).json("Something went wrong")
    }
    // db.close()
})


//saving data from one collection students into another collection users
const studentDetails = ( async (req , res) => {
    // console.log("enter")
    try {
        const details = await students.find()

        chunkedData = chunk(details , 1000)            // 20 sets of data containing 1000 docs each 
        const chunkDataLength = chunkedData.length     //chunk data length 20

        async function insertData (chunkedData , i){ 
        if(chunkDataLength> i){  
            const studentFunction = (students) => {
                var obj = {
                    name: students.name,
                    email: students.email,
                    contact: students.contact,
                    department: students.department
                }
                
                return { insertOne:
                     { document: obj } 
                    }  
            }
            
            const arr = chunkedData[i]
            const resArray = arr.map(studentFunction)
            const result = await users.bulkWrite(resArray)

            i= i + 1
            insertData(chunkedData, i)
        }else{
            res.status(200).json({ message: "Data added in Users collection"})
        }}
        
        insertData(chunkedData,0) //i starts loop from 0 
    }catch (error) {
        // console.log("Error")
        res.status(500).json(error)
    }

})

// pagination on (chunk data)array of objects 


const userInfo = (users) => {
    var object = {
        name: users.name,
        email: users.email,
        contact: users.contact,
        department: users.department
    }
    
    return { insertOne:
         { document: object } 
        }
    }


// chunk 10k into 1000 sets each
// these 20 sets of 1000 data each should be first paginated then saved in another collection
// set 1 paginated then saved in collection
// set 2 paginated then saved in collection
    
const paginatedData = ( async ( req , res) => {
      
    try {
        chunkData = chunk(details , 1000)
        
        async function getData( chunkData , i){
            const pagination = await userInfo()
            // console.log(pagination)
        if(pagination == true){
            const arr = chunkData[i]
            const newArr = pagination.arr.map(userInfo)
            const result = await newUsers.bulkWrite(newArr)
            res.status(200).json(result)
        }else{
            res.status(500).json("data saved")
        }
    }
    getData( chunkData , 0)

    } catch (error) {
        console.log("error found")
        res.status(500).json(error)
    }
})


// async function showData (page , limit){
// const data = await newUsers.find().skip((page - 1) * limit).limit(limit)
// // if(data.length != 0){
// //     return data 

// // }else{
// //     console.log("Error")
// // }
// }

// const showData = (async (req, res) => {
//     const page = req.query.page || 1
//     const perPage = 5
//     const data = await newUsers.find()
//       .skip((page - 1) * perPage)
//       .limit(perPage)
//     res.status(200).json(data)
//   })

const pages = (async ( req , res) => {
    console.log("function start")
    try {
        async function fetch(newPage , newLimit){
            // let page = newPage
            // let limit = newLimit
        // console.log("second")
            const data = await showData(page , limit)
            if(data == true){
               
                const arr = data.map(userInfo)
                const result = await newUsers.bulkWrite(arr)
                const details = await newUsers.find().skip((page - 1) * limit).limit(limit)
                // console.log("details")
                fetch (page++ , limit)
                console.log("saving")
                // res.status(201).json("Created")

            }else{
                res.status(200).json("Data saved")
            }
            fetch (1 , 5)
        }
    } catch (error) {
        console.log("Function failed")
        res.status(500).json(error)
    }

})
module.exports = { addDetails , studentDetails , paginatedData , pages
    // , showData
}



// const pages = (async ( req , res) => {
//     console.log("fucntion start")
//     try {
//         // async function fetch(page , limit){
//         //     // let page = newPage
//         //     // let limit = newLimit
//         // console.log("second")
//             const data = await showData(page , limit)
//             if(pagination == true){
//                 const arr = pagination.map(userInfo)
//                 const result = await newUsers.bulkWrite(arr)
//                 const data = await newUsers.find().skip((page - 1) * limit).limit(limit)
//                 showData (page++ , limit)
//                 console.log("saving")
//                 res.status(201).json("Created")

//             }else{
//                 res.status(200).json("Data saved")
//             }
//             pages (1 , 5)

        
        
//     } catch (error) {
//         console.log("Function failed")
//         res.status(500).json(error)
//     }
// })