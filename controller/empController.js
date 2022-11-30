const express = require("express")
const mongoose = require("mongoose")
const { db } = require("../models/empModel")
const Employees = require("../models/empModel")


const addDetails = ( async (req , res) => {

    try {
        let col = db.collection("Employees")
        let bulk = col.initializeOrderedBulkOp()

        for(i = 0 ; i< 5000; ++i){
        Employees.bulkWrite([
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
        
    } catch (error) {
        res.status(500).json("Something went wrong")
    }
    db.close()
})



const getEmployees = async (req, res) => {
    try {
      const result = await Employees.find();
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }


module.exports = { addDetails , getEmployees}