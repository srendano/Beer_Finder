require('dotenv').config()

export default function(){
    return{
        port: process.env.PORT
    }
}