import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config ()
const app = express ()
const port = process.env.PORT

app.use ( cors ( {
    origin: '*',
    methods: [ 'GET', 'POST', 'PUT', 'DELETE' ]
} ) )
app.use ( express.urlencoded ( { extended: false } ) )
app.use ( express.json () )

let currentId = 5

function incrementCurrentIdByOne () {
    currentId += 1
}

let myToDoListsDatabase = [
    {
        id: 1,
        name: 'Studying',
    },
    {
        id: 2,
        name: 'Cooking',
    },
    {
        id: 3,
        name: 'Cleaning',
    },
    {
        id: 4,
        name: 'Washing Clothes',
    },
]

function messageMyToDoListNotFound () {
    return {
        status: 404,
        text: 'My-TODO-List not found!'
    }
}

function messageMyToDoListSucess ( message ) {
    return {
        status: 200,
        text: message
    }
}



