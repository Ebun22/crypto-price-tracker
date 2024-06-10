import CryptoAPI from "../lib/CryptoAPI.js";
import keyManager from "../lib/keyManager.js";
import colors from 'colors';

const check = {
    async price(cmd) {
        const keyManagers = new keyManager()
        const key = keyManagers.getKey()

        const cryptoAPI = new CryptoAPI(key)
       const data = await cryptoAPI.getPrice(cmd.coin, cmd.curr)
       if(data){
            data.map(data => {
                console.log(`${(data.asset_id_base).yellow}/${(data.asset_id_base).yellow}: ${priceFormmatter(data.rate).green}/n`)
            })
        }
    }
}

const priceFormmatter = (number) => {
    if(typeof number === 'number'){
        if (Number.isInteger(number)) {
            return number.toLocaleString('en-US');
          } else {
            return number.toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 });
          }
    }
}

export default check;