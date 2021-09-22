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
        todo: 'Cooking',
        status: 'Completed',
        assignedTo: 'Yalda',
    },
    {
        id: 2,
        todo: 'Washing Dishes',
        status: 'Not Complete',
        assignedTo: 'Ayda',
    },
    {
        id: 3,
        todo: 'Washing Clothes',
        status: 'Completed',
        assignedTo: 'Girlie',
    },
    {
        id: 4,
        todo: 'Cleaning the whole house',
        status: 'Not Complete',
        assignedTo: 'Houshmand',
    },
]

function messageMyToDoListNotFound () {
    return {
        status: 404,
        text: 'My-TODO-List not found!'
    }
}

function messageMyToDoListSuccess ( message ) {
    return {
        status: 200,
        text: message
    }
}

function getMyToDoListIndex ( id ) {
    for ( let i = 0; i < myToDoListsDatabase.length; i++ ) {
        if ( myToDoListsDatabase[ i ].id === id ) {
            return i
        }
    }
    return -1
}

function createNewMyToDoList ( listData ) {
    let list = {
        id: currentId,
        todo: listData.todo,
        status: listData.status,
        assignedTo: listData.assignedTo,
    }
    incrementCurrentIdByOne ()
    myToDoListsDatabase.push ( list )
}

function getAllMyToDoLists () {
    return myToDoListsDatabase
}

function getMyToDoListById ( id ) {
    let index = getMyToDoListIndex ( id )

    if ( index === -1 ) {
        return messageMyToDoListNotFound ()
    } else {
        return messageMyToDoListSuccess ( myToDoListsDatabase[ index ] )
    }
}

function updateMyToDoList ( listData ) {
    const index = getMyToDoListIndex(Number( listData.id ))

    if ( index === -1 ) {
        return messageMyToDoListNotFound ()
    } else {
        if ( myToDoListsDatabase[ index ].todo !== listData.todo ) {
            myToDoListsDatabase[ index ].todo = listData.todo
        }
        if ( myToDoListsDatabase[ index ].status !== listData.status ) {
            myToDoListsDatabase[ index ].status = listData.status
        }
        if ( myToDoListsDatabase[ index ].assignedTo !== listData.assignedTo ) {
            myToDoListsDatabase[ index ].assignedTo = listData.assignedTo
        }
        return messageMyToDoListSuccess ( 'My-TODO-List updated!' )
    }
}

function deleteMyToDoList ( index ) {
    myToDoListsDatabase.splice ( index, 1 )
}

function deleteMyToDoListById ( id ) {
    let index = getMyToDoListIndex ( id )

    if ( index === -1 ) {
        return messageMyToDoListNotFound ()
    } else {
        deleteMyToDoList ( index )
        return messageMyToDoListSuccess ( 'My-TODO-List deleted successfully!' )
    }
}

app.get ( '/', function ( req, res ) {
    res.send ( 'My API is Alive!' )
} )

app.post ( '/MyToDoLists', function ( req, res ) {
    createNewMyToDoList ( req.body )
    res.json ( 'Successfully created a new My-TODO-List!' )
} )

app.get ( '/MyToDoLists', function ( req, res ) {
    res.json ( getAllMyToDoLists () )
} )

app.get ( '/MyToDoLists/:id', function ( req, res ) {
    const id = Number ( req.params.id )
    let response = getMyToDoListById ( id )
    res.status ( response.status ).json ( response.text )
} )

app.put ( '/MyToDoLists', function ( req, res ) {
    let response = updateMyToDoList ( req.body )
    res.status ( response.status ).send ( response.text )
} )

app.delete ( '/MyToDoLists/:id', function ( req, res ) {
    let response = deleteMyToDoListById ( Number ( req.params.id ) )
    res.status ( response.status ).send ( response.text )
} );

app.listen ( port, () => {
    console.log ( `The server is running on port ${ port }` )
} )

