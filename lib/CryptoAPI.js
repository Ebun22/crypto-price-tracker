import axios from "axios";

class CryptoAPI {
    constructor(apiKey){
        this.apiKey = apiKey;
        this.baseURL = 'https://rest.coinapi.io/v1/exchangerate/';
    }

    async getPrice(coin, curr){
        const coins = coin.split(',')
        console.log(coins)
        if (!Array.isArray(coins)) {
            throw new TypeError('coins must be an array');
          }
        try{

            const res = await Promise.all(
                coins.map((coin) => {
                    return axios.get(`${this.baseURL}${coin.trim()}/${curr}?apikey=${this.apiKey}`)
                })
            );
            const promiseRes = res.map( (response) => response.data)
            return promiseRes;

        }catch(err){
            console.log(err)
        }
    }
}

export default CryptoAPI;