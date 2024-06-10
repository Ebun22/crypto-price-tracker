import keyManager from '../lib/keyManager.js';
import colors from 'colors';
import inquirer from 'inquirer';

const keyManagers = new keyManager();

const key = {
    async set() {
        try{
            const input = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'key',
                    message: `${colors.green('Enter API key')} https://nomics.com`,
                    validate: (input) => input === '' ? 'This value is required' : true
                }
               ])
        
            const key = keyManagers.setKey(input.key)
            if(key){
                console.log('API key has been successfully set'.blue)
            }
        }catch(err){
            console.log('There was an error  when requesting dor user input')
        }
    },

    show() {
       try{
            const key = keyManagers.getKey()
            if(key){
                console.log('Current API key is: ', key.yellow)
            }
            return key;
       }catch(err){
        console.log(err.message.red)
       }
    },

    remove() {
        try{
            keyManagers.deleteKey()

            console.log('API key successfully deleted!'.green)
            return;

       }catch(err){
        console.log(err.message.red)
       }
    }
}

export default key;