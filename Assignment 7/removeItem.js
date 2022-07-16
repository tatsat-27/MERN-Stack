const prompt = require('prompt-sync')();
const fs= require('fs');

exports.remove = ()=>{
    const Name = prompt('enter the item you want to remove');
    let Cart = JSON.parse(fs.readFileSync('shoppingCart.json'));
    Cart = Cart.filter(items=> items.name != Name);
    fs.writeFile('shoppingCart.json',JSON.stringify(Cart),(err)=>
    {
        if(err)
         console.log('something went wrong');
         else
         console.log('item REMOVED succesfully');
    }
    )


}
