const express = require("express")
const {Web3} = require("web3");

const app = express()


const connect = async()=>{

    //maninet address for bcs scam for BNB coin
    const web3 = new Web3('https://api.bscscan.com/api');

    //this is a code a that create a new address for wallet
    const createAddress = await web3.eth.accounts.create();
    console.log(createAddress)
    console.log("hi")
}

// This is a request for client ( or ) Use postman is give a request 
app.post('/createadd',(req,res)=>{
    try {
        connect() 
        console.log(connect)
        res.json({message:"hello world and This is your address"  })
    } catch (error) {
        res.status(500).json({error:'Sever Error'})
    }
})

app.listen(4444, ()=>{
    console.log("hey im running 4444")
})