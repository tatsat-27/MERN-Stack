

const prompt = require('prompt-sync')();
const fs= require('fs');
const addItem = require('./additem');
const remove = require('./removeItem');
const changeQuantity = require('./updateQuantity');

const operation = Number( prompt('enter your choice /n 1.add items to your cart /n 2. remove items /n 3. change /n4.display your cart'));
        switch (operation) 
        {
            case 1:
                addItem.addItem(); 
                break;
            case 2:
                remove.remove();
                break;
            case 3: 
                changeQuantity.changeQuantity();
                break;
            case 4:
                let Cart = JSON.parse(fs.readFileSync('shoppingCart.json'));
                console.log(Cart);
                break;
            default:
                console.log('invalid option!');
                break;
        }
  
  
