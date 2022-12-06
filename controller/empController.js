const express = require("express")
const mongoose = require("mongoose")
const { db, insertMany } = require("../models/empModel")
const employees = require("../models/empModel")
const chunk = require("chunk")


const addDetails = ( async (req , res) => {
    try {

        for(i = 0 ; i< 5000 ; i++){
        employees.bulkWrite([
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


const empDetails = ( async (req , res) => {
    try {
        const details = await employees.find()

        chunkedData = chunk(details , 1000)
        const chunkDataLength = chunkDataLength.length

        async function insertData (chunkedData , i){ 
        
        if(chunkDataLength != i){
            const myFunction = (employees) => {
                data = {
                    name: employees.name,
                    email: employees.email,
                    contact: employees.contact,
                    department: employees.department
                }
                
                return { insertOne:
                     { document: details } 
                    }
                    
            }
            const arr = chunkedData[i]
            const resArray = arr.map(myFunction)
            const result = await user.bulkWrite(resArray)

            insertData(chunkedData, i++)

            // console.log("data added")
            res.status(201).json({message :"Data added in User collection" })
            
        }else{
            res.status(200).json("Error sending data")
        }}
    
    }catch (error) {
        // console.log("Error")
        res.status(500).json(error)
    }

    async function getUserData(){

    const data = user.find() 
        if( data.length != 0){
    res.status(200).json(data)
        }else{
            res.status(500).json("Error")
        }
    }
})



 
module.exports = { addDetails , empDetails }