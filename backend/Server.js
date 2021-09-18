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




