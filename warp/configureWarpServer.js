import { WarpFactory } from "warp-contracts";
import fs from 'fs'
import { stringify } from "querystring";

/*
*  environment can be 'local' | 'testnet' | 'mainnet' | 'custom';
*/

const environment = process.env.WARPENV  | 'testnet'

let warp 

if(environment ==='testnet') {
    warp = WarpFactory.forTestnet()
}
else if (environment === 'mainnet') {
    warp = WarpFactory.forMainnet()
}
else {
    throw Error ('Environment not set properly')
}

async function configureWallet(){
    try {
        if(environment === 'testnet'){
            // generate a temp wallet for testing
            try {
                return JSON.parse(fs.readdirSync('../testwallet.json'))
            } catch(err){
                const {jwk} = await warp.generateWallet() // spins up a test wallet
                fs.writeFileSync('../testwallet.json', JSON.stringify(jwk))
                return jwk
            }
        }
        else if(environment == 'mainnet') {
            // use a local wallet
            return JSON.parse(fs.readFileSync('.../wallet.json','utf-8' ))
        }
        else {
            throw Error('Wallet not configured properly')
        }
    }
    catch(err){
        throw Error('wallet not configured properly: ', err)
    }
}
export {
    configureWallet,
    warp
}