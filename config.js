require('dotenv').config()

export default function(){
    return{
        port: process.env.PORT,
        url: process.env.URL,
        key: process.env.KEY
    }
}